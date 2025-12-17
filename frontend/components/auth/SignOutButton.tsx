"use client";

import { signOut } from "next-auth/react";

interface SignOutButtonProps {
  className?: string;
  callbackUrl?: string;
}

/**
 * Sign-Out Button Component
 * Ends user session and redirects
 */
export function SignOutButton({
  className,
  callbackUrl = "/",
}: SignOutButtonProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl });
  };

  return (
    <button
      onClick={handleSignOut}
      className={`rounded-lg px-4 py-2 font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 ${
        className ?? ""
      }`}
    >
      Sign out
    </button>
  );
}
