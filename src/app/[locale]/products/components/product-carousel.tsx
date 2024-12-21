"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import GoldImage from "../../../../../public/img/gold.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface Props {
  title: string;
  content: {
    category: string;
    src: StaticImageData;
    title: string;
    content: string;
  }[];
}

export function ProductCarousel({ content, title }: Props) {
  return (
    <div
      style={{ scrollSnapAlign: "start" }}
      className=" h-full px-24 py-12"
    >
      <h2 className="text-balance text-center text-4xl font-bold md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic leading-tight text-transparent flex justify-center">
        <span className="text-white">{title}</span>
        Bi
      </h2>
      <Carousel
        plugins={[
          WheelGesturesPlugin({
            forceWheelAxis: "x",
          }),
        ]}
        className="h-full mx-auto py-12"
      >
        <CarouselContent className="h-full">
          {content.map((item, index) => (
            <CarouselItem
              className="h-full flex justify-center"
              key={index}
            >
              <Card className="h-full bg-transparent max-w-4xl border-emerald-100/20">
                <CardContent className="flex flex-col md:flex-row items-center gap-12 md:gap-8 h-full text-white p-0">
                  <div className="relative h-1/3 md:h-full flex-1 w-full md:max-w-96 md:rounded-l-lg">
                    <Image
                      className="md:rounded-l-lg object-cover rounded-t-lg md:rounded-tr-none"
                      src={item.src || GoldImage}
                      loading="lazy"
                      decoding="async"
                      alt="Product Image"
                      fill
                    />
                  </div>

                  <div className="px-6 max-w-4xl flex-1 flex flex-col gap-6">
                    <p className="text-2xl font-semibold text-emerald-600">
                      {item.title}
                    </p>
                    <p className="text-white/60">{item.content}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
