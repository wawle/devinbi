import Bounded from "@/components/bounded";
import { Investbi } from "@/app/[locale]/products/components/investbi";
import React from "react";

const ProductsPage = () => {
  return (
    <Bounded className="relative text-white">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <h2 className="text-balance text-4xl font-bold md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic leading-tight text-transparent">
          Products
        </h2>
        <Investbi />
      </div>
    </Bounded>
  );
};

export default ProductsPage;
