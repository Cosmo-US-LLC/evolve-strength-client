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

const LocationPartners = () => {
  return (
    <div className="w-full py-12 bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#000000] uppercase">Our Equipment Partners</h2>

        <div className="w-full flex flex-wrap items-center justify-between px-8 gap-6 md:gap-0">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPartners;
