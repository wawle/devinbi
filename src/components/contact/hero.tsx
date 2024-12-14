"use client";

import Bounded from "../bounded";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import ContactForm from "./contact-form";

const ContactHero = () => {
  const words = `Let’s work together to turn your ideas into reality!`;
  return (
    <Bounded className="relative text-white">
      <div className="flex w-full flex-col items-center justify-center ">
        <div className="mt-12 flex w-full max-w-lg flex-col items-center justify-center gap-12 text-center text-xl lg:max-w-xl">
          <TextGenerateEffect
            className="text-4xl text-white dark:text-white"
            words={words}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 rounded-lg  p-12">
          <h2 className="text-balance text-4xl font-bold md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic leading-tight text-transparent">
            Get In Touch
          </h2>

          <ContactForm />
        </div>
      </div>
    </Bounded>
  );
};

export default ContactHero;
