import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="flex justify-center gap-6 border-t border-emerald-600 px-4 py-4 text-white md:px-6">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-between">
          <Link className="z-50 text-3xl font-bold" href="/">
            Devin<span className="text-emerald-600">bi</span>
            <span className="sr-only">Devinbi Home Page</span>
          </Link>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center">
                FooterLink1
              </Link>
            </li>
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center">
                FooterLink2
              </Link>
            </li>
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center">
                FooterLink3
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
