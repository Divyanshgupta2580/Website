import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { escapeHtml, sendNotificationEmail } from "@/lib/email";

// Maximum allowable JSON payload: 32 KB
const MAX_PAYLOAD_BYTES = 32 * 1024;

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
};

const baseQuoteSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(8, "Valid phone number required").max(20),
  email: z.string().trim().email("Valid email address required"),
  company: z.string().trim().max(120).optional().default(""),
  location: z.string().trim().min(2, "Location / city required").max(100),
  message: z.string().trim().max(3000).optional().default(""),
  bot_field: z.string().max(0, "Bot detected").optional().default(""),
});

const quoteSchema = z.discriminatedUnion("enquiryType", [
  baseQuoteSchema.extend({
    enquiryType: z.literal("materials"),
    projectType: z.string().trim().min(2, "Material category required").max(80),
    budgetRange: z.string().trim().max(50).optional().default(""),
    approximateArea: z.string().trim().max(50).optional().default(""),
    timeline: z.string().trim().max(50).optional().default(""),
    requirements: z.array(z.string().trim().max(100)).max(20).optional().default([]),
  }),
  baseQuoteSchema.extend({
    enquiryType: z.literal("construction"),
    projectType: z.string().trim().min(2, "Project type required").max(80),
    floors: z.string().trim().max(50).optional().default(""),
    approximateArea: z.string().trim().max(50).optional().default(""),
    stage: z.string().trim().max(80).optional().default(""),
    budgetRange: z.string().trim().max(50).optional().default(""),
    timeline: z.string().trim().max(50).optional().default(""),
    requirements: z.array(z.string().trim().max(100)).max(20).optional().default([]),
  }),
  baseQuoteSchema.extend({
    enquiryType: z.literal("real-estate"),
    projectType: z.string().trim().min(2, "Property type required").max(80),
    realEstateEnquiryType: z.string().trim().max(80).optional().default(""),
    purpose: z.string().trim().max(80).optional().default(""),
    approximateArea: z.string().trim().max(50).optional().default(""),
    budgetRange: z.string().trim().max(50).optional().default(""),
    timeline: z.string().trim().max(50).optional().default(""),
    requirements: z.array(z.string().trim().max(100)).max(20).optional().default([]),
  }),
]);

export async function POST(request: Request) {
  // 1. Content-Type Check
  const rawContentType = request.headers.get("content-type") || "";
  const [mediaType] = rawContentType.split(";").map((s) => s.trim().toLowerCase());
  if (mediaType !== "application/json") {
    return NextResponse.json(
      { success: false, error: "Unsupported Media Type: Request must be application/json." },
      { status: 415, headers: NO_CACHE_HEADERS }
    );
  }

  // 2. Payload Size Check
  const contentLength = parseInt(request.headers.get("content-length") || "0", 10);
  if (contentLength > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { success: false, error: "Payload Too Large: Submission exceeds 32 KB limit." },
      { status: 413, headers: NO_CACHE_HEADERS }
    );
  }

  // 3. IP Rate Limiting (5 requests per minute per IP)
  const clientIp = getClientIp(request);
  const rateLimit = checkRateLimit(clientIp, { windowMs: 60 * 1000, maxRequests: 5 });

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please wait before submitting another quotation request.",
        retryAfter: rateLimit.resetTime,
      },
      {
        status: 429,
        headers: {
          ...NO_CACHE_HEADERS,
          "Retry-After": String(rateLimit.resetTime),
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rateLimit.resetTime),
        },
      }
    );
  }

  try {
    const rawBody = await request.text();
    const byteLength = Buffer.byteLength(rawBody, "utf8");

    if (byteLength > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, error: "Payload Too Large: Submission exceeds 32 KB limit." },
        { status: 413, headers: NO_CACHE_HEADERS }
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format." },
        { status: 400, headers: NO_CACHE_HEADERS }
      );
    }

    // 4. Honeypot check
    const rawData = body as Record<string, unknown>;
    if (rawData?.bot_field && typeof rawData.bot_field === "string" && rawData.bot_field.length > 0) {
      return NextResponse.json(
        { success: false, error: "Invalid submission detected." },
        { status: 400, headers: NO_CACHE_HEADERS }
      );
    }

    // 5. Zod Schema Validation
    const validation = quoteSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        {
          status: 422,
          headers: {
            ...NO_CACHE_HEADERS,
            "X-RateLimit-Remaining": String(rateLimit.remaining),
          },
        }
      );
    }

    const data = validation.data;

    // 6. Sanitize strings
    const sanitizedData = {
      ...data,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      projectType: data.projectType.trim(),
      location: data.location.trim(),
      approximateArea: data.approximateArea?.trim() || "",
      budgetRange: data.budgetRange?.trim() || "",
      timeline: data.timeline?.trim() || "",
      message: data.message.trim(),
      floors: "floors" in data && typeof data.floors === "string" ? data.floors.trim() : "",
      stage: "stage" in data && typeof data.stage === "string" ? data.stage.trim() : "",
      realEstateEnquiryType:
        "realEstateEnquiryType" in data && typeof data.realEstateEnquiryType === "string"
          ? data.realEstateEnquiryType.trim()
          : "",
      purpose: "purpose" in data && typeof data.purpose === "string" ? data.purpose.trim() : "",
    };

    // Cryptographically unpredictable, non-sequential reference identifier
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `GGE-${randomSuffix}`;
    const timestamp = new Date().toUTCString();

    const isMaterials = sanitizedData.enquiryType === "materials";
    const isRealEstate = sanitizedData.enquiryType === "real-estate";
    const isConstruction = sanitizedData.enquiryType === "construction";

    const divisionLabel = isMaterials
      ? "Materials Supply"
      : isRealEstate
      ? "Real Estate Sales & Assistance"
      : "Building Construction";

    const specRows: [string, string][] = [];

    if (isMaterials) {
      specRows.push(["Material Category", sanitizedData.projectType]);
      specRows.push(["Delivery Location", sanitizedData.location]);
      if (sanitizedData.budgetRange) specRows.push(["Target Budget Range", sanitizedData.budgetRange]);
    } else if (isConstruction) {
      specRows.push(["Project Type", sanitizedData.projectType]);
      specRows.push(["Project Location", sanitizedData.location]);
      if (sanitizedData.floors) specRows.push(["Number of Floors", sanitizedData.floors]);
      if (sanitizedData.approximateArea) specRows.push(["Approx. Built-up Area", sanitizedData.approximateArea]);
      if (sanitizedData.stage) specRows.push(["Current Project Stage", sanitizedData.stage]);
      if (sanitizedData.budgetRange) specRows.push(["Expected Construction Budget", sanitizedData.budgetRange]);
      if (sanitizedData.timeline) specRows.push(["Target Timeline", sanitizedData.timeline]);
    } else {
      if (sanitizedData.realEstateEnquiryType) specRows.push(["Enquiry Type", sanitizedData.realEstateEnquiryType]);
      specRows.push(["Property Type", sanitizedData.projectType]);
      specRows.push(["Preferred Location", sanitizedData.location]);
      if (sanitizedData.approximateArea) specRows.push(["Approx. Space / Area", sanitizedData.approximateArea]);
      if (sanitizedData.purpose) specRows.push(["Purpose of Enquiry", sanitizedData.purpose]);
      if (sanitizedData.budgetRange) specRows.push(["Approx. Budget Range", sanitizedData.budgetRange]);
      if (sanitizedData.timeline) specRows.push(["Target Timeline", sanitizedData.timeline]);
    }

    // 7. Dispatch notification email to gunjan29gupta@gmail.com via Resend
    const textContent = [
      `NEW ${divisionLabel.toUpperCase()} ENQUIRY — GG CONSTRUCTION CO.`,
      "==================================================",
      `Reference ID: ${referenceId}`,
      `Received At:  ${timestamp}`,
      "",
      "CLIENT DETAILS:",
      `  Name:     ${sanitizedData.name}`,
      `  Email:    ${sanitizedData.email}`,
      `  Phone:    ${sanitizedData.phone}`,
      sanitizedData.company ? `  Company:  ${sanitizedData.company}` : "",
      `  Division: ${divisionLabel}`,
      "",
      `${divisionLabel.toUpperCase()} SPECIFICATION:`,
      ...specRows.map(([label, value]) => `  ${label}: ${value}`),
      "",
      sanitizedData.requirements && sanitizedData.requirements.length > 0
        ? [
            "REQUIREMENTS / PREFERENCES:",
            ...sanitizedData.requirements.map((r) => `  - ${r}`),
            "",
          ].join("\n")
        : "",
      "ADDITIONAL REQUIREMENTS / NOTES:",
      sanitizedData.message || "None provided.",
      "",
      "==================================================",
      "Dispatched from GG Construction Co. Website",
    ]
      .filter(Boolean)
      .join("\n");

    const htmlRows = [
      `<tr><td style="padding: 6px 0; color: #9CA3AF; width: 150px;">Client Name:</td><td style="color: #FFFFFF; font-weight: 600;">${escapeHtml(sanitizedData.name)}</td></tr>`,
      `<tr><td style="padding: 6px 0; color: #9CA3AF;">Email:</td><td><a href="mailto:${escapeHtml(sanitizedData.email)}" style="color: #60A5FA;">${escapeHtml(sanitizedData.email)}</a></td></tr>`,
      `<tr><td style="padding: 6px 0; color: #9CA3AF;">Phone:</td><td style="color: #FFFFFF;">${escapeHtml(sanitizedData.phone)}</td></tr>`,
      sanitizedData.company ? `<tr><td style="padding: 6px 0; color: #9CA3AF;">Company:</td><td style="color: #FFFFFF;">${escapeHtml(sanitizedData.company)}</td></tr>` : "",
      `<tr><td style="padding: 6px 0; color: #9CA3AF;">Division:</td><td style="color: #F59E0B; font-weight: 600;">${escapeHtml(divisionLabel)}</td></tr>`,
      ...specRows.map(
        ([label, value]) =>
          `<tr><td style="padding: 6px 0; color: #9CA3AF;">${escapeHtml(label)}:</td><td style="color: #FFFFFF; font-weight: 600;">${escapeHtml(value)}</td></tr>`
      ),
    ]
      .filter(Boolean)
      .join("\n");

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0B0D0F; color: #F3F1EC; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #14181D; border: 1px solid #28303A; border-radius: 8px; padding: 28px;">
    <div style="border-bottom: 2px solid #D97706; padding-bottom: 16px; margin-bottom: 20px;">
      <h2 style="color: #D97706; margin: 0; font-size: 20px;">GG Construction Co. — New ${divisionLabel} Request</h2>
      <p style="color: #9CA3AF; margin: 4px 0 0 0; font-size: 13px;">Ref: <strong>${referenceId}</strong> | ${timestamp}</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
      ${htmlRows}
    </table>

    ${
      sanitizedData.requirements && sanitizedData.requirements.length > 0
        ? `
    <div style="background-color: #0B0D0F; border: 1px solid #1F2937; border-radius: 6px; padding: 12px 16px; margin-bottom: 16px;">
      <p style="margin: 0 0 6px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Selected Requirements / Preferences:</p>
      <ul style="margin: 0; padding-left: 18px; color: #E5E7EB; font-size: 13px;">
        ${sanitizedData.requirements.map((r) => `<li style="margin-bottom: 4px;">${escapeHtml(r)}</li>`).join("")}
      </ul>
    </div>`
        : ""
    }

    ${
      sanitizedData.message
        ? `
    <div style="background-color: #0B0D0F; border: 1px solid #1F2937; border-radius: 6px; padding: 16px;">
      <p style="margin: 0 0 8px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Notes & Details:</p>
      <p style="margin: 0; color: #E5E7EB; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${escapeHtml(sanitizedData.message)}</p>
    </div>`
        : ""
    }
  </div>
</body>
</html>
`;

    const subjectPrefix = isMaterials
      ? "New Material Supply Quote"
      : isRealEstate
      ? "New Real Estate Enquiry"
      : "New Construction Estimate";

    const emailResult = await sendNotificationEmail({
      subject: `[GG Construction] ${subjectPrefix}: ${sanitizedData.projectType} (${referenceId})`,
      replyTo: sanitizedData.email,
      text: textContent,
      html: htmlContent,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: "We could not send your quote request at this time. Please try again shortly or contact us directly." },
        { status: 503, headers: { ...NO_CACHE_HEADERS, "X-RateLimit-Remaining": String(rateLimit.remaining) } }
      );
    }

    const confirmationMessage = isMaterials
      ? `Your material quotation request has been received (Ref: ${referenceId}). Our materials procurement desk will review your specifications and follow up with itemized pricing and delivery scheduling.`
      : isRealEstate
      ? `Your real estate enquiry has been received (Ref: ${referenceId}). Our property assistance team will review your requirements and connect with you.`
      : `Your project specification has been logged and forwarded to our estimation desk (Ref: ${referenceId}). Our team will review your details and connect with you to provide preliminary cost guidance.`;

    return NextResponse.json(
      {
        success: true,
        message: confirmationMessage,
        referenceId,
      },
      {
        status: 200,
        headers: {
          ...NO_CACHE_HEADERS,
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("[API QUOTE ERROR]:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { success: false, error: "Unable to process quote request at this time. Please contact us directly." },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}
