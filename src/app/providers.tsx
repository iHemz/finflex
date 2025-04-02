"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/reactQuery";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
