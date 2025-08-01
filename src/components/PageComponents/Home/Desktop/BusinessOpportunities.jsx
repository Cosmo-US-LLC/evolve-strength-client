import React from "react";
import leasingImage from "/src/assets/images/home/BusinessOpportunities/leasing_opportunities.webp";
import franchiseImage from "/src/assets/images/home/BusinessOpportunities/franchise_opportunities.webp";

const opportunities = [
  {
    title: "Leasing Opportunities",
    description:
      "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for professionals.",
    image: leasingImage,
  },
  {
    title: "Franchise Opportunities",
    description:
      "Own an Evolve Strength gym with a proven model, trusted brand, and nationwide support.",
    image: franchiseImage,
  },
];

const BusinessOpportunities = () => {
  return (
    <div className="w-full py-12 bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] md:px-8 px-4 mx-auto flex flex-col justify-center items-center gap-12">
        <h2 className="">BUILD YOUR FUTURE WITH EVOLVE</h2>
        <div className="flex md:flex-row max-md:flex-col w-[100%] min-h-[370px] gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="md:flex-1 max-md:flex max-md:items-end  relative rounded-xl overflow-hidden shadow-md group"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
            >
              <div className="max-w-[380px] relative z-10 p-8 flex flex-col justify-end h-full">
                <h3 className="text-[#FFFFFF] leading-[24px] mb-3  ">
                  {item.title}
                </h3>
                <p className="description !font-[kanit] leading-[20px] text-[#FFFFFF] mb-5   ">
                  {item.description}
                </p>
                <button className="self-start btnPrimary transition">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunities;
