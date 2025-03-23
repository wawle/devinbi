import React, { Suspense } from "react";
import CRMImage from "../../../../public/img/crm.png";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/locales";
import Loading from "./components/loading";
import { ProductGallery } from "./components/product-gallery";

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
