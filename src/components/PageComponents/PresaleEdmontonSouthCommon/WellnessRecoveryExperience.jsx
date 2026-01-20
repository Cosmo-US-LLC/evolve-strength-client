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
    <section className="bg-[#000] py-10 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-[30px] items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-[24px] items-center text-center">
          <h2 className="!font-[600] !text-[24px] md:!text-[40px] !leading-[28px] !md:leading-[46px] uppercase text-center text-[#fff]">
            <span className="text-[#fff]">A Complete Wellness & </span>
            <span className="text-[#4ab04a]">Recovery Experience</span>
          </h2>

          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-[400] font-Inter text-[#fff] max-w-[896px]">
            You put your body to work, we help you take care of it., recover
            faster, and stay injury-free. Recharge yourself with our full range
            of services (additional charges may apply).
          </p>
          <h3 className="text-[#4ab04a]  text-[18px] md:text-[24px] leading-[24px] md:leading-[26px] font-[700]">Available services:</h3>
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-[20px] [&>:last-child]:col-span-2 md:[&>:last-child]:col-span-1 [&>:last-child]:w-fit md:[&>:last-child]:w-auto [&>:last-child]:mx-auto md:[&>:last-child]:mx-0 [&>:last-child]:justify-self-center md:[&>:last-child]:justify-self-auto">
          {wellnessServices.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-[1px] bg-[rgba(255,255,255,0.06)] border border-[#474747] rounded-[12px] flex flex-col items-center justify-center px-6 md:px-[30px] py-6 md:py-[20px]"
            >
              <div className="flex flex-col gap-4 md:gap-[8px] items-center justify-center">
                {/* Icon Container */}
                <div className="bg-[rgba(74,176,74,0.1)] rounded-full p-[5px] w-[50px] h-[50px] flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-[40px] h-[40px] object-contain"
                  />
                </div>
                {/* Service Name */}
                <p className="text-[14px] md:text-[24px] leading-[18px] md:leading-[26px] font-[700] !font-[Kanit] text-[#fff] text-center">
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
