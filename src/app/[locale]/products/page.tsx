import React from "react";
import { ProductCarousel } from "./components/product-carousel";
import {
  AIbotData,
  CMSData,
  CRMData,
  InvestBiData,
} from "@/lib/constants";

const ProductsPage = () => {
  return (
    <div
      style={{ scrollSnapType: "y mandatory" }}
      className="max-w-7xl mx-auto h-[calc(100vh-230px)] md:h-[calc(100vh-194px)] text-white  overflow-y-scroll"
    >
      <ProductCarousel content={InvestBiData} title="INVEST" />
      <ProductCarousel content={AIbotData} title="ISCI" />
      <ProductCarousel content={CMSData} title="CMS" />
      <ProductCarousel content={CRMData} title="CRM" />
    </div>
  );
};

export default ProductsPage;
