import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


import { ArrowLeft, ArrowRight } from "lucide-react";

function TrustedEquipmentBrands() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  

 


   const [emblaRef, emblaApi] = useEmblaCarousel(
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
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/eleiko_eq.webp",
      alt: "Woman performing barbell squat with Eleiko equipment",
      brand: "Eleiko",
    },
    {
      id: 2,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/tech_eq.webp",
      alt: "Woman using Technogym chest press machine",
      brand: "Technogym",
    },
    {
      id: 3,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/rogue_eq.webp",
      alt: "Man using Rogue air bike",
      brand: "Rogue",
    },
    {
      id: 4,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/atlantis_eq.webp",
      alt: "Woman using Atlantis strength training machine",
      brand: "Atlantis",
    },
  ];

  const brandLogos = [
    {
      name: "Eleiko",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Eleiko_logo.svg",
      alt: "Eleiko Logo",
    },
    {
      name: "Technogym",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/techno-gym-logo.svg",
      alt: "Technogym Logo",
    },
    {
      name: "Rogue",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/rogue-logo.svg",
      alt: "Rogue Logo",
    },
    {
      name: "Atlantis",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Atlantis_logo.svg",
      alt: "Atlantis Logo",
    },
  ];

  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">
        {/* Header Section */}

        <div className="w-full flex flex-col md:flex-row md:gap-8 gap-1">
          <div className="w-[100%] md:w-[50%]">
            <h2 className="max-w-[500px] text-left  font-bold text-[#000] mb-3">
              TRUSTED EQUIPMENT BRANDS
            </h2>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <h4 className="text-lg text-[#000] leading-relaxed text-left ">
              Achieve your fitness goals in a space built for results. From
              Olympic-grade machines by top brands like Eleiko and Atlantis to
              fully equipped strength zones, Evolve gives you everything you
              need to train smarter and stronger.
            </h4>
          </div>
        </div>

        {/* Equipment Cards with Brand Logos */}
        {isMobile ? (

            <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex py-4">
             {equipmentImages.map((image, index) => {
                const brand = brandLogos[index];
                return (
                  <div key={image.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                      {/* Equipment Image */}
                      <div className="relative rounded-lg aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Brand Logo Below Image */}
                      <div className="py-4 bg-[#FFF] flex justify-center">
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
          // Mobile Slider
          // <div className="relative overflow-hidden">
          //   <div
          //     className="flex transition-transform duration-300 ease-in-out"
          //     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          //     onTouchStart={handleTouchStart}
          //     onTouchMove={handleTouchMove}
          //     onTouchEnd={handleTouchEnd}
          //   >
          //     {equipmentImages.map((image, index) => {
          //       const brand = brandLogos[index];
          //       return (
          //         <div key={image.id} className="w-full flex-shrink-0">
          //           <div className="bg-white rounded-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
          //             {/* Equipment Image */}
          //             <div className="relative rounded-lg aspect-square overflow-hidden">
          //               <img
          //                 src={image.src}
          //                 alt={image.alt}
          //                 className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          //                 loading="lazy"
          //               />
          //             </div>

          //             {/* Brand Logo Below Image */}
          //             <div className="py-4 bg-[#FFF] flex justify-center">
          //               <img
          //                 src={brand.logo}
          //                 alt={brand.alt}
          //                 className="h-10 w-auto object-contain"
          //                 loading="lazy"
          //               />
          //             </div>
          //           </div>
          //         </div>
          //       );
          //     })}
          //   </div>

          //   {/* Navigation Arrows */}
          //   <div className="flex justify-center gap-3 items-center ">
          //     <button
          //       onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          //       disabled={currentSlide === 0}
          //       className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
          //         currentSlide === 0
          //           ? "border-gray-300 text-gray-300 cursor-not-allowed"
          //           : "border-[#000] text-[#000] hover:bg-[#000] hover:text-white"
          //       }`}
          //       aria-label="Previous slide"
          //     >
          //       <ArrowLeft size={20} />
          //     </button>

          //     {/* <div className="flex items-center gap-2">
          //       <span className="text-sm text-gray-600">
          //         {currentSlide + 1} / {equipmentImages.length}
          //       </span>
          //     </div> */}

          //     <button
          //       onClick={() =>
          //         setCurrentSlide(
          //           Math.min(equipmentImages.length - 1, currentSlide + 1)
          //         )
          //       }
          //       disabled={currentSlide === equipmentImages.length - 1}
          //       className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
          //         currentSlide === equipmentImages.length - 1
          //           ? "border-gray-300 text-gray-300 cursor-not-allowed"
          //           : "border-[#000] text-[#000] hover:bg-[#000] hover:text-white"
          //       }`}
          //       aria-label="Next slide"
          //     >
          //       <ArrowRight size={20} />
          //     </button>
          //   </div>
          // </div>
        ) : (
          // Desktop Grid
          <div className="flex flex-col md:flex-row flex-wrap gap-5">
            {equipmentImages.map((image, index) => {
              const brand = brandLogos[index];
              return (
                <div
                  key={image.id}
                  className="flex-1 min-w-0 md:w-1/2 lg:w-1/4"
                >
                  <div className="bg-white rounded-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                    {/* Equipment Image */}
                    <div className="relative h-[490px] rounded-lg  overflow-hidden flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-square h-full  object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Brand Logo Below Image */}
                    <div className="py-4 bg-[#FFF] flex justify-center">
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

export default TrustedEquipmentBrands;
