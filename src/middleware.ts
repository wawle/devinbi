import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Locale, locales } from "./lib/locales";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  return localeMiddleware(request);
}

const localeMiddleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  // Path'den locale bilgisini al
  const pathLocale = pathname.split("/")[1];

  // Eğer path'de geçerli bir locale varsa, devam et
  if (locales.includes(pathLocale as any)) {
    await setLocaleCookie(pathLocale as Locale);
    return NextResponse.next();
  }

  // Locale belirleme
  const locale = await getLocale(request);

  // Yeni URL oluştur ve locale ekle
  const url = getUrl(request, locale);

  return NextResponse.redirect(url);
};

const getUrl = (request: NextRequest, locale: Locale) => {
  const url = new URL(request.url);
  url.pathname =
    url.pathname === "/" ? `/${locale}` : `/${locale}${url.pathname}`;

  return url;
};

const getLocale = async (request: NextRequest): Promise<Locale> => {
  let locale: Locale = "en";
  const acceptLanguage = request.headers.get("accept-language");
  const cookieLocale = await getLocaleCookie();

  if (cookieLocale) {
    locale = cookieLocale as Locale;
  } else if (acceptLanguage) {
    const browserLocale = acceptLanguage.split(",")[0].split("-")[0];
    if (locales.includes(browserLocale as any)) {
      locale = browserLocale as Locale;
    }
  }

  return locale;
};

const getLocaleCookie = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  return locale;
};

const setLocaleCookie = async (locale: Locale) => {
  const cookieStore = await cookies();
  cookieStore.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    sameSite: "strict",
  });
};

export const config = {
  matcher: [
    // Sadece sayfa rotalarını yakala
    "/((?!_next|api|favicon.ico|.*\\.).*)",
  ],
};
