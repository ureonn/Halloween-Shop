import React from "react";

const Ceramic = () => {
  return (
    <div>
      <div className="bg-black p-5 pt-28 text-white">
        <div className="rounded-3xl py-20 px-2 bg-gray-500 bg-Ceramic bg-cover tablett:pl-12">
          <h1 className="font-black pb-1 text-[14px] tablett:text-start tracking-widest leading-tight">
            NEW COLLECTION
          </h1>
          <h1 className="font-creepster font-bold tablett:text-start text-[34px] large:text-[65px] tablet:text-[40px] tablett:max-w-3xl leading-none tracking-wider text-center my-2">
            Ceramic Halloween Decorations
          </h1>
          <p className="mb-5 text-gray-200 tablett:text-start tablett:max-w-2xl large:text-[16px] font-medium">
            Whether you prefer the charm of classic Halloween decor or the From
            intricately designed ceramic pumpkins with whimsical smiles to
            hauntingly beautiful ceramic witch figurines, these decorations
            serve as captivating focal points in any Halloween display.
          </p>
          <div className="flex justify-around tablett:justify-start">
            <button className="bg-[#dc5522] text-[13px] tablet:px-6 font-bold py-2 tablett:py-3 px-6 rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceramic;
