import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(8, "Valid phone number required").max(20),
  email: z.string().email("Valid email address required"),
  company: z.string().max(120).optional().default(""),
  enquiryType: z.enum(["construction", "real-estate", "materials", "general"]),
  subject: z.string().min(3, "Subject required").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  bot_field: z.string().max(0, "Bot detected").optional().default(""), // Honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.bot_field && body.bot_field.length > 0) {
      return NextResponse.json(
        { success: false, error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 422 }
      );
    }

    const data = validation.data;

    // Sanitize message strings
    const sanitizedData = {
      ...data,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim(),
      message: data.message.trim(),
    };

    // In a production deployment, this would trigger an email delivery service or CRM webhook.
    // Log sanitized record for server audit (omitting PII in real production):
    console.log("[INCOMING ENQUIRY RECEIVED]:", {
      division: sanitizedData.enquiryType,
      subject: sanitizedData.subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been routed to our division engineers. A technical representative will review your request within 24 business hours.",
      referenceId: `GGC-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("[API CONTACT ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please call our direct line." },
      { status: 500 }
    );
  }
}
