"use client";

import { NavLinks } from "@/components/layout/NavLinks";
import useRouterWithLoader from "@/hooks/useRouterWithLoader";

export default function Footer() {
  const router = useRouterWithLoader();

  const footer_class =
    router.pathName === "/login"
      ? "hidden"
      : "sticky bottom-0 z-10 h-20 items-center justify-center px-6 backdrop-blur-md hidden md:flex lg:hidden";
  return (
    <footer className={footer_class}>
      <NavLinks pathName={router.pathName} onClick={(path) => router.push(path)} />
    </footer>
  );
}
