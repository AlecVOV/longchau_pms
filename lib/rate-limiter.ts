// lib/rate-limiter.ts
// Simple in-memory rate limiter for API endpoints

interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxRequests: number // Maximum requests per window
  keyGenerator?: (event: any) => string // Custom key generator
}

interface RequestInfo {
  count: number
  resetTime: number
}

// In-memory store (in production, use Redis or database)
const requestStore = new Map<string, RequestInfo>()

// Cleanup expired entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, info] of requestStore.entries()) {
    if (info.resetTime < now) {
      requestStore.delete(key)
    }
  }
}, 5 * 60 * 1000)

export function createRateLimiter(config: RateLimitConfig) {
  return (event: any) => {
    const now = Date.now()
    
    // Generate key (default: IP address)
    const key = config.keyGenerator 
      ? config.keyGenerator(event)
      : getClientIP(event) || 'unknown'

    // Get or create request info
    let requestInfo = requestStore.get(key)
    
    if (!requestInfo || requestInfo.resetTime < now) {
      // Create new window
      requestInfo = {
        count: 1,
        resetTime: now + config.windowMs
      }
      requestStore.set(key, requestInfo)
      return { allowed: true, remaining: config.maxRequests - 1 }
    }

    // Check if limit exceeded
    if (requestInfo.count >= config.maxRequests) {
      return { 
        allowed: false, 
        remaining: 0,
        resetTime: requestInfo.resetTime
      }
    }

    // Increment counter
    requestInfo.count++
    requestStore.set(key, requestInfo)

    return { 
      allowed: true, 
      remaining: config.maxRequests - requestInfo.count 
    }
  }
}

// Rate limiter middleware
export function withRateLimit(config: RateLimitConfig) {
  const rateLimiter = createRateLimiter(config)
  
  return (handler: Function) => {
    return defineEventHandler(async (event) => {
      const result = rateLimiter(event)
      
      if (!result.allowed) {
        const retryAfter = Math.ceil((result.resetTime! - Date.now()) / 1000)
        
        throw createError({
          statusCode: 429,
          statusMessage: 'Too Many Requests',
          data: {
            error: 'Rate limit exceeded',
            retryAfter
          }
        })
      }

      // Add rate limit headers
      setHeader(event, 'X-RateLimit-Limit', config.maxRequests.toString())
      setHeader(event, 'X-RateLimit-Remaining', result.remaining.toString())
      setHeader(event, 'X-RateLimit-Reset', Math.ceil(result.resetTime! / 1000).toString())

      // Call original handler
      return handler(event)
    })
  }
}

// Predefined rate limiters
export const authRateLimit = withRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5 // 5 login attempts per IP per 15 minutes
})

export const apiRateLimit = withRateLimit({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100 // 100 requests per IP per minute
})

export const orderRateLimit = withRateLimit({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10 // 10 orders per IP per minute
})

// Helper to get client IP
function getClientIP(event: any): string | null {
  // Try various headers that might contain the real IP
  const headers = [
    'x-forwarded-for',
    'x-real-ip',
    'x-client-ip',
    'cf-connecting-ip',
    'x-cluster-client-ip'
  ]

  for (const header of headers) {
    const value = getHeader(event, header)
    if (value) {
      // x-forwarded-for can contain multiple IPs, take the first one
      return value.split(',')[0].trim()
    }
  }

  // Fallback to connection remote address
  return event.node?.req?.connection?.remoteAddress || 
         event.node?.req?.socket?.remoteAddress || 
         null
}
