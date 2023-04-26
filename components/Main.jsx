import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center main-bg">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            It all starts here !!!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#276778]">Manas</span>
          </h1>
          <h2 className="py-4 text-gray-700">
            An Architect, Consultant and Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am an architect, developer and consultant specialising in
            ideating, designing and building solutions with exceptional digital
            experience. Currently, I am focussed on building solutions and
            solving problems using technology in addition to building responsive
            UI.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/manas-mallick-77781431/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/ManDun"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
