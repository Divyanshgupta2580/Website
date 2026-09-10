/**
 * GG Construction Co. - Comprehensive Automated QA Audit Suite
 * Validates routes, security headers, DOM structure, SEO tags, images, accessibility attributes,
 * developer artifact presence, and API edge boundaries against the running production server.
 */

const http = require("http");

const BASE_URL = "http://localhost:3001";

// Helper for making HTTP requests
function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const headers = Object.assign({}, options.headers || {});
    if (options.body && !headers["Content-Length"]) {
      headers["Content-Length"] = Buffer.byteLength(options.body);
    }
    const reqOptions = {
      method: options.method || "GET",
      headers,
      timeout: 10000,
    };

    const req = http.request(url, reqOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error(`Timeout requesting ${path}`));
    });

    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

// Extraction helpers using RegExp (safe & dependency-free for DOM parsing)
function extractTags(html, tagName) {
  const regex = new RegExp(`<${tagName}\\b([^>]*)>([\\s\\S]*?)<\\/${tagName}>`, "gi");
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push({
      full: match[0],
      attrs: match[1],
      content: match[2].trim(),
    });
  }
  return matches;
}

function extractSelfClosingTags(html, tagName) {
  const regex = new RegExp(`<${tagName}\\b([^>]*)\\/?>`, "gi");
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push({
      full: match[0],
      attrs: match[1],
    });
  }
  return matches;
}

function parseAttributes(attrString) {
  const attrs = {};
  const regex = /([a-zA-Z0-9_-]+)(?:=["']([^"']*)["'])?/g;
  let match;
  while ((match = regex.exec(attrString)) !== null) {
    attrs[match[1].toLowerCase()] = match[2] !== undefined ? match[2] : true;
  }
  return attrs;
}

// Main test execution
async function runQAAudit() {
  console.log("==================================================================");
  console.log("   GG Construction Co. — Automated QA & DOM Audit Suite           ");
  console.log("==================================================================\n");

  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    warnings: 0,
    details: [],
  };

  function assert(condition, message, warnOnly = false) {
    results.total++;
    if (condition) {
      results.passed++;
      console.log(`  [PASS] ${message}`);
      results.details.push({ status: "PASS", message });
    } else if (warnOnly) {
      results.warnings++;
      console.log(`  [WARN] ${message}`);
      results.details.push({ status: "WARN", message });
    } else {
      results.failed++;
      console.log(`  [FAIL] ${message}`);
      results.details.push({ status: "FAIL", message });
    }
  }

  // List of all primary and dynamic routes to audit
  const routesToTest = [
    { path: "/", name: "Homepage" },
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services Index" },
    { path: "/services/turnkey-construction", name: "Service Detail: Turnkey" },
    { path: "/real-estate", name: "Real Estate Division" },
    { path: "/projects", name: "Projects Portfolio" },
    { path: "/projects/apex-commercial-tower", name: "Project Detail: Apex Tower" },
    { path: "/materials", name: "Materials Division" },
    { path: "/materials/tmt-steel", name: "Material Category: TMT Steel" },
    { path: "/gallery", name: "Architectural Gallery" },
    { path: "/testimonials", name: "Testimonials & CSAT" },
    { path: "/contact", name: "Contact & Headquarters" },
    { path: "/get-a-quote", name: "Estimation & Quote" },
    { path: "/blog", name: "Engineering Insights" },
    { path: "/blog/understanding-is-1786-seismic-ductility-fe500d", name: "Article Detail: IS 1786" },
    { path: "/faqs", name: "Technical FAQs" },
    { path: "/privacy-policy", name: "Privacy Policy" },
    { path: "/terms", name: "Terms of Service" },
  ];

  console.log("--- 1. Route Availability, Security Headers & DOM Audit ---\n");

  for (const route of routesToTest) {
    console.log(`Auditing: ${route.name} (${route.path})`);
    try {
      const res = await request(route.path);
      assert(res.statusCode === 200, `${route.name} returns HTTP 200 OK`);

      // Security Headers Check on HTML
      assert(
        res.headers["x-frame-options"] === "DENY",
        `${route.name} sets X-Frame-Options: DENY`
      );
      assert(
        res.headers["x-content-type-options"] === "nosniff",
        `${route.name} sets X-Content-Type-Options: nosniff`
      );
      assert(
        !!res.headers["content-security-policy"],
        `${route.name} enforces Content-Security-Policy`
      );

      const html = res.body;

      // Title tag check
      const titleMatches = extractTags(html, "title");
      assert(
        titleMatches.length === 1 && titleMatches[0].content.length > 5,
        `${route.name} has unique <title>: "${titleMatches[0]?.content || "MISSING"}"`
      );

      // Meta Description
      const metaTags = extractSelfClosingTags(html, "meta");
      const descTag = metaTags.find((m) => {
        const attrs = parseAttributes(m.attrs);
        return attrs.name === "description";
      });
      const descContent = descTag ? parseAttributes(descTag.attrs).content : null;
      assert(
        !!descContent && descContent.length > 20,
        `${route.name} has valid meta description (${descContent?.length || 0} chars)`
      );

      // H1 hierarchy: exactly one h1 per page
      const h1Matches = extractTags(html, "h1");
      assert(
        h1Matches.length === 1,
        `${route.name} has exactly one <h1> element (found: ${h1Matches.length})`
      );

      // Image audit: check all <img> tags have alt attributes
      const imgTags = extractSelfClosingTags(html, "img");
      let missingAltCount = 0;
      for (const img of imgTags) {
        const attrs = parseAttributes(img.attrs);
        if (attrs.alt === undefined || attrs.alt === "") {
          missingAltCount++;
        }
      }
      assert(
        missingAltCount === 0,
        `${route.name}: all ${imgTags.length} <img> tags have non-empty alt text`
      );

      // Link integrity: no empty hrefs
      const linkTags = extractTags(html, "a");
      let brokenHrefs = 0;
      for (const link of linkTags) {
        const attrs = parseAttributes(link.attrs);
        if (attrs.href === "" || attrs.href === "#") {
          brokenHrefs++;
        }
      }
      assert(
        brokenHrefs === 0,
        `${route.name}: all ${linkTags.length} links have valid non-empty destination hrefs`
      );

      // Content cleanliness: check for accidental developer artifacts in rendered markup (ignoring script/style tags)
      const textOnly = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
      const forbiddenTokens = ["TODO", "FIXME", "lorem ipsum", "undefined", "NaN", "[object Object]"];
      let foundTokens = [];
      for (const token of forbiddenTokens) {
        if (textOnly.includes(token)) {
          foundTokens.push(token);
        }
      }
      assert(
        foundTokens.length === 0,
        `${route.name} contains no developer artifacts (checked: ${forbiddenTokens.join(", ")})`
      );

      console.log("");
    } catch (err) {
      assert(false, `${route.name} failed network request: ${err.message}`);
    }
  }

  console.log("--- 2. Utility & Special Routes Audit ---\n");

  // Sitemap.xml
  try {
    const sitemapRes = await request("/sitemap.xml");
    assert(sitemapRes.statusCode === 200, "Sitemap /sitemap.xml returns HTTP 200");
    assert(
      sitemapRes.headers["content-type"].includes("xml"),
      "Sitemap Content-Type is XML"
    );
    assert(
      sitemapRes.body.includes("<urlset") && sitemapRes.body.includes("<loc>"),
      "Sitemap XML contains valid schema and url entries"
    );
  } catch (err) {
    assert(false, `Sitemap request failed: ${err.message}`);
  }

  // Robots.txt
  try {
    const robotsRes = await request("/robots.txt");
    assert(robotsRes.statusCode === 200, "Robots /robots.txt returns HTTP 200");
    const lowerBody = robotsRes.body.toLowerCase();
    assert(
      lowerBody.includes("user-agent:") && lowerBody.includes("sitemap:"),
      "Robots.txt contains User-agent and Sitemap directives"
    );
  } catch (err) {
    assert(false, `Robots request failed: ${err.message}`);
  }

  // 404 Page
  try {
    const notFoundRes = await request("/this-route-definitely-does-not-exist-12345");
    assert(notFoundRes.statusCode === 404, "Unknown route returns HTTP 404 Not Found");
    assert(
      notFoundRes.body.includes("Page Not Found") || notFoundRes.body.includes("404"),
      "404 page renders custom branded not-found interface"
    );
  } catch (err) {
    assert(false, `404 route request failed: ${err.message}`);
  }

  console.log("\n--- 3. API Edge & Lead Form Boundaries (/api/contact & /api/quote) ---\n");

  // Test Contact Empty Form (Test IP: 198.51.100.1)
  try {
    const res = await request("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.1",
      },
      body: JSON.stringify({}),
    });
    assert(res.statusCode === 422, "Contact API rejects empty submission with HTTP 422 Unprocessable Entity");
    const json = JSON.parse(res.body);
    assert(json.success === false && !!json.details, "Contact API returns structured validation errors");
  } catch (err) {
    assert(false, `Contact empty submission failed: ${err.message}`);
  }

  // Test Contact Invalid Email (Test IP: 198.51.100.2)
  try {
    const res = await request("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.2",
      },
      body: JSON.stringify({
        name: "Test User",
        phone: "+919876543210",
        email: "not-an-email",
        enquiryType: "construction",
        subject: "Project inquiry",
        message: "This is a test message for civil engineering scope.",
      }),
    });
    assert(res.statusCode === 422, "Contact API rejects invalid email format with HTTP 422");
    const json = JSON.parse(res.body);
    assert(!!json.details?.email, "Contact API validation highlights email field error");
  } catch (err) {
    assert(false, `Contact invalid email test failed: ${err.message}`);
  }

  // Test Contact Honeypot (Test IP: 198.51.100.3)
  try {
    const res = await request("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.3",
      },
      body: JSON.stringify({
        name: "Bot User",
        phone: "+919876543210",
        email: "bot@spammer.org",
        enquiryType: "construction",
        subject: "Spam link",
        message: "Buy cheap crypto loans here",
        bot_field: "http://spamsite.com",
      }),
    });
    assert(res.statusCode === 400, "Contact API traps honeypot bot with HTTP 400");
  } catch (err) {
    assert(false, `Contact honeypot test failed: ${err.message}`);
  }

  // Test Contact Oversized Payload (>32KB) (Test IP: 198.51.100.4)
  try {
    const hugeMessage = "A".repeat(35000);
    const bodyStr = JSON.stringify({
      name: "Spam Bot",
      phone: "+919876543210",
      email: "bot@example.com",
      enquiryType: "construction",
      subject: "Big",
      message: hugeMessage,
    });
    const res = await request("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.4",
        "Content-Length": Buffer.byteLength(bodyStr).toString(),
      },
      body: bodyStr,
    });
    assert(res.statusCode === 413, "Contact API rejects oversized payload (>32KB) with HTTP 413 Payload Too Large");
  } catch (err) {
    assert(false, `Contact oversized payload test failed: ${err.message}`);
  }

  // Test Contact Valid Submission (Test IP: 198.51.100.5)
  try {
    const res = await request("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.5",
      },
      body: JSON.stringify({
        name: "Vikram Malhotra",
        phone: "+919876543210",
        email: "vikram@malhotragroup.in",
        enquiryType: "construction",
        subject: "Civil Tender for Commercial Plaza",
        message: "Requesting detailed civil estimation and Bill of Quantities schedule.",
      }),
    });
    assert(res.statusCode === 200, "Contact API accepts valid submission with HTTP 200 OK");
    const json = JSON.parse(res.body);
    assert(
      json.success === true && json.referenceId?.startsWith("GGC-"),
      `Contact API returns confirmation reference ID: "${json.referenceId}"`
    );
  } catch (err) {
    assert(false, `Contact valid submission test failed: ${err.message}`);
  }

  // Test Rate Limiter (Test IP: 198.51.100.6 hammered 6 times)
  try {
    const hammerIp = "198.51.100.6";
    let lastStatus = 200;
    for (let i = 0; i < 6; i++) {
      const res = await request("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Forwarded-For": hammerIp,
        },
        body: JSON.stringify({
          name: "Hammer Tester",
          phone: "+919876543210",
          email: "hammer@test.com",
          enquiryType: "general",
          subject: "Test load",
          message: "Testing sliding window rate limiter ceiling.",
        }),
      });
      lastStatus = res.statusCode;
    }
    assert(lastStatus === 429, "Rate limiter throttles excessive requests with HTTP 429 Too Many Requests");
  } catch (err) {
    assert(false, `Rate limit hammering test failed: ${err.message}`);
  }

  // Test Quote Valid Form (Test IP: 198.51.100.7)
  try {
    const quoteBody = JSON.stringify({
      name: "Devendra Patel",
      phone: "+919812345678",
      email: "devendra@patelinfra.com",
      enquiryType: "construction",
      projectType: "Industrial Pre-Engineered Warehouse",
      location: "Sanand Industrial Hub, Gujarat",
      approximateArea: "75,000 sq.ft.",
      budgetRange: "₹5 Cr - ₹15 Cr",
      timeline: "6 - 9 Months",
      message: "Seeking complete civil contractor bid for PEB superstructure and flooring.",
    });
    const res = await request("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.7",
        "Content-Length": Buffer.byteLength(quoteBody).toString(),
      },
      body: quoteBody,
    });
    assert(res.statusCode === 200, "Quote API accepts valid submission with HTTP 200 OK");
    const json = JSON.parse(res.body);
    assert(
      json.success === true && json.referenceId?.startsWith("GGE-"),
      `Quote API returns confirmation reference ID: "${json.referenceId}"`
    );
  } catch (err) {
    assert(false, `Quote valid submission test failed: ${err.message}`);
  }

  console.log("\n==================================================================");
  console.log(`   QA Audit Complete: ${results.passed}/${results.total} Passed, ${results.failed} Failed, ${results.warnings} Warnings`);
  console.log("==================================================================\n");

  if (results.failed > 0) {
    process.exit(1);
  }
}

runQAAudit().catch((err) => {
  console.error("FATAL AUDIT SUITE ERROR:", err);
  process.exit(1);
});
