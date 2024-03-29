import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/images/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen p-2 contact-bg">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#276778]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-lg p-4 bg-white">
            <div className="lg:p4 h-full">
              <div>
                <Image
                  className="rounded-lg hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="pt-4 text-center">Manas Mallick</h2>
                <p className="text-center text-gray-600 text-lg">
                  Consultant, Architect, Developer
                </p>
                <p className="py-4 text-center">
                  I am available for freelance. Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-center text-sm">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/manas-mallick-77781431/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/ManDun"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href="mailto:manasm.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-lg lg:p-4 bg-white">
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#276778]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
