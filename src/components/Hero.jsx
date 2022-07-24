import React from "react";
import "./Welcome.jsx";
import background from "../assets/about.jpg";
import { AiOutlineFieldTime, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center relative w-[100vw] md:h-[100vh] h-[70vh] "
    >
      <div
        className=" relative   h-full w-full 
         "
      >
        <img
          src={background}
          alt=""
          className="  h-full  opacity-70 w-full md:object-cover "
        />
        <div className="h-full absolute right-0 left-0 top-0 bottom-0 w-full bg-gradient-to-b from-[#142e50] "></div>

        <div className="absolute top-[6.5rem] md:top-[20rem] left-4 text-white px-4 ">
          <h1 className="text-[2.2rem]  lg:text-[6rem] md:text-[5rem] md:mb-7">
            Ground, Air or Sea
          </h1>
          <p className="text-[14px] mt-3 md:text-[20px]">
            WE DELIVER YOUR PACKAGE IN NO TIME
          </p>
        </div>
        <div
          className="flex items-center justify-center  bg-[#11213b] w-[70%]  
          md:w-[85vw] absolute left-0 right-0 bottom-[-13rem] md:bottom-[-8rem]
          mx-auto h-full md:h-[200px] text-center z-20"
        >
          <div
            className=" w-full flex items-center justify-center flex-col md:flex-row 
          md:justify-between md:px-2"
          >
            <div className="flex items-center justify-center flex-col mb-4">
              <div className="h-6 w-6  text-white mb-1">
                <AiOutlineFieldTime size={29} className="md:text-md" />
              </div>
              <div className="">
                <h2 className="text-bold text-lg text-white md:text-sm md:mt-1">
                  OPENING HOURS
                </h2>
                <p className="text-gray-500 text-md">
                  we are open anytime so <br /> contact us anytime
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col mb-4">
              <div className="h-6 w-6 text-white mb-1 mt-4">
                <FiPhoneCall size={28} className="md:text-md" />
              </div>
              <div className="">
                <h2 className="text-bold text-lg text-white md:text-sm md:mt-1">
                  CALL US ANYTIME
                </h2>
                <p className="text-gray-500 text-md">
                  +2348111162201 <br /> Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col mb-4">
              <div className="h-6 w-6 text-white mb-1 mt-4">
                <AiOutlineMail size={28} className="md:text-md" />
              </div>
              <div className="">
                <h2 className="text-bold text-lg text-white md:text-sm md:mt-1">
                  EMAIL US
                </h2>
                <p className="text-gray-500 text-md">
                  Usheddy07@gmail.com <br /> contact us anytime
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="py-4 px-5 bg-[#0972c5] text-white text-semibold mt-3"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
