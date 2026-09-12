/**
 * Direct invocation test for API route handlers in Next.js environment.
 */

const fs = require("fs");
const ts = require("typescript");

function customRequire(modulePath) {
  if (modulePath.startsWith("@/")) {
    const resolvedPath = modulePath.replace("@/", "./src/") + ".ts";
    return transpileAndLoad(resolvedPath);
  }
  return require(modulePath);
}

function transpileAndLoad(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const transpiled = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const moduleObj = { exports: {} };
  const fn = new Function("module", "exports", "require", transpiled);
  fn(moduleObj, moduleObj.exports, customRequire);
  return moduleObj.exports;
}

async function runTests() {
  // Keep route tests deterministic and prevent any real email delivery.
  process.env.RESEND_API_KEY = "re_test_mock_secret_key_12345";
  global.fetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({ id: "msg_test_123456789" }),
  });

  console.log("=== Testing /api/contact Handler ===");
  // Test Mock Next Request
  const contactModule = transpileAndLoad("src/app/api/contact/route.ts");
  const { POST } = contactModule;

  // 1. Wrong Content-Type
  const wrongTypeReq = new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "text/plain" },
    body: "hello",
  });
  const res1 = await POST(wrongTypeReq);
  console.log("  [TEST] Wrong Content-Type status:", res1.status, res1.status === 415 ? "PASS" : "FAIL");

  // 2. Honeypot
  const honeypotReq = new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.1" },
    body: JSON.stringify({
      name: "Bot User",
      phone: "+91 9876543210",
      email: "bot@example.com",
      enquiryType: "construction",
      subject: "Inquiry",
      message: "Test message here with enough characters.",
      bot_field: "spam-bot",
    }),
  });
  const res2 = await POST(honeypotReq);
  console.log("  [TEST] Honeypot rejection status:", res2.status, res2.status === 400 ? "PASS" : "FAIL");

  // 3. Validation Failure (missing required message)
  const invalidReq = new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.2" },
    body: JSON.stringify({
      name: "A", // too short
      phone: "123", // too short
      email: "not-an-email",
      enquiryType: "construction",
      subject: "Hi",
      message: "Short",
    }),
  });
  const res3 = await POST(invalidReq);
  const data3 = await res3.json();
  console.log("  [TEST] Validation failure status:", res3.status, res3.status === 422 ? "PASS" : "FAIL");
  console.log("  [TEST] Field errors returned:", Object.keys(data3.details).length > 0 ? "PASS" : "FAIL");

  // 4. Valid Submission
  const validReq = new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.3" },
    body: JSON.stringify({
      name: "Rajesh Sharma",
      phone: "+91 9876543210",
      email: "rajesh@example.com",
      enquiryType: "construction",
      subject: "Building Construction Enquiry",
      message: "Looking for 4-floor commercial building construction timeline and details in Gurugram.",
    }),
  });
  const res4 = await POST(validReq);
  const data4 = await res4.json();
  console.log("  [TEST] Valid submission status:", res4.status, res4.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Reference ID generated:", data4.referenceId ? data4.referenceId : "FAIL");
  console.log("  [TEST] Cache-Control no-store header:", res4.headers.get("cache-control")?.includes("no-store") ? "PASS" : "FAIL");
  console.log("  [TEST] Reference ID non-sequential format:", /^GGC-\d{6}$/.test(data4.referenceId) ? "PASS" : "FAIL");

  // 5. Rate Limit Exhaustion
  const spamIp = "192.168.100.50";
  let lastStatus = 0;
  for (let i = 0; i < 6; i++) {
    const spamReq = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": spamIp },
      body: JSON.stringify({
        name: "Test User",
        phone: "+91 9876543210",
        email: "test@example.com",
        enquiryType: "general",
        subject: "General query",
        message: "This is a legitimate length message for test.",
      }),
    });
    const res = await POST(spamReq);
    lastStatus = res.status;
  }
  console.log("  [TEST] 6th request rate limited status:", lastStatus, lastStatus === 429 ? "PASS" : "FAIL");

  console.log("\n=== Testing /api/quote Handler ===");
  const quoteModule = transpileAndLoad("src/app/api/quote/route.ts");
  const postQuote = quoteModule.POST;

  // 1. Wrong Content-Type
  const quoteReq1 = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "text/html" },
    body: "bad body",
  });
  const qRes1 = await postQuote(quoteReq1);
  console.log("  [TEST] Quote Wrong Content-Type status:", qRes1.status, qRes1.status === 415 ? "PASS" : "FAIL");
  console.log("  [TEST] Quote 415 Cache-Control header:", qRes1.headers.get("cache-control")?.includes("no-store") ? "PASS" : "FAIL");

  // 2. Honeypot
  const quoteHoneypotReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.10" },
    body: JSON.stringify({
      name: "Bot",
      phone: "+91 9876543210",
      email: "bot@test.com",
      enquiryType: "construction",
      projectType: "Commercial Office",
      location: "Delhi",
      approximateArea: "50,000 sq ft",
      budgetRange: "₹ 5 Crores - ₹ 20 Crores",
      timeline: "6 - 12 Months",
      bot_field: "spambot",
    }),
  });
  const qRes2 = await postQuote(quoteHoneypotReq);
  console.log("  [TEST] Quote Honeypot rejection status:", qRes2.status, qRes2.status === 400 ? "PASS" : "FAIL");

  // 3. Valid Construction Quote Submission
  const validQuoteReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.11" },
    body: JSON.stringify({
      name: "Vikram Singh",
      phone: "+91 9876543210",
      email: "vikram@example.com",
      company: "Local Retail Venture",
      enquiryType: "construction",
      projectType: "Commercial Building / Showroom (Low-Rise)",
      location: "Noida Sector 63",
      approximateArea: "12,000 Sq. Ft.",
      budgetRange: "₹ 1 Crore - ₹ 2.5 Crores",
      timeline: "6 - 12 Months",
      requirements: ["Architectural Drawings / Floor Plan Ready"],
      message: "Requirement for 4-floor commercial building construction and material estimates.",
    }),
  });
  const qRes3 = await postQuote(validQuoteReq);
  const qData3 = await qRes3.json();
  console.log("  [TEST] Quote Valid submission status:", qRes3.status, qRes3.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Quote Reference ID generated:", qData3.referenceId ? qData3.referenceId : "FAIL");
  console.log("  [TEST] Quote Cache-Control no-store header:", qRes3.headers.get("cache-control")?.includes("no-store") ? "PASS" : "FAIL");
  console.log("  [TEST] Quote Reference ID non-sequential format:", /^GGE-\d{6}$/.test(qData3.referenceId) ? "PASS" : "FAIL");

  // 4. Valid Materials Supply Submission (no approximateArea, timeline, or requirements required)
  const validMaterialsReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.12" },
    body: JSON.stringify({
      name: "Anand Verma",
      phone: "+91 9811122233",
      email: "anand@example.com",
      company: "Verma Developers",
      enquiryType: "materials",
      projectType: "Cement",
      location: "Gurugram, Sector 57",
      budgetRange: "₹1,00,000 – ₹5,00,000",
      message: "500 bags of Ultratech PPC cement needed on site by Tuesday.",
    }),
  });
  const qRes4 = await postQuote(validMaterialsReq);
  const qData4 = await qRes4.json();
  console.log("  [TEST] Materials Supply Valid submission status:", qRes4.status, qRes4.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Materials Supply Reference ID generated:", qData4.referenceId ? qData4.referenceId : "FAIL");

  // 5. Invalid Materials Supply Submission (missing location)
  const invalidMaterialsReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.13" },
    body: JSON.stringify({
      name: "Anand Verma",
      phone: "+91 9811122233",
      email: "anand@example.com",
      enquiryType: "materials",
      projectType: "Cement",
      location: "", // empty location
    }),
  });
  const qRes5 = await postQuote(invalidMaterialsReq);
  console.log("  [TEST] Materials Supply Validation rejection (missing location):", qRes5.status, qRes5.status === 422 ? "PASS" : "FAIL");

  // 6. Valid Low-Rise Construction Submission
  const validConstructionReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.14" },
    body: JSON.stringify({
      name: "Pooja Sharma",
      phone: "+91 9876543210",
      email: "pooja@example.com",
      company: "Homeowner",
      enquiryType: "construction",
      projectType: "Independent House",
      location: "Gurugram, Sector 48",
      floors: "Ground + 2",
      approximateArea: "2,800 sq. ft.",
      stage: "Architectural Drawings Ready",
      budgetRange: "₹ 50 Lakhs – ₹ 1 Crore",
      message: "Looking for turnkey construction contractor for independent house.",
    }),
  });
  const qRes6 = await postQuote(validConstructionReq);
  const qData6 = await qRes6.json();
  console.log("  [TEST] Construction Division Valid submission status:", qRes6.status, qRes6.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Construction Division Reference ID generated:", qData6.referenceId ? qData6.referenceId : "FAIL");

  // 7. Valid Real Estate Submission
  const validRealEstateReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.15" },
    body: JSON.stringify({
      name: "Sanjay Singhania",
      phone: "+91 9812345678",
      email: "sanjay@example.com",
      company: "Private Investor",
      enquiryType: "real-estate",
      projectType: "Residential Property",
      realEstateEnquiryType: "Looking to Buy",
      location: "Gurugram, Golf Course Ext Road",
      budgetRange: "₹ 1 Crore – ₹ 2.5 Crores",
      purpose: "Investment",
      message: "Looking for 3 BHK ready-to-move or upcoming residential property.",
    }),
  });
  const qRes7 = await postQuote(validRealEstateReq);
  const qData7 = await qRes7.json();
  console.log("  [TEST] Real Estate Division Valid submission status:", qRes7.status, qRes7.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Real Estate Division Reference ID generated:", qData7.referenceId ? qData7.referenceId : "FAIL");

  // 8. Invalid Real Estate Submission (missing location)
  const invalidRealEstateReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.16" },
    body: JSON.stringify({
      name: "Sanjay Singhania",
      phone: "+91 9812345678",
      email: "sanjay@example.com",
      enquiryType: "real-estate",
      projectType: "Plot / Land",
      realEstateEnquiryType: "Looking to Buy",
      location: "", // empty location
    }),
  });
  const qRes8 = await postQuote(invalidRealEstateReq);
  console.log("  [TEST] Real Estate Validation rejection (missing location):", qRes8.status, qRes8.status === 422 ? "PASS" : "FAIL");

  console.log("\n=== Testing Email Dispatch Service (src/lib/email.ts) ===");
  const emailModule = transpileAndLoad("src/lib/email.ts");
  const { sendNotificationEmail } = emailModule;

  // 1. Fails safely when API key is unset
  const origKey = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  const skippedResult = await sendNotificationEmail({
    subject: "Test Subject",
    text: "Test text",
    html: "<p>Test</p>",
  });
  console.log("  [TEST] Email fails safely when key is omitted:", skippedResult.success === false ? "PASS" : "FAIL");

  // 2. Verified destination gunjan29gupta@gmail.com and Bearer authorization
  process.env.RESEND_API_KEY = "re_test_mock_secret_key_12345";
  const origFetch = global.fetch;
  let interceptedUrl = "";
  let interceptedHeaders = {};
  let interceptedBody = null;

  global.fetch = async (url, options) => {
    interceptedUrl = String(url);
    interceptedHeaders = options.headers || {};
    interceptedBody = JSON.parse(options.body);
    return {
      ok: true,
      status: 200,
      json: async () => ({ id: "msg_test_123456789" }),
    };
  };

  try {
    const deliveredResult = await sendNotificationEmail({
      subject: "New Enquiry: Building Construction (GGC-123456)",
      replyTo: "client@example.com",
      text: "Client Enquiry details",
      html: "<p>Client Enquiry details</p>",
    });

    console.log("  [TEST] Mock Resend dispatch success:", deliveredResult.success === true ? "PASS" : "FAIL");
    console.log("  [TEST] Mock Resend message ID:", deliveredResult.messageId === "msg_test_123456789" ? "PASS" : "FAIL");
    console.log("  [TEST] Outbound endpoint is Resend API:", interceptedUrl === "https://api.resend.com/emails" ? "PASS" : "FAIL");
    console.log("  [TEST] Authorization Bearer format:", interceptedHeaders["Authorization"] === "Bearer re_test_mock_secret_key_12345" ? "PASS" : "FAIL");
    console.log("  [TEST] Destination is gunjan29gupta@gmail.com:", Array.isArray(interceptedBody.to) && interceptedBody.to[0] === "gunjan29gupta@gmail.com" ? "PASS" : "FAIL");
    console.log("  [TEST] Reply-To set to client email:", interceptedBody.reply_to === "client@example.com" ? "PASS" : "FAIL");
  } finally {
    global.fetch = origFetch;
    if (origKey) process.env.RESEND_API_KEY = origKey;
    else delete process.env.RESEND_API_KEY;
  }

  console.log("\nAll API route and email tests executed cleanly.");
}

runTests().catch((e) => {
  console.error("API test failure:", e);
  process.exit(1);
});
