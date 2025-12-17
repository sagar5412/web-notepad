"use client";

import { Sidebar } from "@/components/layout";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - offset for sidebar */}
      <main className="ml-16 flex flex-1 flex-col transition-all lg:ml-64">
        {/* Canvas/Editor Area */}
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="text-center">
            {isAuthenticated && user ? (
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white">
                  Welcome back, {user.name?.split(" ")[0]}!
                </h1>
                <p className="text-gray-400">
                  Select a note from the sidebar or create a new one.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create New Note
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white">
                  Welcome to Web Notepad
                </h1>
                <p className="text-gray-400">
                  Sign in from the sidebar to start creating notes.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
