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
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/evolveSmarterInvestment/step-0.webp",
  },
  {
    key: "experience",
    label: "PREMIUM MEMBER EXPERIENCE",
    description:
      "High retention and low churn through results-driven programming and community.",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/evolveSmarterInvestment/step-4.webp",
  },
  {
    key: "scalable",
    label: "SCALABLE MODEL",
    description:
      "Standardized systems, national partnerships, and streamlined operations.",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/evolveSmarterInvestment/step-2.webp",
  },
  {
    key: "ebitda",
    label: "STRONG EBITDA PERFORMANCE",
    description:
      "Our business model delivers healthy margins, with EBITDA reaching 22% to 28% by year three.",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/evolveSmarterInvestment/step-3.webp",
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
        <div className="flex flex-col gap-4 px-[16px] py-[48px]">
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

// import React, { useState, useEffect, useRef } from "react";
// import slide0 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-0.webp";
// import slide1 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-1.webp";
// import slide2 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-2.webp";
// import slide3 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-3.webp";

// const EvolveSmarterInvestment = () => {
//   const steps = [
//     {
//       id: "01",
//       title: "Multiple Revenue Streams",
//       desc: "Memberships, rentals, personal training, and healthcare subleasing",
//       image: slide0,
//     },
//     {
//       id: "02",
//       title: "Premium Member Experience",
//       desc: "High retention and low churn through results-driven programming and community.",
//       image: slide1,
//     },
//     {
//       id: "03",
//       title: "Scalable Model",
//       desc: "Standardized systems, national partnerships, and streamlined operations.",
//       image: slide2,
//     },
//     {
//       id: "04",
//       title: "Strong EBITDA Performance",
//       desc: "Our business model delivers healthy margins, with EBITDA reaching 22% to 28% by year three.",
//       image: slide3,
//     },
//   ];

//   const [currentStep, setCurrentStep] = useState(0);
//   const timerRef = useRef(null);

//   // Preload images for smooth transitions
//   useEffect(() => {
//     steps.forEach((step) => {
//       const img = new Image();
//       img.src = step.image;
//     });
//   }, []);

//   // Auto-rotation timer (same as MembershipBenefits)
//   useEffect(() => {
//     timerRef.current = setTimeout(() => {
//       const nextIndex = (currentStep + 1) % steps.length;
//       setCurrentStep(nextIndex);
//     }, 6000);

//     return () => clearTimeout(timerRef.current);
//   }, [currentStep, steps.length]);

//   return (
//     <div className="py-8 md:py-12">
//       <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col">
//         <div className="flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
//           <h2 className="font-bold uppercase">
//             Why Evolve is a Smarter Investment
//           </h2>
//           <h4 className="w-full md:max-w-[760px] text-sm md:text-base leading-relaxed">
//             Evolve is more than a gym. It is a full-service training and
//             wellness hub with personal training, recovery services, and premium
//             training space all under one roof. The franchise model offers
//             multiple revenue streams and a strong competitive advantage.
//           </h4>
//         </div>

//         {/* Mobile Layout */}
//         <div className="block md:hidden mt-8">
//           <div className="relative">
//             {/* Mobile Timeline Line */}
//             <div className="absolute left-4 top-[40px] bottom-0 w-[2px] bg-gray-300 z-0" />

//             <div className="flex flex-col gap-6">
//               {steps.map((step, index) => {
//                 const isActive = index === currentStep;
//                 const notLast = index < steps.length - 1;

//                 return (
//                   <div
//                     key={step.id}
//                     className="relative flex items-start gap-3"
//                   >
//                     {/* Timeline Number Circle */}
//                     <div className="absolute left-[-3px] top-[0px] z-20 flex items-center justify-center w-10 h-10 rounded-full">
//                       <h4
//                         className={`w-10 h-10 font-[500] rounded-full flex items-center justify-center text-base
//                         ${
//                           isActive
//                             ? "bg-[#4AB04A] text-white"
//                             : "border-[2px] border-gray-300 text-[#000] bg-[#fff]"
//                         }`}
//                       >
//                         <span>{step.id}</span>
//                       </h4>
//                     </div>

//                     {/* Growing Timeline Line */}
//                     {notLast && (
//                       <div
//                         className="absolute left-4 top-[40px] z-10"
//                         style={{
//                           height: isActive ? "calc(32px + 232px)" : "0px",
//                           width: "2px",
//                           transition: "height 150ms ease-in-out",
//                         }}
//                       >
//                         <div
//                           className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"
//                           style={{
//                             height: "100%",
//                             borderRadius: "2px",
//                           }}
//                         ></div>
//                         <div
//                           className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#4AB04A] origin-top transition-all duration-300 ease-in-out`}
//                           style={{
//                             height: index <= currentStep ? "100%" : "0%",
//                             borderRadius: "2px",
//                             opacity: index <= currentStep ? 1 : 0,
//                             transform:
//                               index <= currentStep ? "scaleY(1)" : "scaleY(0)",
//                           }}
//                         ></div>
//                       </div>
//                     )}

//                     {/* Content Block */}
//                     <div className="ml-14 flex flex-col gap-2 flex-1">
//                       {/* Title */}
//                       <h4
//                         className={`font-[500] text-base transition-all duration-300 ease-in-out ${
//                           isActive
//                             ? "text-[#4AB04A] scale-105"
//                             : "text-[#000] scale-100"
//                         }`}
//                       >
//                         {step.title}
//                       </h4>

//                       {/* Description */}
//                       <div
//                         className={`overflow-hidden transition-all duration-300 ease-in-out`}
//                         style={{
//                           maxHeight: isActive ? "60px" : "0px",
//                           opacity: isActive ? 1 : 0,
//                           marginTop: isActive ? "0.25rem" : "0",
//                           transform: isActive
//                             ? "translateY(0)"
//                             : "translateY(-10px)",
//                         }}
//                       >
//                         {isActive && (
//                           <p className="text-sm text-[#000] leading-relaxed">
//                             {step.desc}
//                           </p>
//                         )}
//                       </div>

//                       {/* Image */}
//                       {isActive && (
//                         <img
//                           src={step.image}
//                           alt={step.title}
//                           className="w-full h-[182px] object-cover rounded-lg transition-all duration-300 ease-in-out mt-2 opacity-0 animate-fadeIn"
//                           style={{
//                             animation: "fadeIn 0.3s ease-in-out forwards",
//                           }}
//                         />
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Desktop Layout */}
//         <div className="hidden md:flex flex-row gap-8 justify-center h-[500px] mt-8">
//           <div className="flex-1 flex flex-col items-start justify-center">
//             {steps.map((step, index) => {
//               const isActive = index === currentStep;
//               const notLast = index < steps.length - 1;

//               return (
//                 <div key={step.id} className="flex items-start">
//                   <div className="flex flex-col items-center mr-4">
//                     <h4
//                       className={`w-10 h-10 font-[500] rounded-full flex items-center justify-center text-base
//                       ${
//                         isActive
//                           ? "bg-[#4AB04A] text-white"
//                           : "border-[2px] border-gray-300 text-[#000] bg-[#fff]"
//                       }`}
//                     >
//                       <span>{step.id}</span>
//                     </h4>
//                     {notLast && (
//                       <div
//                         className="relative flex-1"
//                         style={{
//                           height: "48px",
//                           minHeight: "48px",
//                           maxHeight: "48px",
//                           width: "4px",
//                         }}
//                       >
//                         <div
//                           className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"
//                           style={{
//                             height: "100%",
//                             borderRadius: "2px",
//                           }}
//                         ></div>

//                         <div
//                           className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#4AB04A] origin-top transition-all duration-300 ease-in-out`}
//                           style={{
//                             height: index <= currentStep ? "100%" : "0%",
//                             borderRadius: "2px",
//                             opacity: index <= currentStep ? 1 : 0,
//                             transform:
//                               index <= currentStep ? "scaleY(1)" : "scaleY(0)",
//                           }}
//                         ></div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex flex-col justify-center">
//                     <h4
//                       className={`!font-[500] transition-all duration-300 ease-in-out ${
//                         isActive
//                           ? "text-[#4AB04A] scale-105"
//                           : "text-[#000] scale-100"
//                       }`}
//                     >
//                       {step.title}
//                     </h4>
//                     <div
//                       className={`overflow-hidden transition-all duration-300 ease-in-out`}
//                       style={{
//                         maxHeight: isActive ? "100px" : "0px",
//                         opacity: isActive ? 1 : 0,
//                         marginTop: isActive ? "0.25rem" : "0",
//                         transform: isActive
//                           ? "translateY(0)"
//                           : "translateY(-10px)",
//                       }}
//                     >
//                       {isActive && (
//                         <p className="text-sm text-[#000] max-w-[355px]">
//                           {step.desc}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="flex-1 flex justify-center items-center">
//             <img
//               src={steps[currentStep].image}
//               alt={steps[currentStep].title}
//               className="w-full rounded transition-all duration-300 ease-in-out max-w-[400px] opacity-0 animate-fadeIn"
//               style={{
//                 animation: "fadeIn 0.3s ease-in-out forwards",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EvolveSmarterInvestment;
