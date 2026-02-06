import React from "react";
import Marquee from "react-fast-marquee";
import partnersImage1 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_image1.webp";
import partnersImage2 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_image2.webp";
import partnersImage3 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_image3.webp";
import partnersImage4 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_image4.webp";
import partnersImage5 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_image5.webp";
import partnersImage6 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_image6.webp";

import partnersLogo1 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_logo1.svg";
import partnersLogo2 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_logo2.svg";
import partnersLogo3 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_logo3.svg";
import partnersLogo4 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_logo4.svg";
import partnersLogo5 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_logo5.svg";
import partnersLogo6 from "../../../assets/images/PresaleEdmontonSouthCommon/partners/partners_logo6.svg";

const EQUIPMENT_PARTNERS = [
  {
    id: 1,
    name: "Newtech Strength Equipment",
    logo: partnersLogo1,
    backgroundImage: partnersImage1,
    alt: "Newtech Strength Equipment",
  },
  {
    id: 2,
    name: "Eleiko",
    logo: partnersLogo2,
    backgroundImage: partnersImage2,
    alt: "Eleiko",
  },
  {
    id: 3,
    name: "Technogym",
    logo: partnersLogo3,
    backgroundImage: partnersImage3,
    alt: "Technogym",
  },
  {
    id: 4,
    name: "Atlantis",
    logo: partnersLogo4,
    backgroundImage: partnersImage4,
    alt: "Atlantis",
  },
  {
    id: 5,
    name: "Precor",
    logo: partnersLogo5,
    backgroundImage: partnersImage5,
    alt: "Precor",
  },
  {
    id: 6,
    name: "Rogue",
    logo: partnersLogo6,
    backgroundImage: partnersImage6,
    alt: "Rogue",
  },
  {
    id: 7,
    name: "Newtech Strength Equipment",
    logo: partnersLogo1,
    backgroundImage: partnersImage1,
    alt: "Newtech Strength Equipment",
  },
  {
    id: 8,
    name: "Eleiko",
    logo: partnersLogo2,
    backgroundImage: partnersImage2,
    alt: "Eleiko",
  },
  {
    id: 9,
    name: "Technogym",
    logo: partnersLogo3,
    backgroundImage: partnersImage3,
    alt: "Technogym",
  },
  {
    id: 10,
    name: "Atlantis",
    logo: partnersLogo4,
    backgroundImage: partnersImage4,
    alt: "Atlantis",
  },
  {
    id: 11,
    name: "Precor",
    logo: partnersLogo5,
    backgroundImage: partnersImage5,
    alt: "Precor",
  },
  {
    id: 12,
    name: "Rogue",
    logo: partnersLogo6,
    backgroundImage: partnersImage6,
    alt: "Rogue",
  },
  {
    id: 13,
    name: "Newtech Strength Equipment",
    logo: partnersLogo1,
    backgroundImage: partnersImage1,
    alt: "Newtech Strength Equipment",
  },
  {
    id: 14,
    name: "Eleiko",
    logo: partnersLogo2,
    backgroundImage: partnersImage2,
    alt: "Eleiko",
  },
  {
    id: 15,
    name: "Technogym",
    logo: partnersLogo3,
    backgroundImage: partnersImage3,
    alt: "Technogym",
  },
  {
    id: 16,
    name: "Atlantis",
    logo: partnersLogo4,
    backgroundImage: partnersImage4,
    alt: "Atlantis",
  },
  {
    id: 17,
    name: "Precor",
    logo: partnersLogo5,
    backgroundImage: partnersImage5,
    alt: "Precor",
  },
  {
    id: 18,
    name: "Rogue",
    logo: partnersLogo6,
    backgroundImage: partnersImage6,
    alt: "Rogue",
  },
];

function PresaleTrustedEquipmentBrands() {
  return (
    <section className="bg-[#EEEEEE] py-12 md:py-16 w-full overflow-hidden">
      <div className="w-full flex flex-col items-center gap-8 md:gap-10">
        {/* Title - centered, uppercase, bold, black (Figma: OUR EQUIPMENT PARTNERS) */}
        <h2 className="text-[#000] text-center uppercase font-bold text-[28px] md:text-[36px] leading-tight tracking-tight px-4">
        Equipped Without Compromise
        </h2>

        {/* Marquee - horizontal partner cards with logo overlay on background image */}
        <div className="w-full overflow-hidden">
          <Marquee
            pauseOnHover
            speed={40}
            gradient={false}
            className="[&_.rfm-child]:flex [&_.rfm-child]:shrink-0 [&_.rfm-initial-child-container]:flex py-2"
          >
            {EQUIPMENT_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="relative shrink-0 w-[280px] md:w-[270px] h-[380px] md:h-[380px] rounded-2xl overflow-hidden mr-4 md:mr-6"
              >
                {/* Background image */}
                <img
                  src={partner.backgroundImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Dark overlay so white logo is visible */}
                <div
                  className="absolute inset-0 bg-black/5"
                  aria-hidden="true"
                />
                {/* Logo centered on card - white via filter for contrast */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-h-[80px] md:max-h-[100px] w-auto object-contain brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        
      </div>
    </section>
  );
}

export default PresaleTrustedEquipmentBrands;
