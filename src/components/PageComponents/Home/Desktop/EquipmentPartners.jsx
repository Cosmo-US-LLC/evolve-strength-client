import React from "react";
import Marquee from "react-fast-marquee";

const partnerLogos = [
  {
    src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Eleiko_logo.svg",
    alt: "Eleiko",
  },
  {
    src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Eprecor_logo.svg",
    alt: "Precor",
  },
  {
    src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/newtech.svg",
    alt: "Rogue",
  },
  // { src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/rogue.svg", alt: "rogueLogo" },
  {
    src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Techno_gym_logo.svg",
    alt: "Technogym",
  },
  {
    src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Atlantis_logo.svg",
    alt: "Atlantis",
  },
];

const EquipmentPartners = () => {
  return (
    <div className="w-full py-16">
      <div className="w-full max-w-[1280px] px-0 md:px-8 mx-auto flex flex-col items-center gap-10">
        <h2 className="text-[#000000] max-md:text-center uppercase">
          Our Equipment Partners
        </h2>

        <div className="hidden md:flex items-center justify-between gap-12 w-full">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain"
              style={{
                imageRendering: "auto",
                WebkitImageRendering: "auto",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />
          ))}
        </div>

        <div className="md:hidden w-full">
          <Marquee speed={40} gradient={false} pauseOnHover={true} className="">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-6 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain"
                  style={{
                    imageRendering: "auto",
                    WebkitImageRendering: "auto",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    maxWidth: "120px",
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPartners;
