import React from "react";
import leaf from "../../assets/leaf.svg";

const Title = (props) => {
  return (
    <div className="relative table my-4">
      <p className="text-4xl font-bold pb-2">{props.text}</p>
      <img src={leaf} alt="" className="w-24 absolute bottom-0 right-0 -z-10" />
    </div>
  );
};

export default Title;
