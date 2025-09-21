import Bounded from "@/components/bounded";
import React from "react";
import ContactHero from "./components/hero";
import StarGrid from "@/components/star-grid";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description:
      "Get in touch with Devinbi for your software development needs. Contact our expert team for web development, mobile app development, and custom software solutions.",
    keywords: [
      "contact Devinbi",
      "software development contact",
      "web development consultation",
      "mobile app development inquiry",
      "custom software consultation",
      "technology consulting",
      "Devinbi contact",
    ],
    openGraph: {
      title: "Contact Us | Devinbi",
      description:
        "Get in touch with Devinbi for your software development needs. Contact our expert team for web development, mobile app development, and custom software solutions.",
      images: [
        {
          url: "/img/contact.png",
          width: 1200,
          height: 630,
          alt: "Contact Devinbi",
        },
      ],
    },
    twitter: {
      title: "Contact Us | Devinbi",
      description:
        "Get in touch with Devinbi for your software development needs. Contact our expert team for web development, mobile app development, and custom software solutions.",
      images: ["/img/contact.png"],
    },
  };
}

const ContactPage = () => {
  return (
    <Bounded className="relative text-white py-12">
      <StarGrid />
      <ContactHero />
    </Bounded>
  );
};

export default ContactPage;
