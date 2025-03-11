"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface ProductGalleryProps {
  productTitle: string;
  items: {
    src: StaticImageData;
    title: string;
    content: string;
  }[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  productTitle,
  items,
}) => {
  return (
    <div className="min-h-[calc(100vh-230px)] md:min-h-[calc(100vh-154px)] flex flex-col justify-center items-center pb-2">
      <h2 className="text-3xl font-bold my-2 text-brand-green">
        {productTitle}
      </h2>
      <div className="w-full h-full gap-4 flex items-center overflow-x-auto p-4">
        {items.map((item, index) => (
          <Card
            key={index}
            className="card flex-shrink-0 w-[80vw] max-w-lg h-[70vh] max-h-[750px] bg-transparent border-white/20 snap-center"
          >
            <CardContent className="flex flex-col h-full text-center">
              <div className="relative w-full h-2/3">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain rounded-t-xl"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 text-green-500">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
