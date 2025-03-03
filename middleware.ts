// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Decode the pathname to handle Hebrew characters
  const decodedPathname = decodeURIComponent(pathname)
  console.log('Decoded pathname:', decodedPathname) // Debugging

  // Rewrite the URL for specific Hebrew paths
  if (decodedPathname === '/אודות') {
    console.log('Rewriting to /about') // Debugging
    return NextResponse.rewrite(new URL('/about', request.url))
  }

  // Continue to the next middleware or route handler
  return NextResponse.next()
}

export const config = {
  matcher: ['/אודות'],
}
