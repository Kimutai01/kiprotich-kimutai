import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify between">
      <div className="bg-[#000] w-[40%] h-[1000px]">
        <img
          src="https://images.unsplash.com/photo-1580671905832-91b2ff0a557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbiUyMHdpdGglMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          width={700}
          style={{ objectFit: "cover", height: "100vh" }}
          className="absolute top-32 left-0"
        />
      </div>
      <div className="bg-[#111] w-[60%] h-[1000px] z-50 text-[#fff]">
        <h1 className=" flex-col ju items-center">
          I'm Robin Willaims. A Product Designer <span>Based in Kenya</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
