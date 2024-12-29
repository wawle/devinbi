import Link from "next/link";
import AnimatedLogo from "./animated-logo";
import { navbarItems } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/locales";

interface Props {
  locale: Locale;
}

export default async function Footer({ locale }: Props) {
  const dictionary = await getDictionary("navbar", locale);

  return (
    <footer className="relative flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-4 text-white md:px-6 h-auto">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-emerald-600/5 via-emerald-600 to-emerald-600/5" />
      <div className="flex w-full max-w-6xl flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-between">
          <Link className="z-50 text-3xl font-bold" href="/">
            <AnimatedLogo />
          </Link>
        </div>
        <nav aria-label="Footer" className="md:hidden">
          <ul className="flex gap-6">
            {navbarItems.map((item, index) => (
              <li key={index.toString()}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-white/60 hover:text-white"
                >
                  {dictionary?.[item.dictionary]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-center md:text-end w-full max-w-6xl text-white/40">
        <p className="capitalize">© Devinbi | Her Hakkı Saklıdır.</p>
      </div>
    </footer>
  );
}
