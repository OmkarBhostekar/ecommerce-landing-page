import React from "react";
import banner from "../assets/banner.png";

const Sale = () => {
  return (
    <div className="flex items-center">
      <img className="w-full relative z-0" src={banner} alt="" />
      <div className="absolute left-1/2 pl-12">
        <p className="text-7xl font-extrabold leading-snug">
          <span className="bg-white px-6 rotate-12">PAYDAY</span>
          <br />
          <span className="px-6 ">SALE NOW</span>
        </p>
        <p className="px-6 text-2xl mt-6 font-semibold">
          Spend minimal $100 get 30% off <br /> voucher code for your next
          purchase
        </p>
        <p className="px-6 text-3xl mt-8 font-bold">1 June - 10 June 2021</p>
        <p className="px-6 text-xl mt-2">*Terms & Conditions apply</p>
        <div className="ml-6 mt-8 bg-black inline-block py-3 px-6 rounded-xl text-white cursor-pointer">
          <p className="text-2xl">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
