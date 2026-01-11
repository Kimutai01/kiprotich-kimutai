import React from "react";
import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Fiti() {
  return (
    <>
      <Head>
        <title>
          Fiti.info - Brand Protection & Logistics | Kiprotich Kimutai
        </title>
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
            src="/fiti.png"
            alt="Fiti - Brand Protection & Logistics"
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
              Brand Protection & Logistics Platform
            </p>
            <h1 className="text-[#fff] md:text-5xl text-3xl font-bold mb-4">
              Fiti.info
            </h1>
            <p className="text-[#d1d5db] text-lg md:text-xl max-w-3xl leading-relaxed">
              A comprehensive brand protection and logistics service trusted by
              Oxford University Press. Combats counterfeit goods by generating
              unique PINs that validate authenticity through WhatsApp bot and
              SMS.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">
                Year Built
              </p>
              <p className="text-[#fff] text-xl font-semibold">2023</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">Status</p>
              <p className="text-[#3cc74e] text-xl font-semibold">Live</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <Link
                href="https://fiti.info"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-[#86919f] uppercase text-sm mb-2">
                  Live Link
                </p>
                <p className="text-[#75fbfd] text-xl font-semibold hover:underline">
                  fiti.info →
                </p>
              </Link>
            </div>
          </div>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              The Problem
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed">
                In Kenya, counterfeit goods have become a major challenge,
                particularly in the publishing industry. Fake books flood the
                market, undermining legitimate publishers and depriving authors
                of their rightful earnings. Consumers often unknowingly purchase
                counterfeit books, receiving substandard quality while
                supporting illegal operations. There was no reliable, accessible
                way for consumers to verify the authenticity of products before
                or after purchase.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              The Solution
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg mb-8">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-6">
                Fiti is a comprehensive brand protection and logistics platform
                that generates unique PINs placed at the back of books. Each PIN
                is paired with a specific book, creating a secure verification
                system. Users can scratch the PIN and send it via WhatsApp bot
                or SMS to instantly validate whether their book is authentic.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    ✓ Real Book Verification
                  </h3>
                  <p className="text-[#86919f]">
                    Authentic books show verification details, book information,
                    and confirmation of legitimacy.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    ⚠ Fake Book Detection
                  </h3>
                  <p className="text-[#86919f]">
                    Counterfeit books trigger an immediate alert and create a
                    detailed report for publishers to track fraud.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Bot Screenshots */}
            <div className="bg-[#181822] p-8 rounded-lg">
              <h3 className="text-[#fff] text-2xl font-semibold mb-6">
                WhatsApp Bot Integration
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#000] rounded-lg overflow-hidden h-80">
                  <img
                    src="/r1.jpg"
                    alt="WhatsApp Bot - User sends PIN"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-[#000] rounded-lg overflow-hidden h-80">
                  <img
                    src="/f1.jpg"
                    alt="WhatsApp Bot - Fake book alert"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-[#000] rounded-lg overflow-hidden h-80">
                  <img
                    src="/s1.jpg"
                    alt="WhatsApp Bot - Real book response"
                    className="w-full h-full object-contain"
                  />
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
                    Backend
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Elixir
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Phoenix LiveView
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      PostgreSQL
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      TimescaleDB (Timeseries)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#fff] text-xl font-semibold mb-4">
                    Integrations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      WhatsApp API
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      SMS Gateway
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Telegram Bot
                    </li>
                  </ul>
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
                  Managing PINs at scale was one of the biggest technical
                  challenges. A single order could contain 500,000 to 1 million
                  unique PINs. Traditional database approaches would struggle
                  with such massive volumes, leading to slow queries, storage
                  inefficiencies, and performance degradation as the data grew.
                </p>
              </div>

              <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
                <h3 className="text-[#3cc74e] text-2xl font-semibold mb-4">
                  How We Overcame It
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      Timeseries Database Architecture
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      We converted the PINs table to a timeseries table using
                      TimescaleDB. This architecture is optimized for handling
                      massive volumes of time-ordered data, making it perfect
                      for PIN generation, storage, and retrieval. Timeseries
                      tables provide automatic partitioning, compression, and
                      query optimization.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      Query Optimization
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      We implemented optimized queries using indexes, batch
                      processing, and efficient data structures. PIN lookups now
                      happen in milliseconds even with millions of records, and
                      bulk PIN generation for large orders is handled
                      efficiently without blocking the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Impact
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-4">
                Fiti.info is now trusted by Oxford University Press and other
                major publishers to protect their products. The platform has
                successfully:
              </p>
              <ul className="space-y-3 text-[#d1d5db] text-lg">
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Enabled instant verification of millions of books
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Provided accessible verification through WhatsApp and SMS
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Generated detailed reports on counterfeit products
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Scaled to handle massive PIN volumes efficiently
                </li>
              </ul>
            </div>
          </section>

          {/* Live Link Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://fiti.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc] transition duration-300 text-white">
                Visit Live Site →
              </button>
            </Link>
            <Link href="/nexuscale">
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#75fbfd] rounded-md hover:bg-[#75fbfd] hover:text-[#000] transition duration-300 text-white">
                Next Project: Nexuscale.ai →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fiti;
