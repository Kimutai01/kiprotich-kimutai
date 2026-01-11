import React from "react";
// import knbs from "/knbs.jpeg";

const Achievements = () => {
  return (
    <div className="bg-[#000] text-[#d1d5db] md:p-20 p-6">
      <h1 className="text-[#fff] font-bold text-4xl md:text-5xl md:ml-28 pb-10">
        Achievements
      </h1>
      <div>
        <p className="pb-4 text-[#d1d5db]">
          These are some of the things I have achieved in my career as a
          software developer.
        </p>
        <ul className="ml-8 space-y-4">
          <li>
            <p className="text-[#d1d5db]">
              1. Built nexuscale.ai from the ground up and successfully launched
              on AppSumo, gaining over 1,400 customers and transforming how
              sales teams approach outbound campaigns.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              2. Built multiple ticketing systems that have transacted over
              $1,000,000 in ticket sales, successfully handling 2,000+ ticket
              sales in 30 minutes during flash sales.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              3. Built Sema, a mental health platform that has facilitated over
              5,000 therapy sessions, transforming lives and making mental
              health support accessible.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              4. Built Fiti.info, a brand protection platform trusted by Oxford
              University Press to combat counterfeit goods.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              5. Led a team of 2 developers as CTO at nexuscale.ai, guiding
              technical decisions, architecture, and implementation.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              6. Winner of the innovate hackathon 2022 organized by value chain
              factory. We built a web app that enables one's medical details and
              bio data to be retrieved quickly using a qr code or nfc tag.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              7. Winner of the No app for this hackathon 2022 organized by Open
              institute.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              8. Winner of the USIU-A hackathon 2023 organized by USIU-Africa
              and blipearth.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              9. Winner of the 2023 Kenya National Bureau of Statistics
              hackathon in partnership with the British High Commission and
              Wowzi. We developed a web application that provides farmers with
              advisory from planting to harvesting with{" "}
              <a
                href="https://michaelmunavu.vercel.app/"
                className="text-[#4c24dc] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael Munavu
              </a>
              .
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              10. Winner of the 2023 Uasin Gishu County hackathon in partnership
              with Mozilla Africa and the Gladys Boss Shollei Foundation.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              11. Emerged 2nd in the fintech hackathon organized by budpay.
            </p>
          </li>
          <li>
            <p className="text-[#d1d5db]">
              12. Emerged 6th in Nairobi Innovation week challenge.
            </p>
          </li>
        </ul>
        <div className="grid mt-10 grid-cols-2 md:grid-cols-4 md:gap-8 ">
          <div>
            <img src="/knbs.jpeg" className="h-[200px] w-[350px]" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="/USIU.jpeg" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="/Value.jpeg" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="/openi.jpg" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="/open.jpg" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="/mche.JPG" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="/ug.JPG" />
          </div>
          <div>
            <img className="h-[200px] w-[350px]" src="knbs2.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
