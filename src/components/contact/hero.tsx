"use client";

import Bounded from "../bounded";
import AnimatedContent from "./animated-content";
import ContactForm from "./contact-form";

const ContactHero = () => {
  return (
    <Bounded className="relative text-white">
      <div className="flex w-full flex-col items-center justify-center gap-12">
        <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="mt-12 flex max-w-sm text-justify lg:max-w-lg">
          <p>
            We’re here to bring your projects to life! Fill out the form below
            to get in touch with us for your software needs. Whether it's a
            website, mobile application, or a custom software solution, our
            expert team is ready to provide tailored solutions for your
            business. Let’s work together to turn your ideas into reality!
          </p>
        </div>
        <div className="glass-container flex w-full flex-col items-center justify-center gap-12 rounded-lg bg-gradient-to-br from-black to-emerald-600 p-12">
          <AnimatedContent>
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
