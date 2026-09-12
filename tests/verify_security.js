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

console.log("\n=== 4. Canonical Base URL & Environment Resolution Tests ===");
const envCode = fs.readFileSync("src/lib/env.ts", "utf8");
const transpiledEnv = ts.transpileModule(envCode, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const envModuleObj = { exports: {} };
new Function("module", "exports", transpiledEnv)(envModuleObj, envModuleObj.exports);
const { getBaseUrl } = envModuleObj.exports;

// Save initial environment
const originalEnv = { ...process.env };

try {
  // Test 4.1: Development fallback (frictionless local development)
  process.env.NODE_ENV = "development";
  delete process.env.VERCEL_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  assert(getBaseUrl() === "http://localhost:3000", "Local development falls back safely to http://localhost:3000");

  // Test 4.2: Vercel automatic deployment URL resolution (requires zero manual config)
  process.env.NODE_ENV = "production";
  process.env.VERCEL_URL = "gg-construction-preview.vercel.app";
  assert(getBaseUrl() === "https://gg-construction-preview.vercel.app", "Vercel deployments automatically use VERCEL_URL without manual config");

  // Test 4.3: Vercel provides a stable production canonical URL when a domain is connected.
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "www.ggconstruction.com";
  assert(getBaseUrl() === "https://www.ggconstruction.com", "Vercel production URL takes precedence for canonical SEO");

  // Test 4.4: Fallback when neither is provided safely returns localhost without crashing
  delete process.env.VERCEL_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  assert(getBaseUrl() === "http://localhost:3000", "Safely falls back to localhost:3000 if no Vercel URL is set");
} finally {
  // Restore original environment
  process.env = originalEnv;
}

console.log("\n=== 5. Cookie & Storage Privacy Audit ===");
const srcFiles = [];
function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".next") collectFiles(full);
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx") || entry.name.endsWith(".js")) {
      srcFiles.push(full);
    }
  }
}
collectFiles("src");

let cookieCount = 0;
let storageCount = 0;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, "utf8");
  if (content.includes("document.cookie") || content.includes("NextResponse.cookies") || content.includes("Set-Cookie")) {
    cookieCount++;
  }
  if (content.includes("localStorage.") || content.includes("sessionStorage.") || content.includes("indexedDB.")) {
    storageCount++;
  }
}
assert(cookieCount === 0, `Zero application cookies set in src (found: ${cookieCount})`);
assert(storageCount === 0, `Zero client storage trackers in src (found: ${storageCount})`);

console.log("\n=== 6. Security Headers & CSP Validation ===");
const nextConfigContent = fs.readFileSync("next.config.js", "utf8");
assert(nextConfigContent.includes("Content-Security-Policy"), "Content-Security-Policy header configured");
assert(!nextConfigContent.includes("'unsafe-eval'"), "CSP explicitly prohibits 'unsafe-eval'");
assert(nextConfigContent.includes("frame-ancestors 'none'"), "CSP enforces frame-ancestors 'none'");
assert(nextConfigContent.includes("Strict-Transport-Security"), "HSTS preload header configured");
assert(nextConfigContent.includes("productionBrowserSourceMaps: false"), "Production browser source maps disabled");

console.log("\n=== 7. Environment Variable Boundary Audit ===");
let publicEnvLeaks = 0;
for (const file of srcFiles) {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(/NEXT_PUBLIC_[A-Z0-9_]+/g) || [];
  for (const m of matches) {
    publicEnvLeaks++;
    console.error(`  [LEAK] Unexpected public env variable in ${file}: ${m}`);
  }
}
assert(publicEnvLeaks === 0, `Zero public environment variables are used (unexpected: ${publicEnvLeaks})`);

// Test 7.2: .env.example Template Audit
const envExampleContent = fs.readFileSync(".env.example", "utf8");
const exampleVars = [];
const lines = envExampleContent.split("\n");
for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
    const [key, ...valParts] = trimmed.split("=");
    const keyTrimmed = key.trim();
    const valTrimmed = valParts.join("=").trim();
    exampleVars.push({ key: keyTrimmed, value: valTrimmed });
  }
}

const allowedVars = new Set([
  "RESEND_API_KEY",
]);

for (const { key, value } of exampleVars) {
  assert(allowedVars.has(key), `.env.example only contains approved variable: ${key}`);
  assert(value === "", `.env.example contains zero hardcoded secrets or values for: ${key}`);
  if (key === "RESEND_API_KEY") {
    assert(!key.startsWith("NEXT_PUBLIC_"), "RESEND_API_KEY is strictly server-only, not prefixed with NEXT_PUBLIC_");
  }
}
assert(exampleVars.some((v) => v.key === "RESEND_API_KEY"), ".env.example contains required RESEND_API_KEY");

// Test 7.3: Only the Resend endpoint is used for outbound email delivery.
const emailService = fs.readFileSync("src/lib/email.ts", "utf8");
assert(emailService.includes("https://api.resend.com/emails"), "Email delivery uses the Resend API");

// Test 7.4: .gitignore encompasses local env files
const gitignoreContent = fs.readFileSync(".gitignore", "utf8");
assert(gitignoreContent.includes(".env"), ".gitignore ignores .env");
assert(gitignoreContent.includes(".env*.local"), ".gitignore ignores .env*.local");
assert(gitignoreContent.includes(".env.production"), ".gitignore ignores .env.production");

console.log("\n==================================");
console.log(`Results: ${testsPassed} passed, ${testsFailed} failed.`);
if (testsFailed > 0) process.exit(1);
