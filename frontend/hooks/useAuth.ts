"use client";

import { useSession } from "next-auth/react";

/**
 * Custom hook for accessing auth state
 * Provides typed access to session, user, and loading state
 */
export function useAuth() {
  const { data: session, status } = useSession();

  return {
    /** Current session object */
    session,
    /** Current authenticated user */
    user: session?.user ?? null,
    /** Whether the session is currently loading */
    isLoading: status === "loading",
    /** Whether the user is authenticated */
    isAuthenticated: status === "authenticated",
    /** Whether the user is not authenticated */
    isUnauthenticated: status === "unauthenticated",
    /** Current auth status */
    status,
  };
}
