"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import StylizedLogoMark from "../stylized-logo-mark";
import Bounded from "../bounded";
import StarBackground from "../star-background";
import { cn } from "@/lib/utils";
import gsap from "gsap";

import { FaAppStoreIos, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";

const Tech = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  const icons = {
    nodejs: <FaNodeJs />,
    appstore: <FaAppStoreIos />,
    android: <DiAndroid />,
    typescript: <SiTypescript />,
    react: <FaReact />,
    next: <RiNextjsFill />,
  };

  const tech = [
    {
      icon: "appstore",
      name: "AppStore",
    },
    {
      icon: "android",
      name: "Android",
    },
    {
      icon: "next",
      name: "Next",
    },
    {
      icon: "react",
      name: "React",
    },
    {
      icon: "typescript",
      name: "Typescript",
    },
    {
      icon: "nodejs",
      name: "NodeJS",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(3)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <Bounded className="relative overflow-hidden">
      <StarBackground />

      <div className="relative my-12 text-white">
        <h3 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium md:text-5xl">
          TECH STACK
        </h3>

        <div
          className="mt-20 flex flex-col items-center md:flex-row"
          ref={container}
        >
          {tech.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(tech.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                {item.icon && icons[item.icon as keyof typeof icons]}
              </div>
              {index !== tech.length - 1 && (
                <div
                  className={cn(
                    "signal-line",
                    index >= Math.floor(tech.length / 2)
                      ? "rotate-180"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Tech;
