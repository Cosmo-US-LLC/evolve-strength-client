import React from "react";

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
    <div
      className="relative w-full franchiseGotYourBack flex items-center justify-center"
    >
      <div className="w-full h-full max-w-[1280px] md:px-8 px-4 mx-auto relative z-10 flex flex-col justify-center">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
          WE'VE GOT YOUR BACK
          <br />
          EVERY STEP OF THE WAY
        </h2>
        <ul className="space-y-3 mb-20">
          {list.map((item, idx) => (
            <li key={idx} className="flex items-start text-[#fff] text-lg">
              <span className="mt-1 mr-3 text-green-400">
                <div className="w-[22px] h-[22px] p-[2px] flex items-center justify-center rounded-full border-2 border-[#38B449]">
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
                </div>
              </span>

              <h4 className="font-[400] leading-[31px]">{item}</h4>
            </li>
          ))}
        </ul>
        <div className="bg-[#fff] flex items-center justify-center w-[358px] md:w-full md:max-w-[407px] px-4 md:px-6 min-h-[161px]  rounded-t-[10px] absolute -bottom-[10px] md:left-[32px] ">
          <h4 className="text-[#000] leading-[26px] font-[400]">
            No prior fitness or business ownership
            <br />
            experience required — just a passion for
            <br />
            wellness and leadership.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default GotYourBack;
