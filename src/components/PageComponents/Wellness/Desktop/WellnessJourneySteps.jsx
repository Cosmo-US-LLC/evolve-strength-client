import React from "react";
import { Search, CalendarDays, Dumbbell, Smile } from "lucide-react";
import step1 from "../../../../assets/images/wellness/WellnessJourneySteps/step_1.webp";
import step2 from "../../../../assets/images/wellness/WellnessJourneySteps/step_2.webp";
import step3 from "../../../../assets/images/wellness/WellnessJourneySteps/step_3.webp";
import step4 from "../../../../assets/images/wellness/WellnessJourneySteps/step_4.webp";

const steps = [
  {
    title: "Step 1: Find Your Practitioner",
    description: "Choose from our expert team—physio, chiro, massage, nutrition, and more.",
    image: step1,
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 2: Book Consultation",
    description: "Schedule a meeting with our experts to create a custom plan.",
    image: step2,
    icon: <CalendarDays className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 3: Put in the Work",
    description: "Follow your personalised plan with guidance from our team.",
    image: step3,
    icon: <Dumbbell className="w-5 h-5 text-white" />,
  },
  {
    title: "Step 4: Be a Better You",
    description: "See results and enjoy your improved well-being.Be a Better You",
    image: step4,
    icon: <Smile className="w-5 h-5 text-white" />,
  },
];

const WellnessJourneySteps = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/4 aspect-[3/4] overflow-hidden group flex items-end justify-center"
        >
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" /> */}

          <div className="relative z-10 p-4 text-center text-white flex flex-col items-center transition-all duration-500 group-hover:pb-6">
            <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              {step.icon}
            </div>

            <h3
              className={`font-semibold text-base sm:text-lg mb-1 transition-all duration-500 ${
                index === 0 ? "" : "group-hover:-translate-y-1"
              }`}
            >
              {step.title}
            </h3>

            <p className="text-sm opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WellnessJourneySteps;
