import React from "react";
import Image from "next/image";
import Link from "next/link";
import butter from "../public/images/vendor/butter-b.png";
import next from "../public/images/skills/nextjs.png";
import react from "../public/images/skills/react.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="flex gap-x-6 justify-center items-center">
            <a className="group">
              <p>Made with </p>
            </a>
            <a className="group" aria-label="NextJS" href="https://react.dev">
              <Image src={react} height="50" alt="/" />
            </a>
            <a className="group" aria-label="NextJS" href="https://nextjs.org">
              <Image src={next} height="50" alt="/" />
            </a>
            <a
              className="group"
              aria-label="ButterCMS"
              href="https://buttercms.com"
            >
              <Image src={butter} height="50" alt="/" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              className="group"
              href="https://www.linkedin.com/in/manas-mallick-77781431/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              className="group"
              href="https://github.com/ManDun"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright © 2023 ManasConsults. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
