import React, { Suspense } from "react";
import CRMImage from "../../../../public/img/crm.png";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/locales";
import { HorizontalScrollCards } from "./components/horizontal-gallery";
import Loading from "./components/loading";

interface Props {
  params: Promise<{ locale: Locale }>;
}

const ProductsPage = async ({ params }: Props) => {
  const { locale } = await params;
  const dict = await getDictionary("products", locale);

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
    <main className="mx-auto text-white relative overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <HorizontalScrollCards items={CRMData} />
      </Suspense>
    </main>
  );
};

export default ProductsPage;
