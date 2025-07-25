import React, { useState, useEffect } from "react";
import slide0 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-0.webp";
import slide1 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-1.webp";
import slide2 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-2.webp";
import slide3 from "../../../../assets/images/franchise/evolveSmarterInvestment/step-3.webp";

const EvolveSmarterInvestment = () => {
  const steps = [
    {
      id: "01",
      title: "Multiple Revenue Streams",
      desc: "Memberships, rentals, personal training, and healthcare subleasing",
      image: slide0,
    },
    {
      id: "02",
      title: "Premium Member Experience",
      desc: "High retention and low churn through results-driven programming and community.",
      image: slide1,
    },
    {
      id: "03",
      title: "Scalable Model",
      desc: "Standardized systems, national partnerships, and streamlined operations.",
      image: slide2,
    },
    {
      id: "04",
      title: "Strong EBITDA Performance",
      desc: "Our business model delivers healthy margins, with EBITDA reaching 22% to 28% by year three.",
      image: slide3,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [growingLineStep, setGrowingLineStep] = useState(0);
  const [blinkingStep, setBlinkingStep] = useState(0);

  useEffect(() => {
    setBlinkingStep(currentStep);
    const blinkTimeout = setTimeout(() => setBlinkingStep(null), 900);
    return () => clearTimeout(blinkTimeout);
  }, [currentStep]);

  useEffect(() => {
    if (growingLineStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(growingLineStep + 1);
        setGrowingLineStep(growingLineStep + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setGrowingLineStep(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [growingLineStep, steps.length]);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col">
        <div className="flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
          <h2 className="font-bold uppercase">
            Why Evolve is a Smarter Investment
          </h2>
          <h4 className="w-full md:max-w-[760px] text-sm md:text-base leading-relaxed">
            Evolve is more than a gym. It is a full-service training and
            wellness hub with personal training, recovery services, and premium
            training space all under one roof. The franchise model offers
            multiple revenue streams and a strong competitive advantage.
          </h4>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden mt-8">
          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-4 top-[40px] bottom-0 w-[2px] bg-gray-300 z-0" />

            <div className="flex flex-col gap-6">
              {steps.map((step, index) => {
                const isActive = index === currentStep;
                const notLast = index < steps.length - 1;

                return (
                  <div
                    key={step.id}
                    className="relative flex items-start gap-3"
                  >
                    {/* Timeline Number Circle */}
                    <div className="absolute left-[-3px] top-[0px] z-20 flex items-center justify-center w-10 h-10 rounded-full">
                      <h4
                        className={`w-10 h-10 font-[500] rounded-full flex items-center justify-center text-base
                        ${
                          isActive
                            ? "bg-[#4AB04A] text-white"
                            : "border-[2px] border-gray-300 text-[#000] bg-[#fff]"
                        }`}
                      >
                        <span
                          className={
                            blinkingStep === index
                              ? "blinking-step-id-once"
                              : ""
                          }
                        >
                          {step.id}
                        </span>
                      </h4>
                    </div>

                    {/* Growing Timeline Line */}
                    {notLast && (
                      <div
                        className="absolute left-4 top-[40px] z-10"
                        style={{
                          height: isActive ? "calc(32px + 232px)" : "0px",
                          width: "2px",
                          transition: "height 4000ms ease-in-out",
                        }}
                      >
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"
                          style={{
                            height: "100%",
                            borderRadius: "2px",
                          }}
                        ></div>
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#4AB04A] origin-top
                          ${
                            index < growingLineStep
                              ? ""
                              : index === growingLineStep
                              ? "vertical-line-animated"
                              : ""
                          }`}
                          style={{
                            height:
                              index < growingLineStep
                                ? "100%"
                                : index === growingLineStep
                                ? "100%"
                                : "0%",
                            borderRadius: "2px",
                            transition: "height 4000ms ease-in-out",
                          }}
                        ></div>
                      </div>
                    )}

                    {/* Content Block */}
                    <div className="ml-14 flex flex-col gap-2 flex-1">
                      {/* Title */}
                      <h4
                        className={`font-[500] text-base transition-colors duration-[4000ms] ${
                          isActive ? "text-[#4AB04A]" : "text-[#000]"
                        }`}
                      >
                        {step.title}
                      </h4>

                      {/* Description */}
                      <div
                        className={`overflow-hidden transition-all duration-[4000ms]`}
                        style={{
                          maxHeight: isActive ? "60px" : "0px",
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? "0.25rem" : "0",
                        }}
                      >
                        {isActive && (
                          <p className="text-sm text-[#000] leading-relaxed">
                            {step.desc}
                          </p>
                        )}
                      </div>

                      {/* Image */}
                      {isActive && (
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-[182px] object-cover rounded-lg transition-all duration-[4000ms] mt-2"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row gap-8 justify-center h-[500px] mt-8">
          <div className="flex-1 flex flex-col items-start justify-center">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const notLast = index < steps.length - 1;

              return (
                <div key={step.id} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <h4
                      className={`w-10 h-10 font-[500] rounded-full flex items-center justify-center 
                      ${
                        isActive
                          ? "bg-[#4AB04A] text-white "
                          : "border-[2px] border-#CCCCCC text-[#000]"
                      }`}
                    >
                      <span
                        className={
                          blinkingStep === index ? "blinking-step-id-once" : ""
                        }
                      >
                        {step.id}
                      </span>
                    </h4>
                    {notLast && (
                      <div
                        className="relative flex-1"
                        style={{
                          height: "48px",
                          minHeight: "48px",
                          maxHeight: "48px",
                          width: "4px",
                        }}
                      >
                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"
                          style={{
                            height: "100%",
                            borderRadius: "2px",
                          }}
                        ></div>

                        <div
                          className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#4AB04A] origin-top
                          ${
                            index < growingLineStep
                              ? ""
                              : index === growingLineStep
                              ? "vertical-line-animated"
                              : ""
                          }`}
                          style={{
                            height:
                              index < growingLineStep
                                ? "100%"
                                : index === growingLineStep
                                ? "100%"
                                : "0%",
                            borderRadius: "2px",
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4
                      className={`!font-[500] transition-colors duration-[4000ms] ${
                        isActive ? "text-[#4AB04A]" : "text-[#000]"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <div
                      className={`overflow-hidden transition-all duration-[4000ms]`}
                      style={{
                        maxHeight: isActive ? "100px" : "0px",
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? "0.25rem" : "0",
                      }}
                    >
                      {isActive && (
                        <p className="text-sm text-[#000] max-w-[355px]">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full rounded transition-all duration-[4000ms] max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolveSmarterInvestment;
