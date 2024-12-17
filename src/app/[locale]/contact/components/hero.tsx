"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ContactForm from "./contact-form";

const ContactHero = () => {
  const words = `Let’s work together to turn your ideas into reality!`;
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-12">
      <h2 className="text-balance text-4xl font-bold md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic leading-tight text-transparent">
        Get In Touch
      </h2>
      <div className=" flex w-full max-w-lg flex-col items-center justify-center text-center text-xl lg:max-w-xl">
        <TextGenerateEffect
          className="text-4xl leading-normal text-white dark:text-white"
          words={words}
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactHero;