import React from "react";
import { RiStarSLine } from "react-icons/ri";

const Scary = () => {
  return (
    <div className="bg-black pt-14">
      <div className="py-9">
        <h1 className="text-[#e07b37] font-bold large:text-sm tracking-wider pb-2 text-sm">
          SCARY
        </h1>
        <h1 className="font-creepster text-3xl text-white  tracking-wide large:my-2 tablet:text-4xl large:text-6xl leading-snug">
          DECORATIONS
        </h1>
        <hr className="border-gray-700 my-9" />
      </div>
      <div className="flex flex-wrap justify-center gap-y-6 tablet:flex-nowrap mobile:px-4 tablett:px-0 tablett:gap-x-4">
        <div className="justify">
          <a href="#">
            <img className="rounded-3xl" src="sc1.jpg" alt="" />
          </a>
          <div className="flex mt-2 text-xl tablett:text-[19px]">
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
          </div>
          <h1 className="text-start font-medium text-white font-creepster text-xl tablett:text-2xl">
            <a href="#">CANDLE SUPPORT</a>
          </h1>
          <h1 className="text-start font-medium tablett:text-[18px] text-sm text  text-[#e07b37]">
            <span>$65.00</span>
          </h1>
          <button className="bg-[#b95435] px-4 font-bold text-white text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2 flex">
            ADD TO CART
          </button>
        </div>
        <div>
          <a href="#">
            <img className="rounded-3xl" src="sc2.jpg" alt="" />
          </a>
          <div className="flex mt-2 text-xl tablett:text-[19px]">
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
          </div>
          <h1 className="text-start font-medium font-creepster text-xl text-white tablett:text-2xl">
            <a href="#">CERAMIC PUMPKIN</a>
          </h1>
          <h1 className="text-start space-x-1 font-medium tablett:text-[18px] text-sm text  text-[#e07b37]">
            <span className="text-[#994d36] ">$99.00</span>
            <span>$59.00</span>
          </h1>
          <button className="bg-[#b95435] px-4 font-bold text-white text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2 flex">
            ADD TO CART
          </button>
        </div>
        <div className="">
          <a href="#">
            <img className="rounded-3xl" src="sc3.jpg" alt="" />
          </a>
          <div className="flex mt-2 text-xl tablett:text-[19px]">
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
          </div>
          <h1 className="text-start font-medium text-white font-creepster text-xl tablett:text-2xl">
            <a href="#">PAPER PUMPKIN</a>
          </h1>
          <h1 className="text-start font-medium tablett:text-[18px] text-sm text  text-[#e07b37]">
            <span>$17.00</span>
          </h1>
          <button className="bg-[#b95435] px-4 font-bold text-white text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2 flex">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scary;
