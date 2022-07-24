import React from "react";
import picture from "../assets/ship.jpg";

const ImgGallery = () => {
  return (
    <div className="mt-4 flex items-center justify-center flex-col ">
      <div className="flex flex-col items-center md:flex-row md:h-[600px] xl:w-100%">
        <div
          className=" flex flex-col items-start bg-blue-600 px-4 
        md:justify-center  mb-6 md:h-full md:w-[50%] md:mb-0"
        >
          <h1 className="text-3xl mt-2 text-gray-50 mb-2 md:text-start">
            IMAGE GALLERY
          </h1>
          <p className="text-md text-gray-200">
            this is some random text and you can change it later to someting you
            want okay?? some random text and you can change it later to someting
            you want okay??
          </p>
          <button className="py-4 px-6 mb-1 mt-4 bg-gray-200 text-blue-400 md:self-start  self-center">
            SEE MORE
          </button>
        </div>
        <div className="img md:h-full md:w-[50%]">
          <img src={picture} alt="" className="md:h-full object-cover" />
        </div>
      </div>

      {/* get  a free quote */}
      <div id="contact" className="mt-6 mb-5">
        <div className="flex flex-col px-4 ">
          <div className="flex flex-col items-end ">
            <h2 className="text-lg text-gray-500">Free Estimate</h2>

            <h1 className="text-xl text-[#121e33] font-bold text-end">
              GET A QUICK QUOTE NOW
            </h1>
          </div>
          <form action="" className="px-2 mt-4">
            <input
              type="text"
              placeholder="surname/company"
              className="text-gray-800 bg-gray-200 w-full py-2 mb-4 border-none outline-none text-[18px] px-2"
            />
            <input
              type="text"
              placeholder="Name"
              className="text-gray-800 bg-gray-200 w-full py-2 mb-4 border-none outline-none text-[18px] px-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="text-gray-800 bg-gray-200 w-full py-2 mb-4 border-none outline-none text-[18px] px-2"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="type your message"
              className="w-full bg-gray-100 text-gray-800 text-lg px-3 outline-none resize-none h-[8rem]"
            />
          </form>
          <button className="py-4 px-6 bg-blue-600 w-1/2 flex items-center justify-center text-white self-center mt-3">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
