import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getUser } from '@/app/lib/data';
import { User } from './app/lib/definitions';

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('authorize invoked');


        const parsedCredentials = z
          .object({email: z.string().email(), password: z.string().min(6)})
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log('Invalid credentials');
          return null;
        }
        const {email, password} = parsedCredentials.data;
        const user = await getUser(email);

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(password,user.password)

        if (passwordsMatch) return user

        return null;

        console.log('Invalid credentials')

      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn callback invoked")

      return true;
    },
    async session({ session, token }) {
      console.log("session callback invoked");

      if (token.sub && session.user ) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("jwt callback invoked")

      return token;
    },
  },
});