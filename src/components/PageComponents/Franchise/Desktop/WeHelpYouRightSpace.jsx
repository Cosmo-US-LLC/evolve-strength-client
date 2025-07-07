import React from "react";
import { ReactComponent as TerritoryIcon } from "@/assets/images/franchise/weHelpYouRightSpace/icon1.svg";
import { ReactComponent as NegotiationIcon } from "@/assets/images/franchise/weHelpYouRightSpace/icon2.svg";
import { ReactComponent as ArchitecturalIcon } from "@/assets/images/franchise/weHelpYouRightSpace/icon3.svg";
import { ReactComponent as ConstructionIcon } from "@/assets/images/franchise/weHelpYouRightSpace/icon4.svg";
import { ReactComponent as SpaceIcon } from "@/assets/images/franchise/weHelpYouRightSpace/icon5.svg";
import { ReactComponent as OngoingIcon } from "@/assets/images/franchise/weHelpYouRightSpace/icon6.svg";

const features = [
  {
    title: "Territory Mapping",
    desc: "We help you choose high-demand areas using population, income, and market data.",
    icon: <TerritoryIcon />,
  },
  {
    title: "Site Visits and Lease Negotiation",
    desc: "We visit sites with you and negotiate leases that match your needs.",
    icon: <NegotiationIcon />,
  },
  {
    title: "Architectural Planning",
    desc: "We design layouts based on Evolve's model and guide you through the build-out.",
    icon: <ArchitecturalIcon />,
  },
  {
    title: "Construction Support",
    desc: "You get access to reliable contractors and equipment vendors we trust.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Space Design",
    desc: "We plan for smooth traffic flow and easy subleasing to trainers and health pros.",
    icon: <SpaceIcon />,
  },
  {
    title: "Ongoing Support",
    desc: "We stay involved through each stage to make sure your setup works long term.",
    icon: <OngoingIcon />,
  },
];

function WeHelpYouRightSpace() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
            WE HELP YOU FIND AND BUILD
            <br />
            THE RIGHT SPACE
          </h2>
          <p className="text-base text-gray-700 mt-2">
            Location is everything and we help you get it right. Our real estate
            team supports franchisees with:
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all">
          APPLY NOW
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl p-6 flex flex-col justify-between min-h-[180px] shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <span className="ml-4">{f.icon}</span>
            </div>
            <p className="text-gray-700 text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeHelpYouRightSpace;
