import React from "react";
import Link from "next/link";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const page = () => {
  return (
    <div className="pt-28 md:ml-20 md:mr-10 ml-7 mr-5">
      <div className="flex gap-2">
        <Link href="/">
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

      <div className=" mb-10 mt-10 text-center">
        <h1 className="text-white text-[16px]">
          <span className="text-blue-300 text-[12px] md:pr-2">04.</span> What's
          Next?
        </h1>
      </div>

      <div className="text-center">
        <h2 className="text-[50px] text-white mb-6">Get in Touch</h2>
        <p className="text-teal-100 md:max-w-[450px] md:m-auto">
          I am currently seeking for opportunities and my inbox is always
          open.Whether you have a question or want us to discuss work, I will
          surely get back to you!
        </p>
        <Link href="mailto:harkintademuyiwa@gmail.com">
          <button className="px-8 py-3 mt-4 border border-blue-300 text-blue-300 rounded-md">
            Let's Talk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
