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
    <div className="w-full py-12">
      <div className="w-full max-w-[1280px] px-8 mx-auto flex flex-col items-center justify-center gap-10">
        <h2 className="text-[#000000] uppercase">Our Equipment Partners</h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
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

export default EquipmentPartners;
