"use client";

import Link from "next/link";
import { LogoIcon } from "@/components/icons/LogoIcon";

export default function NotFound() {
  return (
    <div className="min-h-screen fixed top-0 w-full bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center mb-8">
          <LogoIcon />
          <span className="ml-2 text-2xl font-bold text-white">FinFlex</span>
        </div>

        <h1 className="text-6xl font-bold text-accent-yellow mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          We&apos;re working hard to bring you this feature. It will be available soon!
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-start px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-accent-yellow/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gradient-start hover:scale-101 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
