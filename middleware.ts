// Security middleware for future API routes
import { NextRequest, NextResponse } from 'next/server'

// List of allowed external domains for future use
const ALLOWED_DOMAINS = [

]

export function middleware(request: NextRequest) {
  // Future-proof: Block potential SSRF attempts
  const url = request.url
  const searchParams = request.nextUrl.searchParams
  
  // Check for common SSRF parameter names
  const suspiciousParams = ['url', 'target', 'host', 'redirect', 'proxy', 'fetch']
  
  for (const param of suspiciousParams) {
    const value = searchParams.get(param)
    if (value) {
      try {
        const targetUrl = new URL(value)
        const hostname = targetUrl.hostname.toLowerCase()
        
        // Block internal/private IPs
        if (
          hostname === 'localhost' ||
          hostname === '127.0.0.1' ||
          hostname.startsWith('192.168.') ||
          hostname.startsWith('10.') ||
          hostname.startsWith('172.16.') ||
          hostname.startsWith('172.17.') ||
          hostname.startsWith('172.18.') ||
          hostname.startsWith('172.19.') ||
          hostname.startsWith('172.2') ||
          hostname.startsWith('172.30.') ||
          hostname.startsWith('172.31.') ||
          hostname === '::1' ||
          hostname.startsWith('169.254.') ||
          hostname.startsWith('0.0.0.0')
        ) {
          return new NextResponse('Blocked: Internal IP access not allowed', { 
            status: 403,
            headers: {
              'X-Security-Block': 'SSRF-Protection'
            }
          })
        }
        
        // For future API routes: validate against allowlist
        if (!ALLOWED_DOMAINS.some(domain => hostname === domain || hostname.endsWith('.' + domain))) {
          return new NextResponse('Blocked: Domain not in allowlist', { 
            status: 403,
            headers: {
              'X-Security-Block': 'Domain-Allowlist'
            }
          })
        }
      } catch (e) {
        // Invalid URL format
        return new NextResponse('Blocked: Invalid URL format', { 
          status: 400,
          headers: {
            'X-Security-Block': 'Invalid-URL'
          }
        })
      }
    }
  }
  
  // Add security headers
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}