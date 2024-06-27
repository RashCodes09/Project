import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const LandingPageFooter = () => {
  return (
    <div className="w-full h-[170px] flex justify-center items-center">
      <div className="block  w-[90%] h-full">
        <div className="flex justify-between">
          <div>
            {" "}
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>
          <div className="flex gap-5 text-[19px] mt-6">
            <FaTwitter />
            <AiFillFacebook />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
        <div className="mt-[80px] flex text-gray-500 text-center text-[12px] gap-1">
          <FaRegCopyright />
          <p className="text-[15px] "> 2024 Rasheedat</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFooter;
