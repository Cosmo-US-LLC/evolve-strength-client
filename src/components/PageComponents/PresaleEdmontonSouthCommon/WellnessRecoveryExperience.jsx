import React from "react";

const wellnessServices = [
  {
    name: "Esthetician",
    icon: "/assets/images/presaleCommonSouth/w1.svg",
  },
  {
    name: "Chiropractic Care",
    icon: "/assets/images/presaleCommonSouth/w2.svg",
  },
  {
    name: "Massage Therapy",
    icon: "/assets/images/presaleCommonSouth/w3.svg",
  },
  {
    name: "Pilates",
    icon: "/assets/images/presaleCommonSouth/w4.svg",
  },
  {
    name: "Acupuncture",
    icon: "/assets/images/presaleCommonSouth/w5.svg",
  },
  {
    name: "Dietitian Services",
    icon: "/assets/images/presaleCommonSouth/w6.svg",
  },
  {
    name: "Osteopathy",
    icon: "/assets/images/presaleCommonSouth/w7.svg",
  },
  {
    name: "Laser Therapy",
    icon: "/assets/images/presaleCommonSouth/w8.svg",
  },
  {
    name: "Mental health",
    icon: "/assets/images/presaleCommonSouth/w9.svg",
  },
];

function WellnessRecoveryExperience() {
  return (
    <section className="bg-black py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-[30px] items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-[24px] items-center text-center">
          <h2 className="!font-[600] uppercase text-center text-[#fff]">
            <span className="text-[#fff]">A Complete Wellness & </span>
            <span className="text-[#4ab04a]">Recovery Experience</span>
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-[400] font-Inter text-[#fff] max-w-[896px]">
            You put your body to work, we help you take care of it., recover
            faster, and stay injury-free. Recharge yourself with our full range
            of services (additional charges may apply): Available services:
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[20px]">
          {wellnessServices.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-[1px] bg-[rgba(255,255,255,0.06)] border border-[#474747] rounded-[20px] flex flex-col items-center justify-center px-6 md:px-[30px] py-6 md:py-[30px]"
            >
              <div className="flex flex-col gap-4 md:gap-[16px] items-center justify-center">
                {/* Icon Container */}
                <div className="bg-[rgba(74,176,74,0.1)] rounded-full p-[5px] w-[55px] h-[55px] flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-[45px] h-[45px] object-contain"
                  />
                </div>
                {/* Service Name */}
                <p className="text-[18px] md:text-[24px] leading-[24px] md:leading-[26px] font-[700] font-[Kanit] text-[#fff] text-center">
                  {service.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WellnessRecoveryExperience;
