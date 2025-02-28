"use client";

import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import HeroImage from "../../../../public/img/monitoring.png";
import Bounded from "@/components/bounded";
import { useDictionary } from "@/hooks/use-dictionary";
import StarGrid from "@/components/star-grid";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { dictionary: dict } = useDictionary("hero");
  const [isMounted, setIsMounted] = useState(false);
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!isMounted) return;

      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          { opacity: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

      // Heading animasyonu
      tl.fromTo(
        ".hero__heading",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      );

      // Body animasyonu
      tl.fromTo(
        ".hero__body",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );

      // Button animasyonu
      tl.fromTo(
        ".hero__button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      );

      // Image ve Glow animasyonları aynı anda başlar
      tl.fromTo(
        ".hero__image",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "<"
      );
    },
    { scope: container, dependencies: [dict, isMounted] }
  );

  // Prevent hydration mismatch by not rendering content until mounted
  if (!isMounted) {
    return (
      <Bounded className="text-center relative py-0 overflow-hidden">
        <div className="relative w-full">
          <StarGrid />
        </div>
        <div className="relative w-full space-y-10 py-12 text-white overflow-hidden">
          <div className="flex justify-center">
            <Skeleton className="w-1/2 h-14" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-28 w-1/3" />
          </div>
          <div className="hero__image glass-container mt-10 w-full max-w-7xl">
            <div className="relative aspect-square max-w-[600px] w-full mx-auto">
              <Skeleton className="w-full h-full absolute" />
            </div>
          </div>
        </div>
      </Bounded>
    );
  }

  return (
    <Bounded className="text-center relative py-0 overflow-hidden">
      <div className="relative w-full">
        <StarGrid />
      </div>
      <div
        className="relative w-full space-y-10 py-12 text-white overflow-hidden"
        ref={container}
      >
        {!dict ? (
          <div className="flex justify-center">
            <Skeleton className="w-1/2 h-14" />
          </div>
        ) : (
          <h1 className="hero__heading text-balance text-4xl font-bold opacity-0 md:text-5xl">
            <em className="bg-gradient-to-r from-green-400 to-[#008529] bg-clip-text not-italic leading-tight text-transparent">
              {dict?.title}
            </em>
          </h1>
        )}

        {!dict ? (
          <div className="flex justify-center">
            <Skeleton className="h-28 w-1/3" />
          </div>
        ) : (
          <div className="hero__body clear-start mx-auto max-w-md text-balance text-lg opacity-0">
            <p>{dict?.description}</p>
          </div>
        )}

        <div className="hero__image glass-container mt-10 w-full max-w-7xl opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 opacity-0 blur-2xl filter" />
          <div className="relative aspect-square max-w-[600px] w-full mx-auto">
            <Image
              alt="Hero Image"
              src={HeroImage}
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              fill
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
