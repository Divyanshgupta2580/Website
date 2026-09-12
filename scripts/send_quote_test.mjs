/**
 * Quotation Email Dispatch Verification Script
 *
 * Simulates an authentic Get-a-Quote submission for Building Construction
 * and dispatches the exact email notification to gunjan29gupta@gmail.com via Resend.
 */

import fs from "fs";
import path from "path";

let apiKey = process.env.RESEND_API_KEY;

if (!apiKey || apiKey === "your_real_resend_api_key" || apiKey === "re_xxxxxxxxx") {
  // Check CLI argument: node scripts/send_quote_test.mjs re_your_key
  apiKey = process.argv[2];
}

const referenceId = `GGE-${Math.floor(100000 + Math.random() * 900000)}`;
const timestamp = new Date().toUTCString();

const quoteDetails = {
  name: "Gunjan Gupta (Test Enquiry)",
  email: "gunjan29gupta@gmail.com",
  phone: "+91 98765 43210",
  company: "GG Construction Co. Client",
  division: "Building Construction",
  projectType: "Independent House",
  location: "Gurugram, Sector 48",
  floors: "Ground + 2",
  approximateArea: "2,800 sq. ft.",
  stage: "Architectural Drawings Ready",
  budgetRange: "₹ 50 Lakhs – ₹ 1 Crore",
  message: "Live verification test quotation enquiry for independent house construction in Gurugram.",
};

const specRows = [
  ["Project Type", quoteDetails.projectType],
  ["Project Location", quoteDetails.location],
  ["Number of Floors", quoteDetails.floors],
  ["Approx. Built-up Area", quoteDetails.approximateArea],
  ["Current Project Stage", quoteDetails.stage],
  ["Expected Construction Budget", quoteDetails.budgetRange],
];

const textContent = [
  `NEW BUILDING CONSTRUCTION ENQUIRY — GG CONSTRUCTION CO.`,
  "==================================================",
  `Reference ID: ${referenceId}`,
  `Received At:  ${timestamp}`,
  "",
  "CLIENT DETAILS:",
  `  Name:     ${quoteDetails.name}`,
  `  Email:    ${quoteDetails.email}`,
  `  Phone:    ${quoteDetails.phone}`,
  `  Company:  ${quoteDetails.company}`,
  `  Division: ${quoteDetails.division}`,
  "",
  `BUILDING CONSTRUCTION SPECIFICATION:`,
  ...specRows.map(([label, value]) => `  ${label}: ${value}`),
  "",
  "ADDITIONAL REQUIREMENTS / NOTES:",
  quoteDetails.message,
  "",
  "==================================================",
  "Dispatched from GG Construction Co. Website",
].join("\n");

const htmlRows = [
  `<tr><td style="padding: 6px 0; color: #9CA3AF; width: 150px;">Client Name:</td><td style="color: #FFFFFF; font-weight: 600;">${quoteDetails.name}</td></tr>`,
  `<tr><td style="padding: 6px 0; color: #9CA3AF;">Email:</td><td><a href="mailto:${quoteDetails.email}" style="color: #60A5FA;">${quoteDetails.email}</a></td></tr>`,
  `<tr><td style="padding: 6px 0; color: #9CA3AF;">Phone:</td><td style="color: #FFFFFF;">${quoteDetails.phone}</td></tr>`,
  `<tr><td style="padding: 6px 0; color: #9CA3AF;">Company:</td><td style="color: #FFFFFF;">${quoteDetails.company}</td></tr>`,
  `<tr><td style="padding: 6px 0; color: #9CA3AF;">Division:</td><td style="color: #F59E0B; font-weight: 600;">${quoteDetails.division}</td></tr>`,
  ...specRows.map(
    ([label, value]) =>
      `<tr><td style="padding: 6px 0; color: #9CA3AF;">${label}:</td><td style="color: #FFFFFF; font-weight: 600;">${value}</td></tr>`
  ),
].join("\n");

const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0B0D0F; color: #F3F1EC; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #14181D; border: 1px solid #28303A; border-radius: 8px; padding: 28px;">
    <div style="border-bottom: 2px solid #D97706; padding-bottom: 16px; margin-bottom: 20px;">
      <h2 style="color: #D97706; margin: 0; font-size: 20px;">GG Construction Co. — New Building Construction Request</h2>
      <p style="color: #9CA3AF; margin: 4px 0 0 0; font-size: 13px;">Ref: <strong>${referenceId}</strong> | ${timestamp}</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
      ${htmlRows}
    </table>

    <div style="background-color: #0B0D0F; border: 1px solid #1F2937; border-radius: 6px; padding: 16px;">
      <p style="margin: 0 0 8px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Notes & Details:</p>
      <p style="margin: 0; color: #E5E7EB; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${quoteDetails.message}</p>
    </div>
  </div>
</body>
</html>
`;

async function dispatchQuotationEmail() {
  console.log(`\nDispatching test quotation (${referenceId}) to gunjan29gupta@gmail.com...`);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GG Construction Co. <onboarding@resend.dev>",
        to: ["gunjan29gupta@gmail.com"],
        reply_to: quoteDetails.email,
        subject: `[GG Construction] New Construction Estimate: ${quoteDetails.projectType} (${referenceId})`,
        text: textContent,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("\n✅ SUCCESS! Email has been dispatched via Resend.");
      console.log("Resend Message ID:", data.id);
      console.log("Recipient:", "gunjan29gupta@gmail.com");
      console.log("Subject:", `[GG Construction] New Construction Estimate: ${quoteDetails.projectType} (${referenceId})`);
      console.log("Reference ID:", referenceId);
      console.log("\nPlease check your inbox at gunjan29gupta@gmail.com (and spam/promotions folder just in case)!\n");
    } else {
      console.error("\n❌ Resend API Error:", data);
    }
  } catch (err) {
    console.error("\n❌ Network / Dispatch Error:", err.message);
  }
}

dispatchQuotationEmail();
