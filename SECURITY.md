# Security Documentation

## 🛡️ Security Overview

This portfolio website implements comprehensive security measures to protect against various attack vectors including SSRF (Server-Side Request Forgery), open proxy abuse, and other common web vulnerabilities.

## 🔒 Current Security Posture

### ✅ **Secure by Design**
- **Static Site Architecture**: Primarily static content with no dynamic server-side processing
- **No User Input Processing**: No forms or APIs that process untrusted user data
- **Hardcoded External Links**: All external URLs are developer-controlled and validated
- **Zero Attack Surface**: No API routes, middleware, or server actions that could be exploited

### 🛡️ **Implemented Security Measures**

#### 1. **Security Middleware** (`middleware.ts`)
Provides defense-in-depth protection for future development:

```typescript
// Key Features:
- SSRF Protection: Blocks requests to internal/private IP addresses
- Domain Allowlisting: Only permits requests to approved external domains
- Parameter Validation: Monitors suspicious URL parameters
- Security Headers: Adds comprehensive security headers to all responses
```

**Protected Against:**
- Internal IP access (`localhost`, `127.0.0.1`, `192.168.*`, `10.*`, etc.)
- Suspicious parameters (`url`, `target`, `host`, `redirect`, `proxy`, `fetch`)
- Unauthorized external domains
- Missing security headers

#### 2. **Security Utilities** (`src/lib/security.ts`)
Provides safe functions for external requests:

```typescript
// Available Functions:
- isUrlSafe(): Validates URLs against security policies
- safeFetch(): Secure wrapper around fetch() with validation
- validateRedirectUrl(): Sanitizes redirect URLs
```

#### 3. **Security Headers**
Automatically applied via `next.config.mjs`:

| Header | Value | Protection |
|--------|-------|------------|
| `X-Content-Type-Options` | `nosniff` | MIME sniffing attacks |
| `X-Frame-Options` | `DENY` | Clickjacking attacks |
| `X-XSS-Protection` | `1; mode=block` | Cross-site scripting |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Information leakage |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Unauthorized API access |

## 🚨 **Vulnerability Assessment**

### ❌ **No SSRF Vulnerabilities Found**
- No server-side request handling
- No `fetch()`, `axios`, or HTTP client usage
- No API routes (`pages/api/*` or `app/api/*`)
- No middleware that processes external requests

### ❌ **No Open Proxy Vulnerabilities**
- No proxy functionality implemented
- No request forwarding mechanisms
- No dynamic URL routing that could be exploited

### ❌ **No Request Injection Vulnerabilities**
- No dynamic URL processing from user input
- No query parameter handling for external requests
- All external links are static and hardcoded

## 🔧 **Security Best Practices Implemented**

### 1. **Environment Variable Security**
```env
# Only public variables are used
NEXT_PUBLIC_SITE_URL=https://example.com
```
- No sensitive credentials in client-side code
- Proper scoping with `NEXT_PUBLIC_*` prefix

### 2. **External Domain Validation**
```typescript
// Approved domains for future API development
const ALLOWED_DOMAINS = [
  'vitals.vercel-insights.com',
  'vercel.com',
  'vercel-insights.com'
]
```

### 3. **Safe Navigation**
- All external links use static, developer-controlled URLs
- No dynamic link generation from user input
- Proper `target="_blank"` and `rel="noopener noreferrer"` usage

## 🔍 **Security Monitoring**

### **Middleware Logging**
The security middleware logs blocked requests with specific headers:

```http
X-Security-Block: SSRF-Protection    # Internal IP blocked
X-Security-Block: Domain-Allowlist   # Unauthorized domain blocked
X-Security-Block: Invalid-URL        # Malformed URL blocked
```

### **Response Codes**
- `403 Forbidden`: Security policy violation
- `400 Bad Request`: Invalid URL format

## 🚀 **Future Security Considerations**

### **When Adding New Features:**

#### ✅ **Safe Patterns**
- Static content and images
- Client-side navigation with Next.js `Link`
- Environment variables with `NEXT_PUBLIC_*` prefix
- Hardcoded external links

#### ⚠️ **Requires Security Review**
- API routes (`pages/api/*` or `app/api/*`)
- Server-side data fetching (`getServerSideProps`, `getStaticProps`)
- Dynamic routing with user input
- Form submission handling
- External API integrations

### **Security Checklist for New Features**

Before adding server-side functionality:

- [ ] Review all user input validation
- [ ] Implement proper URL validation using `isUrlSafe()`
- [ ] Use `safeFetch()` for external requests
- [ ] Add new domains to `ALLOWED_DOMAINS` allowlist
- [ ] Test against SSRF payloads
- [ ] Validate all redirect URLs
- [ ] Add appropriate rate limiting
- [ ] Log security events for monitoring

## 🛠️ **Security Testing**

### **Manual Testing Commands**

Test middleware protection:
```bash
# Should be blocked - internal IP
curl "https://yoursite.com/?url=http://localhost:3000"

# Should be blocked - private IP
curl "https://yoursite.com/?target=http://192.168.1.1"

# Should be blocked - unauthorized domain
curl "https://yoursite.com/?redirect=http://evil.com"
```

### **Automated Security Scanning**

Recommended tools:
- **OWASP ZAP**: Web application security scanner
- **Burp Suite**: Professional security testing
- **npm audit**: Dependency vulnerability scanning
- **Snyk**: Continuous security monitoring

## 📞 **Security Contact**

For security-related issues or questions:

1. **Review** this documentation first
2. **Test** using the security utilities in `src/lib/security.ts`
3. **Validate** against the middleware protection in `middleware.ts`
4. **Contact** the development team for security reviews

## 📚 **Security Resources**

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Next.js Security Best Practices](https://nextjs.org/docs/going-to-production#security-headers)
- [Vercel Security](https://vercel.com/docs/security)

---

**Last Updated:** January 31, 2026  
**Security Status:** ✅ **SECURE** - No known vulnerabilities  
**Next Review:** April 30, 2026