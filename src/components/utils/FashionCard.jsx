import React from "react";
import arrow from "../../assets/arrow.svg";

const FashionCard = (props) => {
  const card = props.card;
  return (
    <div className="hover:scale-105 duration-500 cursor-pointer">
      <img src={card.src} alt="" />
      <div className="flex py-4 px-2 items-center justify-between">
        <div className="">
          <p className="md:text-xl text-md">{card.title}</p>
          <p className="md:text-md text-sm text-[#7F7F7F]">{card.subtitle}</p>
        </div>
        <img src={arrow} alt="" className="md:w-8 w-4" />
      </div>
    </div>
  );
};

export default FashionCard;
