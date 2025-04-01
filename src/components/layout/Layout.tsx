import React from "react";
import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {children}
    </div>
  );
}
