"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navbarItems } from "@/lib/constants";
import { LocaleSwitcher } from "./locale-switcher";
import { useParams } from "next/navigation";
import { Locale } from "@/lib/locales";
import AnimatedLogo from "./animated-logo";
import { useDictionary } from "@/hooks/use-dictionary";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { locale } = useParams();
  const dictionary = useDictionary("navbar");

  return (
    <nav className="relative " aria-label="Main">
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-emerald-600/5 via-emerald-600 to-emerald-600/5" />
      <div className="mx-auto flex max-w-6xl flex-col justify-center md:justify-between py-4 font-medium text-white md:flex-row md:items-center md-:py-6 bg-black px-4 md:px-6 h-[85px]">
        <div className="flex items-center justify-between">
          <Link
            className="z-50 text-3xl font-bold"
            href="/"
            onClick={() => setOpen(false)}
          >
            <AnimatedLogo />
            <span className="sr-only">Devinbi Home Page</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <LocaleSwitcher currentLocale={locale as Locale} />
            </div>

            {/* TODO: Shadcn Butonu kullan */}

            <button
              type="button"
              className="block p-2 text-3xl text-white md:hidden"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={cn(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-black/95 pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <X />
            <span className="sr-only">Close menu</span>
          </button>

          <div className="mt-12 flex w-full flex-col items-center gap-8 text-2xl font-semibold">
            {navbarItems.map((item, index) => (
              <Link
                key={index.toString()}
                href={item.href}
                className="inline-flex min-h-11 items-center uppercase text-xl"
                onClick={() => setOpen(false)}
              >
                {dictionary?.[item.dictionary]}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 font-semibold md:flex">
          {navbarItems.map((item, index) => (
            <li key={index.toString()}>
              <Link href={item.href} className="nav-hover-btn">
                {dictionary?.[item.dictionary]}
              </Link>
            </li>
          ))}
          <li>
            <LocaleSwitcher currentLocale={locale as Locale} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
