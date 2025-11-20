import React from "react";
import Marquee from "react-fast-marquee";

const partnerLogos = [
  {
    src: "/assets/images/corporateMembership/WhoItsFor/Air_canada_logo.svg",
    alt: "AirCanadaLogo",
  },
  {
    src: "/assets/images/corporateMembership/WhoItsFor/Amazon_logo.svg",
    alt: "AmazonLogo",
  },
  {
    src: "/assets/images/corporateMembership/WhoItsFor/Sony_logo.svg",
    alt: "sonyLogo",
  },
  {
    src: "/assets/images/corporateMembership/WhoItsFor/WCB_logo.svg",
    alt: "WCBLogo",
  },
  {
    src: "/assets/images/corporateMembership/WhoItsFor/Alberta_health_services_logo.svg",
    alt: "albertaLogo",
  },
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

        <div className="w-full flex items-center justify-center gap-16 px-8 max-md:hidden">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-14"
              // className="h-14 max-w-[160px] object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>

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
                  className="h-14 max-w-[120px] object-contain"
                  // className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
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
