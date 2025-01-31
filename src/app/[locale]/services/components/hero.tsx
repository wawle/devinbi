"use client";

import Bounded from "@/components/bounded";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useDictionary } from "@/hooks/use-dictionary";
import { LoaderIcon } from "lucide-react";

export default function Hero() {
  const dict = useDictionary("services");

  const words = dict?.description;

  return (
    <Bounded className="text-white">
      {dict ? (
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl md:leading-relaxed bg-gradient-to-r from-green-400 to-[#008529] bg-clip-text text-transparent">
            {dict?.title}
          </h1>

          <div className="flex w-full max-w-lg flex-col items-center justify-center text-center text-xl lg:max-w-xl">
            {words ? (
              <TextGenerateEffect
                className="text-3xl leading-normal text-white dark:text-white mt-0"
                words={words}
              />
            ) : (
              <p className="text-3xl leading-normal text-white dark:text-white">
                {words}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <LoaderIcon className="text-white/20" />
        </div>
      )}
    </Bounded>
  );
}
