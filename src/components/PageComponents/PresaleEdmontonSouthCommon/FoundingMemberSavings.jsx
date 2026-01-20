import React from "react";
import { Link } from "react-router-dom";

function FoundingMemberSavings() {
  return (
    <section className="bg-black py-10 md:py-20">
      <div className="max-w-[1340px] mx-auto px-4 md:px-8 flex flex-col gap-10 md:gap-[41px] items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-3 md:gap-4 items-center text-center">
          <h2 className="!font-[600] md:text-[40px] uppercase text-white">
            Save CA $1,040 as a Founding Member!
          </h2>
          <p className="text-[18px] md:!text-[24px] leading-[17px] md:leading-[17px] font-[400] font-[Kanit] text-[#fff] uppercase">
            Lock in your founder rate today.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[15px] rounded-[12px] w-full p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 ">
          {/* Left Side - Image */}
          <div className="h-full w-full md:max-w-[65%] md:flex-1  rounded-[8px] overflow-hidden">
            <img
              src="/assets/images/presaleCommonSouth/FoundingMemberSavingsImage.webp"
              alt="Gym members at Evolve Strength"
              className="w-full h-full object-center"
            />
          </div>

          {/* Right Side - Pricing Details */}
          <div className="w-full md:flex-1 md:max-w-[35%] flex flex-col gap-8 md:gap-[32px]">
            {/* Pricing Items */}
            <div className="flex flex-col gap-8 md:gap-[20px]">
              {/* Bi-Weekly Rate */}
              <div className="flex flex-col gap-2 md:gap-2">
                <p className="text-[16px] md:text-[18px] max-md:text-center leading-[20px] font-[400] font-[Kanit] text-white">
                  Bi-Weekly
                </p>
                <p className="text-[32px] mb-2 md:text-[40px] max-md:text-center leading-[40px] md:leading-[40px] font-[500] font-[Kanit] ">
                 <span className="text-[#4ab04a]"> $29.99</span> <span className="!text-[18px] md:!text-[24px] leading-[18px] md:leading-[24px] font-[400] font-[Kanit] !text-[#fff] line-through">$35.99</span>
                </p>
                {/* Divider */}
                <div className="h-px w-full  md:mt-0 bg-white/30"></div>
              </div>

              {/* Deposit */}
              <div className="flex flex-col gap-2 md:gap-2">
                <p className="text-[16px] md:text-[18px] max-md:text-center leading-[20px] font-[400] font-[Kanit] text-white">
                  Deposit
                </p>
                <p className="text-[32px] md:text-[40px] max-md:text-center leading-[40px] md:leading-[40px] font-[500] font-[Kanit] text-white">
                  CA $149
                </p>
                <p className="text-[14px] md:!text-[16px] leading-[15px] md:leading-[17px] font-[400] font-[Kanit] text-[#fff] pb-1 mx-md:text-center">One-time deposit to lock your rate</p>
                {/* Divider */}
                <div className="h-px w-full mt-2 bg-white/30"></div>
              </div>

              {/* Rate Locked For */}
              <div className="flex flex-col gap-2 md:gap-2">
                <p className="text-[16px] md:text-[18px] max-md:text-center leading-[20px] font-[400] font-[Kanit] text-white">
                  Rate Locked For
                </p>
                <p className="text-[32px] md:text-[40px] max-md:text-center leading-[40px] md:leading-[48px] font-[500] font-[Kanit] text-[#fff]">
                  24 Months
                </p>
              </div>
            </div>

            {/* Savings Box */}
            <div className="bg-[rgba(241,241,241,0.14)] rounded-[8px] p-5 md:p-6 flex flex-col gap-1 md:gap-[4px]">
              <p className="text-[18px] md:!text-[20px] max-md:text-center leading-[24px] md:leading-[28px] font-[600] font-[Kanit] text-[#fff]">
                Save $1,040
              </p>
              <p className="text-[14px] md:!text-[16px] max-md:text-center leading-[20px] md:leading-[24px] font-[400] font-[Kanit] text-[#fff]">
                Over 24 months with your founder rate locked in
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/founder-offer-payment">
          <button className="btnPrimary !py-[14px] !px-[20px] uppercase whitespace-nowrap">
            claim your founder spot
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FoundingMemberSavings;
