# GG Construction Co. — Production Deployment Guide

A streamlined, production-ready guide for deploying and maintaining the **GG Construction Co.** web application.

---

## 1. Environment Variables

Create a `.env.local` (for local development) or configure these in your production hosting platform (e.g. Vercel, AWS Amplify, Docker):

| Variable | Required | Default / Example | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Optional | `https://ggconstruction.com` | Base URL used for OpenGraph images, canonical tags, and sitemaps. |
| `NODE_ENV` | Yes | `production` | Enables production optimizations and disables debug warnings. |
| `PORT` | Optional | `3000` | Port for the standalone Next.js server. |
| `EMAIL_SERVICE_API_KEY` | Optional | `re_...` or SendGrid Key | (Future) API key for live email notification dispatch from `/api/contact` & `/api/quote`. |
| `CRM_WEBHOOK_URL` | Optional | `https://crm.ggconstruction.com/hooks/lead` | (Future) Webhook endpoint for direct CRM lead ingestion. |

A template is maintained in [.env.example](file:///.env.example).

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
- **50 Pre-Rendered Routes** (Static Site Generation for all services, projects, materials, and blog deep dives).
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
4. Configure `NEXT_PUBLIC_APP_URL` in Project Settings > Environment Variables.
5. Deploy. (Automatic global CDN caching, Edge rate limiting, and SSL provisioning).

### Option B: Docker / Node.js VM / AWS ECS
A minimal production Docker container can be run using the standard Next.js standalone output:
```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY .next ./.next
COPY public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
```

---

## 5. Form & Lead Dispatch Integration

Currently, `/api/contact` and `/api/quote`:
1. Validate all payloads using server-side **Zod schemas**.
2. Reject non-JSON bodies (`415`) and oversized payloads > 32 KB (`413`).
3. Reject bot crawlers via honeypot traps (`400`).
4. Throttle abusive clients with **sliding-window IP rate limiting** (`429`).
5. Log masked dossiers (`[INCOMING ENQUIRY RECEIVED]`) and return unique reference numbers (`GGC-XXXXXX` / `GGE-XXXXXX`).

### Attaching Live Email (e.g., Resend / SendGrid)
In `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts`, uncomment the notification trigger:
```typescript
// Example: Resend Integration
await resend.emails.send({
  from: "enquiries@ggconstruction.com",
  to: "directorate@ggconstruction.com",
  subject: `[New Enquiry] ${sanitizedData.subject}`,
  text: `From: ${sanitizedData.name} (${sanitizedData.email})\nPhone: ${sanitizedData.phone}\n\n${sanitizedData.message}`,
});
```

---

## 6. Content & CMS Migration Notes

All corporate copy, project plates, material specifications, and FAQs are currently managed as strictly typed TypeScript data modules under `src/data/`:
- [`src/data/company.ts`](file:///src/data/company.ts): Corporate addresses, phone numbers, WhatsApp lines, milestones, values.
- [`src/data/services.ts`](file:///src/data/services.ts): 9 construction service scopes, deliverables, and capabilities.
- [`src/data/projects.ts`](file:///src/data/projects.ts): 7 flagship projects with itemized technical specifications and outcomes.
- [`src/data/materials.ts`](file:///src/data/materials.ts): 10 bulk material categories, grades, and packaging sizes.
- [`src/data/faqs.ts`](file:///src/data/faqs.ts): 16 grouped technical and commercial FAQs.
- [`src/data/blog.ts`](file:///src/data/blog.ts): Technical engineering articles and statutory due diligence deep dives.

**Replacing Verification Tokens**:
Search for `[VERIFY` across `src/data/` to replace placeholder statistics, client names, and founder biographies with official verified corporate credentials before public marketing campaigns.

**Headless CMS Migration**:
To connect a headless CMS (Sanity, Contentful, Strapi), swap the static array imports in `src/data/` with fetch queries in `generateStaticParams()` and page components without modifying the presentation components.

---

## 7. Security Architecture Notes

- **Content-Security-Policy**: Configured in `next.config.js`. Note that `'unsafe-eval'` is disabled in production. External resources are strictly restricted to Google Fonts and Unsplash CDN.
- **Reverse Proxy Protection**: The rate limiter inspects `x-forwarded-for`, `x-real-ip`, and `cf-connecting-ip`. Ensure your CDN / reverse proxy strips untrusted client headers.
- **Cross-Domain Defense**: `X-Frame-Options: DENY` and `X-Permitted-Cross-Domain-Policies: none` are active.

---

## 8. Post-Deployment Verification Checklist

After deploying to production, execute this 10-point check:
1. [ ] **Homepage Verification**: Open `https://your-domain.com` and check that the dark architectural theme renders smoothly without layout shifts.
2. [ ] **Navigation & Mobile Drawer**: Confirm desktop navigation links and mobile hamburger menu open, close, and respond to the `Escape` key.
3. [ ] **Dynamic Pre-Rendered Pages**: Click through `/services/turnkey-construction`, `/projects/apex-commercial-tower`, `/materials/tmt-steel`, and `/blog/understanding-is-1786-seismic-ductility-fe500d`.
4. [ ] **Interactive Lightbox**: Open `/gallery`, click an architectural plate, and verify keyboard `Escape` closes the modal.
5. [ ] **Contact Form Submission**: Submit a valid enquiry on `/contact` and confirm the success alert and reference ID (`GGC-XXXXXX`) render.
6. [ ] **Quote Form Submission**: Complete a multi-step estimate request on `/get-a-quote` and confirm reference ID generation (`GGE-XXXXXX`).
7. [ ] **Rate Limiting**: Fire 6 rapid submissions and verify the 6th returns a friendly wait notice with `Retry-After`.
8. [ ] **404 Handling**: Navigate to `https://your-domain.com/random-path` and verify the architectural 404 page ("Blueprint Not Found").
9. [ ] **Sitemap & Robots**: Verify `https://your-domain.com/sitemap.xml` and `https://your-domain.com/robots.txt` respond with HTTP 200.
10. [ ] **Security Headers**: Inspect response headers in Chrome DevTools to confirm HSTS, CSP, X-Frame-Options, and X-Content-Type-Options are served.
