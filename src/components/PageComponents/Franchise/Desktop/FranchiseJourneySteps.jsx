import React from "react";
import { Search, CalendarDays, Dumbbell, Smile } from "lucide-react";

import { ReactComponent as RetentionIcon } from "@/assets/images/franchise/FranchiseJourneySteps/retention_icon.svg";
import { ReactComponent as ActiveMembersIcon } from "@/assets/images/franchise/FranchiseJourneySteps/active_members_icon.svg";
import { ReactComponent as GymIcon } from "@/assets/images/franchise/FranchiseJourneySteps/gym_icon.svg";
import { ReactComponent as ExpertIcon } from "@/assets/images/franchise/FranchiseJourneySteps/expert_icon.svg";

import step1 from "../../../../assets/images/franchise/FranchiseJourneySteps/step_1.webp";
import step2 from "../../../../assets/images/franchise/FranchiseJourneySteps/step_2.webp";
import step3 from "../../../../assets/images/franchise/FranchiseJourneySteps/step_3.webp";
import step4 from "../../../../assets/images/franchise/FranchiseJourneySteps/step_4.webp";

const steps = [
  {
    title: "3X",
    description: (
      <p>
        More Training Space Than <br /> the Average Gym
      </p>
    ),
    image: step1,
    icon: <GymIcon />,
  },
  {
    title: "1200+",
    description: <p>Currently Active Members in All Branches</p>,
    image: step2,
    icon: <ActiveMembersIcon />,
  },
  {
    title: "95%",
    description: (
      <p>
        Average Member Retention <br /> with Evolve
      </p>
    ),
    image: step3,
    icon: <RetentionIcon />,
  },
  {
    title: "100+",
    description: (
      <p>
        Expert Wellness & Fitness <br /> Providers
      </p>
    ),
    image: step4,
    icon: <ExpertIcon />,
  },
];

function FranchiseJourneySteps() {
  return (
    <div className="flex flex-wrap">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative w-1/2 md:w-1/4 aspect-[3/4] overflow-hidden group flex items-end justify-center"
        >
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" /> */}

          <div className="relative z-10 px-2 md:px-4 py-2 md:py-0 text-left md:text-center text-white flex flex-col items-start md:items-center transition-all duration-500 group-hover:pb-6">
            <div className="bg-green-500 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3">
              {step.icon}
            </div>

            <h2
              className={`font-semibold text-sm md:text-base lg:text-lg mb-1 transition-all duration-500 ${
                index === 0 ? "" : "group-hover:-translate-y-1"
              }`}
            >
              {step.title}
            </h2>

            <p className="text-[14px] md:text-[20px] opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FranchiseJourneySteps;
