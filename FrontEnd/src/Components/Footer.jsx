import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className="font-medium text-xl text-gray-900">Stuffus</h1>

          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            assumenda eos labore odit illum, recusandae ab, soluta cupiditate
            est fuga rerum expedita laudantium repellat maxime sunt architecto
            cumque atque harum?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delievery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-2222-22</li>
            <li>contact@tuloxx.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024&copy; tuloxx.com - All Right Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
