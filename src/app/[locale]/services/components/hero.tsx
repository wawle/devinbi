"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useDictionary } from "@/hooks/use-dictionary";

export default function Hero() {
  const { dictionary: dict } = useDictionary("services");

  const words = dict?.description;

  return (
    <div className="text-white my-12">
      {!dict ? (
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 text-center w-full">
          <Skeleton className="h-10 w-2/3 bg-slate-700/50 rounded animate-pulse" />
          <Skeleton className="h-32 w-3/5 bg-slate-700/50 rounded animate-pulse" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl md:leading-relaxed bg-gradient-to-r from-green-400 to-[#008529] bg-clip-text text-transparent">
            {dict?.title}
          </h1>

          <div className="flex w-full max-w-lg flex-col items-center justify-center text-center text-xl lg:max-w-xl">
            {words && (
              <TextGenerateEffect
                className="text-3xl leading-normal text-white dark:text-white mt-0 min-h-20"
                words={words}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
