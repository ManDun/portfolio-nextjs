import React from "react";
import egsappimage from "../public/images/projects/egsapp.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const egsapp = () => {
  return (
    <div className="w-full">
      <title>Project | EGS App</title>
      <div className="w-screen h-[30vh] lg:w-[-40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:w-[-40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={egsappimage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">EGS App</h2>
          <h3>Python / Django / Bootstrap</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#276778]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="py-4">
            This app was built using Django and styled using Bootstrap. This app
            manages, aggregates geographical information and serves them to
            users in graphs and texts to make decisions. This app is hosted on
            IIS.
          </p>

          <a href="https://appisnotlinkedhere" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-lg py-4 bg-white">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IIS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer py-4">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default egsapp;
