import React from "react";
import { Link } from "react-router-dom";
import noUpfront from "../../../assets/images/PresaleEdmontonSouthCommon/partners/no_upfront.svg";
import founderBadge from "@/assets/images/PresaleParkRoyal/founder_badge.png";

const steps = [
  {
    icon: noUpfront,
    title: "1. Reserve Your Rate",
    description: "Reserve now, pay later. Ten-day refund guarantee.",
  },
  {
    icon: "/assets/images/presaleCommonSouth/icon2.svg",
    title: "2. Get Certificate",
    description: "Digital proof of your founding status, yours to keep.",
  },
  {
    icon: "/assets/images/presaleCommonSouth/icon3.svg",
    title: "3. VIP Access",
    description:
      "Confirm your spot and get early access to the brand new facility.",
  },
  {
    icon: "/assets/images/presaleCommonSouth/icon_4.svg",
    title: "4. Grand Opening",
    description:
      "Doors open. Billing begins. Everything else stays the same.",
  },
];

const LOCK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M6.83398 9.83309C6.83409 9.62432 6.8902 9.41942 6.99648 9.23973C7.10275 9.06005 7.2553 8.91217 7.43819 8.81153C7.62109 8.71088 7.82764 8.66116 8.03631 8.66754C8.24497 8.67392 8.4481 8.73617 8.6245 8.8478C8.80091 8.95943 8.94413 9.11635 9.03923 9.30219C9.13433 9.48803 9.17782 9.69598 9.16517 9.90436C9.15252 10.1127 9.08419 10.3139 8.96731 10.4869C8.85042 10.6598 8.68927 10.7983 8.50065 10.8878V11.3331C8.50065 11.4657 8.44797 11.5929 8.3542 11.6866C8.26044 11.7804 8.13326 11.8331 8.00065 11.8331C7.86804 11.8331 7.74087 11.7804 7.6471 11.6866C7.55333 11.5929 7.50065 11.4657 7.50065 11.3331V10.8878C7.30109 10.7931 7.1325 10.6437 7.01448 10.457C6.89647 10.2703 6.83388 10.054 6.83398 9.83309Z"
      fill="white"
    />
    <path
      d="M4.83398 4.66667C4.83398 3.82681 5.16761 3.02136 5.76148 2.4275C6.35535 1.83363 7.1608 1.5 8.00065 1.5C8.8405 1.5 9.64596 1.83363 10.2398 2.4275C10.8337 3.02136 11.1673 3.82681 11.1673 4.66667V6.23733C11.394 6.276 11.6033 6.33733 11.8027 6.43933C12.2728 6.67897 12.655 7.06121 12.8947 7.53133C13.046 7.828 13.1087 8.148 13.1387 8.512C13.1673 8.866 13.1673 9.30333 13.1673 9.84533V10.8213C13.1673 11.3633 13.1673 11.8007 13.1387 12.1547C13.1087 12.5187 13.0453 12.8387 12.8947 13.1347C12.6551 13.6054 12.2726 13.9881 11.802 14.228C11.506 14.3787 11.186 14.4413 10.822 14.4713C10.468 14.5 10.0307 14.5 9.48865 14.5H6.51265C5.97065 14.5 5.53332 14.5 5.17932 14.4713C4.81532 14.4413 4.49532 14.378 4.19932 14.2273C3.7286 13.9878 3.34585 13.6052 3.10598 13.1347C2.95532 12.8387 2.89265 12.5187 2.86265 12.1547C2.83398 11.8007 2.83398 11.3633 2.83398 10.8213V9.84533C2.83398 9.30333 2.83398 8.866 2.86265 8.512C2.89265 8.148 2.95598 7.828 3.10665 7.532C3.34623 7.06128 3.72874 6.67854 4.19932 6.43867C4.39943 6.33975 4.61344 6.27186 4.83398 6.23733V4.66667ZM10.1673 4.66667C10.1673 4.09203 9.93904 3.54093 9.53272 3.1346C9.12639 2.72827 8.57529 2.5 8.00065 2.5C7.42602 2.5 6.87492 2.72827 6.46859 3.1346C6.06226 3.54093 5.83398 4.09203 5.83398 4.66667V6.16933C6.03976 6.16711 6.26598 6.16622 6.51265 6.16667H9.48865C9.73576 6.16622 9.96199 6.16711 10.1673 6.16933V4.66667ZM5.26065 7.192C4.95865 7.21667 4.78465 7.26333 4.65332 7.33C4.37083 7.47385 4.14117 7.70351 3.99732 7.986C3.93065 8.11733 3.88398 8.29133 3.85932 8.594C3.83465 8.902 3.83398 9.298 3.83398 9.86667V10.8C3.83398 11.368 3.83398 11.7647 3.85932 12.0733C3.88398 12.3753 3.93065 12.5493 3.99732 12.6813C4.14132 12.9633 4.37065 13.1927 4.65332 13.3367C4.78465 13.4033 4.95865 13.45 5.26132 13.4747C5.56932 13.4993 5.96598 13.5 6.53398 13.5H9.46732C10.036 13.5 10.432 13.5 10.7407 13.4747C11.0427 13.4493 11.2167 13.4033 11.3487 13.3367C11.6307 13.1927 11.86 12.9633 12.004 12.6813C12.0707 12.5493 12.1173 12.3753 12.142 12.0727C12.1667 11.7647 12.1673 11.368 12.1673 10.8V9.86667C12.1673 9.298 12.1673 8.902 12.142 8.59333C12.1167 8.29133 12.0707 8.11733 12.004 7.98533C11.8602 7.70319 11.6308 7.47379 11.3487 7.33C11.2167 7.26333 11.0427 7.21667 10.74 7.192C10.432 7.16733 10.0353 7.16667 9.46732 7.16667H6.53398C5.96598 7.16667 5.56932 7.16667 5.26065 7.192Z"
      fill="white"
    />
  </svg>
);

function RateLockCertificate() {
  return (
    <section className="bg-[#ffffff] py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-4 md:gap-[50px] items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-2 md:gap-3 items-center text-center max-w-[739px]">
          <p className="uppercase font-[500] font-[Kanit] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4ab04a]">
            How It Works
          </p>
          <h2 className="uppercase text-center !text-[28px] md:!text-[40px] !font-[700] font-[Kanit] !leading-[34px] md:!leading-[39px] text-[#000]">
            Some Things Are Worth The Wait
          </h2>
          <p className="!text-[15px] md:!text-[18px] leading-[22px] md:leading-[26px] font-[300] font-[Kanit] text-[#000] text-center max-w-[560px]">
            By locking in during construction, you&apos;re rewarded with our
            lowest rate possible. Forever.
          </p>
        </div>

        {/* Main Content - Steps and Certificate */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[80px] items-start">
          {/* Left Side - Steps List */}
          <div className="w-full md:w-[593px] flex flex-col gap-6 md:gap-8 shrink-0">
            <div className="flex flex-col gap-5 md:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="w-[30px] h-[30px] flex-shrink-0">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-[#000] !font-[500] font-[Kanit] !text-[18px] md:!text-[24px] !leading-[133%] md:!leading-[24px] whitespace-nowrap">
                      {step.title}
                    </h3>
                  </div>
                  <p className="pl-[42px] text-[16px] leading-[26px] font-[300] font-[Kanit] text-[#000]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/founder-offer-payment?source=park-royal"
              className="flex w-full md:inline-flex md:w-auto"
            >
              <button className="btnPrimary flex w-full md:w-auto items-center justify-center gap-2 !py-[16px] !px-[20px] md:gap-[10px] uppercase">
                {LOCK_ICON}
                Lock My Rate Now
              </button>
            </Link>
          </div>

          {/* Right Side - Certificate Document */}
          <div className="w-full max-w-full md:w-[567px] relative rounded-[12px] overflow-hidden bg-[#000000] flex-shrink-0 p-4 md:p-8 flex gap-5 flex-col">
            <div className="flex items-start justify-between">
              <img
                src="../../../assets/images/home/navbar/Evolve-logo-light.svg"
                alt="Logo"
                className="w-[110px] md:w-[140px] h-[35px] md:h-[44px] object-contain"
              />
              <img
                src={founderBadge}
                alt="Founder Lock Rate badge"
                className="w-[64px] h-[64px] md:w-[106px] md:h-[106px] object-contain absolute right-[24px]"
              />
            </div>

            {/* Main Title + Certificate Text (tight coupling, matches Figma) */}
            <div>
              <h2 className="!font-[800] font-[Kanit] !leading-[0.77] !text-[36px] md:!text-[52px] uppercase text-[#ffffff]">
                CERTIFICATE
              </h2>
              <p className="!text-[20px] md:!text-[30px] !font-[700] font-[Kanit] !leading-[1] uppercase text-[#ffffff] mt-1">
                of Official Rate Lock
              </p>
              <p className="font-['Meow_Script'] text-[32px] md:text-[42px] leading-[1.2] mt-2 mb-1 font-[400] text-[#4ab04a]">
                Member Name
              </p>
              <p className="text-[13px] md:text-[14px] max-w-[500px] !leading-[16px] md:!leading-[17.5px] font-[300] font-[Kanit] text-[#ffffff]">
                This certifies is granted founder access to Evolve Strength
                Park Royal. This exclusive membership not only provides
                unique privileges but also ensures protection from any future
                rate increases, allowing for a seamless fitness experience.
              </p>
            </div>

            {/* Bottom Section - Date and Signature */}
            <div className="flex flex-row justify-between items-start w-full pt-2 border-t border-white/15">
              <div className="flex flex-col items-center gap-0.5">
                <p className="text-[10px] !leading-[16px] font-[300] font-[Kanit] text-[#ffffff]">
                  20 August 2026
                </p>
                <p className="text-[10px] !leading-[16px] font-[500] font-[Kanit] text-[#ffffff] uppercase tracking-wide">
                  Date
                </p>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <p className="font-['Meow_Script'] text-[10px] !leading-[16px] font-[400] text-[#ffffff]">
                  Signature here
                </p>
                <p className="text-[10px] !leading-[16px] font-[500] font-[Kanit] text-[#ffffff] uppercase tracking-wide">
                  Authorized Signature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RateLockCertificate;
