import React from "react";
import Marquee from "react-fast-marquee";
import AirCanadaLogo from "/src/assets/images/corporateMembership/WhoItsFor/AirCanada.svg";
import AmazonLogo from "/src/assets/images/corporateMembership/WhoItsFor/Amazon.svg";
import sonyLogo from "/src/assets/images/corporateMembership/WhoItsFor/sony.svg";
import WCBLogo from "/src/assets/images/corporateMembership/WhoItsFor/WCB.svg";
import albertaLogo from "/src/assets/images/corporateMembership/WhoItsFor/alberta.svg";

const partnerLogos = [
  { src: AirCanadaLogo, alt: "AirCanadaLogo" },
  { src: AmazonLogo, alt: "AmazonLogo" },
  { src: sonyLogo, alt: "sonyLogo" },
  { src: WCBLogo, alt: "WCBLogo" },
  { src: albertaLogo, alt: "albertaLogo" },
];

function WhoItsFor() {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-0 md:px-8 mx-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col px-8 md:px-0 justify-center items-center gap-3">
          <h2 className="text-[#000000] uppercase">Who It's For</h2>

          <h4 className="text-[#000] font-[400] leading-[26px] text-center max-w-[480px]">
            We work with companies of all sizes. Whether your team has 5 or 500
            people, we can create a plan that fits.
          </h4>
        </div>

        {/* Desktop Layout */}
        <div className="w-full flex items-center justify-center gap-16 px-8 max-md:hidden">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10"
              // className="h-10 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>

        {/* Mobile Layout with Marquee */}
        <div className="w-full md:hidden">
          <Marquee
            speed={30}
            pauseOnHover={true}
            gradient={false}
            className="py-4"
          >
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-6"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 max-w-[120px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default WhoItsFor;
