import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
import partnerGlutebuilderBg from "@/assets/images/PresaleParkRoyal/partner_glutebuilder_bg.jpg";
import partnerGlutebuilderLogo from "@/assets/images/PresaleParkRoyal/partner_glutebuilder_logo.png";

const EQUIPMENT_PARTNERS_BASE = [
  {
    name: "Newtech Strength Equipment",
    logo: partnersLogo1,
    backgroundImage: partnersImage1,
    alt: "Newtech Strength Equipment",
  },
  {
    name: "Eleiko",
    logo: partnersLogo2,
    backgroundImage: partnersImage2,
    alt: "Eleiko",
  },
  {
    name: "Technogym",
    logo: partnersLogo3,
    backgroundImage: partnersImage3,
    alt: "Technogym",
  },
  {
    name: "Atlantis",
    logo: partnersLogo4,
    backgroundImage: partnersImage4,
    alt: "Atlantis",
  },
  {
    name: "Precor",
    logo: partnersLogo5,
    backgroundImage: partnersImage5,
    alt: "Precor",
  },
  {
    name: "Rogue",
    logo: partnersLogo6,
    backgroundImage: partnersImage6,
    alt: "Rogue",
  },
  {
    name: "Glutebuilder",
    logo: partnerGlutebuilderLogo,
    backgroundImage: partnerGlutebuilderBg,
    alt: "Glutebuilder",
  },
];

const EQUIPMENT_PARTNERS = [
  ...EQUIPMENT_PARTNERS_BASE,
  ...EQUIPMENT_PARTNERS_BASE,
  ...EQUIPMENT_PARTNERS_BASE,
].map((partner, index) => ({ ...partner, id: index + 1 }));

function PartnerCard({ partner, className = "" }) {
  return (
    <div
      className={`relative shrink-0 w-[280px] md:w-[270px] h-[380px] rounded-2xl overflow-hidden ${className}`.trim()}
    >
      <img
        src={partner.backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img
          src={partner.logo}
          alt={partner.alt}
          className="max-h-[80px] md:max-h-[100px] w-auto object-contain brightness-0 invert"
          loading="lazy"
        />
      </div>
    </div>
  );
}

const MARQUEE_PARTNERS = [...EQUIPMENT_PARTNERS, ...EQUIPMENT_PARTNERS, ...EQUIPMENT_PARTNERS];

function PresaleTrustedEquipmentBrands() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-[#EEEEEE] py-12 md:py-16 w-full overflow-hidden">
      <div className="w-full flex flex-col items-center gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <p className="uppercase font-[500] font-[Kanit] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4ab04a]">
            Equipped Without Compromise
          </p>
          <h2 className="text-[#000] text-center uppercase font-[Kanit] !font-[600] !text-[28px] md:!text-[40px] !leading-[34px] md:!leading-[46px]">
            Not The Alternative. The Standard
          </h2>
        </div>

        <div className="w-full overflow-hidden">
          {isMobile ? (
            /* Mobile: shadcn Carousel with autoplay */
            <div className="w-full px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  containScroll: "trimSnaps",
                  dragFree: false,
                }}
                plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                className="w-full flex gap-4"
              >
                <CarouselContent className="-ml-4 py-2">
                  {EQUIPMENT_PARTNERS.map((partner) => (
                    <CarouselItem
                      key={partner.id}
                      className="pl-4 basis-[300px] shrink-0 "
                    >
                      <PartnerCard partner={partner} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            /* Desktop: react-fast-marquee */
            <Marquee
              speed={40}
              gradient={false}
              pauseOnHover
              className="[&_.rfm-child]:flex [&_.rfm-child]:shrink-0 [&_.rfm-initial-child-container]:flex py-2"
            >
              {MARQUEE_PARTNERS.map((partner, index) => (
                <PartnerCard
                  key={`${partner.id}-${index}`}
                  partner={partner}
                  className="mr-4 md:mr-6"
                />
              ))}
            </Marquee>
          )}
        </div>
      </div>
    </section>
  );
}

export default PresaleTrustedEquipmentBrands;
