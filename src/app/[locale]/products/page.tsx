import React from "react";
import { ProductCarousel } from "./components/product-carousel";
import CRMImage from "../../../../public/img/crm.png";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/locales";

interface Props {
  params: Promise<{ lang: Locale }>;
}

const ProductsPage = async ({ params }: Props) => {
  const lang = (await params).lang;
  const dict = await getDictionary("products", lang);

  const CRMData = [
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
  ];

  return (
    <div
      style={{ scrollSnapType: "y mandatory" }}
      className="max-w-7xl mx-auto h-[calc(100vh-230px)] md:h-[calc(100vh-194px)] text-white overflow-y-scroll"
    >
      <ProductCarousel content={CRMData} title="CRM" />
    </div>
  );
};

export default ProductsPage;
