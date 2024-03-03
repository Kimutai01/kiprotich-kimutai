import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import videoFile from "../public/vet.mp4";

function ticket() {
  return (
    <div className="w-full font-sans bg-[#181822] h-[100vh] text-white">
      <div className="">
        <img
          src="/dj1.jpg"
          alt="jkuatses"
          class="w-full h-[70vh] object-cover object-center"
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
            Lipia Ngoma
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
            Lipia ngoma gives you a quick and easy way to request songs at your
            favorite events. You can also tip your favourite Dj through the
            platform, view their schedule where they will be performing and also
            request custom mixes.
          </p>
          <Link href="https://lipiangoma.com/" target="_blank">
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
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="flex items-center text-[white] py-2 ">
                <RiRadioButtonFill className="pr-1" /> Phoenix LiveView
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

export default ticket;
