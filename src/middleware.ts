// File: src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { locales, Locale } from "./lib/locales";

export function middleware(request: NextRequest) {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if no locale is present
  if (pathnameIsMissingLocale) {
    // Determine locale from request headers or default
    const locale = getLocale(request);

    // Construct new URL with locale prefix
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

// Detect locale from request
function getLocale(request: NextRequest): Locale {
  // Check for stored cookie first
  // Note: This won't work in middleware, so we'll modify the approach
  const localeCookie = request.cookies.get("locale")?.value;
  if (localeCookie && (locales as readonly string[]).includes(localeCookie)) {
    return localeCookie as Locale;
  }

  // Fallback to Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "en";
  const detectedLocale = acceptLanguage.split(",")[0].split("-")[0];

  return (locales as readonly string[]).includes(detectedLocale)
    ? (detectedLocale as Locale)
    : "en";
}

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    // Exclude files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
