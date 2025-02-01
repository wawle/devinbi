import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "./lib/locales";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the path already has a valid locale
  const pathLocale = pathname.split("/")[1];
  if (locales.includes(pathLocale as any)) {
    // If path has a valid locale, just update cookie if needed and continue
    const response = NextResponse.next();
    if (pathLocale !== request.cookies.get(LOCALE_COOKIE)?.value) {
      response.cookies.set(LOCALE_COOKIE, pathLocale);
    }
    return response;
  }

  // If no locale in path, get from cookie or browser
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const userLocale =
    cookieLocale && locales.includes(cookieLocale as any)
      ? cookieLocale
      : getLocale(request);

  // Redirect to add locale to path
  return NextResponse.redirect(
    new URL(
      `/${userLocale}${pathname === "/" ? "" : pathname}`,
      request.url
    )
  );
}

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage.split(",")[0].split("-")[0];

  return locales.includes(preferredLocale as any)
    ? preferredLocale
    : defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
