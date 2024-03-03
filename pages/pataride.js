import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import videoFile from "../public/vet.mp4";

function pataride() {
  return (
    <div className="w-ful bg-[#181822] h-[100vh] text-white">
      <div className="">
        <img
          src="/car2.jpg"
          alt="jkuatses"
          className="object-cover object-center h-[70vh] w-full"
        />
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
            Vet booking app
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
            This is a carpooling platform that allows users to share rides with
            other users. It allows users to create rides and join rides created
            by other users. It also allows users to search for rides based on
            the departure and destination locations.
          </p>
          <Link href="https://pataride.com/">
            <button className="font-lg font-semibold py-3 mt-6 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
              Demo
            </button>
          </Link>
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
            <div className="grid grid-cols-1 md:grid-cols-1 bg-[#181822] ">
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Elixir
              </p>
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Phoenix LiveView
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

export default pataride;
