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
      <div className="flex flex-col md:flex-row md:justify-around md:flex-wrap">
        <div className="w-[100%] md:w-[48%] mb-8">
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
              Nexuscale.ai
            </span>
            , CTO & Developer
          </h2>
          <p
            className="pr-4"
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontSize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            Built from the ground up, an AI-powered B2B sales platform that
            enables businesses to send personalized outbound emails and LinkedIn
            DMs at scale. Led the technical vision and development, integrating
            Gmail, Microsoft, and LinkedIn automation. Built with Elixir,
            Phoenix LiveView, Python, and React.
          </p>
        </div>

        <div className="w-[100%] md:w-[48%] mb-8">
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
              ScribbleVet
            </span>
            , Software Developer
          </h2>
          <p
            className="pr-4"
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontSize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            Worked with an AI scribe company based in San Francisco, building
            Discord support systems that process videos as knowledge bases for
            AI bots. Contributed to the backend infrastructure and built Chrome
            extension integrations. Also developed a referral system to drive
            user growth.
          </p>
        </div>

        <div className="w-[100%] md:w-[48%] mb-8">
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
              PesaFlow Limited
            </span>
            , Full Stack Elixir Developer
          </h2>
          <p
            className="pr-4"
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontSize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            Worked on taxation systems for Kenya and South Sudan, building
            robust fintech solutions. Implemented payment integrations and
            developed scalable backend systems using Elixir, Phoenix, and Vue.js
            to handle complex financial operations across multiple countries.
          </p>
        </div>

        <div className="w-[100%] md:w-[48%] mb-8">
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
            04
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
              className="text-[#ffc700]"
              style={{
                fontSize: "24px",
                lineHeight: "120%",
                fontWeight: "700",
              }}
            >
              The Open Institute
            </span>
            , Software Developer
          </h2>
          <p
            className="pr-4"
            style={{
              marginBottom: "0px",
              color: "#fff",
              fontSize: "16px",
              lineHeight: "150%",
              textDecoration: "none",
            }}
          >
            Research project funded by the University of Warwick and Welcome
            Trust. Built a WhatsApp chatbot for community health workers in
            Kenya, piloted in Busia, to help serve patients with sickle cell
            anemia. Explored different AI models including Mistral, Llama 7B,
            and OpenAI to optimize healthcare delivery in underserved
            communities.
          </p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <p
          className="text-[#fff] text-lg md:text-xl"
          style={{
            lineHeight: "150%",
            maxWidth: "90%",
          }}
        >
          Beyond these roles, I've built several pet projects exploring new
          technologies.{" "}
          <a
            href="https://callwisely.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#75fbfd] hover:underline"
          >
            CallWisely.ai
          </a>{" "}
          — an AI call center agent with embeddable chatbots, born from my
          curiosity with voice AI.{" "}
          <a
            href="https://semawebapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3cc74e] hover:underline"
          >
            SemaWebApp
          </a>{" "}
          — a therapy platform that has facilitated over 5,000 therapy sessions.{" "}
          <a
            href="https://animina.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffc700] hover:underline"
          >
            Animina.de
          </a>{" "}
          — a dating site for the German market. And{" "}
          <a
            href="https://fiti.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e95d90] hover:underline"
          >
            Fiti.info
          </a>{" "}
          — a brand protection and logistics system with WhatsApp chatbot
          integration, trusted by organizations like Oxford University Press.
          And many more. I'm always working on new pet projects—{" "}
          <a
            href="mailto:kiprotichkimutai01@gmail.com"
            className="text-[#609bff] hover:underline"
          >
            reach out
          </a>{" "}
          to learn about what else I'm building.
        </p>
      </div>
    </div>
  );
};

export default Experience;
