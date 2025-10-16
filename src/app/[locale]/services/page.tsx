import { Metadata } from "next";
import { Services } from "../components/services";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Software Development Services | Devinbi";
  const description =
    "Explore Devinbi’s end-to-end services: web platforms, mobile applications, AI integration, product strategy, and long-term technical support.";
  const image = "/img/logo.png";

  return {
    title,
    description,
    keywords: [
      "software development services",
      "AI integration agency",
      "product development partner",
      "web and mobile development",
      "Devinbi services",
      "technical support and scaling",
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Devinbi Services",
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}

export default async function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
