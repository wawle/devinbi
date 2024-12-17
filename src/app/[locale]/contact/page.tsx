import Bounded from "@/components/bounded";
import React from "react";
import ContactHero from "./components/hero";

const ContactPage = () => {
  return (
    <Bounded className="relative text-white">
      <ContactHero />
    </Bounded>
  );
};

export default ContactPage;
