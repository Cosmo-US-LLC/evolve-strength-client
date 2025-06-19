import React, { useState } from "react";
import {
  Dumbbell,
  Leaf,
  ShowerHead,
  LayoutPanelTop,
  Flame,
} from "lucide-react";
import wellnessImg from "/src/assets/images/home/MembershipBenefits/image_1.webp";
import equipmentImg from "/src/assets/images/home/MembershipBenefits/image_2.webp";
import steamImg from "/src/assets/images/home/MembershipBenefits/image_3.webp";
import layoutImg from "/src/assets/images/home/MembershipBenefits/image_4.webp";
import amenitiesImg from "/src/assets/images/home/MembershipBenefits/image_5.webp";

const benefitItems = [
  {
    key: "wellness",
    label: "WELLNESS SERVICES",
    icon: <Leaf className="w-5 h-5 text-green-600" />,
    description:
      "We prioritise strategies to get you the most out of your property sale, all while ensuring a smooth and stress-free process.",
    image: wellnessImg,
  },
  {
    key: "equipment",
    label: "WORLD–CLASS EQUIPMENT",
    icon: <Dumbbell className="w-5 h-5 text-green-600" />,
    description:
      "Train with industry-leading machines at every Evolve location, engineered for performance across every fitness style.",
    image: equipmentImg,
  },
  {
    key: "steam",
    label: "STEAM & SAUNA ACCESS",
    icon: <Flame className="w-5 h-5 text-green-600" />,
    description:
      "Recover and recharge in calming steam and sauna rooms, designed to support deep relaxation and muscle recovery.",
    image: steamImg,
  },
  {
    key: "layout",
    label: "SPACIOUS LAYOUTS",
    icon: <LayoutPanelTop className="w-5 h-5 text-green-600" />,
    description:
      "Move freely through open, thoughtfully designed training areas that give you room to breathe, lift, and grow.",
    image: layoutImg,
  },
  {
    key: "amenities",
    label: "PREMIUM AMENITIES",
    icon: <ShowerHead className="w-5 h-5 text-green-600" />,
    description:
      "Enjoy elevated comforts like luxury showers and curated locker spaces that enhance every part of your fitness experience.",
    image: amenitiesImg,
  },
];

const MembershipBenefits = () => {
  const [activeKey, setActiveKey] = useState("wellness");
  const active = benefitItems.find((item) => item.key === activeKey);

  return (
    <div className="w-full px-6 md:px-12 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        ONE MEMBERSHIP, ENDLESS BENEFITS
      </h2>

      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Panel */}
        <div className="flex-1 space-y-6">
          {benefitItems.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <div
                key={item.key}
                className="relative cursor-pointer group pl-6 py-2"
                onClick={() => setActiveKey(item.key)}
              >
                {/* Grey static base */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-300" />

                {/* Green progress bar animation */}
                <div
                  className={`absolute left-0 top-0 w-[2px] bg-green-600 transition-all duration-500 origin-top ${
                    isActive ? "h-full" : "h-0"
                  }`}
                />

                <div
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-green-600" : "text-black"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </div>

                <div
                  className={`transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  <p className="mt-2 text-sm text-gray-700 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-md transition">
            BOOK A FREE TOUR
          </button>
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          <img
            key={active.image} // triggers transition
            src={active.image}
            alt={active.label}
            className="rounded-xl object-cover w-full h-full max-h-[450px] transition duration-700 ease-in-out transform scale-100 opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipBenefits;
