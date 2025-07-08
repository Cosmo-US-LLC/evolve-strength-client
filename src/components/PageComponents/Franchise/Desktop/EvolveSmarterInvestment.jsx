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

  const [currentStep, setCurrentStep] = useState(0); // which step is open
  const [growingLineStep, setGrowingLineStep] = useState(0); // which line is growing
  const [blinkingStep, setBlinkingStep] = useState(0); // which step number is blinking

  useEffect(() => {
    setBlinkingStep(currentStep); // trigger blink on new active step
    const blinkTimeout = setTimeout(() => setBlinkingStep(null), 4000); // remove blink after 4s
    return () => clearTimeout(blinkTimeout);
  }, [currentStep]);

  useEffect(() => {
    // Only animate if not at the last step
    if (growingLineStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(growingLineStep + 1); // open next step
        setGrowingLineStep(growingLineStep + 1); // grow next line
      }, 4000); // match animation duration (4s)
      return () => clearTimeout(timer);
    } else {
      // After last step, reset to first after a pause
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setGrowingLineStep(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [growingLineStep, steps.length]);

  return (
    <div className="py-12">
    <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-12">
      <div className=" flex flex-col gap-4 justify-center items-center text-center">
          <h2>Why Evolve is a Smarter Investment</h2>
          <h4 className="max-w-[760px]">Evolve is more than a gym. It is a full-service training and wellness hub with personal training, recovery services, and premium training space all under one roof. The franchise model offers multiple revenue streams and a strong competitive advantage.</h4>
        </div>
      <div className="flex flex-row gap-8 items-start">
        
        {/* Steps */}
        <div className="flex-1">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const notLast = index < steps.length - 1;

            return (
              <div key={step.id} className="flex items-start">
                <div className="flex flex-col items-center mr-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                      ${
                        isActive
                          ? "bg-black text-white "
                          : "border border-black text-black"
                      }`}
                  >
                    <span
                      className={
                        blinkingStep === index ? "blinking-step-id-once" : ""
                      }
                    >
                      {step.id}
                    </span>
                  </div>
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
                      {/* Gray background line */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"
                        style={{
                          height: "100%",
                          borderRadius: "2px",
                        }}
                      ></div>
                      {/* Black animated line */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-black origin-top
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
                  <p
                    className={`font-semibold transition-colors duration-[4000ms] ${
                      isActive ? "text-green-600" : "text-black"
                    }`}
                  >
                    {step.title}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-[4000ms]`}
                    style={{
                      maxHeight: isActive ? "100px" : "0px",
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? "0.25rem" : "0",
                    }}
                  >
                    {isActive && (
                      <p className="text-sm text-gray-600">{step.desc}</p>
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
