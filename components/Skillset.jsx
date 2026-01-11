import React from "react";
import { BiPen } from "react-icons/bi";
import { CiDatabase } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";

const Skillset = () => {
  return (
    <div className="bg-[#000]" id="skills">
      <div className="flex p-6 md:p-24 justify-between flex-col md:flex-row">
        <div className="mr-8">
          <h1 className="text-[#75fbfd] font-bold text-5xl ">Skillset</h1>
          <p
            className="text-[#adadb0] mt-6"
            style={{ fontSize: "18px", lineHeight: "150%" }}
          >
            From building AI-powered platforms to fintech solutions, I work
            across the full stack—turning complex ideas into scalable,
            real-world applications. Here's what I bring to every project.
          </p>
        </div>
        <div className="mr-8">
          <div className="group">
            <MdOutlineDesignServices
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Frontend Developer
            </h2>
            <p
              className="text-[#86919f]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              Built responsive, interactive UIs for platforms like{" "}
              <a
                href="https://nexuscale.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3cc74e] hover:underline"
              >
                nexuscale.ai
              </a>{" "}
              and{" "}
              <a
                href="https://bimbin.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#609bff] hover:underline"
              >
                bimbin.africa
              </a>
              . I craft experiences using React, Next.js, Phoenix LiveView, and
              Tailwind CSS—turning complex workflows into intuitive interfaces
              that users love.
            </p>
          </div>
          <div className="mt-4 group">
            <IoMdCodeWorking
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Backend Developer
            </h2>
            <p
              className="text-[#86919f]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              Built scalable systems with different technologies that are able
              to handle millions of operations and scale seamlessly. Everything
              from APIs to real-time processing, designed to grow with your
              needs.
            </p>
          </div>
        </div>
        <div>
          <div className="group">
            <FaBrain
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              AI & Machine Learning
            </h2>
            <p
              className="text-[#86919f]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              Built RAG chatbots that work across WhatsApp, Telegram, Discord,
              and other platforms. Fine-tuned AI models and voice AI agents for
              healthcare, customer support, and knowledge bases. Developed
              personalization systems and AI-powered features that process
              videos, documents, and real-time conversations.
            </p>
          </div>
          <div className="mt-8 group">
            <HiOutlineCode
              size={60}
              color="#4c24dd"
              className="group-hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Integrations & Automation
            </h2>
            <p
              className="text-[#86919f]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              Integrated Gmail, Microsoft, LinkedIn, WhatsApp, and Discord APIs
              to create seamless workflows. Built automation systems for email
              campaigns, LinkedIn outreach, payment processing, and chatbot
              deployments across multiple platforms.
            </p>
          </div>
        </div>
      </div>
      <h1 className=" mt-10 mb-5 text-center text-white text-4xl text-bold">
        Technologies
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-16">
        <div
          className="p-6 hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/html.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">HTML</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6   hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/css.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">CSS</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6 hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/javascript.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">Javascript</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/react.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">REACT JS</h3>
            </div>
          </div>
        </div>
        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/phoe.png" alt="html" width={70} height={70} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">Phoenix</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/elix.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">Elixir</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <TbBrandNextjs size={40} color="white" />
              <Image src="/next.svg" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">NEXT JS</h3>
            </div>
          </div>
        </div>

        <div
          className="p-6  hover:scale-105 ease-in duration-300"
          style={{ border: "1px solid #4c24dd", borderRadius: "10px" }}
        >
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <div className="m-auto">
              <Image src="/tailwind.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-[#86919f]">TAILWIND CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
