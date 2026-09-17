/**
 * Direct invocation test for API route handlers in Next.js environment.
 * Verifies construction-only routes, schemas, rate limiting, and security boundaries.
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

  console.log("=== 1. Verifying Obsolete Routes and Data Files Are Removed ===");
  const obsoletePaths = [
    "src/app/materials",
    "src/app/real-estate",
    "src/data/materials.ts",
    "src/data/properties.ts",
    "src/components/cards/MaterialCard.tsx",
    "src/components/cards/PropertyCard.tsx",
  ];
  for (const p of obsoletePaths) {
    const exists = fs.existsSync(p);
    console.log(`  [TEST] Obsolete path ${p} removed:`, !exists ? "PASS" : "FAIL");
    if (exists) throw new Error(`Obsolete file or directory still exists: ${p}`);
  }

  console.log("\n=== 2. Testing /api/contact Handler ===");
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
      enquiryType: "residential",
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
      enquiryType: "residential",
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
      enquiryType: "residential",
      subject: "Building Construction Enquiry in Rohini",
      message: "Looking for 4-floor residential building construction timeline and details in Rohini Sector 14.",
    }),
  });
  const res4 = await POST(validReq);
  const data4 = await res4.json();
  console.log("  [TEST] Valid submission status:", res4.status, res4.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Reference ID generated:", data4.referenceId ? data4.referenceId : "FAIL");
  console.log("  [TEST] Cache-Control no-store header:", res4.headers.get("cache-control")?.includes("no-store") ? "PASS" : "FAIL");
  console.log("  [TEST] Reference ID format (GGC-XXXXXX):", /^GGC-\d{6}$/.test(data4.referenceId) ? "PASS" : "FAIL");

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

  console.log("\n=== 3. Testing /api/quote Handler ===");
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

  // 2. Honeypot
  const quoteHoneypotReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.10" },
    body: JSON.stringify({
      name: "Bot",
      phone: "+91 9876543210",
      email: "bot@test.com",
      projectType: "Commercial Building",
      location: "Rohini",
      message: "This is a bot spam test message.",
      bot_field: "spambot",
    }),
  });
  const qRes2 = await postQuote(quoteHoneypotReq);
  console.log("  [TEST] Quote Honeypot rejection status:", qRes2.status, qRes2.status === 400 ? "PASS" : "FAIL");

  // 3. Valid Construction Quote Submission (Residential)
  const validQuoteReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.11" },
    body: JSON.stringify({
      name: "Vikram Singh",
      phone: "+91 9876543210",
      email: "vikram@example.com",
      projectType: "Residential Independent House",
      location: "Pitampura, Delhi",
      floors: "Ground + 3 Floors",
      approximateArea: "3,200 Sq. Ft.",
      stage: "Architectural Plans Ready",
      timeline: "6 - 12 Months",
      message: "Requirement for 4-floor residential building construction in Pitampura with stage-wise estimates.",
    }),
  });
  const qRes3 = await postQuote(validQuoteReq);
  const qData3 = await qRes3.json();
  console.log("  [TEST] Construction Quote Valid submission status:", qRes3.status, qRes3.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Construction Quote Reference ID generated:", qData3.referenceId ? qData3.referenceId : "FAIL");
  console.log("  [TEST] Quote Reference ID format (GGE-XXXXXX):", /^GGE-\d{6}$/.test(qData3.referenceId) ? "PASS" : "FAIL");

  // 4. Invalid Quote Submission (missing required location)
  const invalidQuoteReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.12" },
    body: JSON.stringify({
      name: "Anand Verma",
      phone: "+91 9811122233",
      email: "anand@example.com",
      projectType: "Commercial Building",
      location: "", // empty
      message: "Looking for quote without location.",
    }),
  });
  const qRes4 = await postQuote(invalidQuoteReq);
  console.log("  [TEST] Quote Validation rejection (missing location):", qRes4.status, qRes4.status === 422 ? "PASS" : "FAIL");

  console.log("\n=== 4. Testing Email Dispatch Service (src/lib/email.ts) ===");
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
      subject: "New Construction Enquiry — [GGC-123456]",
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
