"use client";

import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import HeroImage from "../../../../public/img/monitoring.png";
import Link from "next/link";
import Bounded from "@/components/bounded";
import { Button } from "@/components/ui/button";
import { useDictionary } from "@/hooks/use-dictionary";
import StarGrid from "@/components/star-grid";

const Hero = () => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const dict = useDictionary("hero");
  const dictCommon = useDictionary("common");
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
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
        { scale: 0.8 },
        { scale: 1, opacity: 1, duration: 0.8 }
      );

      // Body animasyonu
      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 0.8 }
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
        { y: 0, opacity: 1, duration: 0.8 }
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      );
    },
    { scope: container }
  );

  return (
    <Bounded className="text-center relative">
      <div className="relative w-screen">
        <StarGrid />
      </div>
      <div
        className="relative w-full space-y-10 py-4 text-white"
        ref={container}
      >
        <h1 className="hero__heading text-balance text-4xl font-bold opacity-0 md:text-5xl">
          <em className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic leading-tight text-transparent">
            {dict?.title}
          </em>
        </h1>

        <div className="hero__body clear-start mx-auto max-w-md text-balance text-lg opacity-0">
          <p>{dict?.description}</p>
        </div>

        <Button
          asChild
          variant="pulseGreen"
          className="hero__button z-10 px-10 py-6"
        >
          <Link className="" href="/contact">
            {dictCommon?.contactButton}
          </Link>
        </Button>

        <div className="hero__image glass-container mt-10 w-full max-w-6xl opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 opacity-0 blur-2xl filter" />
          <div className="relative aspect-square max-w-[600px] w-full mx-auto">
            <Image
              alt="Hero Image"
              src={HeroImage}
              className="rounded-lg object-contain"
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
