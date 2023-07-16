import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  // const supabase = createRouteHandlerClient({ cookies })
  // const { searchParams } = new URL(req.url)
  // const code = searchParams.get('code')

  // if (code) {
  //   const supabase = createRouteHandlerClient({ cookies })
  //   await supabase.auth.exchangeCodeForSession(code)
  // }

  // URL to redirect to after sign in process completes
  const requestUrl = new URL(req.url);
  return NextResponse.redirect(requestUrl.origin)
  // return NextResponse.redirect(new URL('/account', req.url))
}
