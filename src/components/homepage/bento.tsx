"use client";

import clsx from "clsx";
import Bounded from "../bounded";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SmallImage from "../../../public/img/small-screenshot.png";
import LongIMage from "../../../public/img/long-screenshot.png";
import StarGrid from "../star-grid";

gsap.registerPlugin(ScrollTrigger);

const Bento = () => {
  return (
    <Bounded className="text-center">
      <div className="space-y-12 ">
        <div className="relative w-screen">
          <StarGrid />
        </div>

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

        <div className="grid max-w-4xl mx-auto px-4 gap-8 text-white md:gap-10 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index.toString()}
              className={clsx(
                "row-span-3 grid grid-rows-subgrid gap-4 rounded-lg border border-slate-100/20 bg-gradient-to-r from-black to-black p-4",
                feature.isWide ? "lg:col-span-2" : "lg:col-span-1"
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
    title: "Sonsuz Yenilik",
    content:
      "Yapay zeka ve otomasyonla güçlendirilmiş çığır açan çözümleri keşfedin, işinizi hızla değişen dijital dünyada uyum sağlamak ve büyümek için dönüştürün.",
    image: SmallImage,
    isWide: false,
  },
  {
    title: "Yapay Zeka Destekli İçgörüler",
    content:
      "Veri destekli kararlar almanızı sağlamak için keskin analizlerle gizli fırsatları keşfedin, trendleri belirleyin ve güvenle yol alırken bilgilere dayalı kararlar alın.",
    image: LongIMage,
    isWide: true,
  },
  {
    title: "Sorunsuz Entegrasyon",
    content:
      "Çözümlerimiz mevcut araçlarınız ve iş akışlarınızla zahmetsizce entegre olur, sorunsuz bir geçiş ve maksimum verimlilik sağlar.",
    image: SmallImage,
    isWide: false,
  },
  {
    title: "İlham Veren Tasarımlar",
    content:
      "Hedefinizi güçlendirin ve izleyicilerinizi büyüleyin, kullanıcı deneyimi açısından yeni standartlar belirleyerek kusursuz tasarımlarla.",
    image: LongIMage,
    isWide: true,
  },
];
