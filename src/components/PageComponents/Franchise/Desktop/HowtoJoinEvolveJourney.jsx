import React from "react";
import step1 from "@/assets/images/franchise/howtoJoinEvolveJourney/step-1.webp";
import step2 from "@/assets/images/franchise/howtoJoinEvolveJourney/step-2.webp";
import step3 from "@/assets/images/franchise/howtoJoinEvolveJourney/step-3.webp";
import step4 from "@/assets/images/franchise/howtoJoinEvolveJourney/step-4.webp";
import step5 from "@/assets/images/franchise/howtoJoinEvolveJourney/step-5.webp";
import step6 from "@/assets/images/franchise/howtoJoinEvolveJourney/step-6.webp";; 

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Complete our simple application form to share your background, location of interest, and investment readiness.",
    image: step1,
  },
  {
    number: "02",
    title: "Initial Discovery Call",
    description:
      "Our franchise development team will walk you through the model, answer questions, and help determine if Evolve is the right fit.",
    image: step2,
  },
  {
    number: "03",
    title: "Territory Selection",
    description:
      "We'll review your target market, assess demographic data, and confirm territory availability.",
    image: step3,
  },
  {
    number: "04",
    title: "Franchise Disclosure",
    description:
      "You'll receive our Franchise Disclosure Document (FDD), outlining all the legal and financial details. We'll also connect you with existing franchisees.",
    image:  step4,
  },
  {
    number: "05",
    title: "Site Visit",
    description:
      "Come see one of our flagship facilities, meet the leadership team, and get a feel for the operations and culture.",
    image: step5,
  },
  {
    number: "06",
    title: "Franchise Awarded",
    description:
      "Once mutual alignment is confirmed and agreements are signed, you're officially part of the Evolve family.",
    image:  step6,
  },
];

function HowtoJoinEvolveJourney() {
  return (
    <div className="pt-12 pb-16">
    <div className="max-w-[1280px] mx-auto px-8">
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
      <h2 className="text-center uppercase font-[#000] font-[700] leading-[39px]">
        HOW TO JOIN EVOLVE JOURNEY
      </h2>
      <h4 className="text-center text-[#000] font-[400] leading-[26px] mb-10">
        Joining is easy—choose your location, pick your plan, <br /> and begin your
        path to strength and wellness.
      </h4>
      </div>
      <div className="relative flex flex-col gap-8">
      
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4AB04A] -translate-x-1/2 z-0" />
        {steps.map((step, idx) => {
          // Odd steps (idx 0,2,4): right-to-left; Even steps (idx 1,3,5): left-to-right
          const isRightToLeft = idx % 2 === 0;
          return (
            <div
              key={step.number}
              className={`flex items-center relative z-10  ${
                isRightToLeft ? "flex-row" : "flex-row-reverse "
              }`}
            >
              {/* Card */}
              <div
                className={`bg-[#fff] rounded-[10px] border border-[#CCCCCC]  shadow-md px-6 py-6 min-w-[520px] max-w-[420px] flex items-center gap-5 ${
                  isRightToLeft ? "ml-0 mr-10" : "ml-10 mr-0"
                }`}
              >
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-[#4AB04A] font-[500] leading-[39px] tracking-[-1.2px]">
                    {step.number}
                  </h2>
                  <h4 className="font-bold text-lg">{step.title}</h4>
                  <h4 className="text-[#000] font-[400] leading-[24px]">
                    {step.description}
                  </h4>
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-[190px] h-auto object-cover rounded-lg"
                />
              </div>
           
              <div
                className={`absolute top-1/2 z-20 flex items-center ${
                  isRightToLeft
                    ? "right-[calc(50%-0px)] flex-row-reverse"
                    : "left-[calc(50%-0px)]"
                }`}
                style={{ transform: "translateY(-50%)" }}
              >
             
                <span
                  className={`block rounded ${isRightToLeft ? "ml-2" : "mr-2"}`}
                  style={{ width: "65px", height: 4, background: "#38B449" }}
                ></span>
                
                <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#fff] border-4 border-[#4AB04A]">
                <span
                  className="block w-[16px] h-[16px] rounded-full bg-[#4AB04A] border-4"
                  style={{ borderColor: "#38B449" }}
                ></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default HowtoJoinEvolveJourney;
