import "../globals.css";

import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import NavBar from "../../components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Roboto } from "next/font/google";
import { Locale, locales } from "@/lib/locales";
import Script from "next/script";

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
  const { locale } = await params;

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
      <GoogleTagManager gtmId="GTM-WG2FMNW9" />
      <GoogleAnalytics gaId="G-B74KGSQKR5" />
      <Script id="clarity-script" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
      </Script>
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
