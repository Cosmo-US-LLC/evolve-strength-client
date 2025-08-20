import React from "react";
import { Search, CalendarDays, Dumbbell, Smile } from "lucide-react";

const steps = [
  {
    title: "Step 1: Find Your Practitioner",
    description:
      "Choose from our expert team—physio, chiro, massage, nutrition, and more.",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/wellness/WellnessJourneySteps/step_1.webp",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 2: Book Consultation",
    description: "Schedule a meeting with our experts to create a custom plan.",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/wellness/WellnessJourneySteps/step_2.webp",
    icon: <CalendarDays className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 3: Put in the Work",
    description: "Follow your personalised plan with guidance from our team.",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/wellness/WellnessJourneySteps/step_3.webp",
    icon: <Dumbbell className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 4: Be a Better You",
    description:
      "See results and enjoy your improved well-being.Be a Better You",
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/wellness/WellnessJourneySteps/step_4.webp",
    icon: <Smile className="w-5 h-5 text-white" />,
  },
];


const WellnessJourneySteps = () => {
  return (
    <section className="flex flex-wrap">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative w-1/2 sm:w-1/2 md:w-1/4 aspect-[3/4] overflow-hidden group flex items-end justify-center"
        >
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" /> */}

          <div className="relative z-10 px-2 md:px-4 py-2 sm:py-3 md:py-0 text-center text-white flex flex-col items-start md:items-center transition-all duration-500 group-hover:pb-6">
            <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3">
              {step.icon}
            </div>

            <h3
              className={`text-left md:text-center font-[300] md:font-[400] font-[kanit] leading-[18px] md:leading-[26px] mb-2 transition-all duration-500 ${
                index === 0 ? "" : "group-hover:-translate-y-1"
              }`}
            >
              {step.title}
            </h3>

            <p className="text-[14px] md:text-[16px] text-left md:text-center font-[300] md:font-[400] font-[kanit] leading-tight md:leading-relaxed text-[#fff] md:opacity-0 md:translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WellnessJourneySteps;
