import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "./lib/locales";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore non-page routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Get the pathname locale
  const pathLocale = pathname.split("/")[1];

  // Create URL for response
  const url = new URL(request.url);

  // If path has valid locale
  if (locales.includes(pathLocale as any)) {
    const response = NextResponse.next();

    // Always ensure cookie matches path locale
    response.cookies.set(LOCALE_COOKIE, pathLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "strict",
    });

    return response;
  }

  // If no valid locale in path, determine locale
  let locale = defaultLocale;

  // First try from cookie
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    locale = cookieLocale;
  } else {
    // Then try from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage) {
      const browserLocale = acceptLanguage.split(",")[0].split("-")[0];
      if (locales.includes(browserLocale as any)) {
        locale = browserLocale;
      }
    }
  }

  // Build new path with locale
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  // Create response with redirect
  const response = NextResponse.redirect(url);

  // Set cookie for future requests
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "strict",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
