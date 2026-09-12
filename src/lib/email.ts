/**
 * Server-only Transactional Email Delivery Service (Resend API)
 *
 * Forwards Contact and Quote form submissions directly to gunjan29gupta@gmail.com.
 * Designed for serverless execution with safe timeouts and zero secret leakage.
 */

export interface EmailPayload {
  subject: string;
  text: string;
  html: string;
  to?: string;
  replyTo?: string;
}

export interface EmailDeliveryResult {
  success: boolean;
  messageId?: string;
}

const DEFAULT_RECIPIENT = "gunjan29gupta@gmail.com";
const DEFAULT_SENDER = "GG Construction Co. <onboarding@resend.dev>";

/** Escapes validated visitor input before it is interpolated into email HTML. */
export function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}

export async function sendNotificationEmail(payload: EmailPayload): Promise<EmailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.EMAIL_FROM?.trim() || DEFAULT_SENDER;

  if (!apiKey) {
    console.error("[EMAIL DISPATCH FAILED] Resend is not configured.");
    return { success: false };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [DEFAULT_RECIPIENT],
        reply_to: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      }),
      signal: AbortSignal.timeout(5000), // 5-second hard timeout for serverless functions
    });

    if (!res.ok) {
      // Provider response bodies may include details that are inappropriate for logs.
      console.error(`[EMAIL DISPATCH FAILED] Resend API HTTP ${res.status}.`);
      return { success: false };
    }

    const data = (await res.json()) as { id?: string };
    if (!data.id || typeof data.id !== "string") {
      console.error("[EMAIL DISPATCH FAILED] Resend returned no message ID.");
      return { success: false };
    }

    console.log("[EMAIL DISPATCH SUCCESS] Resend accepted enquiry notification.");
    return {
      success: true,
      messageId: data.id,
    };
  } catch {
    console.error("[EMAIL DISPATCH FAILED] Resend request could not be completed.");
    return { success: false };
  }
}
