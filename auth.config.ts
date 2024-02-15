import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  debug: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // authorized는 middle 에서 호출된다. 로그인 했으면 /dashboard로 리디렉션 , 
    authorized({ auth, request: { nextUrl }}) {
      console.log('auth.config.ts...authorized running...')
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')

      return isOnDashboard ? isLoggedIn : (isLoggedIn ? Response.redirect
        (new URL('/dashboard', nextUrl)) : true)
    }
  },
  providers: [], // Providers are added in auth.ts
} satisfies NextAuthConfig;