"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

import { FaAppStoreIos, FaNodeJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import Bounded from "@/components/bounded";
import StarBackground from "@/components/star-background";
import StylizedLogoMark from "@/components/stylized-logo-mark";
import { useDictionary } from "@/hooks/use-dictionary";

const Tech = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  const { dictionary: dict } = useDictionary("tech");

  const icons = {
    nodejs: <FaNodeJs />,
    appstore: <FaAppStoreIos />,
    android: <DiAndroid />,
    typescript: <SiTypescript />,
    reactNative: <TbBrandReactNative />,
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
      icon: "reactNative",
      name: "React",
    },
    {
      icon: "next",
      name: "Next",
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
            duration: 0.5,
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
        "-=1.4"
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
              borderColor: "#008529",
              color: "#008529",
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              borderColor: "rgb(236 253 245 / 0.3)",
              color: "#d1fae5",
            },
          ],
        },
        "-=2"
      );
    },
    { scope: container }
  );

  return (
    <Bounded className="relative overflow-hidden">
      <StarBackground />
      <div className="relative md:my-12 py-12 text-white flex flex-col gap-20 w-full">
        <h1 className="hero__heading text-balance text-center flex items-center justify-center text-4xl font-bold md:text-5xl h-[45px] md:h-[60px]">
          <span className="leading-tight">{dict?.title}</span>
        </h1>
        <div
          className="hidden sm:flex gap-2 items-center justify-center w-full"
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
              <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-green-50/30 p-3 text-3xl text-green-100 opacity-40 md:text-4xl lg:text-5xl">
                {item.icon && icons[item.icon as keyof typeof icons]}
              </div>
              {index !== tech.length - 1 && (
                <div
                  className={cn("signal-line", {
                    "rotate-180": index >= Math.floor(tech.length / 2),
                  })}
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
