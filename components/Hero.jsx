import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex md:justify-between flex-col">
      <div className="bg-[#000] md:w-[50%] md:h-[850px] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <img
            src="/me.JPG"
            width={700}
            style={{ objectFit: "cover" }}
            className="md:absolute top-28 md:left-0 z-30 w-100 h-[70vh] md:h-[100vh]"
          />
        </motion.div>
      </div>

      <div className="md:bg-[#181822] bg-[#181822] md:w-[60%] md:h-[790px] md:absolute md:top-16 md:right-0 text-[#fff]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5 } }}
        >
          <div className="md:absolute md:top-[20%] md:left-[3%] md:z-40 p-10">
            <h1 className="md:text-7xl text-3xl font-bold">
              I'm Kiprotich Kimutai.
              <Typewriter
                options={{
                  strings: ["Full-stack developer", "Elixir Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span style={{ color: "#8c8c91" }}>Based in Kenya.</span>
            </h1>
            <p
              className=" text-1xl mt-2"
              style={{
                lineHeight: "150%",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "150%",
              }}
            >
              I'm probably the most interesting developer you'll meet. If you
              have a great project that needs some amazing skills, I’m your guy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
