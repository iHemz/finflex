"use client";

import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/outline";
import useRouterWithLoader from "@/hooks/useRouterWithLoader";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Transactions", href: "/transactions" },
  { name: "Payment", href: "/payment" },
  { name: "Plan", href: "/plan" },
  { name: "Cards", href: "/cards" },
];

export default function Header() {
  const router = useRouterWithLoader();

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between px-6">
      <Link href="/" id="logo" className=" cursor-pointer flex items-center">
        <div className="h-10 w-10 rounded-md bg-accent-yellow flex items-center justify-center  font-bold">
          FF
        </div>
        <span className="ml-2 text-xl font-bold">Fobework</span>
      </Link>
      <section id="navlinks">
        <nav className="flex space-x-2 p-2 bg-card-bg rounded-full">
          {navigation.map((item) => {
            const isActive = router.pathName === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-gradient-start text-black font-medium"
                    : "header-link hover:bg-gradient-start/10 hover:text-white"
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
      </section>

      <section className="flex items-center space-x-4">
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
      </section>
    </header>
  );
}
