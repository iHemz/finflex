import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-storage");
  const isAuthPage = request.nextUrl.pathname === "/login";

  if (!authToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authToken && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg).*)"],
};
