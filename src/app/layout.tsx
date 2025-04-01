import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "nprogress/nprogress.css";
import "./globals.css";

import { GlobalProviders } from "@/app/providers";
import Layout from "@/components/layout/Layout";

const inter = Inter({ variable: "--inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fobework",
  description: "Modern FinTech Savings & Investment Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProviders>
          <Layout>{children}</Layout>
        </GlobalProviders>
      </body>
    </html>
  );
}
