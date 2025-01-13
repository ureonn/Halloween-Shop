import React from "react";

const Sweets = () => {
  return (
    <div className="bg-black pt-14 text-white bg-Sweet bg-cover">
      <div className="py-9 pt-">
        <h1 className="text-[#e07b37] font-bold large:text-sm tracking-wider pb-2 text-sm">
          SWEETS
        </h1>
        <h1 className="font-creepster text-3xl text-white  tracking-wide large:my-2 tablet:text-4xl large:text-6xl leading-snug">
          HALLOWEEN CANDY PACKS
        </h1>
        <hr className="border-gray-700 my-9" />
      </div>
      <div className="tablett:flex grid tablett:justify-between items-center tablett:px-14 px-2">
        <div className="text-centr mb-14">
          <h1 className="font-creepster tablett:text-start text-center text-2xl large:text-3xl leading-snug">
            A SPRINKLE OF MAGIC TO EVERY TRICK-OR-TREAT ADVENTURE
          </h1>
          <p className="text-center font-medium tablett:text-start tablett:max-w-md py-4">
            From the classic to the creatively creepy, Halloweens candies remind
            us that the true essence of this holiday lies in the delightful
            experience of indulging in sweeet surprises with friends and family.
          </p>
          <button className=" bg-[#f34729] px-4 font-bold text-white tablett:flex text-sm tablett:text-[15px] tablett:py-3 tablett:px-6 rounded py-2 mt-2">
            SHOP NOW
          </button>
        </div>
        <div className="flex justify-center ">
          <img
            src="prd.jpg"
            className="rounded-3xl w-96 tablett:w-11/12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sweets;
