import { NextResponse } from "next/server";
import { z } from "zod";

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
  requirements: z.array(z.string()).optional().default([]),
  message: z.string().max(3000).optional().default(""),
  bot_field: z.string().max(0, "Bot detected").optional().default(""),
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

    const validation = quoteSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 422 }
      );
    }

    const data = validation.data;

    // Log sanitized quote request
    console.log("[INCOMING QUOTE ESTIMATION REQUEST]:", {
      division: data.enquiryType,
      projectType: data.projectType,
      location: data.location,
      area: data.approximateArea,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your project specification has been logged with our estimation desk. A senior quantity surveyor or division director will connect with you to review drawings and provide preliminary cost guidance.",
      referenceId: `GGE-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("[API QUOTE ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process quote request at this time. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
