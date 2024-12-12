import type { Metadata } from "next";

import { GoogleTagManager } from "@next/third-parties/google";
import ".././globals.css";
import NavBar from "../../components/navbar";
import Footer from "@/components/footer";
import { Locale, locales } from "@/lib/locales";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";

// const geistSans = localFont({
//   src: ".././fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: ".././fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  console.log({ locale });

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="G-B74KGSQKR5" />
      <body className={`${roboto.className} bg-black antialiased`}>
        <NavBar />
        <div className="min-h-screen bg-black">{children}</div>
        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
