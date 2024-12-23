"use client";

import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import GoldImage from "../../../../../public/img/gold.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { DotButton } from "@/components/ui/dot-button";

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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length); // Get the total number of slides
    setCurrent(api.selectedScrollSnap()); // Set the current index

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap()); // Update current index on selection
    };

    api.on("select", onSelect); // Listen for selection changes

    return () => {
      api.off("select", onSelect); // Cleanup listener on unmount
    };
  }, [api]);

  const scrollTo = (index: number) => {
    if (!api) return;
    api.scrollTo(index); // Scroll to the selected index
  };

  return (
    <div
      style={{ scrollSnapAlign: "start" }}
      className="h-full px-12 py-4 md:py-8 md:px-20"
    >
      <h2 className="text-balance text-center text-4xl font-bold md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic leading-tight text-transparent flex justify-center">
        <span className="text-white">{title}</span>
        Bi
      </h2>
      <Carousel
        setApi={setApi}
        plugins={[
          WheelGesturesPlugin({
            forceWheelAxis: "x",
          }),
        ]}
        className="mx-auto py-4 md:py-8 h-[calc(100%-60px)] md:h-[calc(100%-50px)]"
      >
        <CarouselContent className="h-full">
          {content.map((item, index) => (
            <CarouselItem
              className="h-full flex justify-center"
              key={index}
            >
              <Card className="bg-transparent max-w-4xl border-emerald-100/20 h-full min-h-96">
                <CardContent className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-4 h-full text-white p-0">
                  <div className="relative h-1/3 md:h-full md:flex-1 w-full md:max-w-96 md:rounded-l-lg min-h-48">
                    <Image
                      className="md:rounded-l-lg object-cover rounded-t-lg md:rounded-tr-none"
                      src={item.src || GoldImage}
                      loading="lazy"
                      decoding="async"
                      alt="Product Image"
                      fill
                    />
                  </div>

                  <div className="px-6 max-w-4xl flex-1 flex flex-col gap-2 sm:gap-6 md:gap-8 text-pretty py-6">
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-600">
                      {item.title}
                    </p>
                    <p className="text-white/60 sm:text-base">
                      {item.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-10" />
        <CarouselNext className="-right-10" />
        {/* Dot Navigation */}
        <div className="flex justify-center my-3">
          {Array.from({ length: count }).map((_, index) => (
            <DotButton
              key={index}
              selected={index === current}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
