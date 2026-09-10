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
      email: "rajesh@apexinfra.com",
      enquiryType: "construction",
      subject: "Commercial EPC Tender Enquiry",
      message: "We are developing a 150,000 sq ft office campus in Gurugram and request a turnkey proposal.",
    }),
  });
  const res4 = await POST(validReq);
  const data4 = await res4.json();
  console.log("  [TEST] Valid submission status:", res4.status, res4.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Reference ID generated:", data4.referenceId ? data4.referenceId : "FAIL");

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

  // 3. Valid Quote Submission
  const validQuoteReq = new Request("http://localhost/api/quote", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "10.0.0.11" },
    body: JSON.stringify({
      name: "Vikramaditya Singh",
      phone: "+91 9876543210",
      email: "vikram@apexinfra.com",
      company: "Apex Infrastructure",
      enquiryType: "construction",
      projectType: "Commercial Office Building",
      location: "Gurugram, Cyber City",
      approximateArea: "120,000 Sq. Ft.",
      budgetRange: "₹ 20 Crores - ₹ 50 Crores",
      timeline: "6 - 12 Months",
      requirements: ["BIM 4D Modeling", "LEED Certification"],
      message: "Grade-A IT park specification required with post-tensioned slabs.",
    }),
  });
  const qRes3 = await postQuote(validQuoteReq);
  const qData3 = await qRes3.json();
  console.log("  [TEST] Quote Valid submission status:", qRes3.status, qRes3.status === 200 ? "PASS" : "FAIL");
  console.log("  [TEST] Quote Reference ID generated:", qData3.referenceId ? qData3.referenceId : "FAIL");

  console.log("\nAll API route tests executed cleanly.");
}

runTests().catch((e) => {
  console.error("API test failure:", e);
  process.exit(1);
});
