// File: src/components/LocaleSwitcher.tsx
"use client";

import { Locale, locales } from "@/lib/locales";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  useEffect(() => {
    // Detect current locale from pathname
    const detectedLocale =
      locales.find(
        (locale) =>
          pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
      ) || "en";
    setCurrentLocale(detectedLocale);
  }, [pathname]);

  const switchLocale = async (newLocale: Locale) => {
    // Remove the current locale from the path
    const pathWithoutLocale = locales.reduce(
      (path, locale) => path.replace(`/${locale}`, ""),
      pathname,
    );

    // Set cookie for locale via server action
    await fetch("/api/set-locale", {
      method: "POST",
      body: JSON.stringify({ locale: newLocale }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Navigate to new locale version of the page
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="locale-switcher">
      {locales.map((locale) => (
        <Button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`mx-1 rounded px-2 py-1 ${
            currentLocale === locale
              ? "bg-emerald-600 text-white hover:text-white"
              : "bg-white text-black hover:text-white"
          } `}
        >
          {locale === "en" ? "EN" : "TR"}
        </Button>
      ))}
    </div>
  );
}
