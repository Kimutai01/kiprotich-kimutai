import React from "react";
import { BiPen } from "react-icons/bi";
import { CgIfDesign } from "react-icons/cg";
import { GrArticle } from "react-icons/gr";
import { CiDatabase } from "react-icons/ci";
import { BsPen } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";

const Skillset = () => {
  return (
    <div className="bg-[#000]">
      <div className="flex p-6 md:p-24 justify-between flex-col md:flex-row">
        <div className="mr-8">
          <h1 className="text-[#fff] font-bold text-5xl ">Skillset</h1>
          <p
            className="text-[#5b6876] mt-6"
            style={{ fontSize: "18px", lineHeight: "150%" }}
          >
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className="mr-8">
          <div>
            <MdOutlineDesignServices
              size={60}
              color="#4c24dd"
              className="hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Frontend Developer
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the frontend development process
              and I can build any website from scratch. I have experience with
              HTML, CSS, JavaScript, React, Nextjs, and Tailwind.
            </p>
          </div>
          <div className="mt-4">
            <IoMdCodeWorking
              size={60}
              color="#4c24dd"
              className="hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Backend Developer
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the backend development process
              and I can build any website from scratch. I have experience with
              Ruby, Rails, Postgresql, and Rspec.
            </p>
          </div>
        </div>
        <div>
          <div>
            <CiDatabase
              size={60}
              color="#4c24dd"
              className="hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Database design
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the database design process and I
              can build any database from scratch. I have experience with
              Postgresql.
            </p>
          </div>
          <div className="mt-8">
            <BiPen
              size={60}
              color="#4c24dd"
              className="hover:scale-110  duration-300"
            />
            <h2 className="text-[#fff] mt-2 text-2xl font-bold">
              Content Writing
            </h2>
            <p
              className="text-[#5b6876]"
              style={{ fontSize: "18px", lineHeight: "150%" }}
            >
              I have a strong understanding of the content writing process and I
              can write any content from scratch. I have experience with writing
              articles, blogs, and essays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
