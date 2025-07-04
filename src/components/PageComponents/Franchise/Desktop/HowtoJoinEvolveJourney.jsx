import React from "react";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Complete our simple application form to share your background, location of interest, and investment readiness.",
    image: "https://via.placeholder.com/180x120?text=Apply+Online",
  },
  {
    number: "02",
    title: "Initial Discovery Call",
    description:
      "Our franchise development team will walk you through the model, answer questions, and help determine if Evolve is the right fit.",
    image: "https://via.placeholder.com/180x120?text=Discovery+Call",
  },
  {
    number: "03",
    title: "Territory Selection",
    description:
      "We'll review your target market, assess demographic data, and confirm territory availability.",
    image: "https://via.placeholder.com/180x120?text=Territory+Selection",
  },
  {
    number: "04",
    title: "Franchise Disclosure",
    description:
      "You'll receive our Franchise Disclosure Document (FDD), outlining all the legal and financial details. We'll also connect you with existing franchisees.",
    image: "https://via.placeholder.com/180x120?text=Disclosure",
  },
  {
    number: "05",
    title: "Site Visit",
    description:
      "Come see one of our flagship facilities, meet the leadership team, and get a feel for the operations and culture.",
    image: "https://via.placeholder.com/180x120?text=Site+Visit",
  },
  {
    number: "06",
    title: "Franchise Awarded",
    description:
      "Once mutual alignment is confirmed and agreements are signed, you're officially part of the Evolve family.",
    image: "https://via.placeholder.com/180x120?text=Awarded",
  },
];

function HowtoJoinEvolveJourney() {
  return (
    <div className="max-w-[1100px] mx-auto py-12">
      <h2 className="text-center text-3xl font-bold mb-2">
        HOW TO JOIN EVOLVE JOURNEY
      </h2>
      <p className="text-center text-base mb-10">
        Joining is easy—choose your location, pick your plan, and begin your
        path to strength and wellness.
      </p>
      <div className="relative flex flex-col gap-8">
        {/* Vertical timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0" />
        {steps.map((step, idx) => {
          // Odd steps (idx 0,2,4): right-to-left; Even steps (idx 1,3,5): left-to-right
          const isRightToLeft = idx % 2 === 0;
          return (
            <div
              key={step.number}
              className={`flex items-center relative z-10 ${
                isRightToLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div
                className={`bg-white rounded-xl shadow-md px-6 py-6 min-w-[380px] max-w-[420px] flex items-center gap-5 ${
                  isRightToLeft ? "ml-0 mr-10" : "ml-10 mr-0"
                }`}
              >
                <div className="flex-1">
                  <div className="text-green-600 font-bold text-2xl mb-1">
                    {step.number}
                  </div>
                  <div className="font-bold text-lg mb-1">{step.title}</div>
                  <div className="text-sm text-gray-700">
                    {step.description}
                  </div>
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-[120px] h-[80px] object-cover rounded-lg"
                />
              </div>
              {/* Timeline dot and connector */}
              <div
                className={`absolute top-1/2 z-20 flex items-center ${
                  isRightToLeft
                    ? "right-[calc(50%-32px)]"
                    : "left-[calc(50%-32px)]"
                }`}
                style={{ transform: "translateY(-50%)" }}
              >
                {/* Horizontal connector */}
                <span
                  className={`block rounded ${isRightToLeft ? "ml-2" : "mr-2"}`}
                  style={{ width: 32, height: 4, background: "#38B449" }}
                ></span>
                {/* Dot */}
                <span
                  className="block w-5 h-5 rounded-full bg-white border-4"
                  style={{ borderColor: "#38B449" }}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowtoJoinEvolveJourney;
