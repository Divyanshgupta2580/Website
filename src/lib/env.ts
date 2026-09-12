/**
 * Resolves the application base URL safely and deterministically across environments.
 *
 * The site has no manually managed URL variable. On Vercel, use the platform's
 * production-domain value for stable metadata, sitemap, and robots URLs. Preview
 * deployments fall back to their generated deployment URL. Locally, use the
 * conventional development URL.
 *
 * To make Vercel system variables available, enable "Automatically expose System
 * Environment Variables" in the Vercel project's Environment Variables settings.
 */
export function getBaseUrl(): string {
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() || process.env.VERCEL_URL?.trim();

  if (vercelUrl) {
    const normalized = vercelUrl.startsWith("http://") || vercelUrl.startsWith("https://")
      ? vercelUrl
      : `https://${vercelUrl}`;
    return normalized.replace(/\/+$/, "");
  }

  return "http://localhost:3000";
}
