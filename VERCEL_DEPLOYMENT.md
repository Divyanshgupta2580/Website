# GG Construction Co. — Vercel Deployment Guide
*Platform: Vercel | Architecture: Next.js 14 App Router | Deployment Mode: Serverless & Edge CDN*

---

## 1. Executive Summary & Vercel Compatibility

The **GG Construction Co.** web platform is built on standard Next.js App Router conventions with zero proprietary server wrappers, zero hardcoded ports, and zero runtime filesystem dependencies. It is 100% compatible with Vercel's native zero-configuration deployment workflow.

> [!NOTE]
> **Operational Disclaimer:**
> In accordance with transparent engineering principles, this platform is **NOT claimed to be "100% secure," "bug free," or "perfect."** Security is an active operational discipline. Factual business placeholders marked `[VERIFY ...]` in the typed data layer must be confirmed by corporate leadership prior to formal marketing campaigns.

---

## 2. Port Configuration & Vercel Architecture Audit

### Port Audit Finding
- **Zero Hardcoded Production Ports**: The application does **NOT** require a fixed port for production deployment on Vercel.
- **PORT Behavior on Vercel**:
  Vercel is an ephemeral serverless and global Edge network. In production on Vercel, incoming HTTP/HTTPS traffic is routed dynamically across Vercel's edge infrastructure to static CDN nodes and serverless lambdas. **No port configuration is needed or used.** The application is completely safe to deploy on Vercel without changing any port settings.

---

## 3. Step-by-Step Vercel Deployment

### Step 1: Push to Git Remote
Ensure your latest changes are pushed to your remote repository:
```bash
git push origin main
```
Remote repository: `https://github.com/Divyanshgupta2580/Website.git`

### Step 2: Import into Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **"Add New..."** > **"Project"**.
3. Import the `Website` repository from your GitHub account.
4. Framework Preset: **Next.js** (automatically detected).
5. Root Directory: `./` (leave default).
6. Build Command: `next build` (leave default).
7. Output Directory: `.next` (leave default).
8. Install Command: `npm install` (leave default).

### Step 3: Configure Environment Variables

> **`RESEND_API_KEY` is the ONLY variable you must enter into Vercel.**

In the **Environment Variables** section before deploying (or in Project Settings > Environment Variables):

| Key | Value | Environment | Scope | Where to Obtain |
| :--- | :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_...` (your Resend API key) | Production & Preview | Server-only — **Required** | [resend.com/api-keys](https://resend.com/api-keys) |

> **Runtime Environment Notes:**
> - `RESEND_API_KEY`: **Sole required variable.** Forwards form submissions from Contact Us and Get a Quote directly to `gunjan29gupta@gmail.com`.
> - Enable **Automatically expose System Environment Variables**. The application uses `VERCEL_PROJECT_PRODUCTION_URL` for canonical metadata and `VERCEL_URL` for previews; neither requires a manually entered value. `NEXT_PUBLIC_APP_URL` is completely eliminated.
> - `NODE_ENV`: Automatically managed by Next.js and Vercel (`production` for production builds/deployments). Do **not** set manually in Vercel project settings.
> - `PORT`: Dynamically controlled by Vercel's serverless runtime. Do **not** define `PORT`.
> - `DATABASE` / `AUTH`: This application does not require database or authentication credentials.
> - Zero other variables are needed.

### Step 4: Deploy
Click **"Deploy"**. Vercel will:
- Execute `npm install`
- Compile all static and dynamic routes with `next build`
- Deploy static assets to Vercel Edge Network
- Deploy API route handlers (`/api/contact`, `/api/quote`) as serverless functions
- Provision an automatic preview URL (e.g. `https://website-xxxx.vercel.app`)

---

## 4. Custom Domain Configuration

To connect the corporate domain (e.g., `ggconstruction.com`):
1. Navigate to **Project Settings** > **Domains** in your Vercel Dashboard.
2. Enter `ggconstruction.com` and `www.ggconstruction.com`.
3. Configure your DNS provider with the records provided by Vercel:
   - **Apex domain (`@`)**: A record pointing to `76.76.21.21`
   - **Subdomain (`www`)**: CNAME record pointing to `cname.vercel-dns.com`
4. Vercel automatically validates DNS and provisions a free SSL/TLS certificate via Let's Encrypt with automated renewal.
5. Enable **Automatically expose System Environment Variables** in Project Settings. Vercel then provides the connected production domain automatically.

---

## 5. Form Handling & Protected Routing Audit

### Form Submissions Out-of-the-Box
Both `/api/contact` and `/api/quote` work self-contained:
- Enforce strict server-side Zod validation on all input fields.
- Block automated bots via hidden honeypots (`bot_field`).
- Enforce 32 KB payload limits.
- Log sanitized submission metadata server-side with masked IPs (no PII leakage).
- Return a successful confirmation reference ID (`GGC-XXXXXX` or `GGE-XXXXXX`) to the user.
- Forward notifications via Resend directly to `gunjan29gupta@gmail.com`.
- **Never crash, throw unhandled exceptions, or leak internal server details.**

### Protected Routing Audit
- **Public Routes**: 33 route definitions (31 prerendered pages + 2 public enquiry APIs).
- **Protected Routes**: 0.
- **Admin Routes**: 0.
- **Authentication Present**: NO.
- **Authorization Present**: NO.
- **Architectural Reason**: The application is a public corporate website for a building construction company and contains no authenticated/private functionality requiring route protection. All marketing, project, and service pages are intentionally open to visitors and search engines. No artificial authentication is added.

---

## 6. Security Considerations & Edge Architecture

1. **Security Response Headers**:
   Configured in `next.config.js` and automatically enforced across all Vercel edge responses:
   - `Content-Security-Policy`: Restricts script and asset execution.
   - `X-Frame-Options: DENY`: Prevents iframe clickjacking.
   - `X-Content-Type-Options: nosniff`: Prevents MIME confusion exploits.
   - `Strict-Transport-Security`: Enforces HTTPS with 2-year HSTS preload.
   - `Permissions-Policy`: Disables microphone, camera, and geolocation.
2. **Serverless Rate Limiting Caveat**:
   - The built-in sliding-window limiter (`src/lib/rate-limit.ts`) operates in local process memory.
   - On Vercel, requests may be routed to different serverless function instances across geographic regions.
   - For globally synchronized rate limiting across distributed serverless instances, consider enabling **Vercel Firewall (WAF)** in the dashboard or configuring an external atomic cache like Upstash Redis (`@upstash/ratelimit`).
3. **Zero Secrets in Bundles**:
   - No environment variable is exposed to the browser.
   - `.env*` files remain strictly ignored via `.gitignore`.
4. **Stateless Operations**:
   - The application does not write to the local filesystem at runtime, making it fully compliant with Vercel's read-only serverless environment.

---

## 7. Post-Deployment Verification Checklist

Once deployed on Vercel, verify:

- [ ] **Homepage Health**: Visit `https://your-domain.com/` — page loads with clean construction visual palette (`#F4F2EE`), images load from Unsplash, and layout is crisp.
- [ ] **Security Headers**: Run `curl -I https://your-domain.com/` and confirm `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security` are present.
- [ ] **Sitemap Verification**: Visit `https://your-domain.com/sitemap.xml` — confirm XML loads and all URLs use `https://your-domain.com` (no localhost).
- [ ] **Robots.txt Verification**: Visit `https://your-domain.com/robots.txt` — confirm sitemap URL points to production domain.
- [ ] **404 Page**: Visit `https://your-domain.com/non-existent-page` — confirm branded not-found page renders.
- [ ] **Contact Form Submission**: Submit a message at `/contact` — verify instant reference ID (`GGC-XXXXXX`).
- [ ] **Quote Form Submission**: Submit a specification at `/get-a-quote` — verify instant reference ID (`GGE-XXXXXX`).
- [ ] **Mobile Drawer**: Test mobile menu on a smartphone or browser responsive mode (375px/320px).
- [ ] **Honeypot Trap**: Verify bot submissions return HTTP 400.
- [ ] **Payload Limits**: Verify submissions >32KB return HTTP 413.
