"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { UserAvatar } from "./UserAvatar";
import { SignOutButton } from "./SignOutButton";

interface UserMenuProps {
  className?: string;
}

/**
 * User Menu Component
 * Dropdown menu displaying user info and sign-out option
 */
export function UserMenu({ className }: UserMenuProps) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session?.user) {
    return null;
  }

  const { user } = session;

  return (
    <div ref={menuRef} className={`relative ${className ?? ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full p-1 transition-all hover:ring-2 hover:ring-gray-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <UserAvatar src={user.image} name={user.name} size={36} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
          {/* User Info Section */}
          <div className="border-b border-gray-100 px-4 py-3">
            <div className="flex items-center gap-3">
              <UserAvatar src={user.image} name={user.name} size={48} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-gray-900">
                  {user.name}
                </p>
                <p className="truncate text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="px-2 py-2">
            <SignOutButton className="w-full justify-start text-left" />
          </div>
        </div>
      )}
    </div>
  );
}
