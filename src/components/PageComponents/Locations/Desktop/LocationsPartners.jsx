import React from "react";
import Marquee from "react-fast-marquee";

const partnerLogos = [
  {
    src: "/assets/images/home/EquipmentPartners/Eleiko_logo.svg",
    alt: "Eleiko",
  },
  {
    src: "/assets/images/home/EquipmentPartners/Eprecor_logo.svg",
    alt: "Precor",
  },
  {
    src: "/assets/images/home/EquipmentPartners/NewTech_logo.svg",
    alt: "Rogue",
  },
  // { src: "/assets/images/home/EquipmentPartners/rogue.svg", alt: "rogueLogo" },
  {
    src: "/assets/images/home/EquipmentPartners/Techno_gym_logo.svg",
    alt: "Technogym",
  },
  {
    src: "/assets/images/home/EquipmentPartners/Atlantis_logo.svg",
    alt: "Atlantis",
  },
];

const EquipmentPartners = () => {
  return (
    <div className="w-full py-16 bg-[#F9F9F9]">
      <div className="w-full max-w-[1280px] px-0 md:px-8 mx-auto flex flex-col items-center gap-10">
        <h2 className="text-[#000000] max-md:text-center uppercase">
          Our Equipment Partners
        </h2>
        <div className="hidden md:flex items-center justify-between gap-12 w-full">
          {partnerLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>

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
