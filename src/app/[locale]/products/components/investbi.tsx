"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import AnimatedLogo from "../../../../components/animated-logo";
import GoldImage from "../../../../../public/img/gold.png";
import { TextGenerateEffect } from "../../../../components/ui/text-generate-effect";

export function Investbi() {
  const cards = data.map((card, index) => (
    <Card key={index.toString()} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl text-xl md:text-5xl font-bold">
        <AnimatedLogo className="text-4xl" logoText="Invest" />
      </h2>
      <TextGenerateEffect
        className="text-xl leading-normal text-white dark:text-white"
        words={`Yatırımlarınızı kolayca takip edin ve büyütün!`}
      />
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Kripto Para",
    src: GoldImage,
    title: "Kripto yatırımlarınızı takip edin.",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Kripto portföyünüzü kontrol altında tutun.
          </span>{" "}
          Bitcoin, Ethereum ve diğer altcoinler için detaylı kar-zarar
          analizi yapın.
        </p>
      </div>
    ),
  },
  {
    category: "Türkiye Borsası",
    src: GoldImage,
    title: "Borsa yatırımlarınızı yönetin.",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Türkiye Borsası yatırımlarınızı tek bir yerde yönetin.
          </span>{" "}
          BIST 100 ve diğer endekslerdeki yatırımlarınızı kolayca takip
          edin.
        </p>
      </div>
    ),
  },
  {
    category: "Amerikan Borsası",
    src: GoldImage,
    title: "NASDAQ ve S&P 500 yatırımları.",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Amerikan borsalarına yatırım yapmak hiç bu kadar kolay
            olmamıştı.
          </span>{" "}
          NASDAQ, S&P 500 ve daha fazlası için performans analizi
          yapabilirsiniz.
        </p>
      </div>
    ),
  },
  {
    category: "Hisse Senetleri",
    src: GoldImage,
    title: "Hisse yatırımlarınızı takip edin.",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Hisse senetlerinizin performansını görün.
          </span>{" "}
          Şirket bazlı kar-zarar oranlarını detaylıca inceleyin.
        </p>
      </div>
    ),
  },
  {
    category: "Emtia",
    src: GoldImage,
    title: "Altın, gümüş ve daha fazlası.",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Değerli metaller ve emtia yatırımları.
          </span>{" "}
          Altın, gümüş ve diğer emtiaların değer değişimlerini takip edin.
        </p>
      </div>
    ),
  },
  {
    category: "Döviz",
    src: GoldImage,
    title: "Döviz kurlarını anlık takip edin.",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Döviz yatırımlarınızı kontrol edin.
          </span>{" "}
          Dolar, Euro ve diğer para birimlerinin değerlerini kolayca
          izleyin.
        </p>
      </div>
    ),
  },
];
