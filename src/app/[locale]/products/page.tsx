import React, { Suspense } from "react";
import CRMImage from "../../../../public/img/crm.png";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/locales";
import Loading from "./components/loading";
import { ProductGallery } from "./components/product-gallery";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
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
  params: Promise<{ locale: Locale }>;
}

const ProductsPage = async ({ params }: Props) => {
  const { locale } = await params;
  const dict = await getDictionary("products", locale);

  const CRMData = {
    productTitle: "Devin CRM",
    items: [
      {
        src: CRMImage,
        title: dict?.crmTitle1,
        content: dict?.crmContent1,
      },
      {
        src: CRMImage,
        title: dict?.crmTitle2,
        content: dict?.crmContent2,
      },
      {
        src: CRMImage,
        title: dict?.crmTitle3,
        content: dict?.crmContent3,
      },
      {
        src: CRMImage,
        title: dict?.crmTitle4,
        content: dict?.crmContent3,
      },
    ],
  };

  return (
    <main className="mx-auto text-white relative overflow-x-hidden py-12">
      <Suspense fallback={<Loading />}>
        <ProductGallery
          productTitle={CRMData.productTitle}
          items={CRMData.items}
        />
      </Suspense>
    </main>
  );
};

export default ProductsPage;
