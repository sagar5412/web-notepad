import Image from "next/image";
import { SignInButton } from "@/components/auth";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      {/* Card Container */}
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-10 py-12 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/web-notepad-logo.jpeg"
            alt="Web Notepad"
            width={75}
            height={75}
            className="rounded-xl"
            priority
          />
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-normal text-gray-900 dark:text-white">
            Sign in
          </h1>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            to continue to Web-Notepad
          </p>
        </div>

        {/* Sign In Button */}
        <div className="mb-8">
          <SignInButton className="w-full" />
        </div>

        {/* Divider */}
        <div className="mb-6 border-t border-gray-200 dark:border-gray-700" />

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Not your computer? Use Guest mode to sign in privately.
        </p>
        <p className="mt-4 text-center text-sm">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Learn more about using Guest mode
          </a>
        </p>
      </div>

      {/* Footer Links */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-between px-8 py-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">
            Help
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}
