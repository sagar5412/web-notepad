"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useAuth } from "@/hooks/useAuth";
import { UserAvatar } from "@/components/auth";

interface SidebarProps {
  className?: string;
}

/**
 * Collapsible Sidebar Component
 * Fixed sidebar with logo, navigation, and sign-in
 */
export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { isAuthenticated, isLoading, user } = useAuth();

  // Collapsed mini sidebar
  if (!isOpen) {
    return (
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-16 flex-col items-center border-r border-gray-700 bg-[#222831] py-4 ${
          className ?? ""
        }`}
      >
        {/* Open Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          aria-label="Open sidebar"
          title="Open sidebar"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Sign In / User Section (mini) */}
        {isLoading ? (
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-700" />
        ) : isAuthenticated && user ? (
          <div className="flex flex-col items-center gap-2">
            <div title={user.name ?? "User"}>
              <UserAvatar src={user.image} name={user.name} size={36} />
            </div>
            <button
              onClick={() => signOut()}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-700 hover:text-red-400"
              title="Sign out"
              aria-label="Sign out"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
            title="Sign in"
            aria-label="Sign in"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
        )}
      </aside>
    );
  }

  // Expanded sidebar
  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-gray-700 bg-[#222831] ${
        className ?? ""
      }`}
    >
      {/* Header - Logo, Name & Close Button */}
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/web-notepad-logo.jpeg"
            alt="Web Notepad"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="text-sm font-semibold text-white">Web Notepad</span>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          aria-label="Close sidebar"
          title="Close sidebar"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            My Notes
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Note
          </a>
        </div>
      </nav>

      {/* Footer - Sign In / User */}
      <div className="border-t border-gray-700 px-3 py-3">
        {isLoading ? (
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-700" />
            <div className="h-4 w-20 animate-pulse rounded bg-gray-700" />
          </div>
        ) : isAuthenticated && user ? (
          <div className="space-y-2">
            {/* User Info */}
            <div className="flex items-center gap-3 rounded-lg px-3 py-2">
              <UserAvatar src={user.image} name={user.name} size={32} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  {user.name}
                </p>
                <p className="truncate text-xs text-gray-400">{user.email}</p>
              </div>
            </div>
            {/* Sign Out Button */}
            <button
              onClick={() => signOut()}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-red-400"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign out
            </button>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Sign in
          </Link>
        )}
      </div>
    </aside>
  );
}
