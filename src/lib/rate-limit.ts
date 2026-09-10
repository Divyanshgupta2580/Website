/**
 * Memory-safe sliding-window rate limiter for single-instance Next.js deployments.
 * Automatically cleans up expired tracking records to prevent memory inflation.
 *
 * ARCHITECTURAL CAVEAT & MULTI-INSTANCE DEPLOYMENT NOTE:
 * This rate limiter utilizes an in-process Map store. It provides effective protection
 * against abuse on single-instance server or container deployments (e.g. standard Node.js VM).
 * In multi-instance or serverless environments (e.g., Vercel multiple regions, AWS ECS cluster
 * with >1 task, Kubernetes with multiple replicas), each instance maintains its own memory pool.
 * For globally distributed rate limiting across horizontal clusters, replace this in-memory store
 * with an external atomic cache like Redis / Upstash (e.g., @upstash/ratelimit).
 *
 * REVERSE PROXY TRUST NOTICE:
 * To prevent IP spoofing, ensure your edge ingress (Nginx, Cloudflare, AWS ALB) is configured to
 * overwrite or strip incoming client-forged `X-Forwarded-For` and `X-Real-IP` headers before
 * proxying traffic to the Next.js origin server.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Periodic garbage collection every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupExpiredRecords(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const expiry = now - windowMs;
  rateLimitStore.forEach((record, key) => {
    const validTimestamps = record.timestamps.filter((ts) => ts > expiry);
    if (validTimestamps.length === 0) {
      rateLimitStore.delete(key);
    } else {
      record.timestamps = validTimestamps;
    }
  });
}

export interface RateLimitOptions {
  windowMs?: number; // Time frame in milliseconds (default 60s)
  maxRequests?: number; // Max allowable requests per window (default 5)
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number; // Seconds until window reset
}

/**
 * Checks if a given identifier (e.g. client IP) has exceeded the rate limit.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const windowMs = options.windowMs ?? 60 * 1000;
  const maxRequests = options.maxRequests ?? 5;
  const now = Date.now();

  cleanupExpiredRecords(windowMs);

  const key = identifier || "unknown-client";
  let record = rateLimitStore.get(key);

  if (!record) {
    record = { timestamps: [] };
    rateLimitStore.set(key, record);
  }

  // Filter timestamps within current sliding window
  const windowStart = now - windowMs;
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= maxRequests) {
    const oldestTimestamp = record.timestamps[0];
    const resetTime = Math.ceil((oldestTimestamp + windowMs - now) / 1000);
    return {
      success: false,
      limit: maxRequests,
      remaining: 0,
      resetTime: resetTime > 0 ? resetTime : 1,
    };
  }

  // Record this request
  record.timestamps.push(now);

  const resetTime = Math.ceil(windowMs / 1000);
  return {
    success: true,
    limit: maxRequests,
    remaining: maxRequests - record.timestamps.length,
    resetTime,
  };
}

// Regex to validate IPv4 and basic IPv6 formats to prevent key poisoning
const IPV4_REGEX = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
const IPV6_REGEX = /^[a-fA-F0-9:]+$/;

function isValidIp(ip: string): boolean {
  if (!ip || ip.length > 45) return false;
  return IPV4_REGEX.test(ip) || IPV6_REGEX.test(ip);
}

/**
 * Extracts client IP safely from incoming request headers with trusted proxy hierarchy.
 * Priority order:
 * 1. `cf-connecting-ip` (Cloudflare edge authenticated)
 * 2. `x-real-ip` (Trusted edge proxy / Nginx)
 * 3. `x-forwarded-for` (Leftmost client IP, validated)
 */
export function getClientIp(request: Request): string {
  // 1. Cloudflare authenticated client IP
  const cfConnectingIp = request.headers.get("cf-connecting-ip")?.trim();
  if (cfConnectingIp && isValidIp(cfConnectingIp)) {
    return cfConnectingIp;
  }

  // 2. Direct upstream proxy client IP (e.g. Nginx $remote_addr)
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp && isValidIp(realIp)) {
    return realIp;
  }

  // 3. X-Forwarded-For header chain
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // Leftmost entry represents original client if proxy correctly appends
    const candidate = forwardedFor.split(",")[0].trim();
    if (isValidIp(candidate)) {
      return candidate;
    }
  }

  return "127.0.0.1";
}
