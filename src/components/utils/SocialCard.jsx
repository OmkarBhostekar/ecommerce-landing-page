import React from "react";

const SocialCard = ({ social }) => {
  return (
    <div
      key={social.id}
      className="h-10 w-10 rounded-lg bg-my-yellow mr-4 p-2 cursor-pointer"
    >
      <img src={social.src} alt="" className="h-full w-full" />
    </div>
  );
};

export default SocialCard;
