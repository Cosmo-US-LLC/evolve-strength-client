import React from "react";
import eleikoLogo from "/src/assets/images/home/EquipmentPartners/eleiko.svg";
import precorLogo from "/src/assets/images/home/EquipmentPartners/peocor.svg";
import rogueLogo from "/src/assets/images/home/EquipmentPartners/rogue.svg";
import technogymLogo from "/src/assets/images/home/EquipmentPartners/TechnoGym.svg";
import atlantisLogo from "/src/assets/images/home/EquipmentPartners/Atlantic.svg";

const partnerLogos = [
  { src: eleikoLogo, alt: "Eleiko" },
  { src: precorLogo, alt: "Precor" },
  { src: rogueLogo, alt: "Rogue" },
  { src: technogymLogo, alt: "Technogym" },
  { src: atlantisLogo, alt: "Atlantis" },
];

const EquipmentPartners = () => {
  return (
    <div className="w-full md:py-12 max-md:pb-[48px] max-md:pt-0">
      <div className="w-full max-w-[1280px] md:px-8 pt-10 md:pt-0 max-md:px-[0px] mx-auto flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#000000] max-md:text-center uppercase">Our Equipment Partners</h2>

        <marquee behavior="scroll" direction="left" scrollamount="3" className="w-full">
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 mx-8 grayscale hover:grayscale-0 transition duration-300 inline-block"
            />
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default EquipmentPartners;
