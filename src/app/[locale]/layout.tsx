import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import ".././globals.css";
import NavBar from "../../components/navbar";
import Footer from "@/components/footer";
import { Locale, locales } from "@/lib/locales";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: ".././fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: ".././fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      >
        <NavBar />
        <div className="min-h-screen bg-black">{children}</div>
        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
