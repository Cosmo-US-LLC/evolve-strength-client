import React from "react";

const depositBenefits = [
  {
    icon: "/assets/images/presaleCommonSouth/icon1.svg",
    title: "Fully Refundable",
    description:
      "Your deposit is fully refundable up to 30 days before opening.",
  },
  {
    icon: "/assets/images/presaleCommonSouth/icon2.svg",
    title: "Applied to Your Membership",
    description:
      "The deposit is applied directly to your first billing. Nothing is lost.",
  },
  {
    icon: "/assets/images/presaleCommonSouth/icon3.svg",
    title: "Rate Guarantee",
    description: "Secures your $29.99 Bi-Weekly founder rate for 24 months.",
  },
  {
    icon: "/assets/images/presaleCommonSouth/icon4.svg",
    title: "No Deposit = No Guarantee",
    description:
      "Without a deposit, your rate is not guaranteed and prices may increase.",
  },
];

function HowDepositWorks() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="rounded-[12px] overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <div className="relative w-full md:w-[550px] h-[400px] md:h-auto flex-shrink-0">
            <img
              src="/assets/images/presaleCommonSouth/hoeDepositImage.webp"
              alt="Gym members celebrating"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="bg-[#000] backdrop-blur-[15px] flex-1 flex flex-col gap-[35px] px-6 md:px-10 py-8 md:py-8">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 className="!font-[600] uppercase text-white">
                How the <span className="text-white">CA $149</span>
                <br />
                <span className="text-[#4ab04a]">Deposit Works</span>
              </h2>
              <p className="text-[14px] md:text-[16px] leading-[26px] font-[400] font-Inter text-white">
                Purpose-built spaces for strength, conditioning, and results.
              </p>
            </div>

            {/* Benefits List */}
            <div className="flex flex-col gap-5">
              {depositBenefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <div className="w-[30px] h-[30px] flex-shrink-0">
                      <img
                        src={benefit.icon}
                        alt={benefit.title}
                        className="w-full h-full"
                      />
                    </div>
                    <h3 className="text-white whitespace-nowrap">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="pl-[42px] text-[14px] md:text-[16px] leading-[26px] font-[300] font-[Kanit] text-white">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowDepositWorks;
