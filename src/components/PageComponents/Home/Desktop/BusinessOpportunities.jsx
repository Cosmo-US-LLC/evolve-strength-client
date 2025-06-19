import React from "react";
import leasingImage from "/src/assets/images/home/BusinessOpportunities/leasing_opportunities.webp"; // Replace with your image path
import franchiseImage from "/src/assets/images/home/BusinessOpportunities/franchise_opportunities.webp"; // Replace with your image path

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
    <div className="w-full px-6 md:px-12 py-16 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        BUILD YOUR FUTURE WITH EVOLVE
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-[1280px] mx-auto">
        {opportunities.map((item, index) => (
          <div
            key={index}
            className="flex-1 relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/90 mb-4">{item.description}</p>
              <button className="self-start bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-sm font-semibold transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOpportunities;
