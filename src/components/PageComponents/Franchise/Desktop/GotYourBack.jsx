import React from "react";

const bgImage =
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1500&q=80";
const list = [
  "Comprehensive onboarding and business training",
  "Ongoing coaching from experienced franchise advisors",
  "Marketing assets, media plans, and digital campaign support",
  "Centralized purchasing and vendor discounts",
  "Franchisee portal with tools, SOPs, and updates",
  "Regular in-field visits and performance reviews",
];

function GotYourBack() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full max-w-7xl px-4 py-16">
        <div className="max-w-xl">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            WE'VE GOT YOUR BACK
            <br />
            EVERY STEP OF THE WAY
          </h2>
          <ul className="space-y-4 mb-10">
            {list.map((item, idx) => (
              <li key={idx} className="flex items-start text-white text-lg">
                <span className="mt-1 mr-3 text-green-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="#38B449"
                      strokeWidth="3"
                      fill="#38B449"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
            <p className="text-black text-base font-semibold">
              No prior fitness or business ownership
              <br />
              experience required — just a passion for
              <br />
              wellness and leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GotYourBack;
