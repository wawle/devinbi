"use client";

import clsx from "clsx";
import Bounded from "../bounded";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Bento = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".bento_card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { x: "-60%" },
          {
            x: "0%",
            scrollTrigger: {
              once: true,
              trigger: card,
              start: "bottom bottom",
              end: "top center",
              scrub: 3,
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <Bounded className="text-center">
      <div className="space-y-12" ref={container}>
        <h1 className="bento_heading mt-4 space-y-12 text-center text-4xl font-medium text-white md:text-5xl">
          Son Teknoloji ile <br />
          <em className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic text-transparent">
            Yeni Nesil
          </em>{" "}
          Uygulamalar
        </h1>

        <div className="bento_body mx-auto max-w-md text-balance text-center text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
            facere!
          </p>
        </div>

        <div className="grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 text-white md:gap-10 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index.toString()}
              className={clsx(
                "glass-container bento_card row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-br from-black to-emerald-600 p-4",
                feature.isWide ? "lg:col-span-2" : "lg:col-span-1",
              )}
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <div className="max-w-md text-balance">
                <p>{feature.content}</p>
              </div>
              <div className="relative h-36 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg"
                  priority
                  sizes="100vw"
                  objectFit="contain"
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
    title: "Sonsuz Yenilik",
    content:
      "Yapay zeka ve otomasyonla güçlendirilmiş çığır açan çözümleri keşfedin, işinizi hızla değişen dijital dünyada uyum sağlamak ve büyümek için dönüştürün.",
    image: "/img/small-screenshot.png",
    isWide: false,
  },
  {
    title: "Yapay Zeka Destekli İçgörüler",
    content:
      "Veri destekli kararlar almanızı sağlamak için keskin analizlerle gizli fırsatları keşfedin, trendleri belirleyin ve güvenle yol alırken bilgilere dayalı kararlar alın.",
    image: "/img/long-screenshot.png",
    isWide: true,
  },
  {
    title: "Sorunsuz Entegrasyon",
    content:
      "Çözümlerimiz mevcut araçlarınız ve iş akışlarınızla zahmetsizce entegre olur, sorunsuz bir geçiş ve maksimum verimlilik sağlar.",
    image: "/img/small-screenshot.png",
    isWide: false,
  },
  {
    title: "İlham Veren Tasarımlar",
    content:
      "Hedefinizi güçlendirin ve izleyicilerinizi büyüleyin, kullanıcı deneyimi açısından yeni standartlar belirleyerek kusursuz tasarımlarla.",
    image: "/img/long-screenshot.png",
    isWide: true,
  },
];
