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
import GoldImage from "../../../../../public/img/monitoring.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { DotButton } from "@/components/ui/dot-button";

interface Props {
  title: string;
  content: {
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
      className="h-full px-12 py-4 md:py-8 md:px-20 bg-black/90 z-10"
    >
      <h2 className="text-balance text-center text-4xl font-bold md:text-5xl bg-gradient-to-r from-emerald-400 to-[#008529] bg-clip-text not-italic leading-tight text-transparent flex justify-center">
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
        className="mx-auto py-4 md:py-8 h-[calc(100%-50px)] md:h-[calc(100%-50px)]"
      >
        <CarouselContent className="h-full">
          {content.map((item, index) => (
            <CarouselItem
              className="h-full flex justify-center"
              key={index}
            >
              <Card className="bg-transparent max-w-4xl border-emerald-100/20 h-full min-h-80">
                <CardContent className="flex flex-col items-center gap-1 sm:gap-6 md:gap-8 lg:gap-4 h-full text-white p-0">
                  <div className="aspect-[3014/1642] relative md:flex-1 w-full rounded-t-xl max-h-80">
                    <Image
                      className="object-cover md:object-contain rounded-t-xl"
                      src={item.src || GoldImage}
                      loading="lazy"
                      decoding="async"
                      alt="Product Image"
                      fill
                    />
                  </div>

                  <div className="px-6 max-w-4xl flex-1 flex flex-col justify-center gap-2 sm:gap-4 md:gap-8 text-pretty md:py-6 text-center">
                    <p className="text-base md:text-xl lg:text-2xl font-semibold text-[#008529]">
                      {item.title}
                    </p>
                    <p className="text-white/60 text-xs sm:text-base max-w-2xl">
                      {item.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-10 hidden md:flex" />
        <CarouselNext className="-right-10 hidden md:flex" />
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
