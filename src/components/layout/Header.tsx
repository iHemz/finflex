"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Transactions", href: "/transactions" },
  { name: "Payment", href: "/payment" },
  { name: "Plan", href: "/plan" },
  { name: "Cards", href: "/cards" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 flex h-20 items-center justify-between px-6">
      <div className="flex items-center">
        <div className="flex items-center mr-10">
          <div className="h-10 w-10 rounded-md bg-accent-yellow flex items-center justify-center text-black font-bold">
            FF
          </div>
          <span className="ml-2 text-xl font-bold">FinFlex</span>
        </div>
        <nav className="flex space-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-accent-yellow text-black font-medium"
                    : "header-link hover:text-white"
                }`}
              >
                {item.name === "Home" && isActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="rounded-full bg-card-bg p-2 text-gray-400 hover:text-gray-300"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
