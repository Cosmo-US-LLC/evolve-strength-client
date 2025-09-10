import React from "react";
const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Complete our simple application form to share your background, location of interest, and investment readiness.",
    image:
      "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/franchise/howtoJoinEvolveJourney/step-1.webp",
  },
  {
    number: "02",
    title: "Initial Discovery Call",
    description:
      "Our franchise development team will walk you through the model, answer questions, and help determine if Evolve is the right fit.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/howtoJoinEvolveJourney/step-2.webp",
  },
  {
    number: "03",
    title: "Territory Selection",
    description:
      "We'll review your target market, assess demographic data, and confirm territory availability.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/howtoJoinEvolveJourney/step-3.webp",
  },
  {
    number: "04",
    title: "Franchise Disclosure",
    description:
      "You'll receive our Franchise Disclosure Document (FDD), outlining all the legal and financial details. We'll also connect you with existing franchisees.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/howtoJoinEvolveJourney/step-4.webp",
  },
  {
    number: "05",
    title: "Site Visit",
    description:
      "Come see one of our flagship facilities, meet the leadership team, and get a feel for the operations and culture.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/howtoJoinEvolveJourney/step-5.webp",
  },
  {
    number: "06",
    title: "Franchise Awarded",
    description:
      "Once mutual alignment is confirmed and agreements are signed, you're officially part of the Evolve family.",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/howtoJoinEvolveJourney/step-6.webp",
  },
];

function HowtoJoinEvolveJourney() {
  return (
    <div className="pt-4 md:pt-12 pb-12 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-0 md:mb-6">
          <h2 className="text-center uppercase font-[#000] font-[700] leading-[39px]">
            HOW TO JOIN EVOLVE JOURNEY
          </h2>
          <h4 className="text-center max-w-[358px] md:max-w-[604px] text-[#000] font-[300] md:font-[400] leading-[20px] md:leading-[26px] mb-10">
            Joining is easy—choose your location, pick your plan, and begin your
            path to strength and wellness.
          </h4>
        </div>
        <div className="block md:hidden">
          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-1 top-0 bottom-0 w-[2px] bg-[#4AB04A] z-0" />

            {steps.map((step) => (
              <div key={step.number} className="relative flex mb-8 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-[25px] top-[160px] z-20 flex items-center justify-center w-4 h-4 rounded-full bg-[#fff] border-2 border-[#4AB04A]">
                  <span className="block w-2 h-2 rounded-full bg-[#4AB04A]"></span>
                </div>

                {/* Horizontal Connector Line */}
                <div className="absolute left-1 top-[168px] z-10 flex items-center">
                  <span
                    className="block rounded"
                    style={{
                      width: "23px",
                      height: 2.5,
                      background: "#38B449",
                    }}
                  ></span>
                </div>

                {/* Card */}
                <div className="ml-8 bg-[#fff] rounded-[10px] border border-[#CCCCCC] shadow-md px-4 py-4 flex flex-col items-center gap-4">
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-[#4AB04A] font-[500] tracking-[-0.72px]">
                        {step.number}
                      </h2>
                      <h4 className="!font-[500] !text-[20px]">{step.title}</h4>
                    </div>
                    <h4 className="text-[#000]  leading-[20px]">
                      {step.description}
                    </h4>
                  </div>

                  {/* Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-[288px] h-[180px] object-cover rounded-lg flex-shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex relative  flex-col gap-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#4AB04A] -translate-x-1/2 z-0" />
          {steps.map((step, idx) => {
            const isRightToLeft = idx % 2 === 0;
            const verticalOffset =
              idx === 1 ||
              idx === 2 ||
              idx === 3 ||
              idx === 4 ||
              idx === 5 ||
              idx === 6
                ? -100
                : 0;

            return (
              <div
                key={step.number}
                className={`flex items-center relative z-10 ${
                  isRightToLeft ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ marginTop: verticalOffset }}
              >
                {/* Card */}
                <div
                  className={`bg-[#fff] rounded-[10px] border border-[#CCCCCC]  shadow-md px-6 py-4 min-w-[520px] max-w-[420px] flex items-center gap-5 ${
                    isRightToLeft ? "ml-0 mr-10" : "ml-10 mr-0"
                  }`}
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-[#4AB04A] font-[500] leading-[39px] tracking-[-1.2px]">
                      {step.number}
                    </h2>
                    <h4 className="!font-[500] text-lg">{step.title}</h4>
                    <h4 className="text-[#000] font-[400] leading-[24px]">
                      {step.description}
                    </h4>
                  </div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-[160px] h-auto object-cover rounded-lg"
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
                    className={`block rounded ${
                      isRightToLeft ? "ml-1" : "mr-1"
                    }`}
                    style={{
                      width: "72px",
                      height: 2.5,
                      background: "#38B449",
                    }}
                  ></span>

                  <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#fff] border-2 border-[#4AB04A]">
                    <span
                      className="block w-[12px] h-[12px] rounded-full bg-[#4AB04A] border-4"
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
