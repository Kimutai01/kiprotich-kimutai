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
          I am a certified full stack developer with a passion for building
          innovative and impactful applications. My expertise lies in utilizing
          HTML, CSS, JavaScript,Docker, Jest, React, Nextjs, Postgresql, Ruby,
          Rspec, Rails, and Django to bring ideas to life. With a certification
          from Moringa School and Microverse, I have honed my skills and gained
          valuable experience in software development. I am always eager to
          learn and grow, and I thrive when working with a team of diverse
          individuals from around the world. I believe that collaboration is key
          to creating amazing products, and I am committed to constantly
          improving my skills and contributing to the development community.
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
