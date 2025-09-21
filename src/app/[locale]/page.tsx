import Bento from "./components/bento";
import Hero from "./components/hero";
import Tech from "./components/tech";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Devinbi - Innovative Software Solutions",
    description:
      "Leading software development company offering cutting-edge web and mobile app solutions. Transform your business with our innovative technology and custom software development services.",
    keywords: [
      "software development company",
      "web development",
      "mobile app development",
      "custom software solutions",
      "digital transformation",
      "technology innovation",
      "Devinbi",
    ],
    openGraph: {
      title: "Devinbi - Innovative Software Solutions",
      description:
        "Leading software development company offering cutting-edge web and mobile app solutions. Transform your business with our innovative technology and custom software development services.",
      images: [
        {
          url: "/img/logo.png",
          width: 1200,
          height: 630,
          alt: "Devinbi - Innovative Software Solutions",
        },
      ],
    },
    twitter: {
      title: "Devinbi - Innovative Software Solutions",
      description:
        "Leading software development company offering cutting-edge web and mobile app solutions. Transform your business with our innovative technology and custom software development services.",
      images: ["/img/logo.png"],
    },
  };
}

const Home = () => {
  return (
    <div className="w-full">
      <Tech />
      <Hero />
      <Bento />
    </div>
  );
};

export default Home;
