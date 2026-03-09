import React from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import spotCard1 from "../../../assets/images/SpacesCommon/spot_card_1.webp";
import spotCard2 from "../../../assets/images/SpacesCommon/spot_card_2.webp";
import spotCard3 from "../../../assets/images/SpacesCommon/spot_card_3.webp";
import spotCard4 from "../../../assets/images/SpacesCommon/spot_card_4.webp";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: spotCard1,
    alt: "South Edmonton Common front desk and lobby",
  },
  {
    id: 2,
    src: spotCard2,
    alt: "South Edmonton Common wellness corridor",
  },
  {
    id: 3,
    src: spotCard3,
    alt: "South Edmonton Common treatment rooms",
  },
  {
    id: 4,
    src: spotCard4,
    alt: "South Edmonton Common practitioners wall",
  },
];

function SpacesForSouthEdmontonCommonSecureSpot() {
  const handleScrollToForm = () => {
    const el = document.getElementById("join-south-common-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      className="bg-white w-full flex flex-col gap-10 md:gap-16 px-4 md:px-[100px] py-16 md:py-20"
      data-node-id="14338:857"
    >
      <div className="flex flex-col md:flex-row max-w-[1280px] mx-auto items-center md:items-stretch gap-10 md:gap-20">
        {/* Left: copy + CTA */}
        <div className="flex flex-col gap-8 items-start w-full md:max-w-[560px] max-w-full">
          <div className="flex flex-col gap-4 text-black w-full">
            <h2 className="uppercase leading-[1.2]">
              <span>Secure your spot in Edmonton&apos;s</span>
              <br className="hidden md:block" />
              <span>elite wellness hub</span>
            </h2>
            <p className="font-light !font-[Kanit] text-[14px] md:text-[18px] leading-[1.4] md:leading-[26px]">
              Availability at South Edmonton Common is strictly limited to
              ensure a balanced provider ecosystem.
            </p>
          </div>

          <div
            className="flex flex-col gap-3 items-start"
            data-name="CTA with text"
          >
            <Link
              onClick={handleScrollToForm}
              className="inline-flex btnPrimary w-fit text-white uppercase"
            >
              Submit Leasing Inquiry
            </Link>
            <p className="text-[16px] !font-[Kanit] leading-[24px] font-normal text-black">
              Limited suites are available
            </p>
          </div>
        </div>

        {/* Right: gallery strip */}
        <div className="w-full">
          {/* Desktop: shadcn Carousel (multiple cards visible) */}
          <div className="hidden md:block max-w-[560px]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
              }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4 h-[410px]">
                {GALLERY_IMAGES.map((img) => (
                  <CarouselItem
                    key={img.id}
                    className="pl-4 basis-[260px] md:basis-[280px]"
                  >
                    <div className="h-full rounded-[10px] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Mobile: shadcn Carousel gallery (full-width card for cleaner UI) */}
          <div className="md:hidden w-full max-w-[355px] mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 h-[340px]">
                {GALLERY_IMAGES.map((img) => (
                  <CarouselItem key={img.id} className="pl-4 basis-[300px]">
                    <div className="h-full rounded-[10px] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpacesForSouthEdmontonCommonSecureSpot;
