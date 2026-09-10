/**
 * Memory-safe sliding-window rate limiter for serverless & edge API routes.
 * Automatically cleans up expired tracking records to prevent memory inflation.
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

/**
 * Extracts client IP safely from incoming request headers.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // Leftmost IP is the original client
    const clientIp = forwardedFor.split(",")[0].trim();
    if (clientIp) return clientIp;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }

  return "127.0.0.1";
}
