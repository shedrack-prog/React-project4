import React from "react";
import airplane from "../assets/airplane.jpg";
import ship from "../assets/ship.jpg";
import truck from "../assets/truck.jpg";

import { FaFileContract } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { BiGroup, BiLowVision } from "react-icons/bi";

const Welcome = () => {
  return (
    <div
      id="services"
      className="mt-[14rem] flex items-center justify-center px-4 md:w-[80vw] md:mx-auto"
    >
      <div className=" flex items-center flex-col md:w-full md:justify-center  md:mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-md text-[#c0c6cd] font-bold mb-2">WELCOME TO </h2>
          <h1 className="text-lg md:text-xl font-bold mb-3 text-[#121e33]">
            LOGISTIC GROUP
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-6   md:w-full md:items-center md:justify-center">
            <img src={airplane} alt="" className="md:w-[350px]" />
            <img src={ship} alt="" className="md:w-[350px]" />
            <img src={truck} alt="" className="md:w-[350px]" />
          </div>
        </div>

        <div className="bottom mt-3 flex  items-center justify-center md:[80vw] md:mt-8">
          <div className="items flex flex-col items-center justify-center gap-5  md:flex-row md:flex-wrap md:w-[80vw] md:gap-6 ">
            <div
              className="item flex flex-col items-center justify-center
            md:justify-start ml-4 md:items-start md:w-[200px]"
            >
              <p className="text-lg font-bold mb-1">
                <FaFileContract size={27} className="text-[#121e33]" />
              </p>
              <h2 className="text-[#121e33] text-lg font-bold mb-1">
                CONTRACT LOGISTICS
              </h2>
              <p className="text-gray-600 w-[80%] text-center md:text-start">
                this is some random text that can be changed later this is some
                random text that can be changed laterthis is some random text
                that can be changed later
              </p>
            </div>

            <div className="item flex flex-col items-center justify-center ml-4 md:items-start  md:w-[200px]">
              <p className="text-lg font-bold mb-1">
                <BiGroup size={27} className="text-[#121e33]" />
              </p>
              <h2 className="text-[#121e33] text-lg font-bold mb-1">
                CONSULTING SERVICE
              </h2>
              <p className="text-gray-600 w-[80%] text-center md:text-start">
                this is some random text that can be changed later this is some
                random text that can be changed laterthis is some random text
                that can be changed later
              </p>
            </div>

            <div className="item flex flex-col items-center justify-center ml-4 md:items-start  md:w-[200px]">
              <p className="text-lg font-bold mb-1">
                <GrStorage size={27} className="text-[#121e33]" />
              </p>
              <h2 className="text-[#121e33] text-lg font-bold mb-1">
                STORAGE SERVICE
              </h2>
              <p className="text-gray-600 w-[80%] text-center md:text-start">
                this is some random text that can be changed later this is some
                random text that can be changed laterthis is some random text
                that can be changed later
              </p>
            </div>

            <div className="item flex flex-col items-center justify-center ml-4 md:items-start  md:w-[200px]">
              <p className="text-lg font-bold mb-1">
                <BiLowVision size={27} className="text-[#121e33]" />
              </p>
              <h2 className="text-[#121e33] text-lg font-bold mb-1">
                OUR VISION
              </h2>
              <p className="text-gray-600 w-[80%] text-center md:text-start">
                this is some random text that can be changed later this is some
                random text that can be changed laterthis is some random text
                that can be changed later
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
