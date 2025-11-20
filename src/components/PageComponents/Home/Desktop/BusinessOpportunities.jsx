import React from "react";
import { Link } from "react-router-dom";

const opportunities = [
  {
    title: "Work Spaces",
    description:
      "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
    image: {
      desktop:
        "/assets/images/home/BusinessOpportunities/leasing_opportunities.webp",
      mobile:
        "/assets/images/home/BusinessOpportunities/leasing_opportunities_mobile.webp",
    },
    link: "/work-spaces",
  },
  {
    title: "Franchise Opportunities",
    description:
      "Own an Evolve Strength gym with a proven model, trusted brand, and nationwide support.",
    image: {
      desktop:
        "/assets/images/home/BusinessOpportunities/franchise_opportunities.webp",
      mobile:
        "/assets/images/home/BusinessOpportunities/franchise_opportunities_mobile.webp",
    },
    link: "/franchise",
  },
];

const BusinessOpportunities = () => {
  return (
    <div className="w-full py-12 bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] md:px-8 px-4 mx-auto flex flex-col justify-center items-center gap-12">
        <h2 className="">BUILD YOUR FUTURE WITH EVOLVE</h2>
        <div className="flex md:flex-row max-md:flex-col w-[100%] min-h-[370px] gap-8  ">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="md:flex-1 max-md:flex max-md:items-end relative rounded-xl overflow-hidden shadow-md group"
              style={{
                backgroundImage: `url(${item.image.mobile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
            >
              <div
                className="
                  absolute inset-0 z-0
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent    
                  md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent  
                "
              ></div>
              {/* Desktop Image */}
              <div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image.desktop})`,
                }}
              ></div>
              <div className="md:max-w-[348px] max-w-[320px] relative z-10 md:px-6 md:py-6 px-4 py-4 flex flex-col justify-end h-full">
                <h3 className="text-[#FFFFFF] leading-[24px] md:mb-3 mb-2">
                  {item.title}
                </h3>
                <h4 className="md:!font-[300] !font-[400] w-full leading-[20px] text-[#FFFFFF] md:mb-5 mb-3 ">
                  {item.description}
                </h4>
                <Link to={item.link}>
                  <button className="self-start btnPrimary transition">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunities;
