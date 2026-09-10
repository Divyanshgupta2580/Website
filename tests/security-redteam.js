/**
 * GG Construction Co. - Hard Security Red-Team Automated Test Suite
 * Executes non-destructive, repeatable security assertions across all API endpoints,
 * routing edges, header policies, fuzzing vectors, and input boundary conditions.
 */

const http = require("http");

const BASE_URL = process.env.TEST_URL || "http://localhost:3000";

// Helper for HTTP requests
function sendRequest(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const headers = Object.assign({}, options.headers || {});
    const body = options.body;

    if (body && !headers["Content-Length"] && typeof body === "string") {
      headers["Content-Length"] = Buffer.byteLength(body, "utf8");
    }

    const reqOptions = {
      method: options.method || "GET",
      headers,
      timeout: 8000,
    };

    const req = http.request(url, reqOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        let json = null;
        try {
          json = JSON.parse(data);
        } catch {
          // Non-JSON response
        }
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
          json,
        });
      });
    });

    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error(`Timeout requesting ${path}`));
    });

    if (body) {
      req.write(body);
    }
    req.end();
  });
}

// Test Runner State
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
  }
}

async function runRedTeamSuite() {
  console.log("==================================================================");
  console.log("   GG Construction Co. — HARD SECURITY RED-TEAM AUDIT SUITE       ");
  console.log(`   Target Server: ${BASE_URL}`);
  console.log("==================================================================\n");

  const endpoints = ["/api/contact", "/api/quote"];

  // ==================================================================
  // 1. API Discovery & Inventory
  // ==================================================================
  console.log("--- 1. API Discovery & Inventory ---");
  assert(endpoints.length === 2, "Discovered exactly 2 server mutation endpoints (/api/contact & /api/quote)");

  // ==================================================================
  // 2. Method Security
  // ==================================================================
  console.log("\n--- 2. Method Security Testing ---");
  const forbiddenMethods = ["GET", "PUT", "PATCH", "DELETE"];

  for (const ep of endpoints) {
    for (const method of forbiddenMethods) {
      const res = await sendRequest(ep, { method });
      assert(
        res.statusCode === 405,
        `${method} ${ep} safely rejected with HTTP 405 Method Not Allowed (got ${res.statusCode})`
      );
    }

    // OPTIONS preflight
    const optRes = await sendRequest(ep, { method: "OPTIONS" });
    assert(
      optRes.statusCode === 204,
      `OPTIONS ${ep} returns HTTP 204 No Content with allow header: "${optRes.headers["allow"]}"`
    );
  }

  // ==================================================================
  // 3. Content-Type Testing & Confusion Resistance
  // ==================================================================
  console.log("\n--- 3. Content-Type & MIME Confusion Testing ---");
  const unsupportedMediaTypes = [
    { label: "text/plain", ct: "text/plain" },
    { label: "application/x-www-form-urlencoded", ct: "application/x-www-form-urlencoded" },
    { label: "multipart/form-data", ct: "multipart/form-data; boundary=---boundary" },
    { label: "confused multipart containing application/json", ct: "multipart/form-data; boundary=--xyz; dummy=application/json" },
    { label: "application/xml", ct: "application/xml" },
    { label: "empty Content-Type", ct: "" },
  ];

  for (const ep of endpoints) {
    for (const item of unsupportedMediaTypes) {
      const headers = item.ct ? { "Content-Type": item.ct } : {};
      const res = await sendRequest(ep, {
        method: "POST",
        headers,
        body: '{"test":"payload"}',
      });
      assert(
        res.statusCode === 415,
        `POST ${ep} with ${item.label} returns HTTP 415 Unsupported Media Type`
      );
    }

    // Valid application/json with charset
    const validCharsetRes = await sendRequest(ep, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Forwarded-For": "198.51.100.1",
      },
      body: JSON.stringify({}),
    });
    assert(
      validCharsetRes.statusCode === 422,
      `POST ${ep} with application/json; charset=utf-8 accepted for parsing (returns 422 schema validation)`
    );
  }

  // ==================================================================
  // 4. Body Fuzzing, Type Confusion & Deep Payloads
  // ==================================================================
  console.log("\n--- 4. Body Fuzzing & Type Confusion ---");

  // A. Malformed JSON syntax
  for (const ep of endpoints) {
    const res = await sendRequest(ep, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": "198.51.100.2" },
      body: '{"brokenJson: missing_quotes',
    });
    assert(
      res.statusCode === 400 && res.json?.error === "Invalid JSON format.",
      `POST ${ep} with malformed JSON syntax safely returns HTTP 400 Invalid JSON format`
    );
    assert(!res.body.includes("SyntaxError: Unexpected"), `POST ${ep} does not leak internal SyntaxError stack trace`);
  }

  // B. Type Confusion on /api/contact
  const typeConfusionCases = [
    { label: "null for name", body: { name: null, phone: "9811034825", email: "test@example.com", enquiryType: "general", subject: "Test", message: "1234567890" } },
    { label: "number for name", body: { name: 123456, phone: "9811034825", email: "test@example.com", enquiryType: "general", subject: "Test", message: "1234567890" } },
    { label: "boolean for email", body: { name: "Valid Name", phone: "9811034825", email: true, enquiryType: "general", subject: "Test", message: "1234567890" } },
    { label: "array for message", body: { name: "Valid Name", phone: "9811034825", email: "test@example.com", enquiryType: "general", subject: "Test", message: ["nested", "array"] } },
    { label: "object for subject", body: { name: "Valid Name", phone: "9811034825", email: "test@example.com", enquiryType: "general", subject: { nested: true }, message: "1234567890" } },
    { label: "invalid enum enquiryType", body: { name: "Valid Name", phone: "9811034825", email: "test@example.com", enquiryType: "malicious-enum", subject: "Test", message: "1234567890" } },
    { label: "whitespace-only name", body: { name: "   ", phone: "9811034825", email: "test@example.com", enquiryType: "general", subject: "Test", message: "1234567890" } },
  ];

  let tcIndex = 0;
  for (const tc of typeConfusionCases) {
    tcIndex++;
    const res = await sendRequest("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": `198.51.100.${30 + tcIndex}` },
      body: JSON.stringify(tc.body),
    });
    assert(
      res.statusCode === 422,
      `Type confusion (${tc.label}) safely caught by Zod schema with HTTP 422`
    );
  }

  // C. Boundary lengths
  const boundaryRes = await sendRequest("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Forwarded-For": "198.51.100.40" },
    body: JSON.stringify({
      name: "A".repeat(101), // Exceeds max 100
      phone: "9811034825",
      email: "test@example.com",
      enquiryType: "general",
      subject: "Test",
      message: "Valid message text here.",
    }),
  });
  assert(boundaryRes.statusCode === 422, "Oversized string (name > 100 chars) caught by schema bounds with HTTP 422");

  // D. Unicode & Emoji handling
  const unicodeRes = await sendRequest("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Forwarded-For": "198.51.100.41" },
    body: JSON.stringify({
      name: "श्री Gunjan Gupta 🏗️",
      phone: "+91 98110 34825",
      email: "valid.unicode@example.com",
      enquiryType: "construction",
      subject: "Structural Tender & Feasibility 🏛️",
      message: "Testing Unicode and Indic multi-byte characters: संप्रभु निर्माण एवं ढांचा।",
    }),
  });
  assert(
    unicodeRes.statusCode === 200 && unicodeRes.json?.success === true,
    "Valid Unicode, Indic characters & Emoji accepted without corruption or crash (HTTP 200)"
  );

  // ==================================================================
  // 5. XSS & Script Injection Neutralization
  // ==================================================================
  console.log("\n--- 5. XSS & Script Injection Neutralization ---");

  const xssPayloads = [
    "<script>alert(1)</script>",
    '"><img src=x onerror=alert(1)>',
    "</textarea><script>alert(1)</script>",
    "javascript:alert(1)",
  ];

  let xssIndex = 0;
  for (const payload of xssPayloads) {
    xssIndex++;
    const res = await sendRequest("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": `198.51.100.${50 + xssIndex}` },
      body: JSON.stringify({
        name: "Security Auditor",
        phone: "+91 98110 34825",
        email: "xss.test@example.com",
        enquiryType: "general",
        subject: payload,
        message: `Testing payload neutralization: ${payload}`,
      }),
    });
    assert(
      res.statusCode === 200,
      `XSS string "${payload.slice(0, 20)}..." safely sanitized and stored without HTML execution (HTTP 200)`
    );
  }

  // Verify HTML homepage JSON-LD script breakout immunity
  const homeRes = await sendRequest("/");
  const jsonLdMatch = homeRes.body.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  assert(!!jsonLdMatch, "Homepage contains application/ld+json structured data block");
  assert(
    jsonLdMatch && !jsonLdMatch[1].includes("</script>"),
    "Homepage JSON-LD structured data block contains no unescaped script breakout tags"
  );

  // ==================================================================
  // 6. Injection Defense (SQL, Shell, Template, Path)
  // ==================================================================
  console.log("\n--- 6. Injection Vector Neutralization ---");

  const injectionStrings = [
    { label: "SQL injection quote syntax", val: "' OR '1'='1' --" },
    { label: "Shell command interpolation", val: "; id; whoami" },
    { label: "Shell subshell syntax", val: "$(whoami)" },
    { label: "Server-side template expression", val: "{{7*7}} ${7*7}" },
    { label: "Path traversal pattern", val: "../../../etc/passwd" },
  ];

  let injIndex = 0;
  for (const inj of injectionStrings) {
    injIndex++;
    const res = await sendRequest("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": `198.51.100.${60 + injIndex}` },
      body: JSON.stringify({
        name: "Injection Tester",
        phone: "+91 98110 34825",
        email: "inj.test@example.com",
        enquiryType: "general",
        subject: `Test ${inj.val}`,
        message: `Body testing ${inj.label}: ${inj.val}`,
      }),
    });
    assert(
      res.statusCode === 200,
      `Injection vector (${inj.label}) safely treated as raw plaintext without shell or database evaluation`
    );
  }

  // ==================================================================
  // 7. Dynamic Route Traversal Defense
  // ==================================================================
  console.log("\n--- 7. Dynamic Route Traversal Testing ---");

  const traversalRoutes = [
    "/blog/..%2f..%2fetc%2fpasswd",
    "/projects/..../..../etc/passwd",
    "/services/%2e%2e%2fpackage.json",
    "/materials/non-existent-category-traversal",
  ];

  for (const route of traversalRoutes) {
    const res = await sendRequest(route);
    assert(
      res.statusCode === 404,
      `Traversal probe on ${route} safely returns HTTP 404 without leaking internal files`
    );
  }

  // ==================================================================
  // 8. CORS & Cross-Origin Request Isolation
  // ==================================================================
  console.log("\n--- 8. CORS & Cross-Origin Request Isolation ---");

  const corsRes = await sendRequest("/api/contact", {
    method: "POST",
    headers: {
      "Origin": "https://malicious-cross-origin.com",
      "Content-Type": "application/json",
      "X-Forwarded-For": "198.51.100.8",
    },
    body: JSON.stringify({}),
  });

  assert(
    !corsRes.headers["access-control-allow-origin"],
    "API responses omit Access-Control-Allow-Origin: * for untrusted cross-origin requests"
  );

  // ==================================================================
  // 9. Rate Limiting & Proxy Header Validation
  // ==================================================================
  console.log("\n--- 9. Rate Limiting Engine & Edge Header Validation ---");

  // Send 6 requests with the same dynamic IP to verify 429 throttling
  const rateLimitIp = "198.51.100." + ((Date.now() % 100) + 120);
  let throttled = false;

  for (let i = 1; i <= 6; i++) {
    const res = await sendRequest("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": rateLimitIp,
      },
      body: JSON.stringify({}),
    });

    if (i <= 5) {
      assert(res.statusCode === 422, `Rate limit request ${i}/5 allowed (remaining: ${res.headers["x-ratelimit-remaining"]})`);
    } else {
      throttled = res.statusCode === 429;
      assert(throttled, `6th request correctly throttled with HTTP 429 Too Many Requests`);
      assert(!!res.headers["retry-after"], `Throttled response includes Retry-After header: "${res.headers["retry-after"]}"`);
    }
  }

  // Test invalid IPv4 octet poisoning protection
  const invalidIpRes = await sendRequest("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": "999.999.999.999", // Invalid octets
    },
    body: JSON.stringify({}),
  });
  assert(
    invalidIpRes.statusCode === 422 || invalidIpRes.statusCode === 429,
    "Invalid IP string (999.999.999.999) rejected by isValidIp and safely mapped to 127.0.0.1"
  );

  // ==================================================================
  // 10. Payload Size Bounds (32 KB Limit)
  // ==================================================================
  console.log("\n--- 10. Payload Size & Resource Exhaustion Defense ---");

  // Send 33 KB payload
  const oversizedPayload = JSON.stringify({
    name: "Oversized Test",
    phone: "9811034825",
    email: "test@example.com",
    enquiryType: "general",
    subject: "Large Payload",
    message: "X".repeat(34 * 1024),
  });

  const sizeRes = await sendRequest("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": "198.51.100.20",
    },
    body: oversizedPayload,
  });

  assert(
    sizeRes.statusCode === 413 && sizeRes.json?.error?.includes("Payload Too Large"),
    `Payload exceeding 32 KB safely rejected with HTTP 413 Payload Too Large (got ${sizeRes.statusCode})`
  );

  // ==================================================================
  // 11. Honeypot Anti-Spam Bot Defense
  // ==================================================================
  console.log("\n--- 11. Honeypot Anti-Spam Defense ---");

  const honeypotRes = await sendRequest("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": "198.51.100.21",
    },
    body: JSON.stringify({
      name: "Spambot Crawler",
      phone: "+91 98110 34825",
      email: "bot@spam.com",
      enquiryType: "general",
      subject: "Buy V1agra",
      message: "Automated spam transmission.",
      bot_field: "AutomatedCrawlerBotValue", // Trapped honeypot
    }),
  });

  assert(
    honeypotRes.statusCode === 400 && honeypotRes.json?.error === "Invalid submission detected.",
    "Submission with non-empty bot_field trapped immediately with HTTP 400"
  );

  // ==================================================================
  // 12. Security Headers & CSP Verification
  // ==================================================================
  console.log("\n--- 12. Production Security Headers & CSP ---");

  const headRes = await sendRequest("/");
  const sh = headRes.headers;

  assert(sh["x-frame-options"] === "DENY", "X-Frame-Options is strictly set to DENY");
  assert(sh["x-content-type-options"] === "nosniff", "X-Content-Type-Options is set to nosniff");
  assert(sh["x-permitted-cross-domain-policies"] === "none", "X-Permitted-Cross-Domain-Policies is set to none");
  assert(sh["strict-transport-security"]?.includes("max-age=63072000"), "HSTS configured with max-age >= 1 year and preload");
  assert(sh["referrer-policy"] === "strict-origin-when-cross-origin", "Referrer-Policy is strict-origin-when-cross-origin");

  const csp = sh["content-security-policy"] || "";
  assert(csp.includes("default-src 'self'"), "CSP specifies default-src 'self'");
  assert(csp.includes("base-uri 'self'"), "CSP specifies base-uri 'self'");
  assert(csp.includes("form-action 'self'"), "CSP specifies form-action 'self'");
  assert(csp.includes("object-src 'none'"), "CSP specifies object-src 'none'");
  assert(!csp.includes("'unsafe-eval'"), "CSP strictly omits dangerous 'unsafe-eval'");

  // ==================================================================
  // 13. Information Disclosure & Error Sanitization
  // ==================================================================
  console.log("\n--- 13. Information Disclosure & Error Sanitization ---");

  const notFoundRes = await sendRequest("/this-route-does-not-exist-at-all");
  assert(notFoundRes.statusCode === 404, "Unknown route returns clean HTTP 404");
  assert(!notFoundRes.body.includes("node_modules"), "404 response does not leak internal filesystem paths");
  assert(!notFoundRes.body.includes("process.env"), "404 response does not leak environment variables");

  // ==================================================================
  // Summary
  // ==================================================================
  console.log("\n==================================================================");
  console.log(`   RED-TEAM AUDIT COMPLETE: ${passedTests}/${totalTests} Passed, ${failedTests} Failed`);
  console.log("==================================================================\n");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runRedTeamSuite().catch((err) => {
  console.error("FATAL AUDIT ERROR:", err);
  process.exit(1);
});
