import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

// Maximum allowable JSON payload: 32 KB
const MAX_PAYLOAD_BYTES = 32 * 1024;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(8, "Valid phone number required").max(20),
  email: z.string().trim().email("Valid email address required"),
  company: z.string().trim().max(120).optional().default(""),
  enquiryType: z.enum(["construction", "real-estate", "materials", "general"]),
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
        error: "Too many requests. Please wait before submitting another enquiry.",
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
    const byteLength = Buffer.byteLength(rawBody, "utf8");

    if (byteLength > MAX_PAYLOAD_BYTES) {
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
    const validation = contactSchema.safeParse(body);

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
      subject: data.subject.trim(),
      message: data.message.trim(),
    };

    // Server-side audit log (PII safe)
    console.log("[INCOMING ENQUIRY RECEIVED]:", {
      division: sanitizedData.enquiryType,
      subject: sanitizedData.subject,
      ip: clientIp.replace(/(\d+)\.(\d+)\..*/, "$1.$2.*.*"), // Masked IP
      timestamp: new Date().toISOString(),
    });

    const referenceId = `GGC-${Date.now().toString().slice(-6)}`;

    // 7. Optional downstream integration dispatch (CRM / Email Relay)
    // Non-blocking, environment-variable gated, fails safely without leaking internal details
    await dispatchDownstreamIntegrations({
      ...sanitizedData,
      referenceId,
      source: "contact_modal",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you. Your enquiry has been routed to our division engineers. A technical representative will review your request within 24 business hours.",
        referenceId,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("[API CONTACT ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please contact us directly." },
      { status: 500 }
    );
  }
}

/**
 * Optional downstream integration dispatcher (e.g., CRM Webhook, SMTP Relay Endpoint).
 * Designed to fail safely without exposing internal network details or interrupting client response.
 */
async function dispatchDownstreamIntegrations(payload: Record<string, unknown>) {
  const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;
  const emailNotificationEndpoint = process.env.EMAIL_NOTIFICATION_ENDPOINT;

  const dispatchPromises: Promise<unknown>[] = [];

  if (crmWebhookUrl) {
    dispatchPromises.push(
      fetch(crmWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.CRM_API_BEARER_TOKEN
            ? { Authorization: `Bearer ${process.env.CRM_API_BEARER_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(3000), // 3-second hard timeout
      }).catch((err) => {
        console.error("[CRM INTEGRATION DISPATCH FAILED]", err instanceof Error ? err.message : "Unknown error");
      })
    );
  }

  if (emailNotificationEndpoint) {
    dispatchPromises.push(
      fetch(emailNotificationEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.EMAIL_SERVICE_KEY
            ? { "X-Service-Key": process.env.EMAIL_SERVICE_KEY }
            : {}),
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(3000),
      }).catch((err) => {
        console.error("[EMAIL RELAY DISPATCH FAILED]", err instanceof Error ? err.message : "Unknown error");
      })
    );
  }

  if (dispatchPromises.length > 0) {
    await Promise.allSettled(dispatchPromises);
  }
}
