# GG Construction Co.

A premium, production-oriented corporate website for **GG Construction Co.**, combining three integrated operational verticals: **Civil Construction & Structural Engineering**, **Real Estate & Property Development**, and **Building Materials Supply**.

---

## Overview

GG Construction Co. is a multi-disciplinary infrastructure and contracting enterprise. The platform presents a cohesive digital presence for its three core divisions:

1. **Civil Construction & Structural Engineering**: Turnkey contracting, industrial warehousing, commercial structures, pre-engineered buildings (PEB), and MEP engineering.
2. **Real Estate & Property Development**: Grade-A commercial office suites, residential developments, planned enclaves, and regulatory compliance alignment (RERA governance).
3. **Building Materials Supply**: B2B bulk distribution of certified primary materials including TMT reinforcement steel, OPC/PPC cement, aggregates, and autoclaved aerated concrete (AAC) blocks.

> **Operational Note:** All business metrics, certifications, past project statistics, and leadership biographies in this repository adhere to strict factual integrity standards. Unverified commercial claims are intentionally tokenized as bracketed placeholders (`[VERIFY ...]`) in the centralized data layer (`src/data/`) pending formal client verification.

---

## Features

The platform provides a comprehensive suite of verified components and workflows:

- **Responsive Dark Architectural UI**: Monolithic, editorial dark visual identity built with high-contrast typography and subtle grid borders.
- **Construction Services**: Comprehensive breakdown of engineering disciplines, turnkey workflows, and execution methodologies.
- **Dynamic Service Pages**: Dedicated dynamic pages (`/services/[slug]`) detailing scope, standards, and deliverables.
- **Project Portfolio**: Filterable project gallery with technical categorization across industrial, commercial, and infrastructure domains.
- **Dynamic Project Pages**: In-depth project case studies (`/projects/[slug]`) highlighting structural specifications, location, and structural typologies.
- **Real-Estate Section**: Dedicated division showcase (`/real-estate`) displaying commercial suites, residential enclaves, and RERA compliance frameworks.
- **Building-Material Catalog**: B2B materials directory (`/materials`) detailing structural grades, dimensional standards, and supply capacities.
- **Dynamic Material Category Pages**: Deep-dive category pages (`/materials/[category]`) for TMT steel, cement, aggregates, and masonry units.
- **Gallery**: High-resolution image showcases (`/gallery`) categorized by structural typologies and site progress.
- **Testimonials**: Corporate endorsements and partner feedback (`/testimonials`) with verified verification indicators.
- **Blog / Knowledge Centre**: Technical knowledge base (`/blog`) and articles (`/blog/[slug]`) covering BIS codes, seismic ductility, and construction management.
- **FAQ System**: Categorized technical and commercial FAQ accordion system (`/faqs`).
- **Contact Form**: Secure enquiry submission form (`/contact`) supporting division-specific routing.
- **Quote Request Form**: Comprehensive estimation and tender scoping tool (`/get-a-quote`).
- **Responsive Navigation**: Desktop navigation bar, floating quick-contact bar, and mobile drawer menu.
- **Accessibility Support (a11y)**: Semantic HTML5 landmark tags, ARIA attributes, skip-to-content navigation links, and full keyboard traversability.
- **SEO Metadata**: Static and dynamic OpenGraph tags, Twitter cards, and structured JSON-LD schemas with XSS escaping.
- **Sitemap**: Programmatically generated XML sitemap (`/sitemap.xml`) indexing all public static and dynamic URLs.
- **Robots.txt**: Dynamically generated crawler directive file (`/robots.txt`).
- **404 Page**: Custom architectural error page (`src/app/not-found.tsx`) with clear recovery navigation.
- **Security Headers**: Production-grade HTTP security headers configured at the Next.js framework level.
- **Server-Side Validation**: Robust schema validation via Zod on all incoming API payloads.
- **Rate Limiting**: Sliding-window IP rate limiter on all public API endpoints (5 requests/minute).
- **Anti-Spam Honeypot**: Hidden honeypot field (`bot_field`) catching automated scrapers and bots.
- **Secure Error Handling**: Sanitized server responses masking database or internal system stack traces from clients.

---

## Technology Stack

The application is built with modern, battle-tested web standards verified directly against [`package.json`](file:///Users/apple/Desktop/Website/package.json):

### Core Runtime & Framework
- **Framework**: [Next.js](https://nextjs.org/) `14.2.18` (App Router architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) `5.4.5`
- **UI Library**: [React](https://react.dev/) `18.3.1` / [React DOM](https://react.dev/) `18.3.1`

### Styling & Design
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) `3.4.4`
- **PostCSS**: [PostCSS](https://postcss.org/) `8.4.38`
- **Autoprefixer**: [Autoprefixer](https://github.com/postcss/autoprefixer) `10.4.19`
- **Icons**: [Lucide React](https://lucide.dev/) `0.460.0`

### Validation & Schema
- **Schema Validation**: [Zod](https://zod.dev/) `3.23.8`

### Development & Linting
- **Linter**: [ESLint](https://eslint.org/) `8.57.0` with `eslint-config-next` `14.2.18`
- **Type Definitions**: `@types/node` `20.14.0`, `@types/react` `18.3.3`, `@types/react-dom` `18.3.0`

---

## Project Structure

```
.
├── src/
│   ├── app/                 # Next.js App Router: pages, layouts, templates, and API routes
│   │   ├── (routes)/        # Public static and dynamic route folders
│   │   ├── api/             # Secure API route handlers (/api/contact, /api/quote)
│   │   ├── error.tsx        # Global error boundary component
│   │   ├── globals.css      # Core Tailwind CSS base, components, and utilities
│   │   ├── layout.tsx       # Root layout containing SEO metadata and common layout providers
│   │   ├── not-found.tsx    # Branded custom 404 error page
│   │   ├── robots.ts        # Dynamic robots.txt generation
│   │   └── sitemap.ts       # Dynamic sitemap.xml generation
│   ├── components/          # Modular, reusable React UI components
│   │   ├── cards/           # Content presentation cards (Projects, Services, Materials, Blog)
│   │   ├── contact/         # Contact section and editorial layout
│   │   ├── forms/           # Client-side form components with client-side feedback
│   │   ├── home/            # Homepage sections (Hero, Divisions, Metrics, Process)
│   │   ├── layout/          # Global layout chrome (Navbar, Footer, FloatingBar, SkipLink)
│   │   └── ui/              # Atom-level primitives (Button, Container, Accordion, Badge)
│   ├── data/                # Strongly typed mock and placeholder business data
│   ├── design-system/       # Architectural design tokens (colors, typography, spacing, shadows)
│   └── lib/                 # Shared server utilities (sliding-window rate limiting, IP extraction)
├── tests/                   # Automated unit, security, and integration test suites
├── scripts/                 # Operational audit and responsive validation scripts
├── public/                  # Static assets and public resources
├── .env.example             # Documented template for production environment variables
├── next.config.js           # Next.js configuration with strict security headers and image domains
├── tailwind.config.ts       # Tailwind CSS theme customization and design tokens
└── tsconfig.json            # Strict TypeScript compiler options and path aliases (@/*)
```

---

## Routes

All routes are implemented under `src/app`:

### Primary Static Pages
| Route Path | File Location | Purpose |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Corporate homepage featuring hero, divisions, metrics, process, and FAQs |
| `/about` | `src/app/about/page.tsx` | Corporate background, engineering values, and leadership profiles |
| `/services` | `src/app/services/page.tsx` | Full directory of contracting and structural engineering services |
| `/projects` | `src/app/projects/page.tsx` | Portfolio of executed civil, commercial, and industrial landmarks |
| `/real-estate` | `src/app/real-estate/page.tsx` | Commercial office suites, residential developments, and RERA overview |
| `/materials` | `src/app/materials/page.tsx` | B2B building material supply catalog and structural specifications |
| `/gallery` | `src/app/gallery/page.tsx` | High-resolution photography of site execution and structural systems |
| `/testimonials` | `src/app/testimonials/page.tsx` | Client and institutional feedback with verification notices |
| `/blog` | `src/app/blog/page.tsx` | Technical engineering articles, code reviews, and industry insights |
| `/faqs` | `src/app/faqs/page.tsx` | Comprehensive answers to commercial and technical questions |
| `/contact` | `src/app/contact/page.tsx` | Dedicated corporate contact page and enquiry form |
| `/get-a-quote` | `src/app/get-a-quote/page.tsx` | Interactive project estimation and RFP specification form |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Data privacy, storage policies, and user rights |
| `/terms` | `src/app/terms/page.tsx` | Legal disclaimers and terms governing preliminary cost estimates |

### Dynamic Route Templates
| Route Pattern | File Location | Sample Routes |
| :--- | :--- | :--- |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | `/services/turnkey-construction`<br>`/services/commercial-construction`<br>`/services/industrial-construction` |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | `/projects/apex-commercial-tower`<br>`/projects/zenith-logistics-park`<br>`/projects/serene-villas-phase1` |
| `/materials/[category]` | `src/app/materials/[category]/page.tsx` | `/materials/cement`<br>`/materials/tmt-steel`<br>`/materials/bricks-blocks` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | `/blog/understanding-is-1786-seismic-ductility-fe500d`<br>`/blog/navigating-rera-compliance-and-escrow-governance` |

### API Route Handlers
| Route Path | Method | File Location | Purpose |
| :--- | :--- | :--- | :--- |
| `/api/contact` | `POST` | `src/app/api/contact/route.ts` | Validates, throttles, logs, and forwards general enquiries |
| `/api/quote` | `POST` | `src/app/api/quote/route.ts` | Validates, throttles, logs, and forwards tender/quote specifications |

### SEO & System Routes
| Route Path | File Location | Output |
| :--- | :--- | :--- |
| `/sitemap.xml` | `src/app/sitemap.ts` | Programmatic XML sitemap containing all 50 public routes |
| `/robots.txt` | `src/app/robots.ts` | Crawler directive indexing sitemap and protecting API endpoints |
| Custom 404 | `src/app/not-found.tsx` | Monolithic dark error page rendered for nonexistent URLs |
| Global Error | `src/app/error.tsx` | Client error boundary catching unexpected client-side exceptions |

---

## Design System

The visual design system embodies a minimalist, dark architectural aesthetic tailored for high-trust industrial and engineering clients.

### Core Color Palette
| Token Value | CSS Name / Token Role | Usage Description |
| :--- | :--- | :--- |
| `#0B0D0F` | Deep Charcoal Black | Primary page background; absorbs light to frame high-contrast photography |
| `#15191D` | Elevated Architectural Surface | Surface fill for cards, modal dialogs, and navigation drawers |
| `#1D2227` | Dark Concrete | Subtle fill for alternating sections and segmented control backdrops |
| `#F3F1EC` | Warm Off-White | Primary typography and headings; high readability without harsh glare |
| `#A7ADB3` | Muted Technical Slate | Secondary text, body copy, and form field descriptions |
| `#2A3035` | Subtle Grid Line | Monolithic 1px structural grid lines and card borders |
| `#B89A63` | Architectural Bronze | Primary brand accent; used for eyebrows, key CTAs, and active states |
| `#D0B47A` | Luminous Bronze Hover | Hover state for primary buttons and interactive highlights |
| `#667582` | Steel Engineering Accent | Low-contrast technical metadata, timestamps, and subtle borders |

### Core Design Principles
The interface design is structured around four primary pillars:
1. **Trust**: Professional presentation using precise technical terminology, verifiable disclaimers, and restrained aesthetic choices.
2. **Clarity**: Unambiguous layout hierarchy, standardized spacing units (`py-20`/`py-28`), and legible typography tokens.
3. **Conversion**: High-visibility call-to-action touchpoints leading seamlessly to `/get-a-quote` and `/contact`.
4. **Visual Impact**: Architectural photography framed by deep, atmospheric backgrounds and crisp structural borders.

---

## Environment Variables

The application references **only 5 environment variables** in production application code. These are cleanly documented in [`.env.example`](file:///Users/apple/Desktop/Website/.env.example):

### Variable Definitions
| Variable | Scope | Status | Purpose |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | **Public** (Browser & Server) | **Required in Production** | Canonical application base URL used for OpenGraph images, social cards, sitemap, and robots.txt. In local development, falls back to `http://localhost:3000`. Production builds require this variable and will halt with an explicit error rather than silently defaulting to an unconfirmed domain. |
| `CRM_WEBHOOK_URL` | **Server-only** | Optional | Outbound HTTP POST destination URL receiving JSON lead payloads from form submissions. |
| `CRM_API_BEARER_TOKEN` | **Server-only** | Optional | Bearer token passed in the `Authorization: Bearer <token>` header to authenticate with the CRM webhook. |
| `EMAIL_NOTIFICATION_ENDPOINT` | **Server-only** | Optional | Internal relay endpoint for dispatching email alerts to project desks upon lead submission. |
| `EMAIL_SERVICE_KEY` | **Server-only** | Optional | Shared secret key sent in the `X-Service-Key` header to authenticate with the email dispatch service. |

### Configuration Rules
- **Canonical Domain Safeguard**: In production environments, `NEXT_PUBLIC_APP_URL` is mandatory. The application will never silently default to an unconfirmed domain (e.g. `ggconstruction.com`). In local development (`NODE_ENV !== "production"`), it safely defaults to `http://localhost:3000`.
- **Public vs. Secret**: Only `NEXT_PUBLIC_APP_URL` is exposed to the browser. All CRM and email keys are strictly server-side secrets and must **never** be prefixed with `NEXT_PUBLIC_`.
- **Git Safety**: Never commit `.env` or `.env.local` files to version control. The repository `.gitignore` strictly blocks them.
- **Port Management**: Do **NOT** define `PORT` as an environment variable for Vercel deployment. The hosting platform manages runtime port allocation dynamically.

### Example Template (`.env.example`)
```bash
# ============================================================
# GG Construction Co. — Environment Configuration
# ============================================================

# Public application URL (canonical base URL)
NEXT_PUBLIC_APP_URL=

# ============================================================
# Optional CRM Integration (Server-side secrets)
# ============================================================
CRM_WEBHOOK_URL=
CRM_API_BEARER_TOKEN=

# ============================================================
# Optional Email Notification Integration (Server-side secrets)
# ============================================================
EMAIL_NOTIFICATION_ENDPOINT=
EMAIL_SERVICE_KEY=
```

---

## Local Development

### Prerequisites
- Node.js `18.18.0` or higher (`20.x` LTS recommended)
- npm `9.x` or higher

### Getting Started
```bash
# 1. Clone the repository
git clone https://github.com/Divyanshgupta2580/Website.git
cd Website

# 2. Install dependencies
npm install

# 3. Create local environment file
cp .env.example .env.local

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Quality & Build Commands
```bash
# Run unit tests and API route verification
npm test

# Run ESLint validation
npm run lint

# Compile optimized production bundle
npm run build

# Start local production server
npm run start
```

---

## Forms & Lead Handling

The platform provides two dedicated API endpoints for lead capture:
- `/api/contact` (`src/app/api/contact/route.ts`)
- `/api/quote` (`src/app/api/quote/route.ts`)

### Submission Pipeline Controls
1. **Strict Content-Type Validation**: Rejects requests whose media type is not `application/json` with `415 Unsupported Media Type`.
2. **Payload Size Guardrails**: Enforces a strict 32 KB limit on raw incoming request bodies. Requests exceeding 32 KB are rejected with `413 Payload Too Large`.
3. **Anti-Spam Honeypots**: Each form includes a hidden `bot_field`. Submissions containing any value in this field are immediately blocked with `400 Bad Request`.
4. **Sliding-Window Rate Limiting**: Requests are rate-limited to 5 requests per 60-second window per client IP. Excess requests receive `429 Too Many Requests` with a `Retry-After` header.
5. **Zod Server Validation**: Incoming data is parsed against strict schemas enforcing type constraints and maximum string bounds. Invalid submissions return `422 Unprocessable Entity` with specific field errors.
6. **Masked Audit Logging**: Valid submissions generate a timestamped server log with masked client IP addresses (e.g. `203.0.*.*`) to prevent PII exposure in server logs.
7. **Safe Error Masking**: Internal server errors return a neutral, generic error message (`500 Internal Server Error`) to prevent exposing backend implementation details.
8. **Optional Downstream Dispatch**: When `CRM_WEBHOOK_URL` or `EMAIL_NOTIFICATION_ENDPOINT` are configured, the API dispatches JSON payloads asynchronously using a 3-second timeout (`AbortSignal.timeout(3000)`). If an external webhook is offline, user submissions still succeed and return a reference ID (`GGC-xxxxxx` or `GGE-xxxxxx`).

> [!IMPORTANT]
> External lead forwarding requires `CRM_WEBHOOK_URL` and/or `EMAIL_NOTIFICATION_ENDPOINT` to be configured in your deployment platform. Without these variables, lead submissions are safely logged to standard output server-side without external delivery.

---

## Security

Application security controls have been validated via code inspection and automated security tests:

- **Content-Security-Policy (CSP)**: Configured in `next.config.js` to restrict script execution, disallow unauthorized iframes (`frame-ancestors 'none'`), enforce secure base URIs, and prevent content sniffing.
- **HTTP Strict Transport Security (HSTS)**: 2-year duration (`max-age=63072000; includeSubDomains; preload`) forcing secure HTTPS transport.
- **X-Frame-Options**: `DENY` prevents clickjacking attacks inside embedded iframes.
- **X-Content-Type-Options**: `nosniff` prevents MIME-type sniffing vulnerabilities.
- **Referrer-Policy**: `strict-origin-when-cross-origin` restricts referrer leakage.
- **Permissions-Policy**: Restricts access to sensitive browser APIs (`camera=()`, `microphone=()`, `geolocation=()`, `browsing-topics=()`).
- **Server-Side Validation**: All incoming requests are validated against Zod schemas on the server; client-side validation is never relied upon as a security barrier.
- **Payload Limiting**: 32 KB body size limits prevent memory exhaustion denial-of-service attempts.
- **Rate Limiting**: Sliding-window IP limiter blocks automated brute force and form spamming.
- **Honeypot Anti-Spam**: Prevents automated form submission by web scrapers.
- **Secret Isolation**: Server secrets are strictly decoupled from client bundles; zero private credentials are prefixed with `NEXT_PUBLIC_`.
- **Safe Error Handling**: Server endpoints never return raw exception objects or stack traces to clients.
- **JSON-LD Escaping**: Schema.org JSON-LD scripts escape `<` as `\u003c` to eliminate script tag breakout attacks.

> **Industry Standard Disclaimer:**
> Security is continuously maintained and no application can honestly be described as completely secure. Production systems require ongoing patching, monitoring, edge protection (WAF), and periodic security review.

---

## Testing

The repository contains automated test suites to verify reliability, input validation, and security enforcement:

### Test Commands
```bash
# Execute unit and API route test suites
npm test

# Run ESLint checks
npm run lint

# Validate full production compilation
npm run build
```

### Verified Test Results
- **Unit & Handler Tests (`npm test`)**: **13/13 PASSING**
  - Rate limiting sliding-window threshold and reset tracking
  - JSON-LD script breakout sanitization
  - Zod schema boundary validation and malformed email rejection
  - `/api/contact` and `/api/quote` direct invocation tests (Content-Type verification, honeypots, rate limiting, and unique reference ID generation)
- **ESLint (`npm run lint`)**: **0 warnings, 0 errors**
- **Production Build (`npm run build`)**: **50/50 routes compiled successfully** (40 static/SSG pages, 8 dynamic pages, 2 API route handlers)
- **Automated Red-Team Audit (`tests/security-redteam.js`)**: **36/36 automated assertions passing** against running server, testing SQL injection payloads, XSS reflections, path traversal, payload limits, rate limit resets, and security response headers.

### Dependency Audit (`npm audit`)
Running `npm audit` reports **5 vulnerabilities** (4 high, 1 critical) originating from upstream dependencies:
- Next.js 14 upstream advisories (`next@14.2.18`)
- CLI command injection in `glob@10.x` inherited by `eslint-config-next@14.2.18`
- `postcss` source map parsing advisories

These advisories are documented transparently and require an eventual major framework upgrade (`next@16`) once breaking API changes are verified for production migration.

---

## Deployment

The application is optimized for deployment on the [Vercel](https://vercel.com) Edge Platform.

### Vercel Deployment Guide
1. Push the repository to GitHub:
   ```bash
   git push origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and click **"Add New..."** > **"Project"**.
3. Import the `Website` repository.
4. Allow Vercel to automatically detect the **Next.js** framework preset.
5. In the **Environment Variables** section, configure:
   - `NEXT_PUBLIC_APP_URL`: Your production domain (e.g. `https://ggconstruction.com`).
6. Add optional server-side integration variables (`CRM_WEBHOOK_URL`, `CRM_API_BEARER_TOKEN`, `EMAIL_NOTIFICATION_ENDPOINT`, `EMAIL_SERVICE_KEY`) only if connecting external live endpoints.
7. Click **"Deploy"**.
8. Post-deployment, verify:
   - Homepage and all dynamic routes load properly.
   - Security headers are present via `curl -I https://your-domain.com`.
   - `/sitemap.xml` and `/robots.txt` resolve with your custom production domain.
   - Form submissions at `/contact` and `/get-a-quote` succeed and return reference IDs.

> [!IMPORTANT]
> **Do NOT configure `PORT=3000` or `PORT=3001` for standard Vercel deployment.** The hosting platform's serverless runtime dynamically controls port allocation and process lifecycle.

### Vercel Environment Variables Configuration
```env
NEXT_PUBLIC_APP_URL=https://your-domain.example

# Optional server-side secrets (leave blank if not yet connected)
CRM_WEBHOOK_URL=
CRM_API_BEARER_TOKEN=
EMAIL_NOTIFICATION_ENDPOINT=
EMAIL_SERVICE_KEY=
```

---

## Security & Deployment Notes

1. **In-Memory Rate Limiting Scope**:
   The built-in sliding-window rate limiter operates in process memory. It is suitable for a single application instance or container. In horizontally scaled or multi-region serverless environments, each instance maintains its own memory pool. For globally coordinated rate limiting across distributed serverless functions, utilize **Vercel Firewall / WAF** or connect an external atomic store like Upstash Redis (`@upstash/ratelimit`).
2. **Reverse Proxy Configuration**:
   When self-hosting behind a reverse proxy (e.g. Nginx or AWS ALB), ensure the proxy overwrites or strips incoming client-injected `X-Forwarded-For` and `X-Real-IP` headers to prevent client IP spoofing.

---

## Content Verification

The content in `src/data/*.ts` includes bracketed verification tokens that must be reviewed and confirmed with GG Construction Co. leadership prior to commercial launch:

- **Company Background**: Founding dates, registration numbers, and permanent office locations (`[VERIFY ...]`).
- **Leadership**: Biographies and direct professional credentials for executive management.
- **Projects**: Formal client names, delivered square footage figures, and exact site photography.
- **Certifications**: Lab test report numbers, ISO certifications, and green building ratings.
- **Real Estate**: Exact RERA registration IDs, site plans, and commercial inventory pricing.
- **Materials**: Supplier authorized dealership agreements and BIS testing certificates.

---

## Known Limitations

- **In-Memory Rate Limiting**: Single-instance storage does not synchronize across distributed multi-region serverless instances.
- **Lead Dispatching**: Outbound webhook and email delivery require external endpoint provisioning; default behavior logs dossiers server-side without external delivery.
- **Placeholder Business Copy**: Certain historical and project metrics require factual sign-off from company directors before public promotion.
- **Upstream Dependency Advisories**: Next.js 14 and ESLint toolchain advisories identified in `npm audit` require validation against Next.js major release breaking changes.

---

## Contact

For business enquiries, tenders, and technical consulting:

- **Phone**: +91 98110 34825
- **Email**: gunjan29gupta@gmail.com
- **Website**: [https://ggconstruction.com](https://ggconstruction.com)

---

## License

No license has currently been declared for this repository. All rights are reserved by the repository owner.
