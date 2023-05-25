import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import videoFile from "../public/thinkopal-beats.mp4";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function crypto() {
  return (
    <div className="w-full bg-[#181822] h-[100vh] text-white">
      <div className="">
        <video className="w-full h-[60vh]" controls>
          <source src={videoFile} type="video/mp4" autoPlay={true} muted />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="max-w-[1240px] mx-auto p-12 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p
            className="text-[#86919f] uppercase"
            style={{
              display: "inline-block",
              marginBottom: "8px",
              color: "#8491a0",
              fontSize: "16px",
              lineHeight: "150%",
              fontWeight: "700",
            }}
          >
            Thinkopal
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontsize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            This is a landing page for an Entrepreneurship Support Organization
            that supports Social Enterprise
          </p>
          <button className="font-lg font-semibold py-3 mt-6 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
            <a href="https://thinkopal.com/" target="_blank" rel="noreferrer">
              Demo
            </a>
          </button>
        </div>
        <div className=" md:col-span-1 rounded-xl md:p-4">
          <div className="p-2">
            <p
              className="text-[#86919f] uppercase"
              style={{
                display: "inline-block",
                marginBottom: "8px",
                color: "#8491a0",
                fontSize: "16px",
                lineHeight: "150%",
                fontWeight: "700",
              }}
            >
              Technologies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 ">
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        {/* back button that floats */}
        <div className="fixed md:top-{100px} top-10 z-50 left-5 animate-bounce bg-[#181822]">
          <Link href="/#projects">
            <BsFillArrowLeftSquareFill size={30} color="blue" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default crypto;
