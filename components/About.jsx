import React, { useEffect } from "react";
import Image from "next/image";
import pic from "../public/laptop-wave.png";

const About = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#fdf3e6] md:p-12"
      id="about"
    >
      <div className="p-6 ml-6">
        <h1 className="max-w-[780px] w-[100%] leading-10 text-4xl font-bold md:p-6">
          About
        </h1>
        <p className="text-[#5b6876] text-1xl md:text-2xl leading-10 md:p-6 mt-6">
          Since I was young, my dream has always been to use software to make
          the world a better place. That dream led me to my first
          opportunity—building a WhatsApp chatbot for community health workers
          in Kenya, piloted in Busia, to help serve patients with sickle cell
          anemia. Funded by the University of Warwick and Welcome Trust, that
          project wasn't just code; it was my chance to see technology directly
          impact lives in underserved communities.
        </p>
        <p className="text-[#5b6876] text-1xl md:text-2xl leading-10 md:p-6 mt-0">
          That experience shaped everything that followed. Over 5+ years, I've
          built AI platforms that scale, fintech solutions spanning multiple
          countries, and tools that protect brands and connect people. I've led
          teams, won 8+ hackathons, and constantly explore new technologies. My
          work isn't just about building software—it's about creating solutions
          that drive meaningful change.
        </p>
        <a href="/Resume.pdf" download>
          <button className="hover:bg-[#4c24dd] text-black py-2 ml-6 border-b-2 border-[#000] hover:px-6 transition duration-300 ease-in-out hover:text-white">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex items-center">
        <Image src={pic} alt="laptop" />
      </div>
    </div>
  );
};

export default About;
