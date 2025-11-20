import React, { useState, useEffect, useRef } from "react";
import slide0 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-0.webp";
import slide1 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-1.webp";
import slide2 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-2.webp";
import slide3 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-3.webp";

const benefitItems = [
  {
    key: "revenue",
    label: "MULTIPLE REVENUE STREAMS",
    description:
      "Memberships, rentals, personal training, and healthcare subleasing",
    image:
      "/assets/images/franchise/evolveSmarterInvestment/step-0.webp",
  },
  {
    key: "experience",
    label: "PREMIUM MEMBER EXPERIENCE",
    description:
      "High retention and low churn through results-driven programming and community.",
    image:
      "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/franchise/evolveSmarterInvestment/step-4.webp",
  },
  {
    key: "scalable",
    label: "SCALABLE MODEL",
    description:
      "Standardized systems, national partnerships, and streamlined operations.",
    image:
      "/assets/images/franchise/evolveSmarterInvestment/step-2.webp",
  },
  {
    key: "ebitda",
    label: "STRONG EBITDA PERFORMANCE",
    description:
      "Our business model delivers healthy margins, with EBITDA reaching 22% to 28% by year three.",
    image:
      "/assets/images/franchise/evolveSmarterInvestment/step-3.webp",
  },
];

const EvolveSmarterInvestment = () => {
  const [activeKey, setActiveKey] = useState("revenue");
  const timerRef = useRef(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  const activeIndex = benefitItems.findIndex((item) => item.key === activeKey);

  useEffect(() => {
    benefitItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

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

  const active = benefitItems.find((item) => item.key === activeKey);

  return (
    <div>
      <div className="w-full max-md:hidden">
        <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center h-[700px] gap-14">
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
            <h2 className="font-bold uppercase">
              Why Evolve is a Smarter Investment
            </h2>

            <h4 className="w-full md:max-w-[760px] text-sm md:text-base leading-relaxed">
              Evolve is more than a gym. It is a full-service training and
              wellness hub with personal training, recovery services, and
              premium training space all under one roof. The franchise model
              offers multiple revenue streams and a strong competitive
              advantage.
            </h4>
          </div>
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
            </div>
            <div className="w-[50%] max-w-[460px]  ">
              <img
                key={active.image}
                src={active.image}
                alt={active.label}
                className={`rounded-[10px] object-cover w-full h-[400px]`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col gap-4 px-[16px] py-[48px] h-[900px]">
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
            <h2 className="font-bold uppercase">
              Why Evolve is a Smarter Investment
            </h2>

            <h4 className="w-full md:max-w-[760px] text-sm md:text-base leading-relaxed">
              Evolve is more than a gym. It is a full-service training and
              wellness hub with personal training, recovery services, and
              premium training space all under one roof. The franchise model
              offers multiple revenue streams and a strong competitive
              advantage.
            </h4>
          </div>
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
                      <div className="  " style={{ height: "100%" }}>
                        <div className="absolute left-0 top-0 h-full w-[2px] bg-[#E8EBEF] rounded-l-[10px]" />
                        <div
                          className="absolute left-0 top-0 h-full w-[2px] bg-[#4AB04A] rounded-l-[10px]"
                          style={{
                            height: "100%",
                            transform: isActive
                              ? `scaleY(${animationProgress})`
                              : "scaleY(0)",
                            transformOrigin: "top",
                            transition: isActive ? "none" : "transform 0.2s",
                            zIndex: 1,
                          }}
                        />
                      </div>
                      <div
                        className={`transition-all pl-4  duration-500 ease-in-out`}
                      >
                        <h3
                          className={`flex items-center leading-normal gap-2 transition-colors duration-300 text-lg font-semibold ${
                            isActive ? "text-[#4AB04A]" : "text-[#000]"
                          }`}
                        >
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
                          className="rounded-[10px] object-cover w-full max-w-[340px] h-[300px] shadow"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EvolveSmarterInvestment;
