import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'
import { USERNAME } from './utils/config'

export default function middleware(request: NextRequest) {
  const hasUserSession = cookies().has(USERNAME)
  console.log({ USERNAME, hasUserSession })
  if (!hasUserSession) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/info/:path*'],
}
