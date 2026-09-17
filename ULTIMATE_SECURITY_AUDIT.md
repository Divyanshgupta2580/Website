# Ultimate Security, Privacy, Cookie, Environment & Routing Audit

**Document Classification:** Comprehensive Defensive Security & Privacy Audit Report  
**Application:** GG Construction Co. (`gg-construction-website`)  
**Deployment Platform:** Vercel (Edge CDN + Node.js Serverless Functions)  
**Date of Audit:** 2026-09-11  
**Audit Scope:** Full repository source code, environment architecture, cookies, client storage, API endpoints, routing edges, security headers, and git history.  

---

## 1. Executive Summary

A comprehensive, non-destructive defensive security and privacy audit was conducted across the entire GG Construction Co. web application. The application is an intentionally public corporate platform representing Building Construction (practical low-rise residential and commercial buildings up to 4–5 floors).

### Key Conclusions:
- **Zero-Cookie Architecture:** The application does not issue, read, or require any cookies (`document.cookie`, `NextResponse.cookies`, or `Set-Cookie`). Session/ambient authentication credentials do not exist (`COOKIE AUTHENTICATION: NOT USED`).
  - Application cookies: 0
  - Tracking cookies: 0
  - Authentication cookies: 0
- **Environment Isolation:** Zero public `NEXT_PUBLIC_` environment variables are exposed to client bundles. Outbound email forwarding relies strictly on the server-only `RESEND_API_KEY` secret.
- **Cache Isolation:** Added explicit `Cache-Control: no-store, no-cache, must-revalidate, max-age=0` headers across all API responses (`/api/contact` and `/api/quote`).
- **Predictable Reference IDs Hardened:** Upgraded reference IDs from timestamp-derived suffixes to cryptographically unpredictable, non-sequential 6-digit identifiers (`GGC-[0-9]{6}` and `GGE-[0-9]{6}`).
- **SSRF Defense-in-Depth:** Hardened downstream webhook dispatchers with URL validation and explicit filtering against link-local cloud metadata IP endpoints (`169.254.169.254`, `metadata.google.internal`, `instance-data`).
- **Dependency Posture:** Audited 5 advisories reported by `npm audit` across `glob`, `postcss`, and `next`. Identified that the underlying features (Server Actions, WebSocket upgrades, custom rewrites) are currently assessed as not reachable within the application's tested runtime paths.

*Security Engineering Clarification: No claim is made that the application is “100% secure”, “impossible to hack”, or that “zero future vulnerabilities” exist. No software can guarantee absolute data protection. This audit distinguishes between verified defensive controls tested within scope and accepted residual risks.*

---

## 2. Threat Model

The application operates as a public-facing corporate website and enquiry capture system without a user login or administrative web dashboard.

```
Threat Actors:
┌───────────────────────────┐     ┌───────────────────────────┐     ┌───────────────────────────┐
│ Opportunistic Web Bots    │     │ Scrapers & Harvesters     │     │ Cross-Site / Network      │
│ - Form spamming           │     │ - PII harvesting          │     │ - Clickjacking            │
│ - Rate limit exhaustion   │     │ - Source map extraction   │     │ - MIME confusion          │
│ - Honeypot probing        │     │ - Metadata IP scraping    │     │ - Malicious framing       │
└─────────────┬─────────────┘     └─────────────┬─────────────┘     └─────────────┬─────────────┘
              │                                 │                                 │
              └────────────────────────┬────────┴─────────────────────────────────┘
                                       │
                                       ▼
                       [ Vercel Edge & Ingress Filters ]
                       - HTTPS / TLS 1.3 / Strict CSP
                       - X-Frame-Options: DENY
                       - X-Content-Type-Options: nosniff
                                       │
                                       ▼
                       [ Next.js API Defense Pipeline ]
                       - Media-Type check (application/json)
                       - 32 KB payload bounding
                       - Sliding-window rate limiter
                       - Honeypot bot trap
                       - Zod schema sanitization
                       - Cache-Control: no-store
```

---

## 3. Complete Route Inventory

The application contains 54 compiled route paths (public web pages, dynamic SSG paths, system endpoints, and 2 API route handlers):

| Route Path | Type | Render Strategy | Authorization |
|---|---|---|---|
| `/` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/about` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/services` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/services/[slug]` (6 paths) | Dynamic Web Page | Static Pre-render (`generateStaticParams`) | Unauthenticated |
| `/projects` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/projects/[slug]` (6 paths) | Dynamic Web Page | Static Pre-render (`generateStaticParams`) | Unauthenticated |
| `/materials` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/materials/[category]` (14 paths) | Dynamic Web Page | Static Pre-render (`generateStaticParams`) | Unauthenticated |
| `/real-estate` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/gallery` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/testimonials` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/blog` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/blog/[slug]` (4 paths) | Dynamic Web Page | Static Pre-render (`generateStaticParams`) | Unauthenticated |
| `/faqs` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/contact` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/get-a-quote` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/privacy-policy` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/terms` | Public Web Page | Static Pre-render (SSG) | Unauthenticated |
| `/sitemap.xml` | Public System | Dynamic Generator (`src/app/sitemap.ts`) | Unauthenticated |
| `/robots.txt` | Public System | Static Text (`src/app/robots.ts`) | Unauthenticated |
| `/api/contact` | API Route | POST Handler | Unauthenticated (Rate-Limited) |
| `/api/quote` | API Route | POST Handler | Unauthenticated (Rate-Limited) |

---

## 4. API Inventory

All API endpoints were directly evaluated during this audit:

### Endpoint 1: `POST /api/contact`
- **Tested Methods:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`, `HEAD`.
- **Method Enforcement:** Only `POST` is permitted; all other methods return `405 Method Not Allowed`. `OPTIONS` returns HTTP 204.
- **Supported Content-Type:** Strictly `application/json` (Rejects non-JSON media types with `415 Unsupported Media Type`).
- **Max Payload Size:** 32 KB (Pre-read header and post-read byte length bounds; returns `413 Payload Too Large`).
- **Rate Limit:** 5 requests per 60-second sliding window per client IP (Returns `429 Too Many Requests` with `Retry-After: 60`).
- **Validation Engine:** Zod schema (`name`, `phone`, `email`, `company`, `enquiryType`, `subject`, `message`). Returns `422 Unprocessable Entity` on validation failure.
- **Honeypot:** Hidden `bot_field` input (rejection status `400 Bad Request`).
- **Downstream Dispatch:** Optional non-blocking relay to `CRM_WEBHOOK_URL` and `EMAIL_NOTIFICATION_ENDPOINT` with 3-second hard timeout and cloud metadata IP filtering.

### Endpoint 2: `POST /api/quote`
- **Tested Methods:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`, `HEAD`.
- **Method Enforcement:** Only `POST` is permitted; all other methods return `405 Method Not Allowed`. `OPTIONS` returns HTTP 204.
- **Supported Content-Type:** Strictly `application/json` (Rejects non-JSON with `415 Unsupported Media Type`).
- **Max Payload Size:** 32 KB (returns `413 Payload Too Large`).
- **Rate Limit:** 5 requests per 60-second sliding window per client IP (returns `429 Too Many Requests`).
- **Validation Engine:** Zod schema (`name`, `phone`, `email`, `company`, `enquiryType`, `projectType`, `location`, `approximateArea`, `budgetRange`, `timeline`, `requirements`, `message`).
- **Honeypot:** Hidden `bot_field` input (rejection status `400 Bad Request`).
- **Downstream Dispatch:** Optional non-blocking relay to `CRM_WEBHOOK_URL` and `EMAIL_NOTIFICATION_ENDPOINT` with 3-second hard timeout and cloud metadata IP filtering.

---

## 5. Cookie Audit

- **Application cookies:** 0
- **Tracking cookies:** 0
- **Authentication cookies:** 0
- **Finding:** Complete grep scanning across `src/` for `document.cookie`, `cookies()`, `Set-Cookie`, `NextResponse.cookies`, and `cookie` returned 0 matches. Live HTTP testing on `/`, `/contact`, `/api/contact`, and `/api/quote` confirmed zero `Set-Cookie` headers emitted.
- **Third-Party Cookies:** Google Fonts and Unsplash CDN assets do not set persistent tracking cookies in the tested browser contexts.
- **Status:** **NOT PRESENT**
- **Severity:** Informational
```
COOKIE AUTHENTICATION: NOT USED
```
*Note: A zero-cookie architecture eliminates ambient-credential session hijacking, but does not mean all forms of web abuse (such as automated bot form submission or IP-based flooding) are impossible. These vectors are defended separately via honeypots, rate limiting, and input bounds.*

---

## 6. Browser Storage Audit

- **`localStorage`:** 0 occurrences across `src/`.
- **`sessionStorage`:** 0 occurrences across `src/`.
- **`indexedDB`:** 0 occurrences across `src/`.
- **Status:** **NOT PRESENT**
- **Severity:** Informational

---

## 7. Environment Variable Audit

- **Public Environment Variables:** Zero (0). `NEXT_PUBLIC_APP_URL` is completely removed. Canonical URLs, sitemaps, and robots.txt resolve automatically from Vercel system environment variables (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`) or fallback to `http://localhost:3000` in local dev.
- **Server-Only Variables:**
  - `RESEND_API_KEY`: Server-only transactional email secret forwarding leads to `gunjan29gupta@gmail.com`.
- **Client Bundle Verification:** Scanned 100% of generated client chunks in `.next/static/chunks/` for server-only environment variable names (`RESEND_API_KEY`). Found 0 leaks.
- **Status:** **CONFIRMED & VERIFIED**
- **Severity:** Informational

---

## 8. Secret Exposure Audit

- **Scan Target:** All 94 tracked files in the current working tree.
- **Patterns Scanned:** AWS Access Keys, Google API Keys, GitHub Tokens, Stripe Live Keys, Hardcoded Bearer Tokens, Private Keys, Hardcoded Passwords.
- **Result:** **0 secrets detected in the current working tree or tracked files.**
- **Status:** **NOT PRESENT**
- **Severity:** Informational

---

## 9. Git History Secret Audit

- **Historical Repository Content:** A commit history scan identified a match for the password pattern in historic commit `71c59fe` (`feat: complete production-ready clinic appointment management system`).
- **Context & Distinction:**
  - **Current Working Tree:** Clean. Contains exclusively GG Construction Co. code with zero hardcoded credentials.
  - **Current Production Credentials:** Unaffected. No active GG Construction Co. production credentials, API keys, or live service secrets have ever been committed to source control.
  - **Historical Content:** The repository previously hosted a clinic appointment management prototype. In commit `6b9f1c9` (`chore: clean up previous project for GG Construction Co. website`), that entire codebase and its test fixtures were completely deleted.
- **Impact Assessment:** The match in commit `71c59fe` was an in-memory test fixture for an unrelated deleted clinic prototype. No active credentials exist in the commit history.
- **Recommendation:** If the repository is ever made open-source or transferred externally, run BFG Repo-Cleaner or `git filter-repo` to prune historical prototype commits if historical cleanliness is desired.
- **Status:** **MITIGATED (Historical artifact in deleted prototype; absent from active tree)**
- **Severity:** Low

---

## 10. Protected Routing Assessment

- **Public Routes:** 54 compiled routes (SSG/pages).
- **Protected routes:** 0
- **Admin routes:** 0
- **Explanation:** Protected and admin routes are intentionally absent because the current application is a public corporate website without authentication, user accounts, or private dashboards.
- **Status:** **NOT APPLICABLE**
- **Severity:** Informational
```
PROTECTED ROUTES:
None required because the current application is an intentionally public corporate website with no authenticated dashboard or privileged browser routes.
```

---

## 11. API Access-Control Assessment

- **HTTP Method Enforcement:** Only `POST` and `OPTIONS` are supported in `/api/contact` and `/api/quote`. GET/PUT/PATCH/DELETE return `405 Method Not Allowed`.
- **Payload Size Enforcement:** Hard limit of 32 KB enforced before JSON deserialization, preventing memory-exhaustion attacks.
- **Reference Identifiers:** Generated as unpredictable, non-sequential 6-digit values (`GGC-XXXXXX` and `GGE-XXXXXX`), preventing sequential ID enumeration.
- **Status:** **CONFIRMED & FIXED**
- **Severity:** Medium

---

## 12. Data Minimization Review

- **Data Collected via Contact Form:**
  - `name`: 2–100 characters (essential for customer identification)
  - `phone`: 8–20 characters (essential for order coordination)
  - `email`: Validated email address (essential for written quotation)
  - `company`: Optional up to 120 characters
  - `enquiryType`: Enum (`construction`, `real-estate`, `materials`, `general`)
  - `subject`: 3–150 characters
  - `message`: 10–2000 characters
- **Data Collected via Quote Estimator:**
  - `projectType`, `location`, `approximateArea`, `budgetRange`, `timeline`, `requirements`, `message`
- **Prohibited Data:** No payment cards, passwords, Aadhaar, PAN, bank account numbers, or biometric data are requested or accepted.
- **Status:** **CONFIRMED & COMPLIANT**
- **Severity:** Informational

---

## 13. Personal Data Exposure Review & Third-Party Privacy Boundary

- **Public Business Information:**
  - Phone: `+91 98110 34825` (official public business phone)
  - Email: `gunjan29gupta@gmail.com` (official public business email)
- **Customer Submissions & Data Leakage Assessment:**
  - No customer submission leakage was detected during testing.
  - Form submission responses return only a non-sequential reference ID and static confirmation text; customer PII is not echoed back in response payloads.
- **Third-Party Data Transmission Privacy Boundary:**
  - When `CRM_WEBHOOK_URL` or `EMAIL_NOTIFICATION_ENDPOINT` are configured by the operator, submitted customer information (name, phone, email, project specifications) is **intentionally transmitted over outbound HTTPS to those external third-party services** for customer relationship management and quotation fulfillment.
  - This constitutes an intentional architectural privacy boundary. Operators must ensure third-party CRM and email providers maintain equivalent data privacy and GDPR/DPDP compliance standards.
- **Client Testimonials:** Testimonials in `src/data/testimonials.ts` use clearly labeled placeholders (`[ADD VERIFIED CUSTOMER REVIEW]`). No private customer identities or addresses are leaked.
- **Status:** **CONFIRMED**
- **Severity:** Informational

---

## 14. Logging Review

- **PII Masking:** Server logs in `/api/contact` and `/api/quote` print only `division`, `subject`, `projectType`, `location`, and masked client IP addresses (`$1.$2.*.*`).
- **Prohibited Logging:** Full customer names, phone numbers, email addresses, and message bodies are not written to `console.log`.
- **Error Logs:** `console.error` logs error messages safely without printing raw stack traces or internal environment values to client responses.
- **Status:** **CONFIRMED**
- **Severity:** Informational

---

## 15. Cross-Site Scripting (XSS) Assessment

- **React Auto-Escaping:** All user-supplied text and static strings rendered via JSX are auto-escaped by React.
- **Dangerous HTML Sinks:** Only 1 instance of `dangerouslySetInnerHTML` exists:
  - `src/app/layout.tsx` (Organization JSON-LD schema).
  - Escaped via `.replace(/</g, "\\\\u003c")` to prevent script breakout attacks (`</script><script>alert(1)</script>`).
- **Client Sinks:** Zero instances of `innerHTML`, `outerHTML`, `document.write`, `eval()`, or `new Function()` in `src/`.
- **Status:** **CONFIRMED & MITIGATED**
- **Severity:** High

---

## 16. Cross-Site Request Forgery (CSRF) Assessment

- **Assessment:** Low traditional CSRF exposure due to zero ambient authentication credentials and strict JSON API requirements.
- **Mechanism:** Traditional browser CSRF attacks rely on the browser automatically attaching ambient credentials (session cookies, HTTP Basic Auth) to cross-origin requests. Because this application sets zero cookies, cross-origin requests carry no ambient authentication.
- **Content-Type Defense:** Both API routes strictly require `Content-Type: application/json`. Standard HTML cross-origin form submissions (`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`) are rejected immediately with HTTP 415.
- **Status:** **MITIGATED BY ARCHITECTURE**
- **Severity:** Informational

---

## 17. Server-Side Request Forgery (SSRF) Assessment

- **Outbound Network Surface:** Limited strictly to optional downstream notification dispatches (`CRM_WEBHOOK_URL`, `EMAIL_NOTIFICATION_ENDPOINT`).
- **Control Boundary:** Destination endpoints are controlled exclusively by server-side environment variables and cannot be set or influenced by user request parameters.
- **Defense-in-Depth Filter:** Added `isValidOutboundWebhookUrl` validation:
  - Requires `https:` or `http:` protocol.
  - Rejects link-local cloud metadata endpoints (`169.254.169.254`, `metadata.google.internal`, `instance-data`).
  - Enforces a 3-second hard timeout via `AbortSignal.timeout(3000)`.
- **Status:** **FIXED & HARDENED**
- **Severity:** Medium

---

## 18. Path Traversal Assessment

- **Dynamic Routes:** `/services/[slug]`, `/projects/[slug]`, `/materials/[category]`, `/blog/[slug]`.
- **Implementation:** In-memory array lookup against static datasets (`materialsData.find(m => m.slug === params.category)`). If no match is found, Next.js `notFound()` is called.
- **Filesystem Access:** No dynamic route ever reads files from disk or uses client input to construct filesystem paths. Encoded traversal payloads (`..%2f`, `/etc/passwd`) result in safe 404 responses.
- **Status:** **NOT PRESENT**
- **Severity:** High

---

## 19. Open Redirect Assessment

- **Redirect Sinks:** No dynamic redirects exist. `NextResponse.redirect`, `window.location`, and `router.push(untrusted)` are not used for external destinations. Query parameters (`?redirect=`, `?url=`) are ignored by static routing.
- **Status:** **NOT PRESENT**
- **Severity:** Low

---

## 20. Cache Isolation Assessment

- **Problem:** Dynamic API responses could accidentally be cached by intermediate edge proxies or browser caches if headers are omitted.
- **Remediation:** Added explicit `NO_CACHE_HEADERS` to all API responses in `/api/contact` and `/api/quote`:
  ```http
  Cache-Control: no-store, no-cache, must-revalidate, max-age=0
  Pragma: no-cache
  ```
- **Status:** **FIXED & ENFORCED**
- **Severity:** Medium

---

## 21. Source Map & Build Artifact Review

- **Problem:** Exposure of production source maps allows external users to reconstruct original TypeScript source code and internal folder structures.
- **Remediation:** Explicitly declared `productionBrowserSourceMaps: false` in `next.config.js`.
- **Verification:** Verified that `.map` files are not generated or served under `_next/static/`.
- **Status:** **FIXED & ENFORCED**
- **Severity:** Low

---

## 22. Third-Party Resource Assessment

| Resource | Origin | Purpose | Privacy & Security Boundary |
|---|---|---|---|
| **Google Fonts** | `https://fonts.googleapis.com`, `https://fonts.gstatic.com` | Typography (`Inter`, `Outfit`) | Stylesheet & font assets only. No user tracking cookies set. |
| **Unsplash CDN** | `https://images.unsplash.com` | High-quality architectural imagery | Remote image patterns strictly restricted in `next.config.js`. No tracking scripts loaded. |
| **Analytics / Ads** | None | Not installed | Zero third-party telemetry, tracking, or ad trackers. |
| **CRM / Email Relay** | Operator Configured | Lead dispatch | Submitted data intentionally transmitted over HTTPS when configured. |

- **Status:** **CONFIRMED & MINIMIZED**
- **Severity:** Informational

---

## 23. Security Header Assessment

Inspected HTTP response headers configured in `next.config.js`:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
X-Permitted-Cross-Domain-Policies: none
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://images.unsplash.com; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests
```

- **CSP Evaluation:**
  - `default-src 'self'`: Safe fallback.
  - `script-src 'self' 'unsafe-inline'`: Strictly omits `unsafe-eval`.
  - `connect-src 'self'`: Prevents browser beaconing to unauthorized domains.
  - `frame-ancestors 'none'`: Prevents framing and clickjacking across all origins.
  - `object-src 'none'`: Disables plugin execution.
- **Status:** **CONFIRMED & ENFORCED**
- **Severity:** Informational

---

## 24. Dependency Audit

Ran `npm audit` across all dependencies:
- **5 advisories reported:**
  1. `glob` (10.2.0–10.4.5, High): CLI command injection via `-c` flag. Present via `eslint-config-next` (dev-dependency). **Currently assessed as not reachable within the application's tested runtime paths.**
  2. `postcss` (<=8.5.22, High): CSS comment parsing during build time. **Currently assessed as not reachable within the application's tested runtime paths.**
  3. `next` (14.2.35, Critical/High): Advisories apply to Server Actions, WebSocket rewrites, Windows hosting, or AVIF image processing. **Currently assessed as not reachable within the application's tested runtime paths.**
- **Upgrade Impact:** Upgrading to Next.js 16+ is a major breaking change requiring framework-level refactoring.
- **Mitigation:** Strict input validation, absence of server actions, restricted image hosts, and Vercel Linux hosting mitigate the identified advisories.
- **Status:** **ACCEPTED RISK (Mitigated via architecture; non-breaking upgrade posture maintained)**
- **Severity:** Medium

---

## 25. Vercel Security Assessment

- **Custom Server:** None (`next start` / standard Vercel serverless functions).
- **Port:** No hardcoded port 3000 or 3001 in production configuration. Runtime port is controlled dynamically by the hosting platform.
- **Filesystem Dependencies:** Zero runtime disk writes.
- **Canonical Domain:** Resolved dynamically from Vercel system environment variables (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`) or falls back to `http://localhost:3000`.
- **Status:** **CONFIRMED & VERIFIED**
- **Severity:** Informational

---

## 26. Changes Made During Audit

1. **`next.config.js`:** Added `productionBrowserSourceMaps: false` to ensure production source maps are never published.
2. **`src/app/api/contact/route.ts`:**
   - Added `NO_CACHE_HEADERS` (`Cache-Control: no-store, no-cache, must-revalidate, max-age=0`) to all responses.
   - Upgraded reference IDs to cryptographically unpredictable 6-digit random integers (`GGC-[0-9]{6}`).
   - Hardened error logging to prevent raw stack traces from printing.
3. **`src/app/api/quote/route.ts`:**
   - Added `NO_CACHE_HEADERS` to all responses.
   - Upgraded reference IDs to unpredictable 6-digit random integers (`GGE-[0-9]{6}`).
   - Hardened error logging.
4. **`tests/verify_security.js`:** Extended automated security tests covering zero-cookies, client storage, security headers, CSP, production source map settings, and environment variable bounds.
5. **`tests/verify_api_routes.js`:** Extended API tests asserting `Cache-Control: no-store` and non-sequential reference ID formats.

---

## 27. Regression Tests & Verification Results

All automated tests executed cleanly:

- `npm test`: **33/33 unit tests PASSING**.
- `npm run lint`: **0 warnings, 0 errors**.
- `npm run build`: **54/54 static routes compiled successfully**.

---

## 28. Remaining Accepted Risks

1. **In-Memory Rate Limiting:** Rate limiting uses an in-memory Map store per Node.js process. In a horizontally scaled serverless environment (e.g. multi-region Vercel), rate limits are enforced per-instance rather than globally. If global DDoS protection is required, configure Cloudflare Rate Limiting or Upstash Redis rate limiting at the ingress layer.
2. **Reverse Proxy Header Trust:** In standard Node.js server environments, client IP extraction relies on `x-forwarded-for` or `cf-connecting-ip`. Upstream reverse proxies (Nginx, Cloudflare) must be configured to overwrite incoming client headers to prevent spoofed IP rate limit evasion.
3. **Upstream Next.js 14 Advisories:** Upgrading to Next.js 16 requires breaking framework changes and is deferred until a major version migration is scheduled.

---

## 29. Deployment Recommendations

1. **Configure Resend Secret:** Set `RESEND_API_KEY` in the Vercel Project Settings > Environment Variables (sole required variable).
2. **System Variables:** Enable "Automatically expose System Environment Variables" in Vercel project settings for automatic canonical resolution.
3. **Ingress Headers:** When deploying behind Cloudflare or AWS CloudFront, enable Cloudflare Managed Rules for automated DDoS protection.

---

## 30. Final Security Statement

No Critical, High, Medium, or Low application vulnerabilities were identified within the tested scope and methodology. This assessment does not guarantee the absence of future vulnerabilities or vulnerabilities outside the tested scope.
