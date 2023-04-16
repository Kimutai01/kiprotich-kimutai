import React from "react";
// import knbs from "/knbs.jpeg";

const Achievements = () => {
  return (
    <div className="bg-[#000] text-[#5b6876] p-20">
      <h1 className="text-[#fff] font-bold text-5xl ml-28 pb-10">
        Achievements
      </h1>
      <div>
        <p className="pb-4">
          These are some of the things I have achieved in my career as a
          software developer.
        </p>
        <ul className="ml-8">
          <li>
            <p>
              1. Winner of the innovate hackathon 2022 organized by value chain
              factory. We built a web app that enables once medical details and
              bio data to be retrived quickly using a qr code or nfc tag.
            </p>
          </li>
          <li>
            <p>
              2. Winner of the No app for this hackathon 2022 organized by Open
              institute.
            </p>
          </li>
          <li>
            <p>
              3. Winner of the USIU-A hackathon 2023 organized by USIU-Africa
              and blipearth.
            </p>
          </li>
          <li>
            <p>
              4. Winner of the 2023 Kenya National Bureau of Statistics
              hackathon in partnership with the British High Commission and
              Wowzi. We developed a web application that provides farmers with
              advisory from planting to harvesting with{" "}
              <a
                href="https://www.linkedin.com/in/michael-munavu/"
                className="text-[#4c24dc]"
              >
                Michael Munavu
              </a>
            </p>
          </li>
          <li>
            <p>
              5. Winner of the 2023 Uasin Gishu County hackathon in partnership
              with Mozilla Africa and the Gladys Boss Shollei Foundation.
            </p>
          </li>
        </ul>
        <div className="grid mt-10 grid-cols-4 gap-8">
          <div>
            <img src="/knbs.jpeg" className="h-[200px] w-[250px]" />
          </div>
          <div>
            <img className="h-[200px] w-[250px] " src="/usiu.jpeg" />
          </div>
          <div>
            <img className="h-[200px] w-[250px]" src="/Value.jpeg" />
          </div>
          <div>
            <img className="h-[200px] w-[250px]" src="/openi.jpg" />
          </div>
          <div>
            <img className="h-[200px] w-[250px]" src="/open.jpg" />
          </div>
          <div>
            <img className="h-[200px] w-[250px]" src="/mche.JPG" />
          </div>
          <div>
            <img className="h-[200px] w-[250px]" src="/ug.JPG" />
          </div>
          <div>
            <img className="h-[200px] w-[250px]" src="knbs2.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
