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
    <footer className="relative text-white flex items-center justify-center md:h-[68px]">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-[#008529]/5 via-[#008529] to-[#008529]/5" />
      <div className="flex w-full max-w-6xl flex-col items-center justify-between md:flex-row px-4 md:px-6 py-4">
        <div className="flex items-center justify-between shrink-0">
          <Link className="z-50 text-3xl font-bold" href="/">
            <AnimatedLogo />
          </Link>
        </div>
        {/* <nav aria-label="Footer" className="md:hidden">
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
        </nav> */}
        <div className="text-center md:text-end w-full max-w-6xl text-white/40">
          <p className="capitalize">© Devinbi | Her Hakkı Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
