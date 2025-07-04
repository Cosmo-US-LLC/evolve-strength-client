import React from "react";

const features = [
  {
    title: "Territory Mapping",
    desc: "We help you choose high-demand areas using population, income, and market data.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M12 24l6-12 6 12"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Site Visits and Lease Negotiation",
    desc: "We visit sites with you and negotiate leases that match your needs.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect
          x="8"
          y="8"
          width="20"
          height="20"
          rx="3"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
        <path d="M12 16h12M12 20h8" stroke="#38B449" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Architectural Planning",
    desc: "We design layouts based on Evolve's model and guide you through the build-out.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect
          x="8"
          y="8"
          width="20"
          height="20"
          rx="3"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
        <path d="M12 24l12-12" stroke="#38B449" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Construction Support",
    desc: "You get access to reliable contractors and equipment vendors we trust.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
        <path d="M18 12v12M12 18h12" stroke="#38B449" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Space Design",
    desc: "We plan for smooth traffic flow and easy subleasing to trainers and health pros.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect
          x="8"
          y="8"
          width="20"
          height="20"
          rx="3"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="18"
          cy="18"
          r="5"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    desc: "We stay involved through each stage to make sure your setup works long term.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#38B449"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M18 24v-4M18 16a2 2 0 100-4 2 2 0 000 4z"
          stroke="#38B449"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

function WeHelpYouRightSpace() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      {/* Header */}
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
      {/* Features Grid */}
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
    </section>
  );
}

export default WeHelpYouRightSpace;
