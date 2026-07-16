import React from "react";
import Marquee from "react-fast-marquee";

import lifeFitnessLogo from "@/assets/images/ParkRoyal/EquipmentPartners/life-fitness.svg";
import glutbuilderLogo from "@/assets/images/ParkRoyal/EquipmentPartners/glutbuilder.png";
import hammerStrengthLogo from "@/assets/images/ParkRoyal/EquipmentPartners/hammer-strength.png";
import atlantisLogo from "@/assets/images/ParkRoyal/EquipmentPartners/atlantis.svg";

const partnerLogos = [
  { src: lifeFitnessLogo, alt: "Life Fitness" },
  { src: glutbuilderLogo, alt: "GluteBuilder" },
  { src: hammerStrengthLogo, alt: "Hammer Strength" },
  { src: atlantisLogo, alt: "Atlantis" },
];

function ParkRoyalEquipmentPartners() {
  return (
    <div className="w-full py-16">
      <div className="w-full max-w-[1280px] px-0 md:px-8 mx-auto flex flex-col items-center gap-10">
        <h2 className="text-[#000000] max-md:text-center uppercase">
          Our Equipment Partners
        </h2>

        <div className="hidden md:flex items-center justify-between gap-8 w-full">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-[48px] md:h-[55px] w-auto max-w-[250px] object-contain"
            />
          ))}
        </div>

        <div className="md:hidden w-full">
          <Marquee speed={40} gradient={false} pauseOnHover>
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="mx-6 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[140px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default ParkRoyalEquipmentPartners;
