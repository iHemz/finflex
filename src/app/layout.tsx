import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { GlobalProviders } from "@/app/providers";

const inter = Inter({ variable: "--inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saverr",
  description: "Modern FinTech Savings & Investment Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
