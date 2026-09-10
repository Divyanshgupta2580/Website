/**
 * Resolves the application base URL safely and deterministically across environments.
 *
 * Rules:
 * 1. If NEXT_PUBLIC_APP_URL is explicitly configured, normalize and return it.
 * 2. In Vercel preview deployments (VERCEL_ENV === "preview"), automatically use the
 *    dynamic preview deployment URL (https://${VERCEL_URL}).
 * 3. In local development or testing (NODE_ENV !== "production"), fall back to
 *    http://localhost:3000 (or PORT if defined) so local development remains frictionless.
 * 4. In production environments (NODE_ENV === "production"), if NEXT_PUBLIC_APP_URL is missing,
 *    throw an explicit Configuration Error. Production deployments cannot silently use an
 *    unverified canonical domain.
 */
export function getBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();

  // 1. Explicitly configured application URL
  if (envUrl && envUrl.length > 0) {
    const normalized = envUrl.startsWith("http://") || envUrl.startsWith("https://")
      ? envUrl
      : `https://${envUrl}`;
    return normalized.replace(/\/+$/, "");
  }

  // 2. Vercel Preview Deployments (preview branch deployments have verified Vercel preview domains)
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/+$/, "")}`;
  }

  // 3. Local Development & Test Environments
  if (process.env.NODE_ENV !== "production") {
    const port = process.env.PORT || "3000";
    return `http://localhost:${port}`;
  }

  // 4. Production Deployment Missing Configured URL
  // Under no circumstances allow production to silently use an unverified canonical domain.
  throw new Error(
    "Configuration Error: NEXT_PUBLIC_APP_URL is required in production environments.\n" +
    "Sitemaps, robots.txt, OpenGraph social cards, and canonical metadata cannot silently " +
    "fall back to an unverified domain.\n" +
    "Please configure NEXT_PUBLIC_APP_URL with your verified production domain " +
    "(e.g., https://www.example.com) in your deployment platform settings."
  );
}
