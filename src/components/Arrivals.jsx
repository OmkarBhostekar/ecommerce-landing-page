import React from "react";
import Title from "./utils/Title";
import hoodie from "../assets/arrivals/hoodie.png";
import coats from "../assets/arrivals/coats.png";
import tees from "../assets/arrivals/tees.png";
import FashionCard from "./utils/FashionCard";

const Arrivals = () => {
  const list = [
    {
      id: 1,
      src: hoodie,
      title: "Hoodies & Sweetshirt",
      subtitle: "Explore Now!",
    },
    {
      id: 2,
      src: coats,
      title: "Coats & Parkas",
      subtitle: "Explore Now!",
    },
    {
      id: 3,
      src: tees,
      title: "Tees & T-Shirt",
      subtitle: "Explore Now!",
    },
  ];

  return (
    <div className="m-16">
      <Title text="NEW ARRIVALS" />
      <div className="flex grid-cols-3 gap-24 mr-24 mt-16">
        {list.map((card) => (
          <FashionCard card={card} />
        ))}
      </div>
    </div>
  );
};

export default Arrivals;
