import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toBase64 = (str: string | null | undefined): string => {
  if (!str) return "";
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str).toString("base64");
  }

  if (typeof btoa !== "undefined") {
    return btoa(str);
  }

  return "";
};

export const fromBase64 = (str: string | null | undefined): string => {
  if (!str) return "";
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "base64").toString("utf-8");
  }

  if (typeof atob !== "undefined") {
    return atob(str);
  }

  return "";
};

export const scrollToTopAction = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
