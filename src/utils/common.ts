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
