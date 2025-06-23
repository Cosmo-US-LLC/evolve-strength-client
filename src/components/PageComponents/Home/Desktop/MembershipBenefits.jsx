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
    icon: <Leaf className="w-5 h-5" />,
    description:
      "We prioritise strategies to get you the most out of your property sale, all while ensuring a smooth and stress-free process.",
    image: wellnessImg,
  },
  {
    key: "equipment",
    label: "WORLD–CLASS EQUIPMENT",
    icon: <Dumbbell className="w-5 h-5" />,
    description:
      "Train with industry-leading machines at every Evolve location, engineered for performance across every fitness style.",
    image: equipmentImg,
  },
  {
    key: "steam",
    label: "STEAM & SAUNA ACCESS",
    icon: <Flame className="w-5 h-5" />,
    description:
      "Recover and recharge in calming steam and sauna rooms, designed to support deep relaxation and muscle recovery.",
    image: steamImg,
  },
  {
    key: "layout",
    label: "SPACIOUS LAYOUTS",
    icon: <LayoutPanelTop className="w-5 h-5" />,
    description:
      "Move freely through open, thoughtfully designed training areas that give you room to breathe, lift, and grow.",
    image: layoutImg,
  },
  {
    key: "amenities",
    label: "PREMIUM AMENITIES",
    icon: <ShowerHead className="w-5 h-5" />,
    description:
      "Enjoy elevated comforts like luxury showers and curated locker spaces that enhance every part of your fitness experience.",
    image: amenitiesImg,
  },
];

const MembershipBenefits = () => {
  const [activeKey, setActiveKey] = useState("wellness");
  const active = benefitItems.find((item) => item.key === activeKey);

  return (
        <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center gap-12">
    
      <h2 className="text-[#000000] uppercase">
        ONE MEMBERSHIP, ENDLESS BENEFITS
      </h2>

      <div className="flex flex-row w-[100%] justify-between ">
        
        <div className="w-[50%] flex flex-col items-start justify-center gap-8">
          {benefitItems.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <div
                key={item.key}
                className="relative cursor-pointer group pl-6 py-2"
                onClick={() => setActiveKey(item.key)}
              >
              
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-300" />

                
                <div
                  className={`absolute left-0 top-0 w-[2px] bg-green-600 transition-all duration-500 origin-top ${
                    isActive ? "h-full" : "h-0"
                  }`}
                />

                <h3
                  className={`flex items-center text-[#000] leading-normal gap-2  transition-colors duration-300 ${
                    isActive ? "text-[#4AB04A]" : "text-black"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </h3>

                <div
                  className={`transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  <h4 className="mt-2 leading-[130%] max-w-md">
                    {item.description}
                  </h4>
                </div>
              </div>
            );
          })}

          <button className="btnPrimary">
            BOOK A FREE TOUR
          </button>
        </div>
        <div className="w-[50%] max-w-[460px]">
          <img
            key={active.image}
            src={active.image}
            alt={active.label}
            className="rounded-[10px] object-cover w-full h-auto transition duration-700 ease-in-out transform scale-100 opacity-100"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MembershipBenefits;
