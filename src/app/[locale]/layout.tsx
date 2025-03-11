import "../globals.css";

import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import NavBar from "../../components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import { Locale, locales } from "@/lib/locales";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;

  return {
    title: "Devinbi",
    description:
      "Software company Devinbi offers cutting-edge web and mobile app solutions, leveraging modern technology for innovative, custom software development.",
    alternates: {
      canonical: `https://devinbi.com/${locale}`,
      languages: {
        en: `https://devinbi.com/en`,
        tr: `https://devinbi.com/tr`,
        de: `https://devinbi.com/de`,
      },
    },
  };
}

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

  return (
    <html suppressHydrationWarning lang={locale}>
      <GoogleTagManager gtmId="G-B74KGSQKR5" />
      <body className={`${roboto.className} bg-black antialiased`}>
        <NavBar />
        <div className="min-h-[calc(100vh-230px)] md:min-h-[calc(100vh-154px)] bg-black">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
