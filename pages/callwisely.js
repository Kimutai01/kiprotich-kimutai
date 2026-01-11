import React from "react";
import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function CallWisely() {
  return (
    <>
      <Head>
        <title>CallWisely - AI Call Center Agent | Kiprotich Kimutai</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Contrail+One&family=Sen:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full bg-[#000] min-h-screen text-white sen">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="/call1.png"
            alt="CallWisely - AI Call Center Agent"
            className="object-cover object-center h-[60vh] md:h-[70vh] w-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Back Button */}
        <div className="fixed md:top-20 top-10 z-50 left-5">
          <Link href="/#projects">
            <BsFillArrowLeftSquareFill
              size={35}
              className="text-[#4c24dc] hover:text-[#75fbfd] transition-colors"
            />
          </Link>
        </div>

        <div className="max-w-[1240px] mx-auto p-6 md:p-12">
          {/* Header */}
          <div className="mt-8 mb-12">
            <p
              className="text-[#86919f] uppercase mb-2"
              style={{
                fontSize: "16px",
                lineHeight: "150%",
                fontWeight: "700",
              }}
            >
              AI-Powered Call Center Solution
            </p>
            <h1 className="text-[#fff] md:text-5xl text-3xl font-bold mb-4">
              CallWisely
            </h1>
            <p className="text-[#d1d5db] text-lg md:text-xl max-w-3xl leading-relaxed">
              An AI call center agent with embeddable chatbot capabilities. This
              project explores voice models and has the potential to be a game
              changer for customer support and call centers. Features include
              voice AI agents, embeddable chatbots for websites, and AI-powered
              conversation analysis.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">
                Year Built
              </p>
              <p className="text-[#fff] text-xl font-semibold">2023-2024</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">Status</p>
              <p className="text-[#3cc74e] text-xl font-semibold">
                Currently Being Piloted
              </p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">Type</p>
              <p className="text-[#75fbfd] text-xl font-semibold">
                Pet Project
              </p>
            </div>
          </div>

          {/* The Story */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              The Story
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed">
                CallWisely started as an exploration into voice models and AI
                technology. I believe this project could be a game changer for
                customer support and call centers. The system takes knowledge
                base from websites, documents, or text and uses it to
                personalize the AI voice agent. The voice can be changed
                depending on the persona, making it dynamic and adaptable for
                different use cases. This is a pet project where I'm
                continuously iterating to make it as dynamic and effective as
                possible. CallWisely is currently being piloted, allowing us to
                test and refine the technology in real-world scenarios.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Features
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🎙️ AI Voice Agent
                  </h3>
                  <p className="text-[#86919f]">
                    Intelligent voice AI agent that uses knowledge bases from
                    websites, documents, or text to provide personalized
                    customer support. Voice personas can be customized for
                    different use cases.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    💬 Embeddable Chatbot
                  </h3>
                  <p className="text-[#86919f]">
                    Chatbot that can be embedded directly into websites,
                    providing seamless customer support. Users can jump in and
                    take over the conversation when needed.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    📊 AI Conversation Analysis
                  </h3>
                  <p className="text-[#86919f]">
                    AI-powered analysis of call conversations, providing
                    insights into customer interactions, sentiment, and key
                    topics discussed during calls.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🔄 Dynamic Knowledge Base
                  </h3>
                  <p className="text-[#86919f]">
                    Flexible system that can pull knowledge from multiple
                    sources including websites, documents, or text, allowing the
                    AI to stay up-to-date with the latest information.
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call2.png"
                    alt="CallWisely Dashboard"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call3.png"
                    alt="CallWisely Voice Agent"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call4.png"
                    alt="CallWisely Chatbot Interface"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call5.png"
                    alt="CallWisely Conversation Analysis"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call6.png"
                    alt="CallWisely Knowledge Base"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call7.png"
                    alt="CallWisely Settings"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/call8.png"
                    alt="CallWisely Integration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Challenges & Solutions
            </h2>

            <div className="mb-8">
              <div className="bg-[#181822] p-8 md:p-10 rounded-lg mb-6">
                <h3 className="text-[#fff] text-2xl font-semibold mb-4">
                  The Challenge
                </h3>
                <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed">
                  The biggest challenge was voice quality and naturalness.
                  Creating an AI voice agent that sounds human, responds
                  quickly, and maintains natural conversation flow is extremely
                  complex. Voice models need to handle real-time processing,
                  maintain low latency, and produce natural-sounding speech that
                  doesn't feel robotic or delayed.
                </p>
              </div>

              <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
                <h3 className="text-[#3cc74e] text-2xl font-semibold mb-4">
                  How We're Overcoming It
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      Fine-Tuning Voice Models
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      We're fine-tuning models with different voices to generate
                      natural, human-like speech. The system is continuously
                      being improved to make responses faster and sound more
                      human, reducing latency and improving the overall
                      conversation experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      Continuous Iteration
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      As a pet project, CallWisely is in constant development.
                      We're continuously working on improvements to make the
                      voice faster, more natural, and better at handling complex
                      customer interactions. The goal is to create an AI agent
                      that's indistinguishable from human customer support
                      representatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Technologies Used
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#fff] text-xl font-semibold mb-4">
                    AI & Voice
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Voice Models
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      AI/ML Processing
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Real-time Speech Processing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#fff] text-xl font-semibold mb-4">
                    Platform & Integration
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Embeddable Widget
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Knowledge Base Integration
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Conversation Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Potential Impact
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-4">
                CallWisely has the potential to transform customer support and
                call centers:
              </p>
              <ul className="space-y-3 text-[#d1d5db] text-lg">
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Revolutionize customer support with AI-powered voice agents
                  that sound natural and human
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Provide 24/7 customer support without the need for large human
                  teams
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Enable seamless integration with embeddable chatbots for
                  websites
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Offer AI-powered conversation analysis for better customer
                  insights
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Allow human agents to jump in when needed, creating a hybrid
                  support model
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CallWisely;
