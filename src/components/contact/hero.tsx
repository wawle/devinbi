"use client";

import Bounded from "../bounded";
import AnimatedContent from "./animated-content";
import ContactForm from "./contact-form";

const ContactHero = () => {
  return (
    <Bounded className="relative text-white">
      <div className="flex w-full flex-col items-center justify-center gap-24">
        <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-emerald-400/20 blur-3xl" />
        <AnimatedContent isLeft>
          <div className="mt-12 flex w-full max-w-lg flex-col items-center justify-center gap-12 text-center text-xl lg:max-w-xl">
            <p className="bg-gradient-to-tr from-white to-emerald-900 bg-clip-text text-center text-5xl not-italic leading-tight text-transparent">
              Let’s work together to turn your ideas into reality!
            </p>
          </div>
        </AnimatedContent>
        <div className="glass-container flex w-full flex-col items-center justify-center gap-12 rounded-lg bg-gradient-to-r from-black to-emerald-600 p-12">
          <AnimatedContent isLeft={false}>
            <h2 className="text-balance text-4xl font-medium md:text-5xl">
              Get In {""}
              <em className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text not-italic text-transparent">
                Touch
              </em>
            </h2>
          </AnimatedContent>

          <ContactForm />
        </div>
      </div>
    </Bounded>
  );
};

export default ContactHero;
