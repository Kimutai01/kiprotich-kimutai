import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill, BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-[#181823] text-[#adadb0] pl-12 md:pl-20 pt-10 md:pt-20">
        <div>
          <h1 className="text-4xl text-[#fff] font-extrabold">Kimutai</h1>
          <div className="mt-5">
            <div className="flex ">
              <div className="rounded-full pr-4 text-[#0e76a8] cursor-pointer hover:scale-105 ease-in duration-100">
                <AiFillLinkedin size={25} />
              </div>
              <div className="rounded-full pr-4 cursor-pointer text-[#1DA1F2] hover:scale-105 ease-in duration-100">
                <BsTwitter size={25} />
              </div>
              <div className="rounded-full pr-4 cursor-pointer text-white hover:scale-105 ease-in duration-100">
                <MdEmail size={25} />
              </div>
              <div className="rounded-full pr-4 text-[#25D366] cursor-pointer hover:scale-105 ease-in duration-100">
                <RiWhatsappFill size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-around">
          <div className="mr-20 md:mr-0">
            <ul>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">Home</li>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                About
              </li>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                Skills
              </li>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                Projects
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">Home</li>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                About
              </li>
              <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                Skills
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#181823] text-[#adadb0] pb-20 pr-4 md:pr-0">
          ©2021 Kiprotich Kimutai. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
