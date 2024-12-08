import clsx from "clsx";
import Bounded from "../bounded";
import Image from "next/image";

const Bento = () => {
  return (
    <Bounded>
      <div className="space-y-12">
        <h1 className="mt-4 space-y-12 text-center text-4xl font-medium text-white md:text-5xl">
          Son Teknoloji ile <br />
          <em className="bg-gradient-to-r from-emerald-700 to-emerald-950 bg-clip-text not-italic text-transparent">
            Yeni Nesil
          </em>{" "}
          Uygulamalar
        </h1>

        <div className="mx-auto max-w-md text-balance text-center text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
            facere!
          </p>
        </div>

        <div className="grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 text-white md:grid-cols-3 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index.toString()}
              className={clsx(
                "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-br from-black to-emerald-950 p-4",
                feature.isWide ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              <h3 className="text-2xl">{feature.title}</h3>
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
