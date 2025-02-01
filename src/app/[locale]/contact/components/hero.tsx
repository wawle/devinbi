"use client";

import { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ContactForm from "./contact-form";
import { useDictionary } from "@/hooks/use-dictionary";
import Loading from "./loading";

const ContactHero = () => {
  const { dictionary: dict } = useDictionary("contact");
  const [isFormVisible, setFormVisible] = useState(false);

  const words = dict?.ideas;

  // Delay form rendering until words are ready
  useEffect(() => {
    if (words) {
      setFormVisible(true); // Show form after words are loaded
    }
  }, [words]);

  return (
    <>
      {!dict ? (
        <Loading />
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-8 p-12">
          <h2 className="text-4xl font-bold md:text-5xl md:leading-relaxed bg-gradient-to-r from-green-400 to-[#008529] bg-clip-text text-transparent">
            {dict?.getInTouch}
          </h2>
          <div className="flex w-full max-w-lg flex-col items-center justify-center text-center text-xl lg:max-w-xl">
            {words ? (
              <TextGenerateEffect
                className="text-3xl leading-normal text-white dark:text-white mt-0"
                words={dict?.ideas}
              />
            ) : (
              <p className="text-3xl leading-normal text-white dark:text-white">
                {dict?.ideas}
              </p>
            )}
          </div>

          {/* Render ContactForm only after words are loaded */}
          {isFormVisible && <ContactForm dict={dict} />}
        </div>
      )}
    </>
  );
};

export default ContactHero;
