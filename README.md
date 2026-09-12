# GG Construction Co.

A clean, modern corporate website for **GG Construction Co.**, presenting three integrated business operations: **Building Materials Supply (Primary)**, **Building Construction (Low-Rise)**, and **Real Estate Sales & Property Assistance**.

---

## Overview

GG Construction Co. is a practical, customer-focused construction and building materials business. The platform presents a cohesive digital presence for its three core operational areas:

1. **Building Materials Supply (Primary Business)**: Sales and dependable supply of essential building materials including cement (OPC/PPC), TMT reinforcement steel (Fe 500D), red clay bricks, AAC lightweight blocks, river sand, graded coarse aggregates, plumbing supplies, electrical materials, and construction chemicals.
2. **Building Construction (Secondary Business)**: Realistic low-rise construction services for residential houses, small apartment buildings, low-rise commercial properties, shops, showrooms, and small offices (typically up to 4–5 floors maximum), alongside renovation and remodeling work.
3. **Real Estate Sales & Property Assistance (Secondary Business)**: Property marketing, sales coordination, buyer-seller assistance, and property enquiry support connecting buyers with owners and developers.

> **Operational Note:** All business metrics, past project examples, customer testimonials, and leadership biographies in this repository adhere to strict factual integrity standards. Unverified commercial claims are explicitly tokenized as bracketed placeholders (`[ADD REAL PROJECT]`, `[ADD VERIFIED CUSTOMER TESTIMONIAL]`, `[VERIFY COMPANY EXPERIENCE]`) in the centralized data layer (`src/data/`) pending formal owner verification.

---

## Features

The platform provides a comprehensive suite of verified components and workflows:

- **Responsive Dark Architectural UI**: Monolithic, editorial dark visual identity built with high-contrast typography and subtle grid borders.
- **Building Materials Catalog**: Primary commercial section (`/materials`) detailing material specifications, grades, standard packaging, and pricing enquiry paths.
- **Dynamic Material Category Pages**: Dedicated category pages (`/materials/[category]`) for cement, TMT steel, bricks & blocks, aggregates, plumbing, electrical, and construction chemicals.
- **Construction Services**: Realistic low-rise construction capabilities (`/services`) focusing on residential, small commercial, and renovation work.
- **Dynamic Service Pages**: Detailed service pages (`/services/[slug]`) outlining execution steps, quality checks, and customer enquiry paths.
- **Project Portfolio**: Representative showcase of low-rise projects (`/projects`) categorized by residential, commercial, and mixed-use builds up to 4–5 floors.
- **Dynamic Project Pages**: Case studies (`/projects/[slug]`) detailing location, floors, built-up area, and construction scope.
- **Real Estate Section**: Property sales and marketing assistance (`/real-estate`) displaying property opportunities with clear listing nature disclaimers.
- **Gallery**: Visual documentation (`/gallery`) of low-rise construction, structural framing, brick masonry, and materials stockyard.
- **Testimonials**: Customer feedback section (`/testimonials`) with explicit verification notices.
- **Blog / Knowledge Centre**: Practical building guides (`/blog`) and articles (`/blog/[slug]`) covering cement selection, TMT steel grades, and property buying due diligence.
- **FAQ System**: Categorized FAQ accordion system (`/faqs`) answering practical customer and contractor questions.
- **Contact Form**: Secure enquiry submission form (`/contact`) prioritizing Building Materials #1, Construction #2, and Real Estate #3.
- **Quote Request Form**: Structured material and construction quotation tool (`/get-a-quote`).
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
│   │   ├── home/            # Homepage sections (Hero, Divisions, Materials, Projects, Process)
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
| `/` | `src/app/page.tsx` | Corporate homepage featuring hero, 3 business divisions, materials, and projects |
| `/about` | `src/app/about/page.tsx` | Practical business background, building experience, and founder placeholder |
| `/materials` | `src/app/materials/page.tsx` | Primary business catalog: building material supply and categories |
| `/services` | `src/app/services/page.tsx` | Directory of residential, commercial low-rise, and renovation services |
| `/projects` | `src/app/projects/page.tsx` | Representative portfolio of small-to-medium low-rise building projects |
| `/real-estate` | `src/app/real-estate/page.tsx` | Property sales assistance, property opportunities, and marketing support |
| `/gallery` | `src/app/gallery/page.tsx` | Representative photography of low-rise builds, masonry, and materials stock |
| `/testimonials` | `src/app/testimonials/page.tsx` | Customer feedback with explicit verification indicators |
| `/blog` | `src/app/blog/page.tsx` | Practical guides for cement selection, steel grades, and property buying |
| `/faqs` | `src/app/faqs/page.tsx` | Comprehensive answers to material supply, construction, and property questions |
| `/contact` | `src/app/contact/page.tsx` | Dedicated contact page with direct phone, email, and enquiry channels |
| `/get-a-quote` | `src/app/get-a-quote/page.tsx` | Interactive material quotation and construction estimation form |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Data privacy, storage policies, and user rights |
| `/terms` | `src/app/terms/page.tsx` | Legal disclaimers and terms governing quotations and estimates |

### Dynamic Route Templates
| Route Pattern | File Location | Sample Routes |
| :--- | :--- | :--- |
| `/materials/[category]` | `src/app/materials/[category]/page.tsx` | `/materials/cement`<br>`/materials/tmt-steel`<br>`/materials/bricks-blocks` |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | `/services/residential-construction`<br>`/services/commercial-construction`<br>`/services/renovation-remodeling` |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | `/projects/residential-building-4-floors`<br>`/projects/family-residence-3-floors`<br>`/projects/commercial-building-4-floors` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | `/blog/which-cement-is-suitable-for-house-construction`<br>`/blog/how-to-choose-tmt-steel-fe-500d` |

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

The website is designed with a strictly minimal, server-safe environment footprint:

> **`RESEND_API_KEY` is the ONLY environment variable you must enter into Vercel.**

All Contact Us and Get a Quote enquiries are forwarded automatically to **`gunjan29gupta@gmail.com`** via the server-side Resend API. The API key remains strictly server-side and is never exposed to browser bundles.

### Variable Inventory

| Variable | Scope | Status | Purpose | Where to Obtain |
| :--- | :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | **Server-only** | **Required for Email Delivery** | Authenticates outbound dispatch to the Resend API to forward form enquiries to `gunjan29gupta@gmail.com`. | [resend.com/api-keys](https://resend.com/api-keys) |

### Configuration Rules
- **Variables to Enter into Vercel**: Enter **`RESEND_API_KEY`** in Vercel Project Settings > Environment Variables.
- **Automatic Platform Variables**: Enable Vercel's “Automatically expose System Environment Variables” setting; the application then uses `VERCEL_PROJECT_PRODUCTION_URL` for canonical metadata and `VERCEL_URL` for previews. You do not enter either value.
- **Variables NOT Needed**: `NEXT_PUBLIC_APP_URL`, `PORT`, `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, or CRM webhooks.
- **Recipient Destination**: Hardcoded to `gunjan29gupta@gmail.com`; there is no recipient environment variable.
- **Git Safety**: Never commit `.env`, `.env.local`, or any private API keys. The repository `.gitignore` strictly blocks them.

### Environment Template (`.env.example`)
```bash
# ============================================================
# GG Construction Co. — Environment Configuration
# ============================================================

# Transactional Email Delivery (Server-Only Secret)
# Required in Vercel to forward Contact Us and Quote form submissions to: gunjan29gupta@gmail.com
# Obtain your API key from: https://resend.com/api-keys
RESEND_API_KEY=
```

---

## Protected Routing Audit

- **Public Routes**: 23 route definitions (54 statically prerendered pages + 2 public enquiry API route handlers)
- **Protected Routes**: 0
- **Admin Routes**: 0
- **Authentication Present**: NO
- **Authorization Present**: NO
- **Architectural Reason**: The GG Construction Co. platform is purely a public corporate brochure, catalogue, and prospective client enquiry website. It contains no customer account portal, staff dashboard, or administrative interface. All marketing and information pages are intentionally accessible to the general public and search crawlers without login. No artificial authentication is added.

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
8. **Email Delivery Confirmation**: The API reports success only after Resend accepts the notification. Provider failures return a safe error without exposing internal details.

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
5. In the **Environment Variables** section, add `RESEND_API_KEY`.
6. Enable **Automatically expose System Environment Variables** so Vercel supplies canonical deployment URLs.
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
RESEND_API_KEY=
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

- **Company Background**: Founding dates, registration numbers, and permanent office locations (`[VERIFY COMPANY ...]`).
- **Leadership & Founder**: Biography, role, and practical background (`[FOUNDER NAME PLACEHOLDER]`).
- **Projects**: Real low-rise project details, locations, photographs, and scopes (`[ADD REAL PROJECT]`).
- **Testimonials**: Genuine client reviews and ratings (`[ADD VERIFIED CUSTOMER TESTIMONIAL]`).
- **Properties**: Verified property opportunities, sale listings, and owner authorizations (`[ADD VERIFIED PROPERTY]`).
- **Materials**: Available brand sources, local delivery coverage, and minimum order parameters (`[VERIFY MATERIAL BRAND]`).

---

## Known Limitations

- **In-Memory Rate Limiting**: Single-instance storage does not synchronize across distributed multi-region serverless instances.
- **Lead Dispatching**: Outbound webhook and email delivery require external endpoint provisioning; default behavior logs dossiers server-side without external delivery.
- **Placeholder Business Copy**: Certain historical, project, and property details require factual sign-off from company directors before public promotion.
- **Upstream Dependency Advisories**: Next.js 14 and ESLint toolchain advisories identified in `npm audit` require validation against Next.js major release breaking changes.

---

## Contact

For building materials supply, construction enquiries, and property assistance:

- **Phone**: +91 98110 34825
- **Email**: gunjan29gupta@gmail.com

---

## License

No license has currently been declared for this repository. All rights are reserved by the repository owner.
