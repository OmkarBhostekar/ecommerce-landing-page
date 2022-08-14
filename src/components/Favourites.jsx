import React from "react";
import Title from "./utils/Title";
import instagram from "../assets/fav/instagram.png";
import under40 from "../assets/fav/under40.png";
import FashionCard from "./utils/FashionCard";

const Favourites = () => {
  const list = [
    {
      id: 1,
      src: instagram,
      title: "Trending on Instagram",
      subtitle: "Explore Now!",
    },
    {
      id: 2,
      src: under40,
      title: "All under $40",
      subtitle: "Explore Now!",
    },
  ];

  return (
    <div className="md:m-16 m-4 mt-12">
      <Title text="Young’s Favourite" />
      <div className="flex grid-cols-2 md:gap-24 gap-4 md:mr-24 mt-16">
        {list.map((card) => (
          <FashionCard card={card} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
