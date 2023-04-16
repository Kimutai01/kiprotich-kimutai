import Link from "next/link";
import React from "react";

const Mentorship = () => {
  return (
    <div className="bg-[#000] h-[100%] p-6  md:p-32" id="mentorship">
      <h1 className="text-[#fff] font-bold text-5xl ">mentorship</h1>
      <p className="text-[#5b6876] text-1xl md:max-w-[50%] mt-6 md:text-lg">
        I offer mentorship to aspiring developers who are looking to get into
        software development.I have also been to two coding bootcamps and I can
        help you choose the right one for you.
      </p>
      <Link href="#contact">
        <button className="hover:bg-[#4c24dd] text-white py-2 mt-10 border-b-2 border-[#5b6876] hover:px-6 transition duration-300 ease-in-out hover:text-white">
          Book a session
        </button>
      </Link>

      <div className="bg-[#181822] mt-28">
        <div className="flex pt-3 pb-2 ml-2 rounded-t-l-md rounded-t-r-md">
          <div className="bg-[#5b6876] h-4 w-4 mr-2 rounded-full"></div>
          <div className="bg-[#5b6876] h-4 w-4 mr-2 rounded-full"></div>
          <div className="bg-[#5b6876] h-4 w-4 rounded-full"></div>
        </div>
        <div
          className="w-full md:h-[640px] h-[480px] bg-center bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcCUyMHNob3dpbmclMjBkaWZmZXJlbnQlMjBzb2NpYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            backgroundPosition: "50% 50%",
            backgroundSize: "1024px",
            backgroundRepeat: "repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Mentorship;
