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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devinbi.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Devinbi";
  const siteDescription =
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Software company Devinbi offers cutting-edge web and mobile app solutions, leveraging modern technology for innovative, custom software development.";
  const siteKeywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS?.split(",") || [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "technology solutions",
    "digital transformation",
    "Devinbi",
  ];
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@devinbi";
  const twitterSite = process.env.NEXT_PUBLIC_TWITTER_SITE || "@devinbi";

  return {
    title: {
      default: `${siteName} - Innovative Software Solutions`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    keywords: siteKeywords,
    authors: [{ name: `${siteName} Team` }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        tr: `${siteUrl}/tr`,
        de: `${siteUrl}/de`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `${siteUrl}/${locale}`,
      siteName: siteName,
      title: `${siteName} - Innovative Software Solutions`,
      description: siteDescription,
      images: [
        {
          url: "/img/logo.png",
          width: 1200,
          height: 630,
          alt: `${siteName} - Innovative Software Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} - Innovative Software Solutions`,
      description: siteDescription,
      images: ["/img/logo.png"],
      creator: twitterHandle,
      site: twitterSite,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE,
      yandex: process.env.YANDEX_VERIFICATION_CODE,
      yahoo: process.env.YAHOO_VERIFICATION_CODE,
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
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}
      />
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
      />
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
