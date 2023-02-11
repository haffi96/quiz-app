import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    const supabase = createMiddlewareSupabaseClient({ req, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Check auth condition
    if (session?.access_token) {
      // Authentication successful, forward request to protected route.x
      return res
    }

    // Auth condition not met, redirect to home page.
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  export const config = {
    matcher: ['/admin/:path*', '/questions/:path*', '/profile/:path*'],
  };