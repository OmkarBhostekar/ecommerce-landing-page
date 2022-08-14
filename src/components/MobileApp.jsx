import React from "react";
import app from "../assets/app.png";
import ios from "../assets/ios.png";
import android from "../assets/android.png";

const MobileApp = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mx-6 items-center my-8">
      <div className="flex md:w-1/2 items-center justify-center">
        <div className="">
          <p className="md:text-5xl text-3xl mt-4 md:mt-0 font-extrabold ">
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </p>
          <p className="text-lg mt-6">
            Get 30% off for first transaction using <br />
            Rondovision mobile app for now.
          </p>
          <div className="flex gap-4 mt-8">
            <img src={ios} alt="" className="w-40 cursor-pointer" />
            <img src={android} alt="" className="w-40 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={app} alt="" className="w-3/4 mx-auto" />
      </div>
    </div>
  );
};

export default MobileApp;
