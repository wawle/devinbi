"use client";

import { useDictionary } from "@/hooks/use-dictionary";
import { cn } from "@/lib/utils";
import Image from "next/image";
import StartupImage from "../../../../../public/img/team.png";
import EnterpriseImage from "../../../../../public/img/enterprise.png";
import WebApp from "../../../../../public/img/webapp.png";
import GlobalApps from "../../../../../public/img/global-apps.png";
import { Skeleton } from "@/components/ui/skeleton";

const services = [
  {
    titleKey: "startupTitle",
    contentKey: "startupContent",
    image: StartupImage,
  },
  {
    titleKey: "enterpriseTitle",
    contentKey: "enterpriseContent",
    image: EnterpriseImage,
  },
  {
    titleKey: "webTitle",
    contentKey: "webContent",
    image: WebApp,
  },
  {
    titleKey: "mobileTitle",
    contentKey: "mobileContent",
    image: GlobalApps,
  },
];

export default function ServicesList() {
  const { dictionary: dict } = useDictionary("services");

  return (
    <div className="grid max-w-4xl mx-auto px-4 gap-8 text-white md:gap-10 lg:grid-cols-2 w-full">
      {services.map((service, index) => (
        <div
          key={index.toString()}
          className={cn(
            "row-span-3 text-white text-center grid grid-rows-subgrid mx-auto rounded-lg z-10 border border-slate-100/20 bg-black/70 px-4 md:px-6 py-6 w-full max-w-md"
          )}
        >
          {!dict ? (
            <>
              <Skeleton className="h-8  rounded animate-pulse" />
              <div className="space-y-2">
                <Skeleton className="h-4 rounded animate-pulse" />
                <Skeleton className="h-4 rounded animate-pulse w-3/4 mx-auto" />
                <Skeleton className="h-4 rounded animate-pulse" />
              </div>
              <Skeleton className="relative aspect-square w-full max-h-56  rounded animate-pulse" />
            </>
          ) : (
            <>
              <h3 className="text-2xl font-semibold">
                {dict[service.titleKey]}
              </h3>
              <div className="max-w-sm lg:max-w-md mx-auto text-balance">
                <p>{dict[service.contentKey]}</p>
              </div>
              <div className="relative aspect-square w-full max-h-56">
                <Image
                  src={service.image}
                  alt={dict[service.titleKey] || ""}
                  className="rounded-lg object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  fill
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
