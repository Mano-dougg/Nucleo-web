import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { loginUser } from './app/src/services/service';


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string()
              .email({
                message: "Invalid email address"
              })
              .min(8, {
                message: "Minimum 8 characters"
              }),
            password: z.string()
              .min(3, {
                message: "Minimum 3 characters"
              })
              .max(50, {
                message: "Maximum 50 characters"
              }),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await loginUser(email, password);
          if (!user) {
            return null
          }
          return user;
        }

        return null;
      },
    }),
  ],
});
