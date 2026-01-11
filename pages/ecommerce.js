import React from "react";
import Head from "next/head";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Ecommerce() {
  return (
    <>
      <Head>
        <title>TOMOLLO Fashions - Ecommerce Platform | Kiprotich Kimutai</title>
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
            src="/tom.png"
            alt="TOMOLLO Fashions - Ecommerce Platform"
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
              Fashion Ecommerce Platform
            </p>
            <h1 className="text-[#fff] md:text-5xl text-3xl font-bold mb-4">
              TOMOLLO Fashions
            </h1>
            <p className="text-[#d1d5db] text-lg md:text-xl max-w-3xl leading-relaxed">
              An ecommerce platform celebrating African and Irish fashion with
              modern, handcrafted designs. Features a comprehensive product
              catalog, shopping cart, and seamless shopping experience. Every
              piece is meticulously tailored in Kenya using sustainable
              practices and local craftsmanship.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">
                Year Built
              </p>
              <p className="text-[#fff] text-xl font-semibold">2022-2024</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <p className="text-[#86919f] uppercase text-sm mb-2">Status</p>
              <p className="text-[#3cc74e] text-xl font-semibold">Live</p>
            </div>
            <div className="bg-[#181822] p-6 rounded-lg">
              <Link
                href="https://tomollofashions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-[#86919f] uppercase text-sm mb-2">
                  Live Link
                </p>
                <p className="text-[#75fbfd] text-xl font-semibold hover:underline">
                  tomollofashions.com →
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
                TOMOLLO needed a modern ecommerce platform to showcase their
                African and Irish fashion collections online. The platform had
                to handle product catalogs across multiple categories (bomber
                jackets, maxi dresses, palazzo pants, short dresses, tops,
                gowns), provide a seamless shopping experience with cart
                functionality, and support both men's and women's wear
                collections. The system needed to reflect the brand's commitment
                to quality, sustainability, and Kenyan craftsmanship while
                making it easy for customers worldwide to discover and purchase
                unique fashion pieces.
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
                I built a comprehensive ecommerce platform that showcases
                TOMOLLO's vibrant fashion collections. The platform features a
                beautiful, responsive design that highlights the handcrafted
                nature of each piece, organized product catalogs across all
                categories, a seamless shopping cart and checkout experience,
                and separate sections for men's and women's wear. The platform
                celebrates the brand's Kenyan and Irish heritage while making it
                easy for customers to explore collections and make purchases.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🛍️ Product Catalog
                  </h3>
                  <p className="text-[#86919f]">
                    Comprehensive product listings across all categories with
                    detailed descriptions, pricing, and high-quality images
                    showcasing each handcrafted piece.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    🛒 Shopping Experience
                  </h3>
                  <p className="text-[#86919f]">
                    Seamless shopping cart functionality with easy checkout
                    process, allowing customers to browse, select, and purchase
                    items effortlessly.
                  </p>
                </div>
                <div className="bg-[#000] p-6 rounded-lg">
                  <h3 className="text-[#fff] text-xl font-semibold mb-3">
                    👔 Men's & Women's Collections
                  </h3>
                  <p className="text-[#86919f]">
                    Dedicated sections for both men's and women's wear, making
                    it easy for customers to explore collections tailored to
                    their style preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/tom1.png"
                    alt="TOMOLLO Fashions Product Catalog"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#181822] p-6 rounded-lg">
                <div className="bg-[#000] rounded-lg overflow-hidden">
                  <img
                    src="/tom2.png"
                    alt="TOMOLLO Fashions Shopping Experience"
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
                      Responsive Design
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
                TOMOLLO Fashions ecommerce platform has enabled the brand to:
              </p>
              <ul className="space-y-3 text-[#d1d5db] text-lg">
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Showcase African and Irish fashion collections to a global
                  audience
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Provide seamless online shopping experience for customers
                  worldwide
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Organize products across multiple categories for easy browsing
                </li>
                <li className="flex items-start">
                  <span className="text-[#3cc74e] mr-3">✓</span>
                  Support both men's and women's wear collections with dedicated
                  sections
                </li>
              </ul>
            </div>
          </section>

          {/* Live Link Button */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://tomollofashions.com"
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

export default Ecommerce;
