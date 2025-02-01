import Bounded from "@/components/bounded";
import React from "react";
import ContactHero from "./components/hero";
import StarGrid from "@/components/star-grid";

const ContactPage = () => {
  return (
    <Bounded className="relative text-white py-12">
      <StarGrid />
      <ContactHero />
    </Bounded>
  );
};

export default ContactPage;
