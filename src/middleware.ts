import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "./lib/locales";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Önce cookie'den locale kontrolü yap
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const userLocale =
    cookieLocale && locales.includes(cookieLocale as any)
      ? cookieLocale
      : getLocale(request);

  // Sadece root path için locale redirect yap
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${userLocale}`, request.url));
  }

  // Diğer pathler için locale eksikse redirect yap
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${userLocale}${pathname}`, request.url)
    );
  }

  // Eğer path'de locale varsa ve cookie yoksa veya farklıysa, cookie'yi güncelle
  const pathLocale = pathname.split("/")[1];
  if (locales.includes(pathLocale as any) && pathLocale !== cookieLocale) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathLocale);
    return response;
  }
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
