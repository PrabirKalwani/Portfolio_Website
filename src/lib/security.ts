// Secure utility functions for future development
import { URL } from 'url'

/**
 * Validates if a URL is safe to fetch (no SSRF)
 * @param urlString - The URL to validate
 * @param allowedDomains - List of allowed domains
 * @returns boolean - true if safe, false if not
 */
export function isUrlSafe(urlString: string, allowedDomains: string[]): boolean {
  try {
    const url = new URL(urlString)
    const hostname = url.hostname.toLowerCase()
    
    // Block private/internal IPs
    const privateIpPatterns = [
      /^localhost$/,
      /^127\./,
      /^192\.168\./,
      /^10\./,
      /^172\.(1[6-9]|2[0-9]|3[01])\./,
      /^::1$/,
      /^169\.254\./,
      /^0\.0\.0\.0$/
    ]
    
    for (const pattern of privateIpPatterns) {
      if (pattern.test(hostname)) {
        return false
      }
    }
    
    // Check against allowlist
    return allowedDomains.some(domain => 
      hostname === domain || hostname.endsWith('.' + domain)
    )
  } catch (error) {
    return false
  }
}

/**
 * Safely fetch external URLs with validation
 * @param url - URL to fetch
 * @param options - Fetch options
 * @returns Promise<Response>
 */
export async function safeFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const allowedDomains = [
    'medium.com',
    'github.com',
    'api.github.com',
    // Add your trusted domains here
  ]
  
  if (!isUrlSafe(url, allowedDomains)) {
    throw new Error('URL not allowed: Security policy violation')
  }
  
  // Add timeout to prevent hanging requests
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      // Add security headers for outbound requests
      headers: {
        'User-Agent': 'Portfolio-Website/1.0',
        ...options.headers,
      },
    })
    
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

/**
 * Validate and sanitize redirect URLs
 * @param redirectUrl - The URL to redirect to
 * @param allowedDomains - List of allowed domains for redirects
 * @returns string - Safe redirect URL or null if invalid
 */
export function validateRedirectUrl(redirectUrl: string, allowedDomains: string[]): string | null {
  if (!redirectUrl) return null
  
  try {
    const url = new URL(redirectUrl)
    
    // Only allow HTTPS for external redirects
    if (url.protocol !== 'https:') {
      return null
    }
    
    if (isUrlSafe(redirectUrl, allowedDomains)) {
      return url.href
    }
    
    return null
  } catch (error) {
    return null
  }
}