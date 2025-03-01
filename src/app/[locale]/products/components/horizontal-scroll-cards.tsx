"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

// Ensure GSAP ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollCardProps {
  items: {
    src: StaticImageData;
    title: string;
    content: string;
  }[];
}

export const HorizontalScrollCards: React.FC<
  HorizontalScrollCardProps
> = ({ items }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    let scrollTriggerInstance: ScrollTrigger;

    const createScrollTrigger = () => {
      // Kill previous instance if exists
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }

      // Only apply GSAP animation for desktop screens
      if (window.innerWidth >= 1024) {
        const cards = section.querySelectorAll(".card");
        let totalWidth = 0;
        cards.forEach((card) => {
          totalWidth += (card as HTMLElement).offsetWidth + 34;
        });

        gsap.to(section, {
          x: () => -(totalWidth - document.documentElement.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () =>
              `+=${totalWidth - document.documentElement.clientWidth}`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        scrollTriggerInstance = ScrollTrigger.getAll().slice(-1)[0];
      }
    };

    // Initial creation
    createScrollTrigger();

    // Add resize listener with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        createScrollTrigger();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden px-4 md:px-6">
      <div
        ref={triggerRef}
        className="h-[calc(100vh-178px)] lg:h-screen w-full"
      >
        <div
          ref={sectionRef}
          className="flex gap-8 h-[calc(100vh-178px)] lg:h-screen items-center will-change-transform lg:transform lg:translate-x-0 overflow-x-auto touch-pan-x lg:overflow-x-hidden"
        >
          {items.map((item, index) => (
            <Card
              key={index}
              className="card flex-shrink-0 w-[80vw] max-w-lg h-[70vh] max-h-[750px] bg-transparent border-white/20 snap-center"
            >
              <CardContent className="flex flex-col h-full text-center">
                <div className="relative w-full h-2/3">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain rounded-t-xl"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4 text-green-500">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
