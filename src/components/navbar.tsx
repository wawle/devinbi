"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav
      className="md-:py-6 border-b border-emerald-600 bg-black px-4 py-4 md:px-6"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link
            className="z-50 text-4xl font-bold"
            href="/"
            onClick={() => setOpen(false)}
          >
            Devin<span className="text-emerald-600">bi</span>
            <span className="sr-only">Devinbi Home Page</span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={cn(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-black/90 pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
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
            <Link
              href="/"
              className="inline-flex min-h-11 items-center"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 font-semibold md:flex">
          <li>
            <Link href="/" className="nav-hover-btn">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-hover-btn">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-hover-btn">
              Çözümler
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-hover-btn">
              İLETİŞİM
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
