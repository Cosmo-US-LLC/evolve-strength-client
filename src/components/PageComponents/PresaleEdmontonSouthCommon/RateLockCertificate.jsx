import React from "react";
import { Link } from "react-router-dom";
import { Check, Lock } from "lucide-react";

const certificateBenefits = [
  "24-month rate guarantee",
  "Instant digital certificate",
  "Official founding member confirmation",
  "Exclusive founding member benefits",
  "Early-access tours and priority booking",
];

function RateLockCertificate() {
  return (
    <section className="bg-[#000] py-10 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-[36px] items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-[16px] items-center text-center max-w-[739px]">
          <h2 className="uppercase text-center">
            <span className="text-white">Your Official Rate Lock </span>
            <span className="text-[#4ab04a]">Certificate</span>
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-[300] font-[Kanit] text-white text-center">
            Secure your{" "}
            <span className="font-[700] text-[#4ab04a]">$29.99 Bi-Weekly</span>{" "}
            founder pricing with a{" "}
            <span className="font-[700] text-white">CA $149</span> deposit and
            get instant confirmation of your guaranteed rate.
          </p>
        </div>

        {/* Main Content - Benefits and Certificate */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-between min-h-[400px] md:min-h-[495px]">
          {/* Left Side - Benefits List */}
          <div className="w-full md:w-auto flex flex-col gap-4">
            {certificateBenefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-[1px] bg-[rgba(255,255,255,0.08)] border border-[#474747] rounded-[12px] flex items-center gap-3 md:gap-[14px] px-4 md:px-[16px] py-3 md:py-[10px]"
              >
                {/* Checkmark Icon */}
                <div className="bg-[#4ab04a] rounded-full w-[26px] h-[26px] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                {/* Benefit Text */}
                <p className="text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-[300] font-[Kanit] text-[#fff]">
                  {benefit}
                </p>
              </div>
            ))}

            {/* CTA Button and Deposit Text */}
            <div className="flex mt-29 flex-col gap-2 md:gap-[8px]">
              <div className="flex flex-col md:flex-row gap-3 md:gap-[8px] items-start md:items-center">
                <Link to="/founder-offer-payment">
                  <button className="btnPrimary flex items-center gap-2 md:gap-[10px] uppercase">
                    {/* Lock Icon */}
                    <Lock className="w-4 h-4 text-white" />
                    Lock My Rate Now
                  </button>
                </Link>
                <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-[400] font-[Kanit] text-white max-w-[165px]">
                  CA $149 deposit applies toward your membership
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Document */}
          <div className="w-full max-w-full md:max-w-[754px] h-auto md:h-[475px] relative rounded-[12px] overflow-hidden bg-[#fff] flex-shrink-0 p-6 md:p-8 flex gap-7 flex-col">
            <div className="">
              <img
                src="/assets/images/presaleCommonSouth/Evolve-Strength-Logo-Presale.svg"
                alt="Logo"
              />
            </div>

            {/* Main Title - Centered Upper Half */}
            <div className="">
              <h2 className="font-[700] uppercase text-[#000]">
                OFFICIAL RATE
                <br />
                LOCK CERTIFICATE
              </h2>
            </div>

            {/* Certificate Text */}
            <div className="flex flex-col">
              <p className="text-[18px] md:text-[22px] font-[700] font-[Kanit] text-[#4ab04a] uppercase">
                MEMBER NAME
              </p>
              <p className="text-[14px] md:text-[16px] max-w-[440px] leading-[22px] md:leading-[26px] font-[400] font-[Kanit] text-black">
                This certifies that{" "}
                <span className="font-[700]">[Member Name]</span> has secured
                the exclusive Founder&apos;s Rate of{" "}
                <span className="font-[700]">$29.99 Bi-Weekly</span> for 24
                months, protected from future price increases.
              </p>
            </div>

            {/* Bottom Section - Date and Signature */}
            <div className="mt-auto max-w-[400px] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
              {/* Date Section - Bottom Left */}
              <div className="flex flex-col">
                <p className="text-[14px] md:text-[16px] font-[700] font-[Kanit] text-black uppercase">
                  07TH JANUARY 2026
                </p>
                <p className="text-[12px] md:text-[14px] font-[400] font-[Kanit] text-black mt-1 uppercase">
                  CURRENT DATE
                </p>
              </div>

              {/* Signature Section - Bottom Right */}
              <div className="flex flex-col items-end">
                <img
                  src="/assets/images/presaleCommonSouth/Evolve-Strength-Logo-Presale.svg"
                  alt="Logo"
                />
                <p className="text-[12px] md:text-[14px] font-[400] font-[Kanit] text-black uppercase">
                  CEO
                </p>
              </div>
            </div>

            {/* Watermark Logo - Bottom Right (Faded) */}
            <div className="absolute bottom-0 md:bottom-2 right-4 md:right-4">
              {/* Large watermark logo placeholder - will be replaced with actual logo */}
              <div className="w-[200px] md:w-[240px] h-auto">
                {/* Watermark logo image will go here */}
                <img
                  src="/assets/images/presaleCommonSouth/evolve-dark-logo.svg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RateLockCertificate;
