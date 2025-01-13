import React from "react";

const Hero = () => {
  return (
    <div className="bg-black p-5 text-white">
      <div className="rounded-3xl py-14 px-2 bg-hero bg-cover tablett:pl-12">
        <h1 className="font-black pb-1 text-[14px] tablett:text-start tracking-widest leading-tight">
          NEW COLLECTION
        </h1>
        <h1 className="font-creepster font-bold tablett:text-start text-[34px] large:text-[74px] tablet:text-[59px] tablett:max-w-md leading-none tracking-wider text-center my-2">
          HALLOWEEN DECORATIONS
        </h1>
        <p className="mb-5 text-gray-200 tablett:text-start tablett:max-w-3xl large:text-[16px] font-medium">
          Whether you prefer the charm of classic Halloween decor or the thrill
          of modern and innovative designs, these decorations invite you to join
          in the celebration of all things eerie, enigmatic, and enchanting.
        </p>
        <div className="flex justify-around tablett:justify-start">
          <button className="bg-[#dc5522] text-[13px] tablet:px-6 font-bold py-2 tablett:py-3 px-6 rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
