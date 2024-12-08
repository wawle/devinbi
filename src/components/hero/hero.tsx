import React from "react";
import Bounded from "../bounded";
import AnimatedContent from "./animated-content";

const Hero = () => {
  return (
    <Bounded className="py-32 text-center">
      <AnimatedContent />
    </Bounded>
  );
};

export default Hero;
