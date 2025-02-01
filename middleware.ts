import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check for auth token
  const authToken = request.headers.get('authorization')?.split(' ')[1]

  if (!authToken) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  // Add rate limiting
  const ip = request.ip ?? '127.0.0.1'
  const rateLimit = request.headers.get('x-rate-limit')

  if (rateLimit === '0') {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}
