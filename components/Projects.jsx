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
        <Link href="/vet">
          <div className="mb-10 mt-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
              New
            </span>
            <img
              src="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full"
            />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Vetinary booking application
            </h2>
            <p className="text-[#5b6876] text-1xl px-5 mb-2 py-6">
              This is a web application that allows users to book veterinary
              services and also get information about the veterinary. Veterinary
              clinics can also register their clinics and add their services.
              Built in Django, and Tailwind CSS
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/realestate">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
              New
            </span>
            <img
              src="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full"
            />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Real Estate Website
            </h2>
            <p className="text-[#5b6876] text-1xl px-5 mb-2 py-6">
              This is a real estate website that allows users to quickly access
              information about houses and apartments for sale and rent. Users
              can also book a house or apartment for viewing. Agents/landlords
              can also register their houses and apartments and they can also
              manage tenants. Tenants can pay their bills and get invoices.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/mechanic" className="widt">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out mt-5 ">
            <img src="/mec.jpg" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Mechanic
            </h2>
            <p className="text-[#5b6876] text-1xl pb-5  px-5 mb-2">
              This is a mechanic website that allows users to quickly access
              information about the mechanic and the services offered.
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
        <Link href="/mche">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out ">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full"
            />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Mche
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a web application that provides farmers with agronomic
              advisory from planting to harvesting. The farmers can also get
              seedlings and inputs from the app. Also has an AI chatbot
              localized for local markets Built in Ruby on Rails, React and
              Tailwind CSS
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/peoples">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
              New
            </span>
            <img
              src="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full"
            />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              People's Choice Awards
            </h2>
            <p className="text-[#5b6876] text-1xl px-5 mb-2 py-6">
              This is the official website of the People's Choice Africa Awards.
              It is a website that allows people to vote for their favorite
              celebrities in different categories. It also allows contestants to
              create their profiles and upload their pictures and videos for
              posters.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/mechanical">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out relative">
            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
              New
            </span>
            <img
              src="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full"
            />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Mechanic Ecommerce Website
            </h2>
            <p className="text-[#5b6876] text-1xl px-5 mb-2 py-6">
              This is an ecommerce website for the mechanic app.
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>

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
            <img src="https://images.unsplash.com/photo-1487721984358-8ecc6e8b412a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW50ZXJwcmVuZXVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Think Opal
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a website for an enterpreurship support enterprise that
              helps entrepreneurs to grow their businesses. It is built with
              React and TailwindCSS
            </p>
            <div className="justify-end group-hover:flex transition duration-500 ease-in-out hidden items-end text-[#fff]">
              <BsFillArrowUpRightSquareFill size={40} color="#4c24dc" />
            </div>
          </div>
        </Link>
        <Link href="/kinywa">
          <div className="mb-10 bg-[#181922] group hover:transform hover:scale-105 transition duration-500 ease-in-out ">
            <img
              src="https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full"
            />
            <h2 className="text-[#fff] text-2xl my-3 font-bold group-hover:text-[#75fbfd] transition duration-500 ease-in-out p-5">
              Landing page for a photographer
            </h2>
            <p className="text-[#5b6876] text-1xl  px-5 mb-2 py-6">
              This is a landing page for a photographer to showcase his work. It
              is built with React and TailwindCSS
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
