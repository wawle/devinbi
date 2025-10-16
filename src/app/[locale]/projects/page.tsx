import React from "react";
import { Metadata } from "next";
import { Projects } from "../components/projects";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Project Portfolio | Devinbi";
  const description =
    "Review Devinbi’s recent work: AI-powered marketplaces, social platforms, creative AI apps, smart chatbots, fintech dashboards, and billing solutions delivered for global clients.";
  const image = "/img/logo.png";

  return {
    title,
    description,
    keywords: [
      "Devinbi case studies",
      "AI marketplace project",
      "custom chatbot development",
      "creative AI applications",
      "fintech product development",
      "SaaS invoicing platform",
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Devinbi Project Portfolio",
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

const ProjectsPage = async () => {
  return <Projects />;
};

export default ProjectsPage;
