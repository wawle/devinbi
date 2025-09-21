import ServicesList from "./components/services-list";
import Hero from "./components/hero";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import { Metadata } from "next";

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
    <Bounded className="relative flex min-h-screen flex-col items-center justify-between py-12">
      <StarGrid />
      <Hero />
      <ServicesList />
    </Bounded>
  );
}
