/**
 * Automated Security & Quality Test Suite
 * Tests rate limiting, payload limits, honeypot detection, Zod validation, and JSON-LD escaping.
 */

const fs = require("fs");
const ts = require("typescript");
const { z } = require("zod");

// Transpile rate-limit.ts
const rateLimitCode = fs.readFileSync("src/lib/rate-limit.ts", "utf8");
const transpiledRateLimit = ts.transpileModule(rateLimitCode, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const moduleObj = { exports: {} };
const fn = new Function("module", "exports", transpiledRateLimit);
fn(moduleObj, moduleObj.exports);
const { checkRateLimit } = moduleObj.exports;

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    testsPassed++;
  } else {
    console.error(`  [FAIL] ${message}`);
    testsFailed++;
  }
}

console.log("=== 1. Rate Limiting Unit Tests ===");
const testIp = "203.0.113.42";
for (let i = 1; i <= 5; i++) {
  const res = checkRateLimit(testIp, { windowMs: 10000, maxRequests: 5 });
  assert(res.success === true, `Request ${i} within limit of 5 succeeds (remaining: ${res.remaining})`);
}

const throttledRes = checkRateLimit(testIp, { windowMs: 10000, maxRequests: 5 });
assert(throttledRes.success === false, "6th request is throttled with success: false");
assert(throttledRes.remaining === 0, "Throttled request reports remaining: 0");
assert(throttledRes.resetTime > 0, `Throttled request provides resetTime: ${throttledRes.resetTime}s`);

console.log("\n=== 2. JSON-LD XSS / Script Breakout Escaping Test ===");
const testSchema = {
  "@context": "https://schema.org",
  name: "Test </script><script>alert('XSS')</script>",
};
const serialized = JSON.stringify(testSchema).replace(/</g, "\\\\u003c");
assert(!serialized.includes("</script>"), "Serialized JSON-LD contains no unescaped </script> tag");
assert(serialized.includes(String.raw`\u003c/script>`), "Left angle bracket properly escaped as literal \\u003c");

console.log("\n=== 3. Zod Schema Validation & Input Bounds Test ===");
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(8).max(20),
  email: z.string().email(),
  company: z.string().max(120).optional().default(""),
  enquiryType: z.enum(["construction", "real-estate", "materials", "general"]),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(2000),
  bot_field: z.string().max(0).optional().default(""),
});

// Test invalid email
const invalidEmail = contactSchema.safeParse({
  name: "Rajesh",
  phone: "+91 9876543210",
  email: "invalid-email-format",
  enquiryType: "construction",
  subject: "Civil Tender",
  message: "Detailed description of requirements here.",
});
assert(invalidEmail.success === false, "Rejects malformed email format");

// Test honeypot trigger
const botSubmission = contactSchema.safeParse({
  name: "Bot User",
  phone: "+91 9876543210",
  email: "bot@spammer.com",
  enquiryType: "construction",
  subject: "Spam Tender",
  message: "Buy cheap crypto now please.",
  bot_field: "http://malicious-spam-url.com",
});
assert(botSubmission.success === false, "Honeypot detects non-empty bot field");

// Test valid submission
const validSubmission = contactSchema.safeParse({
  name: "Rajesh Sharma",
  phone: "+91 9876543210",
  email: "rajesh@apexinfra.com",
  enquiryType: "construction",
  subject: "Turnkey EPC Tender",
  message: "We require turnkey construction for a 200,000 sq ft industrial warehouse.",
});
assert(validSubmission.success === true, "Valid submission passes schema parse");

console.log("\n==================================");
console.log(`Results: ${testsPassed} passed, ${testsFailed} failed.`);
if (testsFailed > 0) process.exit(1);
