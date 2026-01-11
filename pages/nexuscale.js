import React from "react";
import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Nexuscale() {
  return (
    <>
      <Head>
        <title>nexuscale.ai - AI B2B Sales Platform | Kiprotich Kimutai</title>
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
            src="/nexuscale.png"
            alt="nexuscale.ai - AI B2B Sales Platform"
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
              AI-Powered B2B Sales Platform
            </p>
            <h1 className="text-[#fff] md:text-5xl text-3xl font-bold mb-4">
              nexuscale.ai
            </h1>
            <p className="text-[#d1d5db] text-lg md:text-xl max-w-3xl leading-relaxed">
              An all-in-one autonomous sales platform that unifies lead
              generation, AI-powered outreach, and LinkedIn automation. Replaces
              the need for multiple disconnected tools like Apollo, Clay, and
              Instantly with one intelligent autopilot.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">
                Year Built
              </p>
              <p className="text-[#fff] text-xl font-semibold">2024-now</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">Status</p>
              <p className="text-[#3cc74e] text-xl font-semibold">Live</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <Link
                href="https://nexuscale.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-[#86919f] uppercase text-sm mb-2">
                  Live Link
                </p>
                <p className="text-[#75fbfd] text-xl font-semibold hover:underline">
                  nexuscale.ai →
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
                The CEO, a sales professional, was frustrated with the
                fragmented B2B sales stack. To run effective outbound campaigns,
                he needed Apollo for leads ($1,188/yr), Clay for enrichment
                ($1,788/yr), Instantly for sending ($1,068/yr), and more tools
                for LinkedIn automation. This meant managing 5+ disconnected
                subscriptions, switching between platforms constantly, and
                paying over $4,000 per year for a broken workflow. Each tool had
                its own interface, data silos, and learning curve—making it
                impossible to work efficiently.
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
                I built nexuscale.ai—an all-in-one autonomous sales platform
                that unifies everything in a single tool. Instead of juggling
                multiple disconnected subscriptions, businesses get access to a
                database of 200M+ leads, AI-powered personalization using
                LinkedIn, Google News, and website data, and multi-channel
                sending across email and LinkedIn—all in one intelligent
                autopilot that works 24/7.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🎯 Find Right Buyers
                  </h3>
                  <p className="text-[#86919f]">
                    Enables users to find and select leads from a database of
                    200M+ prospects, scanning millions of live buying signals to
                    surface prospects ready to buy now.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    ✍️ Hyper-Personalized Content
                  </h3>
                  <p className="text-[#86919f]">
                    Uses LinkedIn data, Google News, website information, and
                    real-time signals (funding, hiring, role changes) to write
                    outreach that feels human and personalized.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg mb-8">
              <h3 className="text-[#fff] text-2xl font-semibold mb-6">
                How It Works
              </h3>
              <div className="space-y-4 text-[#d1d5db] text-lg">
                <div className="flex items-start">
                  <span className="text-[#3cc74e] mr-3 font-bold">1.</span>
                  <p>
                    User signs up and enters their website or company
                    information
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#3cc74e] mr-3 font-bold">2.</span>
                  <p>
                    AI analyzes the information and generates unique pain
                    points, selling points, and personalized messaging
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#3cc74e] mr-3 font-bold">3.</span>
                  <p>
                    User selects leads from the 200M+ database and adds them to
                    an agent (a series of automated steps)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#3cc74e] mr-3 font-bold">4.</span>
                  <p>
                    The autopilot sends personalized emails and follow-ups based
                    on user settings, working 24/7 to book meetings
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/nexuscale1.png"
                    alt="nexuscale Dashboard"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/nexuscale6.png"
                    alt="nexuscale Lead Selection"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/nexuscale3.png"
                    alt="nexuscale Agent Configuration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/nexuscale4.png"
                    alt="nexuscale Campaign Results"
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
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Python (AI/ML)
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
                      Gmail API
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Microsoft Outlook
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      SMTP
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      Zoho
                    </li>
                    <li className="flex items-center text-[#d1d5db]">
                      <RiRadioButtonFill className="pr-2 text-[#4c24dc]" />
                      LinkedIn API
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
                <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-4">
                  Managing a database of 200M+ leads was the biggest technical
                  challenge. Traditional database approaches couldn't handle the
                  scale—queries would slow down, storage costs would skyrocket,
                  and the system would struggle with real-time lookups and
                  updates. We needed a solution that could efficiently store,
                  index, and retrieve millions of records instantly.
                </p>
                <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed">
                  Additionally, integrating SMTP for email sending was
                  particularly challenging. Unlike API-based integrations
                  (Gmail, Outlook), SMTP required handling different protocols,
                  managing connection pools, and ensuring reliable delivery
                  across multiple email providers.
                </p>
              </div>

              <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
                <h3 className="text-[#3cc74e] text-2xl font-semibold mb-4">
                  How We Overcame It
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      Strategic Database Indexing & Denormalization
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      We created comprehensive indexes on frequently queried
                      fields and strategically denormalized the database to
                      reduce join operations. This allowed us to perform
                      lightning-fast lookups even with 200M+ records. By
                      pre-computing and storing commonly accessed data together,
                      we eliminated expensive queries and improved response
                      times by orders of magnitude.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      SMTP Integration Architecture
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      For SMTP, we built a robust connection pooling system that
                      manages multiple email provider connections efficiently.
                      We implemented retry logic, rate limiting, and delivery
                      tracking to ensure reliable email delivery. The system
                      handles different SMTP configurations and adapts to
                      various provider requirements automatically.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#fff] text-xl font-semibold mb-2">
                      LinkedIn Automation Innovation
                    </h4>
                    <p className="text-[#d1d5db] text-lg leading-relaxed">
                      We developed a sophisticated LinkedIn automation system
                      that handles connection requests, messaging, and
                      engagement while respecting platform limits and
                      maintaining account safety. This required
                      reverse-engineering LinkedIn's behavior patterns and
                      building intelligent rate limiting mechanisms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team & Leadership */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Team & Leadership
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-4">
                I led a team of 2 brilliant developers, guiding technical
                decisions, architecture, and implementation. Together, we built
                nexuscale from concept to a platform that launched on AppSumo
                and gained over 1,400 customers. It's been incredible to see how
                this project evolved from solving my cofounder's frustration
                with disconnected tools to becoming a unified solution that
                helps thousands of sales teams work more efficiently.
              </p>
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed">
                As CTO and lead developer, I architected the system, built the
                core infrastructure, and mentored the team through complex
                technical challenges. The collaboration and growth we achieved
                together made this one of my most rewarding projects.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-[#75fbfd] md:text-4xl text-2xl font-bold mb-6">
              Impact
            </h2>
            <div className="bg-[#181822] p-8 md:p-10 rounded-lg">
              <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-4">
                nexuscale.ai has transformed how sales teams approach outbound
                campaigns:
              </p>
              <ul className="space-y-3 text-[#d1d5db] text-lg">
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Replaced $4,000+ annual tool costs with a single $99/month
                  platform
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Gained 1,400+ customers after launching on AppSumo
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Enabled teams to book 42+ meetings per month on average
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Unified lead database, AI research, and multi-channel sending
                  in one platform
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Reduced setup time from days to 3 minutes
                </li>
              </ul>
            </div>
          </section>

          {/* Live Link Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://nexuscale.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#4c24dc] rounded-md hover:bg-[#4c24dc] transition duration-300 text-white">
                Visit Live Site →
              </button>
            </Link>
            <Link href="/ticket">
              <button className="font-lg font-semibold py-4 px-12 text-center border-2 border-[#75fbfd] rounded-md hover:bg-[#75fbfd] hover:text-[#000] transition duration-300 text-[#75fbfd]">
                Next Project: Ticketing Systems →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nexuscale;
