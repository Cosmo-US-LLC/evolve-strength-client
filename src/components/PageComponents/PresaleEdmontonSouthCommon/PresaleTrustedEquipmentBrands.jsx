import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function PresaleTrustedEquipmentBrands() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [emblaRef] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const equipmentImages = [
    {
      id: 1,
      src: "/assets/images/gym/image1.webp",
      alt: "Woman performing barbell squat with Eleiko equipment",
      brand: "Eleiko",
    },
    {
      id: 2,
      src: "/assets/images/gym/image2.webp",
      alt: "Woman using Technogym chest press machine",
      brand: "Technogym",
    },
    {
      id: 3,
      src: "/assets/images/gym/image3.webp",
      alt: "Man using Rogue air bike",
      brand: "Rogue",
    },
    {
      id: 4,
      src: "/assets/images/gym/image4.webp",
      alt: "Woman using Atlantis strength training machine",
      brand: "Atlantis",
    },
  ];

  const brandLogos = [
    {
      name: "Eleiko",
      logo: "/assets/images/gym/Eleiko.svg",
      alt: "Eleiko Logo",
    },
    {
      name: "Technogym",
      logo: "/assets/images/gym/TechnoGym.svg",
      alt: "Technogym Logo",
    },
    {
      name: "Rogue",
      logo: "/assets/images/gym/Rogue.svg",
      alt: "Rogue Logo",
    },
    {
      name: "Atlantis",
      logo: "/assets/images/gym/Atlantis.svg",
      alt: "Atlantis Logo",
    },
  ];

  return (
    <section className="bg-[#000] py-12 max-md:pb-0 w-full">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">
        {/* Header Section */}

        <div className="w-full flex flex-col md:flex-row md:gap-8 gap-1">
          <div className="w-[100%] md:w-[50%]">
            <h2 className="max-w-[500px] !leading-[39px] text-left font-bold text-[#fff] mb-3">
              TRUSTED EQUIPMENT <br className="max-md:hidden" /> BRANDS
            </h2>
          </div>
          <div className="w-[100%] md:w-[50%]">
            {/* <h4 className="text-lg text-[#000] leading-relaxed text-left ">
              Achieve your fitness goals in a space built for results. From
              Olympic-grade machines by top brands like Eleiko and Atlantis to
              fully equipped strength zones, Evolve gives you everything you
              need to train smarter and stronger.
            </h4> */}
          </div>
        </div>

        {/* Equipment Cards with Brand Logos */}
        {isMobile ? (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex  py-4 ">
              {equipmentImages.map((image, index) => {
                const brand = brandLogos[index];
                return (
                  <div
                    key={image.id}
                    className="w-[80%] px-2 h-[100%] flex-shrink-0"
                  >
                    <div className="bg-[#000] rounded-lg overflow-hidden">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-[100%] h-[100%] rounded-lg object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Brand Logo Below Image */}
                      <div className="py-4 bg-[#000] flex justify-center">
                        <img
                          src={brand.logo}
                          alt={brand.alt}
                          className="h-10 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row flex-wrap gap-5">
            {equipmentImages.map((image, index) => {
              const brand = brandLogos[index];
              return (
                <div
                  key={image.id}
                  className="flex-1 min-w-0 md:w-1/2 lg:w-1/4"
                >
                  <div className="bg-[#000] rounded-lg overflow-hidden">
                    {/* Equipment Image */}
                    <div className="relative h-[220px] rounded-lg  overflow-hidden flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-square h-full  object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    {/* Brand Logo Below Image */}
                    <div className="py-4 bg-[#000] flex justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.alt}
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default PresaleTrustedEquipmentBrands;
