import React from "react";
import fb from "../assets/socials/fb.svg";
import insta from "../assets/socials/insta.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import SocialCard from "./utils/SocialCard";
import Links from "./utils/Links";

const Footer = () => {
  const socials = [
    {
      id: 1,
      src: fb,
    },
    {
      id: 2,
      src: insta,
    },
    {
      id: 3,
      src: twitter,
    },
    {
      id: 4,
      src: linkedin,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row bg-black md:p-24 p-12">
      <div className="md:w-1/2">
        <p className="text-white text-3xl font-bold">FASHION</p>
        <p className="text-[#8E8E8E] text-md mt-4">
          Complete your style with awesome
          <br />
          clothes from us.
        </p>
        <div className="flex mt-8">
          {socials.map((s) => (
            <SocialCard social={s} />
          ))}
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0">
        <Links />
      </div>
    </div>
  );
};

export default Footer;
