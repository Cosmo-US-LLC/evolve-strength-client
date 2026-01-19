import React from "react";
import { Link } from "react-router-dom";

const packageFeatures = ["2 to 5 People", "One Deposit", "Everyone Saves"];

function FamilyHouseholdPackage() {
  return (
    <section className="relative w-full  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/presaleCommonSouth/familyPackageImage.webp"
          alt="Evolve Strength gym interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-10 md:py-20 flex justify-end md:items-center items-end ">
        {/* White Card Overlay */}
        <div className="bg-[#fff] backdrop-blur-[15px] border border-[rgba(173,173,173,0.4)] rounded-[12px] w-full max-w-[544px] p-6 md:p-8 flex flex-col gap-[16px]">
          {/* Header Text */}
          {/* <div className="flex flex-col items-start">
            <p className="text-[14px] md:text-[16px] leading-[22px] font-[400] font-[Kanit] text-black text-center w-full">
              Lock in founder rates for your entire household
            </p>
          </div> */}

          {/* Main Content */}
          <div className="flex flex-col gap-8 items-center">
            {/* Heading and Features */}
            <div className="flex flex-col gap-2 items-center w-full">
              <div className="flex flex-col items-start">
                <p className="text-[14px] md:text-[16px] leading-[22px] font-[400] font-[Kanit] text-black text-center w-full">
                  Lock in founder rates for your entire household
                </p>
              </div>
              <h2 className="uppercase text-[#000] text-center">
                family/household package
              </h2>

              {/* Features List */}
              <div className="flex flex-row gap-2 items-center w-full">
                {packageFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex md:gap-2 gap-1 items-center w-full"
                  >
                    {/* Checkmark Icon */}
                    <div className="w-3 h-3 md:w-5 md:h-5 bg-[#4ab04a] md:p-1 p-0.5 flex justify-center items-center rounded-full flex-shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6667 5L7.50004 14.1667L3.33337 10"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-[11px] md:text-[18px] leading-[26px] font-[400] font-[Kanit] text-black">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-[16px] md:text-[18px] leading-[26px] font-[300] font-[Kanit] text-black text-center max-w-[434px]">
              With a single deposit, multiple household members can secure the
              founder rate. Perfect for couples, families, or roommates who want
              to train and stay healthy together.
            </p>

            {/* CTA Button */}
            <Link to="/founder-offer-payment" className="w-full max-w-[198px]">
              <button className="btnPrimary uppercase  ">
                Lock My Rate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamilyHouseholdPackage;
