import React from "react";
import { TbMenu3 } from "react-icons/tb";
import { FaOpencart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center px-5 pt-6 large:px-14">
      <div className="flex items-center gap-1">
        <div>
          <img
            height={32}
            width={32}
            src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/10/logo-icon.svg"
            alt=""
          />
        </div>
        <div className="font-creepster text-[17px] font-medium nav:text-[22px] text-white">
          Halloween Shop
        </div>
      </div>
      <div className="text-white hidden nav:flex gap-6">
        <ul className="flex items-center gap-6">
          <li className="font-bold nav:text-[16px] text-[15px] text-[#db7b3d]">
            <a href="#">HOME</a>
          </li>
          <li className="font-bold text-[15px] nav:text-[16px] hover:text-[#db7b3d]">
            <a href="#">SHOP</a>
          </li>
          <li className="hover:text-[#db7b3d] nav:text-[16px] font-bold text-[15px]">
            <a href="#">ABOUT</a>
          </li>
          <li className="hover:text-[#db7b3d] nav:text-[16px] font-bold text-[15px]">
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="text-sm hover:text-[#e48a4e]">
          <FaOpencart size={24} />
          <span className="absolute top-11 rounded-full large:right-28 w-4 font-bold bg-white text-[#e48a4e] tablet:right-20 tablett:right-24 text-[9px]">
            0
          </span>
        </div>
      </div>
      <button className="nav:hidden mobile:flex hover:text-[#e48a4e] text-white font-bold">
        <TbMenu3 size={20} />
      </button>
    </div>
  );
};

export default Navbar;
