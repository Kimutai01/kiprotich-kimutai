import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import clau from "../public/clau.jpg";

const Projects = () => {
  return (
    <div className="bg-[#000] md:p-32 grid grid-cols-1 md:grid-cols-2 gap-10  p-10 ">
      <div className="flex md:mr-7 flex-col">
        <div className="mb-5">
          <h1
            className="text-[#d1d5db] uppercase"
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
            Work that I’ve done for the past 5 years
          </h1>
        </div>
        <Link href="/fiti">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <img src="fiti.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Fiti.info - Brand Protection & Logistics
            </h2>
            <p className="text-[#d1d5db] text-1xl px-5 mb-2 py-6">
              A brand protection and logistics service trusted by Oxford
              University Press. Generates unique pins placed at the back of
              books which users can scratch and send to the WhatsApp bot or SMS
              to validate authenticity of books.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/ticket">
          <div className="mb-10 mt-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <img src="/ticketing1.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Ticketing systems
            </h2>
            <p className="text-[#d1d5db] text-1xl px-5 mb-2 py-6">
              Built multiple ticketing systems that have transacted over
              $1,000,000 in ticket sales. These platforms simplify the process
              of booking and obtaining tickets for events, supporting both card
              and M-Pesa payments. The systems ensure seamless and secure
              transactions from selection to delivery, enhancing the overall
              experience for event-goers.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/callwisely">
          <div className="mb-10 mt-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative rounded-md">
            <img src="/call1.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              CallWisely
            </h2>
            <p className="text-[#d1d5db] text-1xl px-5 mb-2 py-6">
              An AI call center agent with embeddable chatbot. Takes knowledge
              base from website, documents, or text and uses it to personalize
              the AI voice agent. The voice can be changed depending on the
              persona, making it dynamic and adaptable for different use cases.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/nexuscale">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5">
            <img src="/nexuscale.png" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Nexuscale.ai
            </h2>
            <p className="text-[#d1d5db] text-1xl  px-5 mb-2 py-6">
              An AI-powered B2B sales software used to send automated outbound
              emails and follow-ups. Features a database of over 200M leads with
              LinkedIn personalization, Google News integration, and website
              personalization.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/ecommerce">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <img src="/tom.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              TOMOLLO Fashions
            </h2>
            <p className="text-[#d1d5db] text-1xl px-5 mb-2 py-6">
              An ecommerce platform for African and Irish fashion, celebrating
              vibrant designs with modern, handcrafted pieces. Features include
              product catalog, shopping cart, and customer reviews. Built with
              Elixir, Phoenix, and Tailwind CSS.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/sema">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <img src="/sema.png" className="w-full" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Sema
            </h2>
            <p className="text-[#d1d5db] text-1xl px-5 mb-2 py-6">
              A mental health and wellness platform that connects users with
              accredited therapists for online therapy sessions. Features
              include therapist selection, appointment booking, video
              conferencing, and support for individual and couples counseling.
              Has facilitated over 5,000 therapy sessions.
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
