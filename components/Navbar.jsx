import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 text-white z-50 ">
      <div className="flex justify-between items-center w-full h-full 2xl:px-16">
        <div className="bg-[#000] w-[40%] h-[100%] px-2 items-center">
          <h1 className="py-6 text-2xl text-bold">Kimutai</h1>
        </div>
        <div className="bg-[#000] md:bg-[#111] w-[60%] h-[100%] py-8 px-6 flex justify-end text-[hsla(0, 0%, 100%, 0.7)]">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            {nav ? (
              <AiOutlineClose
                size={25}
                onClick={handleNav}
                className="z-10 text-white"
              />
            ) : (
              <BiMenuAltRight size={25} onClick={handleNav} />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed  top-20 w-full h-screen bg-black/70" : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed w-[100%] sm:w-[60%] top-20 md-[45%] h-[55%] bg-[#111]  ease-in duration-500"
              : "fixed left-[-100%] h-[55%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="text-[hsla(2, 0%, 100%, 0.7)]">
            <ul className="py-4 flex flex-col">
              <Link
                href="/"
                className=" w-[100%]"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
              >
                <li className="py-4 p-10 text-1xl">Home</li>
              </Link>
              <Link
                href="/"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
              >
                <li className="py-4 p-10 text-sm">About</li>
              </Link>
              <Link
                href="/"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
              >
                <li className="py-4 p-10 text-sm">Skills</li>
              </Link>
              <Link
                href="/"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
              >
                <li className="py-4 p-10 text-sm">Projects</li>
              </Link>
              <Link
                href="/"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
              >
                <li className="py-4 p-10 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="flex items-center justify-between sm:w-[60%] px-10">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                <BsPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
