/**
 * Standalone Resend API Test Script
 *
 * Sends a test onboarding email to gunjan29gupta@gmail.com.
 *
 * Instructions:
 * 1. Replace 're_xxxxxxxxx' with your real Resend API key (from https://resend.com/api-keys).
 * 2. Run: node scripts/send_test_email.mjs
 */

import fs from "fs";
import path from "path";

// Load API key from environment, .env file, or fallback to placeholder
let apiKey = process.env.RESEND_API_KEY;

if (!apiKey || apiKey === "re_xxxxxxxxx") {
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, "utf8");
      const match = envContent.match(/RESEND_API_KEY=([^\r\n]+)/);
      if (match && match[1] && match[1].trim() !== "") {
        apiKey = match[1].trim();
      }
    }
  } catch {
    // ignore read error
  }
}

// ⚠️ PLEASE REPLACE 're_xxxxxxxxx' WITH YOUR REAL RESEND API KEY:
const RESEND_API_KEY = apiKey || "re_xxxxxxxxx";

console.log("=== GG Construction Co. — Resend Test Dispatch ===");

if (!RESEND_API_KEY || RESEND_API_KEY === "re_xxxxxxxxx") {
  console.error("\n⚠️  ACTION REQUIRED:");
  console.error("Please replace 're_xxxxxxxxx' with your real Resend API key in your .env file or directly in this script.");
  console.error("Get your API key at: https://resend.com/api-keys\n");
  process.exit(1);
}

async function sendTestEmail() {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "gunjan29gupta@gmail.com",
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("\n✅ Email successfully dispatched via Resend!");
      console.log("Message ID:", data.id);
      console.log("Recipient: gunjan29gupta@gmail.com");
      console.log("Check your inbox (or spam folder) for the test email.\n");
    } else {
      console.error("\n❌ Resend API returned an error:", data);
    }
  } catch (error) {
    console.error("\n❌ Failed to connect to Resend API:", error instanceof Error ? error.message : error);
  }
}

sendTestEmail();
