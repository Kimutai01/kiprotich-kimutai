import React from "react";
import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Sema() {
  return (
    <>
      <Head>
        <title>
          Sema - Mental Health & Wellness Platform | Kiprotich Kimutai
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
            src="/sema.png"
            alt="Sema - Mental Health & Wellness Platform"
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
              Mental Health & Wellness Platform
            </p>
            <h1 className="text-[#fff] md:text-5xl text-3xl font-bold mb-4">
              Sema
            </h1>
            <p className="text-[#d1d5db] text-lg md:text-xl max-w-3xl leading-relaxed">
              A mental health and wellness platform that connects users with
              accredited therapists for online therapy sessions. Features
              include therapist onboarding, appointment booking, in-app video
              conferencing, and support for individual and couples counseling.
              Has facilitated over 5,000 therapy sessions, transforming lives
              and making mental health support accessible.
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
              <p className="text-[#3cc74e] text-xl font-semibold">Live</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <Link
                href="https://semawebapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-[#86919f] uppercase text-sm mb-2">
                  Live Link
                </p>
                <p className="text-[#75fbfd] text-xl font-semibold hover:underline">
                  semawebapp.com →
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
                The owner of Sema needed a comprehensive platform to onboard
                therapists and enable users to have therapy sessions directly
                within the app. The system needed to handle therapist
                registration and verification, user-therapist matching, secure
                video conferencing for sessions, appointment scheduling, and
                payment processing. The goal was to create a seamless experience
                that would make mental health support accessible and convenient
                for people seeking help.
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
                I built Sema from the ground up, creating a complete mental
                health platform that enables therapists to be onboarded and
                users to have therapy sessions directly within the app. The
                platform includes therapist registration and profile management,
                user accounts and matching system, in-app video conferencing for
                secure therapy sessions, appointment scheduling and calendar
                management, and payment processing. After building the core
                platform, I later handed it over to other developers who
                continued to enhance and maintain it.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    👨‍⚕️ Therapist Onboarding
                  </h3>
                  <p className="text-[#86919f]">
                    Comprehensive system for therapists to register, create
                    profiles, and get verified. Enables therapists to showcase
                    their expertise and specialties.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    📅 Appointment Booking
                  </h3>
                  <p className="text-[#86919f]">
                    Easy-to-use scheduling system that allows users to book
                    appointments with their chosen therapists at convenient
                    times.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🎥 In-App Video Sessions
                  </h3>
                  <p className="text-[#86919f]">
                    Secure video conferencing built directly into the platform,
                    enabling users to have therapy sessions with their
                    therapists without leaving the app.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    💬 Individual & Couples Counseling
                  </h3>
                  <p className="text-[#86919f]">
                    Support for both individual therapy sessions and couples
                    counseling, providing flexibility for different mental
                    health needs.
                  </p>
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
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#fff] text-xl font-semibold mb-4">
                    Frontend & Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Video Conferencing
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Payment Processing
                    </li>
                  </ul>
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
                Sema has transformed lives and made mental health support
                accessible to thousands of people:
              </p>
              <ul className="space-y-3 text-[#d1d5db] text-lg">
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Facilitated over 5,000 therapy sessions, helping people access
                  mental health support
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Enabled therapists to onboard and connect with clients through
                  a seamless platform
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Made mental health support accessible and convenient through
                  in-app video sessions
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Transformed lives by providing people with the help they need
                  for mental health issues
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  This project is special because it contributes to my dream of
                  making the world a better place using software
                </li>
              </ul>
            </div>
          </section>

          {/* Live Link Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://semawebapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc] transition duration-300 text-white">
                Visit Live Site →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sema;
