import Image from "next/image";
import React from "react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="bg-[#000] md:p-32 flex flex-col p-10  md:flex-row ">
      <div className="flex md:mr-7 flex-col">
        <div className="mb-5">
          <h1
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
            Work Experience
          </h1>
          <h1
            className="text-[#fff] md:text-6xl text-2xl font-bold"
            id="projects"
          >
            Work that I’ve done for the past 8 years
          </h1>
        </div>
        <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
          <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c86971f21359e93b7_Project%201-p-1600.jpeg" />
          <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
            Restaraunt Website design
          </h2>
          <p className="text-[#5b6876] text-1xl  px-5 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            provident quo consectetur odio nemo quisquam labore at in
            repudiandae debitis, saepe sit numquam. Expedita voluptas alias,
            eaque quas tempora ab!
          </p>
          <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
            <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
          </div>
        </div>
        <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out ">
          <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c86971f21359e93b7_Project%201-p-1600.jpeg" />
          <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
            Restaraunt Website design
          </h2>
          <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            provident quo consectetur odio nemo quisquam labore at in
            repudiandae debitis, saepe sit numquam. Expedita voluptas alias,
            eaque quas tempora ab!
          </p>
          <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
            <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
          <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c86971f21359e93b7_Project%201-p-1600.jpeg" />
          <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
            Restaraunt Website design
          </h2>
          <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            provident quo consectetur odio nemo quisquam labore at in
            repudiandae debitis, saepe sit numquam. Expedita voluptas alias,
            eaque quas tempora ab!
          </p>
          <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
            <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
          </div>
        </div>
        <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
          <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c86971f21359e93b7_Project%201-p-1600.jpeg" />
          <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
            Restaraunt Website design
          </h2>
          <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            provident quo consectetur odio nemo quisquam labore at in
            repudiandae debitis, saepe sit numquam. Expedita voluptas alias,
            eaque quas tempora ab!
          </p>
          <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
            <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
          </div>
        </div>
        <div className="pt-24 flex justify-center">
          <button className="bg-[#000] text-[#fff] md:text-2xl font-1xl font-semibold py-4 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
            View all projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
