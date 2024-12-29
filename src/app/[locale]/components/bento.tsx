"use client";

import Image from "next/image";
import AiImage from "../../../../public/img/ai.png";
import MobileAppImage from "../../../../public/img/mobile-app.png";
import WebsiteImage from "../../../../public/img/website.png";
import SecurityImage from "../../../../public/img/security.png";
import StarGrid from "@/components/star-grid";
import Bounded from "@/components/bounded";
import { useDictionary } from "@/hooks/use-dictionary";
import { cn } from "@/lib/utils";

const Bento = () => {
  const dict = useDictionary("bento");

  return (
    <Bounded className="text-center">
      <div className="space-y-12 ">
        <div className="relative w-screen">
          <StarGrid />
        </div>

        <h1 className="mt-4 space-y-12 z-10 text-center text-4xl font-bold text-white md:text-5xl">
          {dict?.titleFirst} <br />
          <em className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic text-transparent">
            {dict?.titleGreen}
          </em>{" "}
          {dict?.titleLast}
        </h1>

        <div className="grid max-w-4xl mx-auto px-4 gap-8 text-white md:gap-10 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index.toString()}
              className={cn(
                "row-span-3 grid grid-rows-subgrid mx-auto rounded-lg z-10 border border-slate-100/20 bg-black/70 px-4 py-6"
              )}
            >
              <h3 className="text-2xl font-semibold">
                {dict?.[feature.title]}
              </h3>
              <div className="max-w-sm lg:max-w-md mx-auto text-balance">
                <p>{dict?.[feature.content]}</p>
              </div>
              <div className="relative aspect-square w-full max-h-56">
                <Image
                  src={feature.image}
                  alt={dict?.[feature.title] || ""}
                  className="rounded-lg object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Bento;

const features = [
  {
    title: "featureMobileTitle",
    content: "featureMobileContent",
    image: MobileAppImage,
  },
  {
    title: "featureWebTitle",
    content: "featureWebContent",
    image: WebsiteImage,
  },
  {
    title: "featureAiTitle",
    content: "featureAiContent",
    image: AiImage,
  },
  {
    title: "featureSecurityTitle",
    content: "featureSecurityContent",
    image: SecurityImage,
  },
];
