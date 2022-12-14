import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="mt-8 mx-8 md:mx-16 md:flex items-center">
      <div className="md:absolute md:left-40 z-10">
        <p className="text-6xl font-bold leading-snug">
          <span className="bg-white pl-6 pr-24 rounded-xl rotate-12">
            LET’S{" "}
          </span>
          <br />
          <span className="px-6 ">EXPLORE</span>
          <br />
          <span className="px-6 bg-my-yellow pr-8 rounded-xl rotate-12">
            UNIQUE
          </span>
          <br />
          <span className="px-6">CLOTHES</span>
        </p>
      </div>
      <img className="w-full relative z-0" src={hero} alt="" />
    </div>
  );
};

export default Hero;
