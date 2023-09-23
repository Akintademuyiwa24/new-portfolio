import React from "react";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen ">
      <div className="max-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div className="ml-10 sm:ml-20 md:ml-32 mt-18 sm:mt-5 md:mt-0 pr-6">
          <p className="py-4 text-blue-300">Hi, my name is</p>
          <h1 className="text-white">Akintade Olumuyiwa</h1>

          <h1 className="py-2 md:py-6 text-gray-300">
            I build optimal digital experience
          </h1>
          <p className="py-4 text-gray-300 text-[15px] max-w-[80%] md:max-w-[50%]">
            I am a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I am focused
            on building accessible, human-centered products
          </p>

          <Link href="/about">
            <button className="p-4 border border-blue-300 text-blue-300 rounded-md">
              Do check my profile
            </button>
          </Link>

          {/* <div className="flex items-center justify-between max-w-[330px] py-4">
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-150">
              <FaLinkedinIn size={20} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-150">
              <FaGithub size={20} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-150">
              <AiOutlineTwitter size={20} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
