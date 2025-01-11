"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";

export default function AnimatedContent({
  children,
  isLeft = true,
}: {
  children: React.ReactNode;
  isLeft: boolean;
}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { y: 0 });
        return;
      }
      if (isLeft) {
        gsap.fromTo(
          container.current,
          { x: "100% " },
          {
            x: 0,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
              once: true,
              trigger: container.current,
              start: "top bottom-=40%",
              toggleActions: "play pause resume reverse",
            },
          },
        );
      } else {
        gsap.fromTo(
          container.current,
          { x: "-100% " },
          {
            x: 0,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
              once: true,
              trigger: container.current,
              start: "top bottom-=40%",
              toggleActions: "play pause resume reverse",
            },
          },
        );
      }
    },
    { scope: container },
  );

  return <div ref={container}>{children}</div>;
}
