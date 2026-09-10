import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

// Maximum allowable JSON payload: 32 KB
const MAX_PAYLOAD_BYTES = 32 * 1024;

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(8, "Valid phone number required").max(20),
  email: z.string().email("Valid email address required"),
  company: z.string().max(120).optional().default(""),
  enquiryType: z.enum(["construction", "real-estate", "materials"]),
  projectType: z.string().min(2, "Please select project type").max(80),
  location: z.string().min(2, "Project location / city required").max(100),
  approximateArea: z.string().min(1, "Approximate area or tonnage required").max(50),
  budgetRange: z.string().min(1, "Estimated budget range required").max(50),
  timeline: z.string().min(1, "Target timeline required").max(50),
  requirements: z.array(z.string().max(100)).max(20).optional().default([]),
  message: z.string().max(3000).optional().default(""),
  bot_field: z.string().max(0, "Bot detected").optional().default(""),
});

export async function POST(request: Request) {
  // 1. Content-Type Check
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { success: false, error: "Unsupported Media Type: Request must be application/json." },
      { status: 415 }
    );
  }

  // 2. Payload Size Check
  const contentLength = parseInt(request.headers.get("content-length") || "0", 10);
  if (contentLength > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { success: false, error: "Payload Too Large: Submission exceeds 32 KB limit." },
      { status: 413 }
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

    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, error: "Payload Too Large: Submission exceeds 32 KB limit." },
        { status: 413 }
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format." },
        { status: 400 }
      );
    }

    // 4. Honeypot check
    const rawData = body as Record<string, unknown>;
    if (rawData?.bot_field && typeof rawData.bot_field === "string" && rawData.bot_field.length > 0) {
      return NextResponse.json(
        { success: false, error: "Invalid submission detected." },
        { status: 400 }
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
      approximateArea: data.approximateArea.trim(),
      budgetRange: data.budgetRange.trim(),
      timeline: data.timeline.trim(),
      message: data.message.trim(),
    };

    // Server-side audit log (PII safe)
    console.log("[INCOMING ESTIMATION REQUEST]:", {
      division: sanitizedData.enquiryType,
      projectType: sanitizedData.projectType,
      location: sanitizedData.location,
      ip: clientIp.replace(/(\d+)\.(\d+)\..*/, "$1.$2.*.*"), // Masked IP
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your project specification has been logged with our estimation desk. A senior quantity surveyor or division director will connect with you to review drawings and provide preliminary cost guidance.",
        referenceId: `GGE-${Date.now().toString().slice(-6)}`,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("[API QUOTE ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process quote request at this time. Please contact us directly." },
      { status: 500 }
    );
  }
}
