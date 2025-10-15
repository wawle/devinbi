import React, { Suspense } from "react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/locales";
import { Metadata } from "next";
import { Projects } from "../components/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;

  return {
    title: "Our Products",
    description:
      "Explore our innovative software products including Devin CRM, custom web applications, mobile apps, and enterprise solutions designed to transform your business.",
    keywords: [
      "software products",
      "Devin CRM",
      "custom web applications",
      "mobile apps",
      "enterprise solutions",
      "business software",
      "Devinbi products",
    ],
    openGraph: {
      title: "Our Products | Devinbi",
      description:
        "Explore our innovative software products including Devin CRM, custom web applications, mobile apps, and enterprise solutions designed to transform your business.",
      images: [
        {
          url: "/img/crm.png",
          width: 1200,
          height: 630,
          alt: "Devinbi Products - Devin CRM",
        },
      ],
    },
    twitter: {
      title: "Our Products | Devinbi",
      description:
        "Explore our innovative software products including Devin CRM, custom web applications, mobile apps, and enterprise solutions designed to transform your business.",
      images: ["/img/crm.png"],
    },
  };
}

interface Props {
  params: Promise<{ locale: string }>;
}

const ProjectsPage = async ({ params }: Props) => {
  const { locale } = await params;
  const dict = await getDictionary("products", locale as Locale);

  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;
