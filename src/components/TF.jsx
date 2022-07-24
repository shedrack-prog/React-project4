import React from "react";
import backgroundImage from "../assets/bg1.jpg";

import person from "../assets/person1.jpg";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { BiGroup } from "react-icons/bi";
import { GiStorkDelivery, GiWorld } from "react-icons/gi";

import { BsInstagram } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const TF = () => {
  return (
    <div className="flex items-center flex-col w-full  md:w-[75vw] md:mx-auto md:mt-7">
      <div className=" flex flex-col items-center justify-center w-full  md:mx-auto ">
        <div className="flex flex-col items-center justify-center w-full ">
          <h2 className="text-gray-600 mt-1 mb-2">TRUE FACTS</h2>
          <h1 className="text-gray-900 font-bold">
            THE FACTS SPEAKS FOR THEMSELVES
          </h1>
        </div>

        <div className="flex items-center flex-wrap gap-4 justify-center w-full mt-5 px-7 ">
          <div
            className="item bg-gradient-to-b from-slate-600 to-slate-800 
          md:w-[400px] flex flex-col items-center h-[250px] w-full justify-center"
          >
            <p className="text-white text-lg mb-4">
              <BiGroup size={28} />
            </p>
            <p className="text-2xl font-bold text-white">1,240</p>
            <p className="text-white text-lg">EMPLOYEES AROUND THE WORLD</p>
          </div>

          <div
            className="item bg-gradient-to-b from-slate-600 
            md:w-[400px] to-slate-800 flex flex-col items-center h-[250px] w-full justify-center"
          >
            <p className="text-white text-lg mb-4">
              <GiStorkDelivery size={28} />
            </p>
            <p className="text-2xl font-bold text-white">+200K</p>
            <p className="text-white text-lg">DELIVERIES PER YEAR</p>
          </div>

          <div
            className="item bg-gradient-to-b from-slate-600 to-slate-800 flex 
            md:w-[400px] flex-col items-center h-[250px] w-full justify-center"
          >
            <p className="text-white text-lg mb-4">
              <GiWorld size={28} />
            </p>
            <p className="text-2xl font-bold text-white">600</p>
            <p className="text-white text-lg">CLIENTS WORLDWIDE</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS  */}

      <div
        id="testimonials"
        className="bg-white w-full mt-9 px-3 md:w-[60%] lg:w-[50%] xl:w-[40%]"
      >
        <div className="mt-3 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-gray-700">TESTIMONIALS</h2>
            <h1 className="text-xl font-bold text-[#182535] mb-3">
              WHAT PEOPLE SAY ABOUT US
            </h1>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center md:border-gray-800 md:w-[600px]">
            <img
              src={person}
              alt=""
              className="h-20 w-20 rounded-full object-cover mb-1"
            />
            <p className="px-6 text-center lg:w-[500px] xl:w-[400px]">
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still need the element to
              resemble
            </p>
            <p className="text-lg font-bold mt-1">John Shedrack</p>
            <div className="flex justify-between items-center w-full px-9 mt-4 mb-3">
              <span className="bg-gray-200 p-4 rounded-full text-gray-200 cursor-pointer">
                <GrLinkPrevious />
              </span>
              <span className="bg-gray-200 p-4 rounded-full text-gray-200 cursor-pointer">
                <GrLinkNext />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* contacts section */}

      <div className="flex items-center justify-center bg-slate-900 w-full overflow-x-hidden">
        <div className="flex flex-col items-center ">
          <h2 className="text-gray-100 mt-1 mb-2">HAVE A QUSTION?</h2>
          <h1 className="text-white font-bold text-xl">WE ARE HERE TO HELP!</h1>
          <div className="flex gap-6 mt-5">
            <span>
              <BsInstagram className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
            </span>
            <span>
              <TbBrandTwitter className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
            </span>
            <span>
              <FiGithub className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
            </span>
            <span>
              <FiLinkedin className="dark:hover:text-[#42a5f5] dark:text-[#f1f2f4] text-[19px] text-gray-400 hover:text-[#59b0f6] cursor-pointer " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TF;
