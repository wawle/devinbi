import React from "react";
import { Metadata } from "next";
import { Contact } from "../components/contact";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Contact Devinbi | Start Your Project";
  const description =
    "Schedule a consultation with Devinbi's product team to discuss AI-powered web and mobile development, product strategy, or ongoing support.";
  const image = "/img/logo.png";

  return {
    title,
    description,
    keywords: [
      "Devinbi contact",
      "software consultation",
      "AI development partner",
      "product strategy workshop",
      "custom software inquiry",
      "web and mobile consultation",
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Contact Devinbi",
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

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
