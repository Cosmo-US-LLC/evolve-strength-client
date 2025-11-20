import React from "react";
import { Search, CalendarCheck2, PersonStanding, Smile } from "lucide-react";

const steps = [
  {
    title: "Step 1: Find Your Specialist",
    description:
      "Find from our team of physiotherapists, chiropractors, massage therapists, nutritionists, and more.",
    image:
      "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/wellness/WellnessJourneySteps/step_5.webp",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 2: Connect With Them",
    description:
      "Get the care and guidance you need directly from your chosen specialist.",
    image:
      "/assets/images/wellness/WellnessJourneySteps/step_2.webp",
    icon: <CalendarCheck2 className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 3: Begin Your Plan",
    description:
      "Follow a personalized approach designed to support your health and well-being.",
    image:
      "/assets/images/wellness/WellnessJourneySteps/step_3.webp",
    icon: <PersonStanding className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 4: Feel the Difference",
    description: "Enjoy improved balance, recovery, and overall wellness.",
    image:
      "/assets/images/wellness/WellnessJourneySteps/step_4.webp",
    icon: <Smile className="w-5 h-5 text-white" />,
  },
];

const WellnessJourneySteps = () => {
  return (
    <section className="flex flex-wrap relative">
      <div className="absolute inset-0 md:bg-black/3 bg-black/30 z-10"></div>
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

          <div className="relative z-10 px-2 md:px-3 py-2 sm:py-3 md:py-6 text-center text-white flex flex-col items-start md:items-center h-auto md:h-[230px]">
            <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center mb-2 md:mb-3">
              {step.icon}
            </div>

            <h3
              className={`text-left md:text-center font-[300] md:font-[400] font-[kanit] leading-[21px] md:leading-[26px] mb-2 transition-all duration-500 
             
              `}
            >
              {step.title}
            </h3>

            <p className="text-[16px] md:text-[18px] text-left md:text-center font-[300] md:font-[300] font-[kanit] leading-tight md:leading-relaxed text-[#fff]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WellnessJourneySteps;
