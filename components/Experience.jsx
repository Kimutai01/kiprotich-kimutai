import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#000] h-[100%] py-32  p-10">
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
        className="text-[#fff] text-4xl font-bold md:max-w-[50%]"
        style={{
          fontSize: "48px",
          lineHeight: "150%",
          fontWeight: "700",
        }}
      >
        I've worked with some amazing companies
      </h1>
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="w-[100%]">
          <p
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#8491a0",
              fontSize: "117px",
              lineHeight: "100%",
              fontWeight: "400",
            }}
          >
            01
          </p>
          <h2
            className="text-[#fff] font-bold text-2xl"
            style={{
              marginTop: "0px",
              marginBottom: "16px",
              lineHeight: "120%",
              fontweight: "700",
            }}
          >
            <span
              className="text-[#3cc74e]"
              style={{
                fontSize: "24px",
                lineHeight: "120%",
                fontWeight: "700",
              }}
            >
              Pesaflow Limited
            </span>
            ,Full stack Developer
          </h2>
          <p
            className="pr-4"
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontsize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            Currently working as a full stack software developer. Stack includes
            Elixir,Phoenix and Vuejs.
          </p>
        </div>

        <div className="w-[100%]">
          <p
            className="pr-4"
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#8491a0",
              fontSize: "117px",
              lineHeight: "100%",
              fontWeight: "400",
            }}
          >
            02
          </p>
          <h2
            className="text-[#fff] font-bold text-2xl"
            style={{
              marginTop: "0px",
              marginBottom: "16px",
              lineHeight: "120%",
              fontweight: "700",
            }}
          >
            <span
              className="text-[#609bff]"
              style={{
                fontSize: "24px",
                lineHeight: "120%",
                fontWeight: "700",
              }}
            >
              The Open institute
            </span>
            , Software Developer
          </h2>
          <p
            className="pr-4 "
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontsize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            I work as a software developer for a digital health project.
            Developed a chatbot for community health workers. Stack includes
            Python, Django, LLMs, and React.
          </p>
        </div>

        <div className="w-[100%]">
          <p
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#8491a0",
              fontSize: "117px",
              lineHeight: "100%",
              fontWeight: "400",
            }}
          >
            03
          </p>
          <h2
            className="text-[#fff] font-bold text-2xl"
            style={{
              marginTop: "0px",
              marginBottom: "16px",
              lineHeight: "120%",
              fontweight: "700",
            }}
          >
            <span
              className="text-[#e95d90]"
              style={{
                fontSize: "24px",
                lineHeight: "120%",
                fontWeight: "700",
              }}
            >
              Freelancer
            </span>
            , Software Developer
          </h2>
          <p
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontsize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            I work on a variety of projects as a freelancer, stack includes
            Elixir, Phoenix Liveview, React, and Tailwind CSS. Worked on Mwamba
            Rugby Club, Summertides festival etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
