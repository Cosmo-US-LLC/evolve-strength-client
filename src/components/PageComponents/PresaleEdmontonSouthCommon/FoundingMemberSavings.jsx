import React from "react";
import { Link } from "react-router-dom";

function FoundingMemberSavings() {
  return (
    <section className="bg-black py-10 md:py-20">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8 flex flex-col gap-10 md:gap-[41px] items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-3 md:gap-4 items-center text-center">
          <h2 className="!font-[600] uppercase text-white">
            Save CA $1,040 as a Founding Member!
          </h2>
          <p className="text-[18px] md:text-[24px] leading-[17px] md:leading-[17px] font-[400] font-[Kanit] text-[#fff]">
            Lock in your founder rate today.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[15px] rounded-[12px] w-full p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 ">
          {/* Left Side - Image */}
          <div className="md:h-[400px] h-full w-full md:flex-1 aspect-[2160/1440] rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/presaleCommonSouth/FoundingMemberSavingsImage.webp"
              alt="Gym members at Evolve Strength"
              className="w-full h-full object-center"
            />
          </div>

          {/* Right Side - Pricing Details */}
          <div className="w-full md:flex-1 flex flex-col gap-8 md:gap-[32px]">
            {/* Pricing Items */}
            <div className="flex flex-col gap-8 md:gap-[32px]">
              {/* Bi-Weekly Rate */}
              <div className="flex flex-col gap-2 md:gap-2">
                <p className="text-[16px] md:text-[18px] leading-[20px] font-[400] font-[Kanit] text-white">
                  Bi-Weekly
                </p>
                <p className="text-[40px] md:text-[60px] leading-[17px] md:leading-[60px] font-[500] font-[Kanit] text-[#4ab04a]">
                  $29.99
                </p>
                {/* Divider */}
                <div className="h-px w-full mt-2 md:mt-0 bg-white/30"></div>
              </div>

              {/* Deposit */}
              <div className="flex flex-col gap-2 md:gap-2">
                <p className="text-[16px] md:text-[18px] leading-[20px] font-[400] font-[Kanit] text-white">
                  Deposit
                </p>
                <p className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-[500] font-[Kanit] text-white">
                  CA $149
                </p>
                {/* Divider */}
                <div className="h-px w-full  bg-white/30"></div>
              </div>

              {/* Rate Locked For */}
              <div className="flex flex-col gap-2 md:gap-2">
                <p className="text-[16px] md:text-[18px] leading-[20px] font-[400] font-[Kanit] text-white">
                  Rate Locked For
                </p>
                <p className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] font-[500] font-[Kanit] text-[#fff]">
                  24 Months
                </p>
              </div>
            </div>

            {/* Savings Box */}
            <div className="bg-[rgba(241,241,241,0.14)] rounded-[8px] p-5 md:p-6 flex flex-col gap-1 md:gap-[4px]">
              <p className="text-[18px] md:text-[20px] leading-[24px] md:leading-[28px] font-[600] font-[Kanit] text-[#fff]">
                Save $1,040
              </p>
              <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-[400] font-[Kanit] text-[#fff]">
                Over 24 months with your founder rate locked in
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="#">
          <button className="btnPrimary uppercase whitespace-nowrap">
            claim your founder spot
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FoundingMemberSavings;
