import Link from "next/link";
import AnimatedLogo from "./animated-logo";
import { navbarItems } from "@/lib/constants";

export default async function Footer() {
  return (
    <footer className="relative flex flex-col justify-center items-center gap-2 px-4 py-4 text-white md:px-6 h-auto">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-emerald-600/5 via-emerald-600 to-emerald-600/5" />
      <div className="flex w-full max-w-6xl flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-between">
          <Link className="z-50 text-3xl font-bold" href="/">
            <AnimatedLogo />
          </Link>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            {navbarItems.map((item, index) => (
              <li key={index.toString()}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-white/60 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-start w-full max-w-6xl text-white/40">
        <p>© Devinbi | Her Hakkı Saklıdır.</p>
      </div>
    </footer>
  );
}
