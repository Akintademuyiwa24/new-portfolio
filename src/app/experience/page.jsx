import React from "react";
import { FaPython } from "react-icons/fa";
import Link from "next/link";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNextjs,
} from "react-icons/tb";

const Experience = () => {
  return (
    <div className="pt-32 pl-5 pr-5">
      <div className="flex gap-2 mb-8">
        <Link href="/about">
          <BsArrowLeftCircle
            size={40}
            className="text-blue-400 hover:bg-blue-800 hover:text-white hover:rounded-full"
          />
        </Link>
        <Link href="/">
          <BsArrowRightCircle
            size={40}
            className="text-red-200 hover:rounded-full hover:bg-yellow-700 hover:text-white"
          />
        </Link>
      </div>
      <div className="md:flex sm:flex sm:gap-2 md:gap-4 ml-5 mr-5">
        {/* programming lang */}
        <div className="text-white bg-slate-950 p-2 rounded-md max-w-[350px] sm:mb-0 md:mb-0 mb-6 md:max-w-[350px]">
          <h2 className="mb-5 text-[24px]">Programming Languages</h2>
          <div className="flex gap-4 p-2">
            <div className="flex gap-2">
              <FaPython size={20} className="text-white" />
            </div>
            <div className="font-medium">Python</div>
          </div>

          <div className="flex gap-4 p-2">
            <div className="flex gap-2">
              <TbBrandJavascript size={20} className="text-white" />
            </div>
            <div className="font-medium">JavaScript</div>
          </div>

          <div className="flex gap-4 p-2">
            <div className="flex gap-2">
              <FaPython size={20} className="text-white" />
            </div>
            <div className="font-medium">Python</div>
          </div>
        </div>

        {/* front-end */}
        <div className="bg-slate-950 text-white rounded-md p-2 md:max-w-[350px] sm:mb-0 md:mb-0 max-w-[350px]">
          <h2 className="mb-5 text-[24px]">Front-End Dev.</h2>
          <div className="flex gap-4 p-2">
            <div className="flex gap-2">
              <TbBrandReact size={20} className="text-white" />
            </div>
            <div className="font-medium">React Js</div>
          </div>

          <div className="flex gap-4 p-2">
            <div className="flex gap-2">
              <TbBrandNextjs size={20} className="text-white" />
            </div>
            <div className="font-medium">NextJs</div>
          </div>

          <div className="flex gap-4 p-2">
            <div className="flex gap-2">
              <TbBrandTailwind size={20} className="text-white" />
            </div>
            <div className="font-medium">Tailwind CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
