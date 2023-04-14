import React from "react";
import mansoftimage from "../public/images/projects/mansoft.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const mansoft = () => {
  return (
    <div className="w-full">
      <title>Project | Mansoft</title>
      <div className="w-screen h-[30vh] lg:w-[-40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:w-[-40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mansoftimage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mansoft</h2>
          <h3>Python / Django / Bootstrap </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#276778]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="py-4">
            This app was built using Django, styled using Bootstrap and hosted
            on Herku. This is work in progress and the first version of this app
            deals with budgeting and invoicing. In addition to managing them it
            also lets you report and visualise on the data. This is built as an
            alternate to invoicing app which is free to use. This app is also
            planned to be built on NextJS and TailwindCSS
          </p>
          {/* <a
            href="https://github.com/fireclint/property-finder"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a> */}
          <a href="/" target="_blank" rel="noreferrer">
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

export default mansoft;
