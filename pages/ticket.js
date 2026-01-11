import React from "react";
import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Ticket() {
  return (
    <>
      <Head>
        <title>
          Ticketing Systems - Event Management Platform | Kiprotich Kimutai
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
            src="/ticketing2.png"
            alt="Ticketing Systems - Event Management Platform"
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
              Event Ticketing & Management Platform
            </p>
            <h1 className="text-[#fff] md:text-5xl text-3xl font-bold mb-4">
              Ticketing Systems
            </h1>
            <p className="text-[#d1d5db] text-lg md:text-xl max-w-3xl leading-relaxed">
              High-performance ticketing systems built to handle massive traffic
              spikes during flash sales. Features include comprehensive
              dashboards, configurable flash sales, gate management with mobile
              scanning apps, and multiple payment gateway integrations.
              Successfully processed over $1,000,000 in ticket sales.
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
              <p className="text-[#86919f] uppercase text-sm mb-2">
                Total Sales
              </p>
              <p className="text-[#75fbfd] text-xl font-semibold">
                $1,000,000+
              </p>
            </div>
          </div>

          {/* The Problem */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              The Problem
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed">
                We needed to build a ticketing system that could handle huge
                traffic spikes, especially during flash sales when thousands of
                users would try to purchase tickets simultaneously. The system
                required a comprehensive dashboard for event management, the
                ability to configure flash sales with specific timing and
                pricing, gate management with mobile app scanning capabilities
                for entry verification, and support for multiple configurable
                payment gateways to accommodate different user preferences.
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
                I built robust ticketing systems designed to handle massive
                traffic loads. When flash sale tickets were launched, the system
                successfully processed over 2,000+ ticket sales in just 30
                minutes without any performance issues. The platform includes
                comprehensive dashboards for managing events, tickets, and sales
                analytics, configurable flash sales with custom timing and
                pricing rules, mobile app-based gate management for scanning and
                verifying tickets at entry points, and flexible payment gateway
                integrations supporting both card and M-Pesa payments.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🚀 High-Performance Architecture
                  </h3>
                  <p className="text-[#86919f]">
                    Built to handle massive traffic spikes, successfully
                    processing 2,000+ ticket sales in 30 minutes during flash
                    sales without performance degradation.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    📊 Comprehensive Dashboard
                  </h3>
                  <p className="text-[#86919f]">
                    Full-featured dashboard for event management, ticket
                    configuration, sales analytics, and real-time monitoring of
                    ticket sales and revenue.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    ⚡ Flash Sales Configuration
                  </h3>
                  <p className="text-[#86919f]">
                    Configurable flash sales with custom timing, pricing rules,
                    and inventory management to create time-limited promotional
                    ticket offerings.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    📱 Mobile Gate Management
                  </h3>
                  <p className="text-[#86919f]">
                    Mobile app-based gate management system for scanning and
                    verifying tickets at entry points, ensuring secure and
                    efficient event access control.
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/ticketing1.png"
                    alt="Ticketing System Dashboard"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/ticketing2.png"
                    alt="Ticketing System Interface"
                    className="w-full h-auto object-contain"
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
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#fff] text-xl font-semibold mb-4">
                    Frontend & Styling
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      JavaScript
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Mobile App (Gate Management)
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
                These ticketing systems have successfully processed over
                $1,000,000 in ticket sales across multiple high-profile events:
              </p>
              <ul className="space-y-3 text-[#d1d5db] text-lg">
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Handled 2,000+ ticket sales in 30 minutes during flash sales
                  without performance issues
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Transacted over $1,000,000 in total ticket sales
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Successfully managed multiple high-traffic events with
                  seamless user experience
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Enabled efficient gate management with mobile scanning
                  capabilities
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Supported multiple payment gateways (card and M-Pesa) for
                  flexible user preferences
                </li>
              </ul>
            </div>
          </section>

          {/* Live Links */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://mwambarugby.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc] transition duration-300 text-white">
                Visit mwambarugby.com →
              </button>
            </Link>
            <Link
              href="https://asakekenya.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#75fbfd] rounded-md hover:bg-[#75fbfd] hover:text-[#000] transition duration-300 text-[#75fbfd]">
                Visit asakekenya.com →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
