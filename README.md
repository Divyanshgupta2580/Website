# GG Construction Co. — Building Construction

A clean, modern corporate website for **GG Construction Co.**, positioning the business strictly as a **Building Construction** company specializing in real-world low-rise building construction (residential homes, builder floors, shops, and small commercial offices up to 4–5 floors).

---

## Overview

GG Construction Co. is a practical, dedicated building contractor with confirmed project experience across **Rohini, Pitampura, and nearby areas of Delhi**. The platform focuses entirely on building construction:

1. **Building Construction (Core Business)**: Practical low-rise construction services for residential houses, builder floors, shops, small offices, and commercial spaces up to approximately 4–5 floors maximum, alongside building renovation and structural improvements.
2. **Local Delhi Experience**: Genuine, hands-on construction experience across Rohini, Pitampura, and North-West Delhi localities.
3. **Transparent Execution**: Clear milestone-based estimations, disciplined structural framing (IS 456 concrete standards), and attentive day-to-day site supervision.

> **Integrity Note:** All business metrics, past project examples, client testimonials, and leadership references in this repository adhere to strict factual integrity standards. Unverified commercial claims are explicitly tokenized as bracketed placeholders (`[ADD REAL PROJECT]`, `[ADD VERIFIED CUSTOMER TESTIMONIAL]`, `[VERIFY COMPANY EXPERIENCE]`) in the centralized data layer (`src/data/`) pending formal owner verification. No exaggerated claims (EPC, high-rise, multinational contractor) are made.

---

## Features

The platform provides a comprehensive suite of verified components and workflows:

- **Clean Local Construction UI**: Practical, solid, approachable, and professional visual identity with high-contrast sans-serif typography, generous whitespace, and prominent construction photography.
- **Construction Services**: Realistic low-rise construction capabilities (`/services`) focusing on residential, small commercial, and renovation work.
- **Dynamic Service Pages**: Detailed service pages (`/services/[slug]`) outlining execution steps, quality checks, and customer enquiry paths.
- **Project Portfolio**: Representative showcase of low-rise projects (`/projects`) categorized by residential, commercial, mixed-use, and renovation builds up to 4–5 floors.
- **Dynamic Project Pages**: Case studies (`/projects/[slug]`) detailing location, floors, built-up area, and construction scope.
- **Visual Work Gallery**: Representative visual documentation (`/gallery`) of low-rise construction, structural framing, and brick masonry.
- **Client Testimonials**: Client feedback section (`/testimonials`) with explicit verification indicators.
- **Construction Guides**: Practical building guides (`/blog`) and articles (`/blog/[slug]`) covering cement selection, TMT steel grades, and brick vs block construction.
- **FAQ System**: Categorized FAQ accordion system (`/faqs`) answering practical construction and quotation questions.
- **Contact Form**: Secure enquiry submission form (`/contact`) prioritizing residential, commercial, and renovation construction.
- **Quote Request Form**: Structured construction quotation tool (`/get-a-quote`).
- **Responsive Navigation**: Desktop navigation bar, floating quick-contact bar, and mobile drawer menu.
- **Accessibility Support (a11y)**: Semantic HTML5 landmark tags, ARIA attributes, skip-to-content navigation links, and full keyboard traversability.
- **SEO Metadata**: Static and dynamic OpenGraph tags, Twitter cards, and structured JSON-LD schemas with XSS escaping.
- **Sitemap**: Programmatically generated XML sitemap (`/sitemap.xml`) indexing all valid construction URLs.
- **Robots.txt**: Dynamically generated crawler directive file (`/robots.txt`).
- **404 Page**: Custom error page (`src/app/not-found.tsx`) with clear recovery navigation.
- **Security Headers**: Production-grade HTTP security headers configured at the Next.js framework level.
- **Server-Side Validation**: Robust schema validation via Zod on all incoming API payloads.
- **Rate Limiting**: Sliding-window IP rate limiter on all public API endpoints (5 requests/minute).
- **Anti-Spam Honeypot**: Hidden honeypot field (`bot_field`) catching automated scrapers and bots.
- **Secure Error Handling**: Sanitized server responses masking database or internal system stack traces from clients.

---

## Technology Stack

The application is built with modern, battle-tested web standards verified directly against [`package.json`](file:///Users/apple/Desktop/Website/package.json):

### Core Runtime & Framework
- **Framework**: [Next.js](https://nextjs.org/) `14.2.35` (App Router architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) `5.4.5`
- **UI Library**: [React](https://react.dev/) `18.3.1` / [React DOM](https://react.dev/) `18.3.1`

### Styling & Design
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) `3.4.4`
- **PostCSS**: [PostCSS](https://postcss.org/) `^8.5.28` (security override)
- **Glob**: [Glob](https://github.com/isaacs/node-glob) `^10.4.6` (security override)
- **Autoprefixer**: [Autoprefixer](https://github.com/postcss/autoprefixer) `10.4.19`
- **Icons**: [Lucide React](https://lucide.dev/) `0.460.0`
- **Typography**: [Manrope](https://fonts.google.com/specimen/Manrope) Google Font

### Validation & Schema
- **Schema Validation**: [Zod](https://zod.dev/) `3.23.8`

### Development & Linting
- **Linter**: [ESLint](https://eslint.org/) `8.57.0` with `eslint-config-next` `14.2.35`
- **Type Definitions**: `@types/node` `20.14.0`, `@types/react` `18.3.3`, `@types/react-dom` `18.3.0`

---

## Project Structure

```
.
├── src/
│   ├── app/                 # Next.js App Router: pages, layouts, templates, and API routes
│   │   ├── (routes)/        # Public static and dynamic construction route folders
│   │   ├── api/             # Secure API route handlers (/api/contact, /api/quote)
│   │   ├── error.tsx        # Global error boundary component
│   │   ├── globals.css      # Core Tailwind CSS base, components, and utilities
│   │   ├── layout.tsx       # Root layout containing SEO metadata and schema markup
│   │   ├── not-found.tsx    # Branded custom 404 error page
│   │   ├── robots.ts        # Dynamic robots.txt generation
│   │   └── sitemap.ts       # Dynamic sitemap.xml generation
│   ├── components/          # Modular, reusable React UI components
│   │   ├── cards/           # Content presentation cards (Projects, Services, Blog, Testimonials)
│   │   ├── contact/         # Contact section and editorial layout
│   │   ├── forms/           # Client-side form components with client-side feedback
│   │   ├── home/            # Homepage sections (Hero, Services, Projects, Process, WhyChooseUs)
│   │   ├── layout/          # Global layout chrome (Navbar, Footer, FloatingBar, SkipLink)
│   │   └── ui/              # Atom-level primitives (Button, Container, Accordion, Badge)
│   ├── data/                # Strongly typed construction business data (Rohini/Pitampura context)
│   ├── design-system/       # Architectural design tokens (colors, typography, spacing, shadows)
│   └── lib/                 # Shared server utilities (rate limiting, Resend email dispatch, env)
├── tests/                   # Automated unit, security, and API test suites
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
| `/` | `src/app/page.tsx` | Construction homepage featuring low-rise focus, projects, and quote CTAs |
| `/about` | `src/app/about/page.tsx` | Building construction background, Rohini/Pitampura experience, and principles |
| `/services` | `src/app/services/page.tsx` | Directory of residential, commercial low-rise, and renovation services |
| `/projects` | `src/app/projects/page.tsx` | Representative portfolio of low-rise building projects |
| `/gallery` | `src/app/gallery/page.tsx` | Visual records of low-rise construction, RCC framing, and masonry |
| `/testimonials` | `src/app/testimonials/page.tsx` | Client feedback with explicit verification indicators |
| `/blog` | `src/app/blog/page.tsx` | Practical construction guides for building owners |
| `/faqs` | `src/app/faqs/page.tsx` | Answers to construction and estimation questions |
| `/contact` | `src/app/contact/page.tsx` | Dedicated contact page with direct phone, email, and enquiry channels |
| `/get-a-quote` | `src/app/get-a-quote/page.tsx` | Construction quotation and estimation form |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Data privacy, storage policies, and user rights |
| `/terms` | `src/app/terms/page.tsx` | Terms governing preliminary estimates and construction scope |

### Dynamic Route Templates
| Route Pattern | File Location | Sample Routes |
| :--- | :--- | :--- |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | `/services/residential-construction`<br>`/services/commercial-construction`<br>`/services/renovation-remodeling` |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | `/projects/residential-building-4-floors`<br>`/projects/family-residence-3-floors`<br>`/projects/commercial-building-4-floors` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | `/blog/which-cement-is-suitable-for-house-construction`<br>`/blog/how-to-choose-tmt-steel-for-house-construction` |

### API Route Handlers
| Route Path | Method | File Location | Purpose |
| :--- | :--- | :--- | :--- |
| `/api/contact` | `POST` | `src/app/api/contact/route.ts` | Validates, throttles, and forwards construction enquiries to `gunjan29gupta@gmail.com` |
| `/api/quote` | `POST` | `src/app/api/quote/route.ts` | Validates, throttles, and forwards construction quote requests to `gunjan29gupta@gmail.com` |

### SEO & System Routes
| Route Path | File Location | Output |
| :--- | :--- | :--- |
| `/sitemap.xml` | `src/app/sitemap.ts` | Programmatic XML sitemap containing only valid construction routes |
| `/robots.txt` | `src/app/robots.ts` | Crawler directive indexing sitemap and protecting API endpoints |
| Custom 404 | `src/app/not-found.tsx` | Clean error page rendered for nonexistent URLs |
| Global Error | `src/app/error.tsx` | Client error boundary catching unexpected client-side exceptions |

---

## Design System

The visual design system embodies a solid, trustworthy, local construction aesthetic built on clean contrast, modern sans-serif typography, and practical whitespace.

### Core Color Palette
| Token Value | CSS Name / Token Role | Usage Description |
| :--- | :--- | :--- |
| `#F4F2EE` | Primary Background (60%) | Light neutral background across pages and layouts |
| `#FFFFFF` | White Surface | Clean card containers, interactive panels, and input surfaces |
| `#E8E6E1` | Secondary Surface | Section separation and subtle background contrasts |
| `#20272D` | Primary Text | High-contrast, readable body copy and technical specifications |
| `#18324A` | Deep Navy (25%) | Authoritative brand titles, section headings, and footer |
| `#66717A` | Muted Text (10%) | Secondary labels, timestamps, and architectural metadata |
| `#D5D4D0` | Subtle Border | Clean dividing lines framing cards and form inputs |
| `#D96B27` | Construction Orange (5%) | Primary CTAs ("GET A QUOTE"), active filter tabs, and accent bars |
| `#B9551D` | Orange Hover | Button hover and active feedback states |
| `#F3D8C7` | Soft Orange | Badge backgrounds and icon container highlights |

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

- **Public Routes**: 14 static route definitions + 3 dynamic route templates + 2 API route handlers
- **Protected Routes**: 0
- **Admin Routes**: 0
- **Authentication Present**: NO
- **Authorization Present**: NO
- **Architectural Reason**: The GG Construction Co. platform is purely a public corporate construction brochure and client enquiry website. All marketing and information pages are intentionally accessible to the general public and search crawlers without login. No artificial authentication is added.

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

### Verification & Testing
```bash
# Run security and API verification test suite
npm test

# Run ESLint check
npm run lint

# Build production bundle
npm run build
```
