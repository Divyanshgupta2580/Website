# GG Construction Co. — Production Deployment Guide

A streamlined, production-ready guide for deploying and maintaining the **GG Construction Co.** building construction web application.

---

## 1. Environment Variables & Protected Routing

### Environment Variables
> **`RESEND_API_KEY` is the ONLY environment variable you must enter into Vercel.**

When visitors submit the Contact Us or Get a Quote forms, enquiries are forwarded automatically to **`gunjan29gupta@gmail.com`** via the Resend API.

| Variable | Scope | Required in Vercel | Default / Fallback | Purpose |
|---|---|---|---|---|
| `RESEND_API_KEY` | Server-only | **YES** | None | Authenticates outbound lead emails to `gunjan29gupta@gmail.com`. Obtain at [resend.com/api-keys](https://resend.com/api-keys). |

Enable Vercel's **Automatically expose System Environment Variables** setting. The application uses Vercel's production-domain URL (`VERCEL_PROJECT_PRODUCTION_URL`) for canonical metadata and its preview URL (`VERCEL_URL`) when appropriate; neither needs to be entered manually. `NEXT_PUBLIC_APP_URL` is completely eliminated.

### Protected Routing Audit
- **Public Routes**: 33 total routes (31 pre-rendered static/SSG pages + 2 public enquiry APIs)
- **Protected Routes**: 0
- **Admin Routes**: 0
- **Authentication Present**: NO
- **Authorization Present**: NO
- **Reason**: The application is an intentionally public corporate website for a building construction company. No customer account portal, staff dashboard, or administrative interface exists in the codebase. All public marketing pages are intended to remain fully open to users and search crawlers without authentication.

### Runtime Environment & Port Notes
- **`PORT`**: Do **NOT** define `PORT` as an environment variable for Vercel. The hosting platform assigns and manages the port dynamically.
- **`NODE_ENV`**: Do **NOT** configure `NODE_ENV` manually on Vercel. Next.js and Vercel automatically manage the appropriate runtime environment (`production`) during build and start.
- **Database / Auth / External Services**: This application does not use external databases, JWT authentication, Stripe, or AWS. No such environment variables should be created.
- **Git Safety**: Never commit `.env`, `.env.local`, or any private secrets.

A clean template is maintained in [.env.example](file:///.env.example).

---

## 2. Local Development Instructions

### Prerequisites
- Node.js `18.18.0` or later (`20.x` LTS recommended)
- npm `9.x` or later

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# Accessible at http://localhost:3000
```

### Quality & Test Suite
```bash
# Run ESLint validation
npm run lint

# Run automated security, rate limiting, and API handler test suite
npm test

# Run production build validation
npm run build
```

---

## 3. Production Build & Execution

### Building the Optimized Bundle
```bash
npm run build
```
This produces a fully static and pre-rendered distribution in `.next/` with:
- **33 Routes Generated** (Static Site Generation for all services, projects, blog guides, gallery, and core pages).
- **87.3 kB Shared First-Load JS** for rapid Largest Contentful Paint (LCP).
- Zero hydration errors or runtime warnings.

### Starting the Production Server
```bash
npm run start
```
Default port: `3000`. To customize port:
```bash
npx next start -p 8080
```

---

## 4. Deployment Targets

### Option A: Vercel (Recommended — Zero Configuration)
1. Push repository to GitHub.
2. Import project into Vercel dashboard.
3. Framework Preset: **Next.js** (auto-detected).
4. Add `RESEND_API_KEY` and enable **Automatically expose System Environment Variables**.
5. Deploy. (Automatic global CDN caching, Edge rate limiting, and SSL provisioning).

### Option B: Docker / Node.js VM / AWS ECS
A minimal production Docker container can be run using the standard Next.js standalone output:
```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY .next ./.next
COPY public ./public

# Next.js start automatically respects the runtime PORT provided by the container hosting platform
CMD ["npm", "run", "start"]
```

---

## 5. Form & Lead Dispatch Integration

Currently, `/api/contact` and `/api/quote`:
1. Validate all payloads using server-side **Zod schemas**.
2. Reject non-JSON bodies (`415`) and oversized payloads > 32 KB (`413`).
3. Reject bot crawlers via honeypot traps (`400`).
4. Throttle abusive clients with **sliding-window IP rate limiting** (`429`).
5. Log masked dossiers (`[INCOMING ENQUIRY RECEIVED]`) and return cryptographically secure reference numbers (`GGC-XXXXXX` / `GGE-XXXXXX`).

### Email delivery
Email delivery is implemented through Resend in `src/lib/email.ts`. The form routes return success only after Resend accepts the notification; configuration or provider failures return a safe error response.

---

## 6. Content & Data Layer

All corporate copy, project plates, and FAQs are managed as strictly typed TypeScript data modules under `src/data/`:
- [`src/data/company.ts`](file:///src/data/company.ts): Corporate details, contact numbers, founder bio placeholders, core values.
- [`src/data/services.ts`](file:///src/data/services.ts): 5 building construction services and capabilities.
- [`src/data/projects.ts`](file:///src/data/projects.ts): 6 practical low-rise building construction projects.
- [`src/data/faqs.ts`](file:///src/data/faqs.ts): 16 construction-focused technical FAQs.
- [`src/data/blog.ts`](file:///src/data/blog.ts): 3 technical engineering articles and homeowner construction guides.
- [`src/data/testimonials.ts`](file:///src/data/testimonials.ts): Representative homeowner reviews.
- [`src/data/gallery.ts`](file:///src/data/gallery.ts): Construction site photography plates.

**Replacing Verification Tokens**:
Search for `[VERIFY` across `src/data/` to replace placeholder credentials, contractor registration numbers, and founder details with official verified corporate credentials prior to public marketing campaigns.

---

## 7. Security Architecture Notes

- **Content-Security-Policy**: Configured in `next.config.js`. Note that `'unsafe-eval'` is disabled in production. External resources are strictly restricted to Google Fonts and Unsplash CDN.
- **Reverse Proxy Protection**: The rate limiter inspects `x-forwarded-for`, `x-real-ip`, and `cf-connecting-ip`. Ensure your CDN / reverse proxy strips untrusted client headers.
- **Cross-Domain Defense**: `X-Frame-Options: DENY` and `X-Permitted-Cross-Domain-Policies: none` are active.

---

## 8. Post-Deployment Verification Checklist

After deploying to production, execute this 10-point check:
1. [ ] **Homepage Verification**: Open `https://your-domain.com` and check that the clean construction visual system (`#F4F2EE` background, `#18324A` navy, `#D96B27` orange) renders smoothly without layout shifts.
2. [ ] **Navigation & Mobile Drawer**: Confirm desktop navigation links and mobile hamburger menu open, close, and respond to the `Escape` key.
3. [ ] **Dynamic Pre-Rendered Pages**: Click through `/services/residential-construction`, `/projects/residential-building-4-floors`, and `/blog/how-to-choose-tmt-steel-for-house-construction`.
4. [ ] **Interactive Lightbox**: Open `/gallery`, click a construction plate, and verify keyboard `Escape` closes the modal.
5. [ ] **Contact Form Submission**: Submit a valid enquiry on `/contact` and confirm the success alert and reference ID (`GGC-XXXXXX`) render.
6. [ ] **Quote Form Submission**: Complete a multi-step estimate request on `/get-a-quote` and confirm reference ID generation (`GGE-XXXXXX`).
7. [ ] **Rate Limiting**: Fire 6 rapid submissions and verify the 6th returns a friendly wait notice with `Retry-After`.
8. [ ] **404 Handling**: Navigate to `https://your-domain.com/random-path` and verify the branded 404 page.
9. [ ] **Sitemap & Robots**: Verify `https://your-domain.com/sitemap.xml` and `https://your-domain.com/robots.txt` respond with HTTP 200.
10. [ ] **Security Headers**: Inspect response headers in Chrome DevTools to confirm HSTS, CSP, X-Frame-Options, and X-Content-Type-Options are served.
