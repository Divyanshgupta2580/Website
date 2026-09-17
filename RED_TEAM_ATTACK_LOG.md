# GG Construction Co. — Red Team Adversarial Attack Log

**Target Server:** `http://localhost:3000` (Local Next.js Production Server)  
**Assessment Date:** 2026-09-11  
**Lead Security Auditor:** Antigravity Autonomous Security Subagent  
**Scope:** Controlled, non-destructive adversarial testing against GG Construction Co. corporate web application  

---

## Attack ID: RT-001

Attack: SQL Injection via Contact and Quote Form Inputs  
Attack category: SQL Injection  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Injected harmless SQL test probes (`' OR '1'='1'`, `' UNION SELECT null--`, `admin'--`, `1' OR 1=1--`) into `name`, `subject`, and `message` parameters.  
Expected defense: The application must not execute dynamic SQL queries or leak database syntax errors.  
Observed response: HTTP 200 (for valid length strings) or HTTP 422 (for schema bounds violations). Input treated strictly as plain text without interpretation.  
Evidence: Server responded: `{"success":true,"message":"...","referenceId":"GGC-554374"}`. Zero SQL errors, zero database driver calls.  
Result: DEFENDED  
Security control: Zero-database architecture. Application utilizes typed static data structures; input strings are validated by Zod and never passed to a SQL interpreter.  
Severity: Informational  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 6, Assertion: Injection Vector Neutralization).  

---

## Attack ID: RT-002

Attack: Stored and Reflected XSS via Form Submissions  
Attack category: Cross-Site Scripting (XSS)  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Injected classic XSS vectors: `<script>alert(1)</script>`, `"><img src=x onerror=alert(1)>`, `</textarea><script>alert(1)</script>`, `javascript:alert(1)`.  
Expected defense: Inputs must not be reflected into executable HTML or script contexts.  
Observed response: Payloads accepted safely with HTTP 200. The API response returns only a generated non-sequential `referenceId` and static confirmation message. Submitted fields are never echoed back in HTML or JSON.  
Evidence: Response body: `{"success":true,"message":"...","referenceId":"GGC-XXXXXX"}`. Zero reflection of submitted script tags.  
Result: DEFENDED  
Security control: Complete separation of input data from API response payloads. React JSX automatic contextual escaping on all frontend views.  
Severity: Informational  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 5, Assertion: XSS & Script Injection Neutralization).  

---

## Attack ID: RT-003

Attack: JSON-LD Script Breakout Injection  
Attack category: DOM-based / Document Injection  
Target: `GET /` (Homepage HTML structured data block)  
Input / technique: Evaluated whether `<script type="application/ld+json">` contains unescaped closing tags (`</script>`) or raw user input that could break out into executable JavaScript.  
Expected defense: Left angle brackets `<` inside JSON-LD blocks must be escaped as unicode `\u003c`.  
Observed response: HTML inspection confirms `\u003c` escaping applied across the serialized JSON-LD block.  
Evidence: `layout.tsx` executes `JSON.stringify(organizationSchema).replace(/</g, "\\\\u003c")`. HTML output contains no unescaped `</script>` tags within the payload.  
Result: DEFENDED  
Security control: Unicode left angle bracket regex replacement (`replace(/</g, "\\\\u003c")`) in `src/app/layout.tsx`.  
Severity: Low  
Remediation: None required.  
Regression test: `tests/verify_security.js` (Section 2) & `tests/security-redteam.js` (Section 5).  

---

## Attack ID: RT-004

Attack: Operating System Command Injection  
Attack category: Command Injection  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Injected shell metacharacters and command execution syntax: `; id; whoami`, `$(whoami)`, `` `id` ``, `| cat /etc/passwd`.  
Expected defense: Operating system commands must not be passed to a system shell or executed.  
Observed response: Strings treated as raw text. Valid schema lengths return HTTP 200 with normal lead reference IDs. Zero OS processes spawned.  
Evidence: Static analysis confirms zero occurrences of `child_process`, `exec`, `execFile`, or `spawn` in the entire application.  
Result: DEFENDED  
Security control: Absence of OS execution interfaces. Pure serverless Node.js runtime functions with strict input typing.  
Severity: Informational  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 6, Assertion: Injection Vector Neutralization).  

---

## Attack ID: RT-005

Attack: Server-Side Request Forgery (SSRF) via Webhook and Downstream Endpoints  
Attack category: SSRF  
Target: Outbound integration dispatchers (`CRM_WEBHOOK_URL`, `EMAIL_NOTIFICATION_ENDPOINT`)  
Input / technique: Analyzed whether attacker-controlled parameters or malicious environment variables could force outbound requests to cloud metadata services (`http://169.254.169.254/`, `http://metadata.google.internal/`, `http://instance-data/`).  
Expected defense: User input must not control outbound destination URLs. Outbound endpoints must validate protocols and prohibit link-local / cloud metadata hostnames.  
Observed response: User input is solely serialized as JSON payload. The outbound destination is exclusively sourced from trusted server environment variables. `isValidOutboundWebhookUrl()` explicitly validates protocol (`https:` or `http:`) and denies `169.254.169.254`, `metadata.google.internal`, and `instance-data`.  
Evidence: `isValidOutboundWebhookUrl()` unit test passed; zero user parameters reach fetch URL string.  
Result: DEFENDED  
Security control: Server-side environment variable gating + URL protocol & cloud metadata host filter in `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts`.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 19, Assertion: SSRF Webhook Target Filter Validation).  

---

## Attack ID: RT-006

Attack: Dynamic Route Path Traversal  
Attack category: Path Traversal  
Target: Dynamic routes: `/blog/[slug]`, `/projects/[slug]`, `/services/[slug]`, `/materials/[category]`  
Input / technique: Requested path traversal sequences: `/blog/..%2f..%2fetc%2fpasswd`, `/projects/..../..../etc/passwd`, `/services/%2e%2e%2fpackage.json`, `/materials/non-existent-category-traversal`.  
Expected defense: Traversal sequences must not access local filesystem files and must return HTTP 404.  
Observed response: HTTP 404 Not Found returned for all traversal probes.  
Evidence: Server responded with standard Next.js 404 page. Dynamic route handlers use in-memory `.find()` on static TypeScript datasets; missing slugs trigger `notFound()`.  
Result: DEFENDED  
Security control: Static Site Generation (SSG) with in-memory lookup and `notFound()` trigger. No dynamic filesystem reads.  
Severity: High  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 7, Assertion: Dynamic Route Traversal Testing).  

---

## Attack ID: RT-007

Attack: Direct HTTP Local File and Configuration Disclosure  
Attack category: Information Disclosure  
Target: System paths: `/.env`, `/.env.local`, `/.env.production`, `/package.json`, `/tsconfig.json`, `/next.config.js`  
Input / technique: Sent direct GET requests to server root configuration and environment filenames.  
Expected defense: Non-public system and configuration files must not be served by the web server.  
Observed response: HTTP 404 returned for all system file requests.  
Evidence: All requests yielded HTTP 404. Next.js production server serves assets exclusively from `.next/static` and `public/`.  
Result: DEFENDED  
Security control: Next.js static asset serving isolation.  
Severity: Critical  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 14, Assertion: Local File & Source Disclosure Probes).  

---

## Attack ID: RT-008

Attack: Environment Variable and Server Secret Leakage  
Attack category: Information Disclosure  
Target: Production client bundles and API responses  
Input / technique: Scanned compiled client bundles (`.next/static/**/*.js`) and tested API responses for secrets (`CRM_API_BEARER_TOKEN`, `EMAIL_SERVICE_KEY`, `CRM_WEBHOOK_URL`, `EMAIL_NOTIFICATION_ENDPOINT`).  
Expected defense: Server secrets must remain exclusively on the server runtime and never be bundled into client JavaScript.  
Observed response: Zero server-only environment variable identifiers or credential signatures found in any client bundle. Zero public environment variables are exposed to browser bundles.
Evidence: Bundle scanner in `tests/security-redteam.js` verified 0 secret signatures across all JavaScript chunks.  
Result: DEFENDED  
Security control: Next.js build-time environment variable encapsulation; strict reservation of `NEXT_PUBLIC_` prefix for non-sensitive public configuration.  
Severity: Critical  
Remediation: None required.  
Regression test: `tests/verify_security.js` (Section 7) & `tests/security-redteam.js` (Section 20).  

---

## Attack ID: RT-009

Attack: Git Metadata and Production Source Map Exposure  
Attack category: Information Disclosure  
Target: `/.git/config`, `/.git/HEAD`, `/_next/static/chunks/*.map`, `/*.map`  
Input / technique: Sent HTTP requests for Git version control metadata and client-side JavaScript source maps.  
Expected defense: Git directories and development source maps must return HTTP 404 in production.  
Observed response: HTTP 404 returned for all Git paths and source map requests. `find .next/static -name "*.map"` returned zero files.  
Evidence: `next.config.js` has `productionBrowserSourceMaps: false`. Direct HTTP probes for `.map` returned 404.  
Result: DEFENDED  
Security control: `productionBrowserSourceMaps: false` in `next.config.js` and public folder isolation.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 14 & Section 20).  

---

## Attack ID: RT-010

Attack: Authentication & Administrative Route Bypass  
Attack category: Authentication Bypass  
Target: Privileged routes / dashboards  
Input / technique: Probed for administrative paths (`/admin`, `/dashboard`, `/login`, `/portal`).  
Expected defense: If administrative interfaces exist, they must enforce strict authentication. If not, they must return HTTP 404.  
Observed response: HTTP 404 returned for all probed administrative paths.  
Evidence: Application inventory confirms zero authenticated or administrative routes exist. The site is an intentionally public informational catalog.  
Result: NOT APPLICABLE  
Security control: Zero-administrative-route architecture.  
Severity: Informational  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 1).  

---

## Attack ID: RT-011

Attack: Authorization & Insecure Direct Object References (IDOR)  
Attack category: Broken Object Level Authorization  
Target: Enquiry reference IDs (`GGC-XXXXXX`, `GGE-XXXXXX`)  
Input / technique: Analyzed whether reference IDs returned upon submission are sequential or can be queried via API to retrieve private customer submission details.  
Expected defense: Reference IDs must be unpredictable and non-sequential; no endpoint should allow querying past submissions by ID.  
Observed response: Reference IDs are generated using non-sequential random 6-digit integers. There is no query endpoint or database lookup for past submissions.  
Evidence: Regex test confirms `^GGC-\d{6}$` and `^GGE-\d{6}$` random generation. Zero read endpoints exist for submissions.  
Result: DEFENDED  
Security control: Cryptographically unpredictable random suffix generation + zero query endpoints.  
Severity: Low  
Remediation: None required.  
Regression test: `tests/verify_api_routes.js` & `tests/security-redteam.js` (Section 18).  

---

## Attack ID: RT-012

Attack: Cross-Site Request Forgery (CSRF) on Form Submissions  
Attack category: CSRF  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Evaluated whether cross-origin sites could forge submissions using standard HTML forms (`<form action="...">`) or credentialed browser requests.  
Expected defense: Low traditional CSRF exposure due to zero ambient authentication credentials and strict JSON API requirements.  
Observed response: Both endpoints strictly enforce `Content-Type: application/json`. Standard form submissions (`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`) return HTTP 415. The application sets zero ambient cookies.  
Evidence: Tests with `application/x-www-form-urlencoded` and `text/plain` returned HTTP 415. `Set-Cookie` header is never emitted.  
Result: DEFENDED  
Security control: Low traditional CSRF exposure due to zero ambient authentication credentials and strict JSON API requirements.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 3).  

---

## Attack ID: RT-013

Attack: Cross-Origin Resource Sharing (CORS) Misconfiguration  
Attack category: CORS  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Sent requests with untrusted `Origin: https://evil.example.com` and `Origin: null`.  
Expected defense: API endpoints must not return `Access-Control-Allow-Origin: *` or reflect arbitrary origins with credentials.  
Observed response: Responses completely omit `Access-Control-Allow-Origin` and `Access-Control-Allow-Credentials`.  
Evidence: `assert(!corsRes.headers["access-control-allow-origin"])` passed.  
Result: DEFENDED  
Security control: Next.js default strict cross-origin isolation.  
Severity: Low  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 8).  

---

## Attack ID: RT-014

Attack: Host Header and Forwarded Header Injection  
Attack category: Host Header Poisoning  
Target: Global request routing, canonical URLs, and rate limiter client identification  
Input / technique: Injected spoofed headers: `Host: attacker.example.com`, `X-Forwarded-Host: attacker.example.com`, and malformed `X-Forwarded-For: 999.999.999.999`, `X-Forwarded-For: <script>`.  
Expected defense: Canonical URLs must not be constructed from client-controlled `Host` headers. Client IP resolution must validate IP formats to prevent map key poisoning or rate-limiting bypass.  
Observed response: Canonical URLs are resolved strictly from platform environment variables (`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`) and localhost fallback. `getClientIp()` validates IPv4 and IPv6 syntax via regex; invalid octets or poisoned strings default safely to `127.0.0.1`.  
Evidence: `tests/verify_security.js` (Section 4) & `tests/security-redteam.js` (Section 9).  
Result: DEFENDED  
Security control: Static `getBaseUrl()` canonicalization + `isValidIp()` validation in `src/lib/rate-limit.ts`.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 9, Assertion: Invalid IP string rejected).  

---

## Attack ID: RT-015

Attack: API Rate Limiting Evasion  
Attack category: Abuse & Denial of Service  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Sent bursts of requests from a single client IP to test rate-limiting thresholds and window resets.  
Expected defense: The server must throttle requests exceeding 5 per minute per IP, returning HTTP 429 and `Retry-After`.  
Observed response: Requests 1 to 5 succeeded (or returned 422 schema status). Request 6 returned HTTP 429 Too Many Requests with `Retry-After: 60` and `X-RateLimit-Remaining: 0`.  
Evidence: Throttled response: `{"success":false,"error":"Too many requests...","retryAfter":60}`.  
Result: DEFENDED  
Security control: Sliding-window memory-safe rate limiter with periodic cleanup and store bounds (`MAX_STORE_ENTRIES = 10000`).  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 9) & `tests/verify_security.js` (Section 1).  

---

## Attack ID: RT-016

Attack: Request Payload Oversizing and Memory Exhaustion  
Attack category: Resource Exhaustion  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Submitted oversized JSON payloads (>33 KB) to test memory exhaustion defenses.  
Expected defense: Payloads exceeding the 32 KB limit must be rejected immediately with HTTP 413 Payload Too Large.  
Observed response: HTTP 413 returned with `{"success":false,"error":"Payload Too Large: Submission exceeds 32 KB limit."}`.  
Evidence: Content-Length and Buffer.byteLength checks triggered before parsing full object tree.  
Result: DEFENDED  
Security control: 32 KB payload bounds check in `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts`.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 10).  

---

## Attack ID: RT-017

Attack: HTTP Method Confusion and Unsupported Verb Fuzzing  
Attack category: Method Confusion  
Target: `GET`, `PUT`, `PATCH`, `DELETE`, `HEAD` on `/api/contact` and `/api/quote`  
Input / technique: Dispatched disallowed HTTP methods against API mutation routes.  
Expected defense: Mutation routes must strictly permit only `POST` and `OPTIONS`. All other methods must return HTTP 405 Method Not Allowed.  
Observed response: `GET`, `PUT`, `PATCH`, `DELETE` returned HTTP 405. `OPTIONS` returned HTTP 204 with `Allow: OPTIONS, POST`.  
Evidence: All 8 method tests across both endpoints returned exact HTTP 405 status codes.  
Result: DEFENDED  
Security control: Next.js App Router export enforcement (only `POST` exported in `route.ts`).  
Severity: Low  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 2).  

---

## Attack ID: RT-018

Attack: MIME & Content-Type Confusion  
Attack category: Input Validation  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Tested spoofed media types: `text/plain`, `application/x-www-form-urlencoded`, `multipart/form-data`, `application/xml`, and malformed compound headers.  
Expected defense: The server must reject any request whose media type is not `application/json` with HTTP 415.  
Observed response: All non-JSON media types returned HTTP 415 Unsupported Media Type. `application/json; charset=utf-8` was accepted for parsing.  
Evidence: 12 tests across both endpoints confirmed HTTP 415 rejection.  
Result: DEFENDED  
Security control: Strict Content-Type mediaType parsing (`request.headers.get("content-type")`).  
Severity: Low  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 3).  

---

## Attack ID: RT-019

Attack: Prototype Pollution via JSON Object Deserialization  
Attack category: Prototype Pollution  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Submitted JSON objects with dangerous keys: `{"__proto__": {"polluted": true}, "constructor": {"prototype": {"polluted": true}}}`.  
Expected defense: Deserialized keys must not pollute the global `Object.prototype`.  
Observed response: Payload processed safely by Zod schema; `({}).polluted` remained `undefined`.  
Evidence: Assertion `assert(({}).polluted === undefined)` passed. No unsafe deep object merging exists in the application.  
Result: DEFENDED  
Security control: Zod schema validation (whitelists and trims expected schema properties) and absence of unsafe recursive object merging.  
Severity: High  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 15).  

---

## Attack ID: RT-020

Attack: Open Redirect via Query Parameter Manipulation  
Attack category: Open Redirect  
Target: `/?redirect=https://evil.example.com`, `/?url=https://evil.example.com`, `/contact?returnTo=//evil.example.com`  
Input / technique: Tested whether query parameters could cause the server or client router to redirect to an external domain.  
Expected defense: User-supplied parameters must not influence HTTP redirect locations.  
Observed response: Server returned static page content with HTTP 200 OK. No `Location` header was emitted; client router did not navigate.  
Evidence: Response status 200; `Location` header undefined.  
Result: DEFENDED  
Security control: Static routing architecture; complete absence of `NextResponse.redirect()` or `window.location` assignment from query parameters.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 17).  

---

## Attack ID: RT-021

Attack: Clickjacking and Frame Embedding  
Attack category: UI Redressing / Clickjacking  
Target: All public HTML pages (`/`, `/contact`, `/materials`, `/projects`, `/about`)  
Input / technique: Tested whether the site can be embedded inside an `<iframe>` on an arbitrary external domain.  
Expected defense: The application must deliver `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`.  
Observed response: All responses contain `X-Frame-Options: DENY` and `Content-Security-Policy: ... frame-ancestors 'none'`.  
Evidence: Header audit confirmed both directives on root and subpage responses.  
Result: DEFENDED  
Security control: Global security headers configured in `next.config.js`.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 12).  

---

## Attack ID: RT-022

Attack: Security Header Policy Compliance & CSP Evaluation  
Attack category: Security Misconfiguration  
Target: All HTTP responses  
Input / technique: Evaluated completeness and rigor of security headers: CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Permitted-Cross-Domain-Policies.  
Expected defense: Modern defensive security headers must be enforced. CSP must omit `'unsafe-eval'`.  
Observed response:  
- `Content-Security-Policy`: enforces `default-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, strictly omits `'unsafe-eval'`  
- `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`  
- `X-Frame-Options`: `DENY`  
- `X-Content-Type-Options`: `nosniff`  
- `Referrer-Policy`: `strict-origin-when-cross-origin`  
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=(), browsing-topics=()`  
- `X-Permitted-Cross-Domain-Policies`: `none`  
Evidence: Header assertions in `tests/security-redteam.js` passed with 100% compliance.  
Result: DEFENDED  
Security control: Hardened `securityHeaders` configuration in `next.config.js`.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/verify_security.js` (Section 6) & `tests/security-redteam.js` (Section 12).  

---

## Attack ID: RT-023

Attack: Cache Poisoning and Public Data Exposure  
Attack category: Cache Deception & Poisoning  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Evaluated whether customer enquiry data or reference IDs could be cached by upstream intermediate caches, reverse proxies, or browser storage.  
Expected defense: API responses must strictly enforce `Cache-Control: no-store` and `Pragma: no-cache`.  
Observed response: Every API response (200, 400, 413, 415, 422, 429, 500) includes `Cache-Control: no-store, no-cache, must-revalidate, max-age=0` and `Pragma: no-cache`.  
Evidence: Verified on live HTTP responses across both endpoints.  
Result: DEFENDED  
Security control: `NO_CACHE_HEADERS` attached to every `NextResponse.json()` in API route handlers.  
Severity: High  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 16).  

---

## Attack ID: RT-024

Attack: Information Disclosure via Forced Server Errors  
Attack category: Information Disclosure  
Target: `POST /api/contact`, `POST /api/quote`, `GET /unknown-route`  
Input / technique: Intentionally caused server-side error states (malformed JSON, validation failure, 404 unknown route, missing fields).  
Expected defense: The server must never return stack traces, internal file paths, framework versions, or environment configuration in error responses.  
Observed response: Malformed JSON returns clean `{ "success": false, "error": "Invalid JSON format." }`. Validation failure returns `{ "success": false, "error": "Validation failed", "details": { ... } }`. 404 returns clean static HTML. Zero stack traces or filesystem paths leaked.  
Evidence: Assertions `!res.body.includes("SyntaxError")`, `!res.body.includes("node_modules")`, and `!res.body.includes("process.env")` passed.  
Result: DEFENDED  
Security control: Structured error handling with generic error messages and internal logging in route handlers.  
Severity: Medium  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 4 & Section 13).  

---

## Attack ID: RT-025

Attack: Downstream Webhook Credential Disclosure & Failure Resilience  
Attack category: Third-Party / Downstream Integration  
Target: `dispatchDownstreamIntegrations()` in `/api/contact` and `/api/quote`  
Input / technique: Simulated failure, timeout, and unreachable states for CRM and Email relay endpoints.  
Expected defense: Downstream integration failures must fail safely without breaking the user experience or exposing internal network configurations.  
Observed response: Outbound requests are wrapped in `Promise.allSettled()` with `AbortSignal.timeout(3000)`. Errors are caught in `.catch()` and logged safely server-side. The client receives a clean HTTP 200 confirmation.  
Evidence: Code audit and integration tests confirm non-blocking dispatch and safe error trapping.  
Result: DEFENDED  
Security control: `Promise.allSettled()`, `AbortSignal.timeout(3000)`, and localized error boundaries.  
Severity: Low  
Remediation: None required.  
Regression test: `tests/verify_api_routes.js`.  

---

## Attack ID: RT-026

Attack: Automated Bot / Web Scraper Form Infiltration  
Attack category: Automated Spam & Abuse  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Submitted form payloads with the hidden honeypot field populated (`bot_field: "AutomatedCrawlerBotValue"`).  
Expected defense: Submissions containing any value in the honeypot field must be immediately rejected with HTTP 400.  
Observed response: HTTP 400 Bad Request returned: `{"success":false,"error":"Invalid submission detected."}`.  
Evidence: Both API endpoints trapped the honeypot submission before schema validation and before downstream dispatch.  
Result: DEFENDED  
Security control: Honeypot check (`rawData?.bot_field`) in `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts`.  
Severity: Low  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 11) & `tests/verify_api_routes.js`.  

---

## Attack ID: RT-027

Attack: Data-Leakage Canary Lifecycle Test  
Attack category: Privacy & Data Leakage  
Target: `POST /api/contact`, `POST /api/quote`  
Input / technique: Created synthetic, traceable canary records:  
- `CANARY_EMAIL=redteam-canary@example.invalid`  
- `CANARY_PHONE=+910000000000`  
- `CANARY_TOKEN=CANARY-NOT-A-REAL-SECRET-001`  
Submitted canary records to both APIs and audited whether any canary data leaked across response bodies, headers, public caches, or client assets.  
Expected defense: The application must not reflect customer PII in responses or leak it into public artifacts.  
Observed response: No customer data leakage was detected during testing. Both endpoints responded with HTTP 200, generating reference IDs `GGC-554374` and `GGE-244237`. The HTTP response bodies contained zero occurrences of `CANARY_EMAIL`, `CANARY_PHONE`, or `CANARY_TOKEN`. Server logs mask IP addresses and omit personal contact information. Note: When downstream integrations (`CRM_WEBHOOK_URL`, `EMAIL_NOTIFICATION_ENDPOINT`) are configured, customer information is intentionally transmitted to those third-party services over outbound HTTPS as an operational privacy boundary.  
Evidence: Live assertion verified: `!res.body.includes(CANARY_EMAIL)`, `!res.body.includes(CANARY_PHONE)`, `!res.body.includes(CANARY_TOKEN)`.  
Result: DEFENDED  
Security control: Strict response minimization and privacy-safe server logging.  
Severity: High  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 18).  

---

## Attack ID: RT-028

Attack: Client Bundle Secrets Scanning  
Attack category: Credential Leakage  
Target: Production client JavaScript chunks (`.next/static/chunks/*.js`)  
Input / technique: Scanned all compiled production browser assets for API keys, bearer tokens, private keys, and server-only environment variable names (`CRM_API_BEARER_TOKEN`, `EMAIL_SERVICE_KEY`, `BEGIN PRIVATE KEY`).  
Expected defense: Zero server credentials or sensitive variable names must appear in client JavaScript bundles.  
Observed response: Scanner inspected 100% of production client JavaScript chunks. Found 0 secret signatures.  
Evidence: `tests/security-redteam.js` Section 20 confirmed `bundleSecretsFound === 0`.  
Result: DEFENDED  
Security control: Next.js build-time dead-code elimination and server-only environment isolation.  
Severity: Critical  
Remediation: None required.  
Regression test: `tests/security-redteam.js` (Section 20).  

---

## Attack ID: RT-029

Attack: Third-Party Dependency Vulnerability Reachability  
Attack category: Known Vulnerabilities  
Target: Node.js dependency graph (`node_modules`)  
Input / technique: Ran `npm audit` and analyzed 5 reported advisories (4 High, 1 Critical) in `glob`, `postcss`, and `next@14.2.18`.  
Expected defense: Advisories must be evaluated for runtime reachability and mitigated.  
Observed response:  
1. `glob@10.x` CLI command injection: Currently assessed as not reachable within the application's tested runtime paths. `glob` is a transitive devDependency of `eslint-config-next`; CLI binary is never invoked at runtime.  
2. `postcss` source map parsing: Currently assessed as not reachable within the application's tested runtime paths. Build-time tool only; not present in production runtime.  
3. `next@14.2.18` advisories (WebSocket SSRF, Server Action DoS, Windows RCE): Currently assessed as not reachable within the application's tested runtime paths. The application uses App Router static pages, standard Route Handlers (no Server Actions), Linux deployment (no Windows UNC paths), and zero WebSockets.  
Upgrading to Next.js 16 requires breaking framework changes and is deferred.  
Evidence: All vulnerable features currently assessed as not reachable within the application's tested runtime paths.  
Result: ACCEPTED RISK  
Security control: Static deployment, feature minimization, and Linux target architecture.  
Severity: Medium  
Remediation: Plan migration to Next.js 15/16 LTS when compatible.  
Regression test: `tests/verify_security.js`.  

---

## Attack ID: RT-030

Attack: Cookie and Client Storage Absence Audit  
Attack category: Privacy & Tracking  
Target: Entire application frontend and HTTP response headers  
Input / technique: Searched entire codebase for `document.cookie`, `cookies()`, `localStorage`, `sessionStorage`, `indexedDB`, and probed live HTTP responses for `Set-Cookie`.  
Expected defense: The application must be a zero-cookie, zero-tracking corporate website.  
Observed response: Zero application cookies set. Zero client storage trackers in codebase. `Set-Cookie` header is absent across all public routes and API responses.  
Evidence: Codebase search: 0 cookie calls, 0 storage calls. Live server test: `res.headers["set-cookie"] === undefined` across all routes.  
Result: DEFENDED  
Security control: Zero-cookie architecture (`COOKIE AUTHENTICATION: NOT USED`).  
Severity: Informational  
Remediation: None required.  
Regression test: `tests/verify_security.js` (Section 5) & `tests/security-redteam.js` (Section 16).  
