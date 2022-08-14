import React from "react";

const Contact = () => {
  return (
    <div className="bg-my-yellow p-24 text-center content-center">
      <p className="text-5xl font-extrabold text-white leading-snug">
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </p>
      <p className="text-xl text-white mt-4">
        Type your email down below and be young wild generation
      </p>
      <div className="w-fit bg-white px-6 py-2 rounded-md mx-auto mt-12">
        <input
          type="email"
          name=""
          id=""
          className="inline-block py-2 border focus:border-transparent border-transparent"
          placeholder="Enter email"
        />
        <p className="inline-block text-md ml-8 bg-black py-2 px-4 rounded-md text-white cursor-pointer">
          SEND
        </p>
      </div>
    </div>
  );
};

export default Contact;
