import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "../globals.css";
import NavBar from "../../components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import { defaultLocale, Locale, locales } from "@/lib/locales";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devinbi",
  description:
    "Software company Devinbi offers cutting-edge web and mobile app solutions, leveraging modern technology for innovative, custom software development.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: Locale }>;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params; // params asenkron olarak çözülüyor
  const resolvedLocale = locale || defaultLocale;

  return (
    <html suppressHydrationWarning lang={resolvedLocale}>
      <GoogleTagManager gtmId="G-B74KGSQKR5" />
      <body className={`${roboto.className} bg-black antialiased`}>
        <NavBar />
        <div className="min-h-[calc(100vh-230px)] md:min-h-[calc(100vh-194px)] bg-black">
          {children}
        </div>
        <Footer locale={locale} />
        <Toaster />
      </body>
    </html>
  );
}
