import React from "react";
import hm from "../assets/brands/hm.png";
import obey from "../assets/brands/obey.png";
import shopify from "../assets/brands/shopify.png";
import lacoste from "../assets/brands/lacoste.png";
import levis from "../assets/brands/levis.png";
import amazon from "../assets/brands/amazon.png";

const Brands = () => {
  const brands = [
    {
      id: 1,
      src: hm,
    },
    {
      id: 2,
      src: obey,
    },
    {
      id: 3,
      src: shopify,
    },
    {
      id: 4,
      src: lacoste,
    },
    {
      id: 5,
      src: levis,
    },
    {
      id: 6,
      src: amazon,
    },
  ];
  return (
    <div className="mt-12 bg-[#EBD96B] md:h-32 md:flex items-center justify-evenly grid-cols-2 grid py-6 md:py-0">
      {brands.map((b) => (
        <img
          key={b.id}
          src={b.src}
          alt=""
          className="mx-auto w-28 md:hover:scale-105 duration-200 cursor-pointer mt-4"
        />
      ))}
    </div>
  );
};

export default Brands;
