import React from "react";
import LandingPageHeader from "./LandingPageHeader";
import { NextFont } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";
import ScrollScreen from "./ScrollScreen";
import Button from "./Button";

const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className="bg-[#F8F7F4]">
      <LandingPageHeader />

      {/* <div className="mt-10" /> */}
      <div className="flex justify-center items-center text-center w-full h-[600px]">
        <div className="block justify-center items-center w-[80%] h-full">
          <Button className="border-none bg-yellow-200 text-black mt-[100px] font-serif px-2">
            over 3 million ready-to-work creatives
          </Button>
          <div className="text-center font-serif mt-8  ">
            <h1 className="text-[80px] text-[#141327]">
              The world’s destination{" "}
            </h1>
            <h1 className="text-[80px] text-[#141327]">for design</h1>
          </div>
          <div className="text-[#141327] font-bold mt-3">
            Get inspired by the work of millions of top-rated designers &
            agencies around the world
          </div>
          <Button className="px-6 py-4 rounded-[25px] bg-[#141327] border-none font-poppins text-[12px] mt-6">
            Get Started
          </Button>
        </div>
      </div>

      <ScrollScreen />
    </div>
  );
};
export default LandingPage;
