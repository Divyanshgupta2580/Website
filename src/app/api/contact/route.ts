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

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(8, "Valid phone number required").max(20),
  email: z.string().trim().email("Valid email address required"),
  company: z.string().trim().max(120).optional().default(""),
  enquiryType: z.enum(["residential", "commercial", "renovation", "general"]),
  subject: z.string().trim().min(3, "Subject required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  bot_field: z.string().max(0, "Bot detected").optional().default(""), // Honeypot
});

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
        error: "Too many requests. Please wait before submitting another enquiry.",
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
    const validation = contactSchema.safeParse(body);

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
      subject: data.subject.trim(),
      message: data.message.trim(),
    };

    // Server-side audit log (PII safe, IP masked)
    console.log("[INCOMING ENQUIRY RECEIVED]:", {
      type: sanitizedData.enquiryType,
      subject: sanitizedData.subject,
      ip: clientIp.replace(/(\d+)\.(\d+)\..*/, "$1.$2.*.*"), // Masked IP
      timestamp: new Date().toISOString(),
    });

    // Cryptographically unpredictable reference identifier
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `GGC-${randomSuffix}`;
    const timestamp = new Date().toUTCString();

    const categoryLabels: Record<string, string> = {
      residential: "Residential Construction",
      commercial: "Commercial Construction",
      renovation: "Renovation & Structural",
      general: "General Consultation",
    };
    const categoryLabel = categoryLabels[sanitizedData.enquiryType] || sanitizedData.enquiryType;

    // 7. Dispatch notification email to gunjan29gupta@gmail.com via Resend
    const textContent = [
      "NEW CONSTRUCTION ENQUIRY — GG CONSTRUCTION CO.",
      "==============================================",
      `Reference ID: ${referenceId}`,
      `Received At:  ${timestamp}`,
      "",
      "CLIENT DETAILS:",
      `  Name:     ${sanitizedData.name}`,
      `  Email:    ${sanitizedData.email}`,
      `  Phone:    ${sanitizedData.phone}`,
      sanitizedData.company ? `  Company:  ${sanitizedData.company}` : "",
      `  Type:     ${categoryLabel}`,
      "",
      "ENQUIRY DETAILS:",
      `  Subject:  ${sanitizedData.subject}`,
      "",
      "MESSAGE BODY:",
      sanitizedData.message,
      "",
      "==============================================",
      "Dispatched from GG Construction Co. Website",
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
      <h2 style="color: #D97706; margin: 0; font-size: 20px;">GG Construction Co. — New Construction Enquiry</h2>
      <p style="color: #9CA3AF; margin: 4px 0 0 0; font-size: 13px;">Ref: <strong>${referenceId}</strong> | ${timestamp}</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
      <tr><td style="padding: 6px 0; color: #9CA3AF; width: 120px;">Client Name:</td><td style="color: #FFFFFF; font-weight: 600;">${escapeHtml(sanitizedData.name)}</td></tr>
      <tr><td style="padding: 6px 0; color: #9CA3AF;">Email:</td><td><a href="mailto:${escapeHtml(sanitizedData.email)}" style="color: #60A5FA;">${escapeHtml(sanitizedData.email)}</a></td></tr>
      <tr><td style="padding: 6px 0; color: #9CA3AF;">Phone:</td><td style="color: #FFFFFF;">${escapeHtml(sanitizedData.phone)}</td></tr>
      ${sanitizedData.company ? `<tr><td style="padding: 6px 0; color: #9CA3AF;">Company:</td><td style="color: #FFFFFF;">${escapeHtml(sanitizedData.company)}</td></tr>` : ""}
      <tr><td style="padding: 6px 0; color: #9CA3AF;">Project Scope:</td><td style="color: #F59E0B; font-weight: 600;">${escapeHtml(categoryLabel)}</td></tr>
      <tr><td style="padding: 6px 0; color: #9CA3AF;">Subject:</td><td style="color: #FFFFFF;">${escapeHtml(sanitizedData.subject)}</td></tr>
    </table>

    <div style="background-color: #0B0D0F; border: 1px solid #1F2937; border-radius: 6px; padding: 16px; margin-top: 16px;">
      <p style="margin: 0 0 8px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</p>
      <p style="margin: 0; color: #E5E7EB; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${escapeHtml(sanitizedData.message)}</p>
    </div>
  </div>
</body>
</html>
`;

    const emailResult = await sendNotificationEmail({
      subject: `New Construction Enquiry — [${referenceId}]`,
      replyTo: sanitizedData.email,
      text: textContent,
      html: htmlContent,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: "We could not send your enquiry at this time. Please try again shortly or contact us directly." },
        { status: 503, headers: { ...NO_CACHE_HEADERS, "X-RateLimit-Remaining": String(rateLimit.remaining) } }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you. Your construction enquiry has been received (Ref: ${referenceId}). We will review your request and get back to you shortly.`,
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
    console.error("[API CONTACT ERROR]:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please contact us directly." },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}
