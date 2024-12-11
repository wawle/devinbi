"use client";

import Bounded from "../bounded";
import usePrefersReducedMotion from "@/app/hooks/usePrefersReducedMotion";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import StarGrid from "../star-grid";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";

const Hero = () => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          { opacity: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

      // Heading animasyonu
      tl.fromTo(
        ".hero__heading",
        { scale: 0.8 },
        { scale: 1, opacity: 1, duration: 0.8 },
      );

      // Body animasyonu
      tl.fromTo(".hero__body", { y: 20 }, { y: 0, opacity: 1, duration: 0.8 });

      // Button animasyonu
      tl.fromTo(
        ".hero__button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
      );

      // Image ve Glow animasyonları aynı anda başlar
      tl.fromTo(
        ".hero__image",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
      );
    },
    { scope: container },
  );

  return (
    <Bounded className="text-center">
      <div className="relative w-full space-y-14 text-white" ref={container}>
        <StarGrid />
        <h1 className="hero__heading text-balance text-4xl font-medium opacity-0 md:text-5xl">
          Yazılımın Geleceğini Şekillendiren
          <br />
          <em className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic text-transparent">
            Akıllı Çözümler
          </em>
        </h1>

        <div className="hero__body clear-start mx-auto max-w-md text-balance opacity-0">
          <p>
            Devinbi, işletmenizi bir adım öteye taşıyan yapay zeka destekli
            yazılım çözümleri sunar. Dinamik ve kullanıcı odaklı
            tasarımlarımızla, iş süreçlerinizi hızlandırın ve geleceğe hazır
            olun.
          </p>
        </div>

        <Button variant="pulseGreen" className="hero__button z-10 px-10 py-6">
          Hemen Keşfedin
        </Button>

        <div className="hero__image glass-container mt-10 w-full max-w-6xl opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 opacity-0 blur-2xl filter" />
          <div className="relative aspect-[2672/1604] w-full">
            <Image
              alt="Hero Image"
              src="/img/hero-image.png"
              className="rounded-lg"
              priority
              sizes="100vw"
              objectFit="contain"
              fill
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
