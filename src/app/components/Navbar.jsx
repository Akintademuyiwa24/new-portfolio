"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/images/tallycoin.png";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(() => !nav);
  };

  return (
    <div className="fixed w-full bg-teal-950 h-20 shadow-lg z-[99] pt-2 px-6">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="logo" width="60" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <div className="md:flex hidden pt-3">
              <Link href="/about">
                <li className="ml-10 text-[12px] text-white hover:border-b-2">
                  <span className="text-red-400 px-2">01.</span>About
                </li>
              </Link>
              <Link href="/experience">
                <li className="ml-10 text-[12px] text-white hover:border-b-2">
                  <span className="text-red-400 px-2">02.</span> Experience
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-[12px] text-white hover:border-b-2">
                  <span className="text-red-400 px-2">03.</span>Work
                </li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 text-[12px] text-white hover:border-b-2">
                  <span className="text-red-400 px-2">04.</span>Contact
                </li>
              </Link>
            </div>

            <div className="hidden md:block">
              <Link href="/resume">
                <button className="px-4 py-2 hover:bg-red-400 hover:border-red-300 hover:text-white text-red-400 top-[-1px] rounded-md ml-10 text-[12px] border border-teal-600">
                  Resume
                </button>
              </Link>
            </div>
          </ul>

          {/* mobile */}
          <div onClick={handleNav} className="md:hidden text-blue-300">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      {/* menu for mobile */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        {/* actual menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[55%] md:w-[45%] h-screen bg-rose-50 p-10 ease-in duration-200"
              : "fixed left-[-200%] top-0p-10 ease-in duration-200"
          }
        >
          {/* top section */}
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} alt="logo" width="70" height="30" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-xl shadow-gray-300 cursor-pointer p-3"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>

            {/* contents */}
            <div className="border-b border-gray-400 my-4 p-2">
              <p className="w-[85%] md:w-[90%] py-1">
                Let me help you drive your business growth.
              </p>
            </div>
            {/* end of contents */}
          </div>

          {/* menu */}
          <div className="flex flex-col py-4 ">
            <ul className="uppercase ">
              <Link href="/about">
                <li className="text-sm py-4" onClick={() => setNav(!nav)}>
                  About
                </li>
              </Link>
              <Link href="/experience">
                <li className="text-sm py-4" onClick={() => setNav(!nav)}>
                  Experience
                </li>
              </Link>
              <Link href="/">
                <li className="text-sm py-4" onClick={() => setNav(!nav)}>
                  Projects
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-sm py-4" onClick={() => setNav(!nav)}>
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-wider text-[#5651e5]">
                Connect with me
              </p>
              {/* icons */}
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-150">
                  <FaLinkedinIn size={15} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-150">
                  <FaGithub size={15} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-100 ease-in duration-150">
                  <AiOutlineTwitter size={15} />
                </div>
              </div>
            </div>
          </div>
          {/* end of menu */}

          {/* end part */}

          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
