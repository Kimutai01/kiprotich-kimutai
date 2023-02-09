import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="bg-[#000] md:p-32 grid grid-cols-1 md:grid-cols-2 gap-10  p-10 ">
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
            Work that I’ve done for the past 3 years
          </h1>
        </div>
        <Link href="/recipe" className="widt">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5 ">
            <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5c86971f21359e93b7_Project%201-p-1600.jpeg" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Recipe app
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2">
              This is a recipe app that allows users to search for recipes and
              also add their own recipes. It is built with React.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/lifeline">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out ">
            <img src="/lifeline.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Lifeline medical records
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a medical record data that allows users to quickly access
              their medical records. It is built with Ruby on Rails and
              Bootstrap CSS. It has a user authentication system and a each
              patient's data is saved as a QR code that can be scanned by a
              doctor and also embedded into a NFC tag .
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/product">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
            <img src="/product.png" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Product comparator
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This shoppingExchange website that compares prices of products
              from different online stores. It is built with Ruby on Rails and
              Tailwind,React.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/crypto">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
            <img src="/crypt.png" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Crypto currency tracker
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a crypto currency tracker that allows users to track the
              prices of different crypto currencies. It is built with React and
              Tailwind CSS.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <div className="pt-24 flex justify-center">
          <Link href="https://github.com/Kimutai01">
            <button className="bg-[#000] text-[#fff] md:text-2xl font-1xl font-semibold py-4 px-20 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc]">
              View all projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
