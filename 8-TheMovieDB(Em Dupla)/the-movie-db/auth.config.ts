import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { fetchSessionId } from './app/src/services/service';

export const authConfig = {
  pages: {
    signIn: '/src/login',
  },
  callbacks: {
    async jwt({ token, user, session, trigger  }) {
      console.log('JWT callback');
      if (user) {
        token.requestToken = (user as any).requestToken;
      }
      if (trigger === 'update') {
        console.log(`Trigger: ${trigger}`);
        const sessionId = await fetchSessionId((token as any).requestToken);
        console.log(sessionId);
        if (sessionId) {
          delete token.requestToken;
          token.sessionId = (session as any).sessionId;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      console.log('Session callback');
      if (token.requestToken) {
        console.log('Request token is: ', token.requestToken);
        (session as any).requestToken = token.requestToken;
      }
      if (token.sessionId) {
        console.log('SessionId is: ', token.requestToken);
        (session as any).sessionId = token.sessionId;
      }
      return session;
    },
    authorized(
      { auth, request: { nextUrl } }
    ) {
      // const isLoggedIn = !!auth?.user;
      // const isAllowed = !!(auth as any)?.sessionId;
      // const hasSessionId = !!(auth as any)?.sessionId;
      // if (isLoggedIn && !hasSessionId) {
      //   const requestToken = !!(auth as any)?.requestToken;
      //   return Response.redirect(new URL(`https://www.themoviedb.org/authenticate/${requestToken}?redirectTo=`, nextUrl));
      // }
      // console.log(auth);
      // console.log(hasSessionId);
      // const isOnFavorites = nextUrl.pathname.startsWith('/src/favorites');
      // if (isOnFavorites) {
      //   if (isLoggedIn) return true;
      //   return false;
        // } else if (isLoggedIn) {
        //   return Response.redirect(new URL('/src/favorites', nextUrl));
      // }
      return true;
    },
  },
  providers: [
    credentials({

    }),
  ],
} satisfies NextAuthConfig;
