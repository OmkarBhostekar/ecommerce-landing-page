import React from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const categories = [
    {
      id: 1,
      text: "CATALOGUE",
    },
    {
      id: 2,
      text: "FASHION",
    },
    {
      id: 3,
      text: "FAVOURITE",
    },
    {
      id: 4,
      text: "LIFESTYLE",
    },
  ];
  return (
    <div className="mt-8 mx-20 flex justify-between items-center">
      <div className="">
        <img src={logo} alt="" className="h-8" />
      </div>
      <div className="flex items-center">
        {categories.map((c) => (
          <p className="hidden md:flex text-sm ml-8 hover:text-my-gray cursor-pointer">
            {c.text}
          </p>
        ))}
        <p className="text-sm ml-8 bg-black py-1.5 px-3 rounded-md text-white cursor-pointer">
          SIGN UP
        </p>
      </div>
    </div>
  );
};

export default NavBar;
