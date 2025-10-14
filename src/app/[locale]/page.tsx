import { Metadata } from "next";
import { Hero } from "./components/hero";
import { About } from "./components/about";

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
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
