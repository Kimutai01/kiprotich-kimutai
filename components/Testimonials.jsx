import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#000] grid grid-cols-1 md:grid-cols-2 p-4 md:p-0">
      <div className="md:sticky md:top-0 md:h-screen pt-32 md:pl-16">
        <h1 className="text-[#fff] md:text-6xl text-2xl font-bold">
          This is what people say about me
        </h1>

        <p className="text-[#5b6876] text-lg mt-8 md:mr-10">
          Here are a few lines from people who I have worked with over the past
          2+ years in my design career.
        </p>
      </div>
      <div className="md:pt-32 pt-20 md:p-12">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5ca959aafef7674902_Testimonial%201.jpg"
            alt=""
          />
          <div className="border-b-2 border-r-2 border-l-2 border-[#5b6876] p-10">
            <p className="text-[#fff] text-2xl font-bold">
              "I have worked with many designers over the years, but I have
              never met anyone as talented as you. You are a true professional
              and I would recommend you to anyone."
            </p>

            <p className="text-[#5b6876] text-lg mt-4">
              - John Doe, CEO of Google
            </p>
          </div>
        </div>

        <div className="mt-24">
          <img
            src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5ca959aafef7674902_Testimonial%201.jpg"
            alt=""
          />
          <div className="border-b-2 border-r-2 border-l-2 border-[#5b6876] p-10">
            <p className="text-[#fff] text-2xl font-bold">
              "I have worked with many designers over the years, but I have
              never met anyone as talented as you. You are a true professional
              and I would recommend you to anyone."
            </p>

            <p className="text-[#5b6876] text-lg mt-4">
              - John Doe, CEO of Google
            </p>
          </div>
        </div>

        <div className="mt-24">
          <img
            src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5ca959aafef7674902_Testimonial%201.jpg"
            alt=""
          />
          <div className="border-b-2 border-r-2 border-l-2 border-[#5b6876] p-10">
            <p className="text-[#fff] text-2xl font-bold">
              "I have worked with many designers over the years, but I have
              never met anyone as talented as you. You are a true professional
              and I would recommend you to anyone."
            </p>

            <p className="text-[#5b6876] text-lg mt-4">
              - John Doe, CEO of Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
