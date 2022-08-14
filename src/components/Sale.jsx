import React from "react";
import banner from "../assets/banner.png";

const Sale = () => {
  return (
    <div className="flex items-center">
      <img className="w-full relative z-0" src={banner} alt="" />
      <div className="absolute md:left-1/2 left-1/3 pl-12">
        <p className="md:text-7xl text-xl font-extrabold leading-snug">
          <span className="bg-white px-6 rotate-12">PAYDAY</span>
          <br />
          <span className="px-6">SALE NOW</span>
        </p>
        <p className="px-6 md:text-2xl text-xs md:mt-6 mt-2 font-semibold">
          Spend minimal $100 get 30% off <br /> voucher code for your next
          purchase
        </p>
        <p className="px-6 md:text-3xl text-xs md:mt-8 mt-3 font-bold">
          1 June - 10 June 2021
        </p>
        <p className="px-6 md:text-xl text-xs mt-2">
          *Terms & Conditions apply
        </p>
        <div className="ml-6 md:mt-8 mt-2 bg-black inline-block md:py-3 py-2 md:px-6 px-2 rounded-xl text-white cursor-pointer">
          <p className="md:text-2xl text-xs">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
