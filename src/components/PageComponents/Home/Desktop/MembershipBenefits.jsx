import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  // Leaf,
  // ShowerHead,
  // LayoutPanelTop,
  Flame,
} from "lucide-react";
import Leaf  from "/src/assets/images/home/MembershipBenefits/image_1_logo.svg";
import ShowerHead  from "/src/assets/images/home/MembershipBenefits/image_5_logo.svg";
import LayoutPanelTop  from "/src/assets/images/home/MembershipBenefits/image_4_logo.svg";
import wellnessImg from "/src/assets/images/home/MembershipBenefits/image_1.webp";
import equipmentImg from "/src/assets/images/home/MembershipBenefits/image_2.webp";
import steamImg from "/src/assets/images/home/MembershipBenefits/image_3.webp";
import layoutImg from "/src/assets/images/home/MembershipBenefits/image_4.webp";
import amenitiesImg from "/src/assets/images/home/MembershipBenefits/image_5.webp";

const benefitItems = [
  {
    key: "wellness",
    label: "WELLNESS SERVICES",
    icon: <img src={Leaf} alt="Shower Head Icon" className="w-5 h-5" />,
    description:
      "We priorities strategies to get you the most out of your property sale, all while ensuring a smooth and stress-free process.",
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
    icon: <img src={ShowerHead} alt="Shower Head Icon" className="w-5 h-5" />,
    description:
      "Move freely through open, thoughtfully designed training areas that give you room to breathe, lift, and grow.",
    image: layoutImg,
  },
  {
    key: "amenities",
    label: "PREMIUM AMENITIES",
    icon: <img src={LayoutPanelTop} alt="Shower Head Icon" className="w-5 h-5" />,
    description:
      "Enjoy elevated comforts like luxury showers and curated locker spaces that enhance every part of your fitness experience.",
    image: amenitiesImg,
  },
];

const MembershipBenefits = () => {
  const [activeKey, setActiveKey] = useState("wellness");
  const timerRef = useRef(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [fade, setFade] = useState(true);

 
  const activeIndex = benefitItems.findIndex((item) => item.key === activeKey);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % benefitItems.length;
      setActiveKey(benefitItems[nextIndex].key);
    }, 6000);

    return () => clearTimeout(timerRef.current);
  }, [activeKey]);

  useEffect(() => {
    setAnimationProgress(0);
    let start;
    function animateBorder(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 6000, 1);
      setAnimationProgress(progress);
      if (progress < 1) {
        requestAnimationFrame(animateBorder);
      }
    }
    const raf = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(raf);
  }, [activeKey]);

  useEffect(() => {
    setFade(false); 
    const timeout = setTimeout(() => {
      setFade(true);  
    }, 100);  

    return () => clearTimeout(timeout);
  }, [activeKey]);

  const active = benefitItems.find((item) => item.key === activeKey);

  return (
  <div>
      <div className="w-full py-12 max-md:hidden">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center gap-12">
        <h2 className="text-[#000000] uppercase">
          ONE MEMBERSHIP, ENDLESS BENEFITS
        </h2>
        <div className="flex flex-row w-[100%] px-8 justify-between ">
          <div className="w-[50%] flex flex-col items-start justify-center gap-8">
            {benefitItems.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <div
                  key={item.key}
                  className="relative cursor-pointer group pl-6   "
                  onClick={() => setActiveKey(item.key)}
                  style={{ zIndex: 0 }}
                >
                   
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-[#E8EBEF]" />
                 
                  <div
                    className="absolute left-0 top-0 h-full w-[2px] bg-[#4AB04A]"
                    style={{
                      transform: isActive
                        ? `scaleY(${animationProgress})`
                        : "scaleY(0)",
                      transformOrigin: "top",
                      transition: isActive ? "none" : "transform 0.2s",
                      zIndex: 1,
                    }}
                  />
                  <h3
                    className={`flex items-center leading-normal gap-2  transition-colors duration-300 ${
                      isActive ? "text-[#4AB04A]" : "text-[#000]"
                    }`}
                  >
                    {isActive && item.icon}
                    {item.label}
                  </h3>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isActive
                        ? "opacity-100 h-[50px] overflow-visible"
                        : "opacity-0 h-0 overflow-hidden"
                    }`}
                  >
                    <h4 className="mt-2 leading-[130%] max-w-xl">
                      {item.description}
                    </h4>
                  </div>
                </div>
              );
            })}
            <Link to="https://join.evolvestrength.ca/tour-form/">
            <button className="btnPrimary">BOOK A FREE TOUR</button>
            </Link>
          </div>
          <div className="w-[50%] max-w-[460px]  ">
            <img
              key={active.image}
              src={active.image}
              alt={active.label}
              className={`rounded-[10px] object-cover w-full h-auto benefit-img-fade `}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="md:hidden">
      <div className="flex flex-col gap-4 px-[16px] py-[48px]">
        <h2 className="text-[#000000] uppercase  font-bold mb-2 ">ONE MEMBERSHIP, ENDLESS BENEFITS</h2>
        {benefitItems.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <div
              key={item.key}
              className="relative cursor-pointer group"
              onClick={() => setActiveKey(item.key)}
            >
              <div className="flex flex-row items-center">
                <div className="flex-1 ">
                 <div className="relative min-h-[40px] h-full flex items-center">
                 <div className="  " style={{height: '100%'}}>
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#E8EBEF] rounded-l-[10px]" />
                    <div
                      className="absolute left-0 top-0 h-full w-[2px] bg-[#4AB04A] rounded-l-[10px]"
                      style={{
                        height: '100%',
                        transform: isActive ? `scaleY(${animationProgress})` : "scaleY(0)",
                        transformOrigin: "top",
                        transition: isActive ? "none" : "transform 0.2s",
                        zIndex: 1,
                      }}
                    />
                  </div>
                  <div className={`transition-all pl-4  duration-500 ease-in-out`}> 
                    <h3
                      className={`flex items-center leading-normal gap-2 transition-colors duration-300 text-lg font-semibold ${
                        isActive ? "text-[#4AB04A]" : "text-[#000]"
                      }`}
                    >
                      {isActive && item.icon}
                      {item.label}
                    </h3>
                    <div
                      className={`transition-all duration-500 ease-in-out text-[15px] ${
                        isActive
                          ? "opacity-100 h-auto mt-2 mb-2"
                          : "opacity-0 h-0 overflow-hidden"
                      }`}
                    >
                      <h4 className="leading-[130%]">{item.description}</h4>
                    </div>
                  </div>
                 </div>
                  {isActive && (
                    <div className="w-full flex justify-center mt-4">
                      <img
                        key={item.image}
                        src={item.image}
                        alt={item.label}
                        className="rounded-[10px] object-cover w-full max-w-[340px] h-auto shadow"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
       <div className="flex justify-start">
       <button className="btnPrimary !pt-[14px] !pb-[14px] mt-6">BOOK A FREE TOUR</button>
       </div>
      </div>
    </div>
  </div>
  );
};

export default MembershipBenefits;
