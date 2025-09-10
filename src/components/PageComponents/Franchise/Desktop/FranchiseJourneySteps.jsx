import React from "react";
import { Search, CalendarDays, Dumbbell, Smile } from "lucide-react";

import { ReactComponent as RetentionIcon } from "@/assets/images/franchise/FranchiseJourneySteps/retention_icon.svg";
import { ReactComponent as ActiveMembersIcon } from "@/assets/images/franchise/FranchiseJourneySteps/active_members_icon.svg";
import { ReactComponent as GymIcon } from "@/assets/images/franchise/FranchiseJourneySteps/gym_icon.svg";
import { ReactComponent as ExpertIcon } from "@/assets/images/franchise/FranchiseJourneySteps/expert_icon.svg";



const steps = [
  {
    title: "195+",
    description: (
      <p>
        Wellness Providers
      </p>
    ),
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/FranchiseJourneySteps/step_1.webp",
    icon: <GymIcon />,
  },
  {
    title: "205+",
    description: <p>Certified Trainers</p>,
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/FranchiseJourneySteps/step_2.webp",
    icon: <ActiveMembersIcon />,
  },
  {
    title: "95%",
    description: (
      <p>
       Member Retention Rate
      </p>
    ),
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/FranchiseJourneySteps/step_3.webp",
    icon: <RetentionIcon />,
  },
  {
    title: "136+",
    description: (
      <p>
        Partnered Businesses
      </p>
    ),
    image: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/FranchiseJourneySteps/step_4.webp",
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

          <div className="relative z-10 px-2 md:px-4 py-2 md:py-6 text-left md:text-center text-white flex flex-col items-start md:items-center ">
            <div className="bg-[#4AB04A] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3">
              {step.icon}
            </div>

            <h2
              className={`font-semibold text-sm md:text-base lg:text-lg mb-1 
               
              `}
            >
              {step.title}
            </h2>

            <p className="text-[14px] md:text-[20px]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FranchiseJourneySteps;
