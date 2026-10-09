import React from "react";
import { assetUrl } from "@/lib/assetUrl";
import Marquee from "react-fast-marquee";

import lifeFitnessLogo from "@/assets/images/ParkRoyal/EquipmentPartners/life-fitness.svg";
const glutbuilderLogo = assetUrl("/assets/images/ParkRoyal/EquipmentPartners/glutbuilder.webp");
const hammerStrengthLogo = assetUrl("/assets/images/ParkRoyal/EquipmentPartners/hammer-strength.webp");
import atlantisLogo from "@/assets/images/ParkRoyal/EquipmentPartners/atlantis.svg";

const partnerLogos = [
  { src: lifeFitnessLogo, alt: "Life Fitness", box: "w-[250px] h-[55px]", img: "h-[55px] w-auto", mImg: "w-[101px] h-auto" },
  { src: glutbuilderLogo, alt: "GluteBuilder", box: "w-[218px] h-[57px]", img: "w-[218px] h-auto", mImg: "w-[140px] h-auto" },
  { src: hammerStrengthLogo, alt: "Hammer Strength", box: "w-[218px] h-[57px]", img: "w-[148px] h-auto", mImg: "w-[95px] h-auto" },
  { src: atlantisLogo, alt: "Atlantis", box: "w-[188px] h-[55px]", img: "w-[188px] h-[55px]", mImg: "w-[137px] h-10" },
];

function LansdowneEquipmentPartners() {
  return (
    <div className="w-full pt-12 pb-10 md:py-16">
      <div className="w-full max-w-[1280px] px-5 mx-auto flex flex-col items-center gap-7 md:gap-10">
        <h2 className="text-[#000000] max-md:self-start max-md:text-left max-md:!text-[26px] max-md:!leading-[39px] uppercase">
          Our Equipment Partners
        </h2>

        <div className="hidden md:flex items-center justify-between gap-8 w-full">
          {partnerLogos.map((logo) => (
            <div
              key={logo.alt}
              className={`${logo.box} shrink-0 flex items-center justify-center overflow-hidden`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.img} max-w-full object-contain`}
              />
            </div>
          ))}
        </div>

        <div className="md:hidden w-full">
          <Marquee speed={40} gradient={false} pauseOnHover>
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="mx-6 h-12 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.mImg} max-w-none object-contain`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default LansdowneEquipmentPartners;
