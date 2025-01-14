import React from "react";
import { RiStarSLine } from "react-icons/ri";

const Product = () => {
  return (
    <div className="bg-black text-white bg-Product bg-cover">
      <div className="pt-14 mb-24">
        <div className="py-9">
          <h1 className="text-[#e07b37] font-bold large:text-sm tracking-wider pb-2 text-sm">
            MOST DELICIOUS
          </h1>
          <h1 className="font-creepster text-2xl  tracking-wide large:my-2 tablet:text-4xl large:text-6xl leading-snug">
            CANDIES & COOKIES
          </h1>
          <hr className="border-gray-700 my-9" />
        </div>
        <div className="flex flex-wrap tablett:mx-4 justify-center gap-y-6 tablet:flex-nowrap mobile:px-4 tablett:px-0 tablett:gap-x-4">
          <div className="justify">
            <a href="#">
              <img className="rounded-3xl" src="Prd1.jpg" alt="" />
            </a>
            <div className="flex mt-2 text-xl tablett:text-[19px]">
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
            </div>
            <h1 className="text-start font-medium font-creepster text-xl tablett:text-2xl">
              <a href="#">BOO-TIFUL BUTTERCOOKIES</a>
            </h1>
            <h1 className="text-start font-medium tablett:text-[18px] text-sm text  text-[#e07b37]">
              <span>$29.00</span>
              <span>$21.00</span>
            </h1>
            <button className="bg-[#b95435] px-4 font-bold text-white text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2 flex">
              ADD TO CART
            </button>
          </div>
          <div className="tablet:mx-4">
            <a href="#">
              <img className="rounded-3xl" src="Prd3.jpg" alt="" />
            </a>
            <div className="flex mt-2 text-xl tablett:text-[19px]">
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
            </div>
            <h1 className="text-start font-medium font-creepster text-xl tablett:text-2xl">
              <a href="#">GHOSTLY GINGERNAPS</a>
            </h1>
            <h1 className="text-start font-medium tablett:text-[18px] text-sm text  text-[#e07b37]">
              <span>$27.00</span>
            </h1>
            <button className="bg-[#b95435] px-4 font-bold text-white text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2 flex">
              ADD TO CART
            </button>
          </div>
          <div className="">
            <a href="#">
              <img className="rounded-3xl" src="prd4.jpg" alt="" />
            </a>
            <div className="flex mt-2 text-xl tablett:text-[19px]">
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
            </div>
            <h1 className="text-start font-medium font-creepster text-xl tablett:text-2xl">
              <a href="#">ZOMBIE ZEST COOKIES</a>
            </h1>
            <h1 className="text-start font-medium tablett:text-[18px] text-sm text  text-[#e07b37]">
              <span>$35.00</span>
            </h1>
            <button className="bg-[#b95435] px-4 font-bold text-white text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2 flex">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <hr className="text-3xl mx-4 border-gray-600 tablett:mx-36  large:mx-14" />
    </div>
  );
};

export default Product;
