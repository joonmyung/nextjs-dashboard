import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getUser } from '@/app/lib/data';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
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
      console.log(user)
      console.log(account)
      console.log(profile)
      console.log(email)
      console.log(credentials)

      return true;
    },
    async session({ session, token, user }) {
      console.log("session callback invoked")
      console.log(session)
      console.log(token)
      console.log(user)

      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("jwt callback invoked")
      console.log("token", token)
      console.log(user)
      console.log(account)
      console.log(profile)

      return token;
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log("signIn event invoked")
      console.log(user)
      console.log(account)
      console.log(profile)
      console.log(isNewUser)
    },
    async signOut() {
      console.log("signOut event invoked")
    },
    async createUser({ user }) {
      console.log("createUser event invoked")
      console.log(user)
    },
    async updateUser({ user }) {
      console.log("updateUser event invoked")
      console.log(user)
    },
    async linkAccount(message) {
      console.log("linkAccount event invoked")
      console.log(message)
    },
    async session({ session, token }) {
      console.log("session event invoked")
      console.log(session)
      console.log(token)
    },
  } 

});