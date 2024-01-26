// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    // Add your authentication providers here (e.g., email/password, Google, GitHub).
    Providers.Credentials({
      async authorize(credentials) {
        // Validate the credentials against your Prisma database.
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (user && user.password === credentials.password) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      // Attach the user ID to the session for easier access.
      session.userId = user.id;
      return Promise.resolve(session);
    },
    async jwt(token, user) {
      // Add the user ID to the token.
      if (user) {
        token.id = user.id;
      }
      return Promise.resolve(token);
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    signUp: '/auth/signup'
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      // Handle sign-in events (optional).
    },
  },
  // Add other configurations as needed.
});
