# Security Surface Map — GG Construction Co.

**Document Classification:** Technical Security Architecture  
**Application:** GG Construction Co. Corporate Web Platform (`gg-construction-website`)  
**Deployment Target:** Vercel (Edge Network + Serverless Node.js Runtime)  
**Architecture:** Single-Division Building Construction Website  

---

## 1. Architectural Overview & Trust Boundaries

The application is structured into four primary execution and trust tiers:

```
[ Tier 0: Client Tier ]
Unauthenticated Internet Users (Web Browsers, Mobile Devices, Web Crawlers)
      │
      ▼ (HTTPS / TLS 1.3 / Strict CSP / HSTS Preload)
[ Tier 1: Edge Network & Ingress Tier ]
Vercel Edge / CDN / Reverse Proxy
- Enforces HTTP headers: CSP, HSTS, X-Frame-Options: DENY, nosniff
- Serves static assets, SSG HTML pages, and optimized images
- Strips / overwrites forged upstream proxy headers
      │
      ▼ (Dynamic API Calls / Edge to Node.js Serverless Function)
[ Tier 2: Application API Tier ]
Next.js App Router Route Handlers (/api/contact, /api/quote)
- Content-Type enforcement (application/json)
- Payload size bounding (32 KB limit)
- Sliding-window IP rate limiting (5 req/min per client)
- Strict Zod schema parsing & sanitization
- Honeypot bot protection
- Cryptographically secure reference identifier generation (crypto.randomInt)
- Cache-Control: no-store on all responses
      │
      ▼ (Outbound HTTPS only)
[ Tier 3: Transactional Outbound Email ]
Resend API (https://api.resend.com/emails)
- Gated by server-only RESEND_API_KEY
- Forwards enquiries directly to gunjan29gupta@gmail.com
- 5000ms hard timeout per outbound request
```

---

## 2. Asset & Route Inventory Map (33 Routes)

| Asset / Route | Exposure | Data Handled | Trust Boundary | Security Controls |
|---|---|---|---|---|
| **`/` (Homepage)** | Public | Read-only static marketing and company positioning | Untrusted Client → Edge Static Cache | Next.js SSG, CSP, HSTS, X-Frame-Options, zero client cookies/storage |
| **`/about`** | Public | Read-only leadership placeholders, company background | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS, zero client cookies |
| **`/services`** | Public | Construction services catalog (5 services) | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/services/[slug]`** (x5) | Public Dynamic SSG | Dynamic service details (residential, commercial, etc.) | Untrusted Client → Static Param Array | In-memory lookup matching pre-rendered slugs (`generateStaticParams`). No filesystem access. |
| **`/projects`** | Public | Project showcase portfolio (6 projects) | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/projects/[slug]`** (x6) | Public Dynamic SSG | Project case study details with technical specifications | Untrusted Client → Static Param Array | In-memory lookup matching pre-rendered slugs. No filesystem access. |
| **`/gallery`** | Public | Construction photography gallery | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS, next/image optimization |
| **`/testimonials`** | Public | Customer feedback & homeowner reviews | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/blog`** | Public | Homeowner construction guides & technical articles | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/blog/[slug]`** (x3) | Public Dynamic SSG | Technical construction articles (TMT steel, cement, AAC blocks) | Untrusted Client → Static Param Array | Pre-rendered markdown/SSG content |
| **`/faqs`** | Public | Categorized technical & commercial FAQs | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/contact`** | Public | Interactive contact form & corporate details | Untrusted Client → Browser Runtime | Static SSG, CSP, client Zod validation |
| **`/get-a-quote`** | Public | Multi-step building estimation form | Untrusted Client → Browser Runtime | Static SSG, CSP, client validation |
| **`/privacy-policy`** | Public | Privacy disclosures & data rights | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/terms`** | Public | Website terms of service | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/not-found`** | Public | Branded 404 error page | Untrusted Client → Edge Static Cache | Static SSG, CSP, HSTS |
| **`/robots.txt`** | Public | Search crawler permissions | Untrusted Client → Edge Static Cache | Plain text, canonical sitemap directive |
| **`/sitemap.xml`** | Public | Dynamic XML search engine sitemap | Untrusted Client → Edge Static Cache | Dynamic XML generated from typed data |
| **`/api/contact`** | Public API | Contact form submission JSON | Untrusted Client → Serverless Handler | Rate limit, 32 KB limit, honeypot, Zod, crypto reference ID, Resend dispatch |
| **`/api/quote`** | Public API | Quote form submission JSON | Untrusted Client → Serverless Handler | Rate limit, 32 KB limit, honeypot, Zod, crypto reference ID, Resend dispatch |

---

## 3. Defense Verification Matrix

1. **Authentication & Authorization**: Non-existent by design. No public routes require access control; no admin panels exist.
2. **Session / Cookie Security**: Zero cookies utilized.
3. **Transport Layer**: HSTS with 2-year preload directive (`max-age=63072000`).
4. **Content Injection (XSS)**: Strict CSP without `'unsafe-eval'`; JSON-LD serialization uses unicode-escaped angle brackets.
5. **Secret Hygiene**: `RESEND_API_KEY` is server-only; zero public environment variables.
