import React from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { BiRightArrow } from "react-icons/bi";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Emma from "../../../public/images/Emma.png";

const About = () => {
  return (
    <div className="mb-10 pt-36">
      <div className="md:flex md:justify-between md:items-center">
        <div className="ml-10 sm:ml-20 md:ml-32 mt-18 sm:mt-5 md:mt-0 pr-6">
          <div className="flex gap-2">
            <Link href="/">
              <BsArrowLeftCircle
                size={40}
                className="text-blue-400 hover:bg-blue-800 hover:text-white hover:rounded-full"
              />
            </Link>
            <Link href="/experience">
              <BsArrowRightCircle
                size={40}
                className="text-red-200 hover:rounded-full hover:bg-yellow-700 hover:text-white"
              />
            </Link>
          </div>

          <div className="sm:flex md:flex sm:gap-2 md:gap-2 mb-10 mt-10">
            <h1 className="text-white text-[24px]">
              <span className="text-blue-300 text-[18px] md:pr-2">01.</span>{" "}
              About Me
            </h1>
            <p>
              <span>
                <hr className="w-40 md:w-80 h-[1px] mt-3 bg-blue-300 border-0  dark:bg-gray-700"></hr>
              </span>
            </p>
          </div>

          {/* contents */}
          <p className="text-white md:max-w-[85%] justify-normal text-[12px] md:text-[18px]">
            Hello! My name is Akintade and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="text-white md:max-w-[85%] mt-8 justify-normal text-[12px] md:text-[18px]">
            Fast-forward to today, as a seasoned front-end developer, I've
            harnessed my expertise through extensive experience in honing my
            skills in front-end development. I have had the privilege of working
            with an educational agency and start-ups. While I may not be
            affiliated with many particular firm at the moment, my background
            boasts a rich tapestry of honing my skills, building side projects,
            and actively participating in bootcamps to stay at the forefront of
            industry trends
          </p>
          <p className="text-white md:max-w-[85%] mt-8 justify-normal text-[12px]  md:text-[18px]">
            In my pursuit of growth and learning, I'm on the lookout for
            exciting opportunities that align with my front-end development
            skills and my dedication to creating web experiences that leave a
            lasting impact.
          </p>

          <p className="text-white mt-8 mb-6">
            Here are a few technologies I have been working with recently:
          </p>

          <div className="pr-6">
            <div className="flex md:gap-[50px] items-center text-white">
              <div className="flex gap-3 mt-1">
                <BiRightArrow size={10} className="text-blue-300 mt-1" />
                <p className="text-[14px]">JavaScript (ES6+)</p>
              </div>
              <div className="flex gap-3 ">
                <BiRightArrow size={10} className="text-blue-300 mt-1" />
                <p className="text-[13px]">Node.js</p>
              </div>
            </div>

            <div className="flex pt-4 md:gap-[140px] items-center text-white">
              <div className="flex gap-3">
                <BiRightArrow size={10} className="text-blue-300 mt-1" />
                <p className="text-[13px]">React</p>
              </div>
              <div className="flex gap-3">
                <BiRightArrow size={10} className="text-blue-300 mt-1" />
                <p className="text-[13px]">NextJs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pr-40 pr-10 pl-10 pt-10 md:pt-0">
          <Image src={Emma} alt="Emma" width="50px" height="50px" />
        </div>
      </div>
    </div>
  );
};

export default About;
