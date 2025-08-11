import React from "react";
import Marquee from "react-fast-marquee";
import eleikoLogo from "/src/assets/images/home/EquipmentPartners/eleiko.svg";
import precorLogo from "/src/assets/images/home/EquipmentPartners/peocor.svg";
import rogueLogo from "/src/assets/images/home/EquipmentPartners/rogue.svg";
import technogymLogo from "/src/assets/images/home/EquipmentPartners/TechnoGym.svg";
import atlantisLogo from "/src/assets/images/home/EquipmentPartners/Atlantic.svg";
import newtechlogo from "/src/assets/images/home/EquipmentPartners/newtech.svg"

const partnerLogos = [
  { src: eleikoLogo, alt: "Eleiko" },
  { src: precorLogo, alt: "Precor" },
  { src: newtechlogo, alt: "newtechlogo" },
  { src: technogymLogo, alt: "Technogym" },
  { src: atlantisLogo, alt: "Atlantis" },
];

const EquipmentPartners = () => {
  return (
    <div className="w-full py-16 bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] px-0 md:px-8 mx-auto flex flex-col items-center gap-10">
        <h2 className="text-[#000000] max-md:text-center uppercase">
          Our Equipment Partners
        </h2>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-between gap-12 w-full">
          {partnerLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>

        {/* Mobile Layout - Hidden on desktop */}
        <div className="md:hidden w-full">
          <Marquee speed={40} gradient={false} pauseOnHover={true} className="">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="mx-8 flex items-center">
                <img src={logo.src} alt={logo.alt} className="" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPartners;
