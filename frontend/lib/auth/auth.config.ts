import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/**
 * NextAuth.js configuration
 * Centralized auth configuration for the application
 */
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],

  // Use JWT strategy for session handling
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Custom pages configuration
  pages: {
    signIn: "/auth/signin",
  },

  // Callbacks for customizing auth behavior
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist additional user info to the token
      if (account && profile) {
        token.accessToken = account.access_token;
        token.id = profile.sub;
      }
      return token;
    },

    async session({ session, token }) {
      // Add token info to session for client access
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  // Enable debug in development
  debug: process.env.NODE_ENV === "development",
};
