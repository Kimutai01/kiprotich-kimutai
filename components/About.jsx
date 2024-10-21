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
          I’m a full stack developer with a passion for building innovative and
          impactful web applications. With expertise in Elixir, Phoenix
          LiveView, JavaScript, Docker, Jest, React, Next.js, PostgreSQL, Ruby,
          RSpec, Rails, and Django, I bring ideas to life by delivering
          solutions that drive results. I've led teams, including at 10xbeast,
          where we developed AI powered email marketing software. My portfolio
          includes contributions to a dating app, the Mwamba rugby ticketing
          platform generating over $15,000 in sales, and Mche, an AI
          agricultural tool. Whether building single-page applications or full
          stack solutions, I specialize in crafting scalable and market-specific
          platforms that deliver measurable success.
        </p>
        <a href="/kimutai.pdf" download>
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
