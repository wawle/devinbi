import { Metadata } from "next";
import { Services } from "../components/services";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Services",
    description:
      "Discover our comprehensive software development services including web development, mobile app development, custom software solutions, and digital transformation services.",
    keywords: [
      "software services",
      "web development services",
      "mobile app development",
      "custom software solutions",
      "digital transformation",
      "technology consulting",
      "Devinbi services",
    ],
    openGraph: {
      title: "Our Services | Devinbi",
      description:
        "Discover our comprehensive software development services including web development, mobile app development, custom software solutions, and digital transformation services.",
      images: [
        {
          url: "/img/services.png",
          width: 1200,
          height: 630,
          alt: "Devinbi Services",
        },
      ],
    },
    twitter: {
      title: "Our Services | Devinbi",
      description:
        "Discover our comprehensive software development services including web development, mobile app development, custom software solutions, and digital transformation services.",
      images: ["/img/services.png"],
    },
  };
}

export default async function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
}
