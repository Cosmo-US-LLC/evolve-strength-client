import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { professionalServices } from "../../../../constants/professionalServicesImages.js";

const WellnessServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "center",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const handleManualClick = (index) => {
    setActiveIndex(index);

    if (emblaApi) {
      emblaApi.scrollTo(index);

      emblaApi.plugins().autoplay?.play();
    }
  };

  useEffect(() => {
    if (activeIndex !== previousIndex) {
      const timer = setTimeout(() => {
        setPreviousIndex(activeIndex);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, previousIndex]);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);
      return () => emblaApi.off("select", onSelect);
    }
  }, [emblaApi]);

  useEffect(() => {
    professionalServices.forEach((service) => {
      const desktopImg = new Image();
      desktopImg.src = service.images.desktopImage;

      const mobileImg = new Image();
      mobileImg.src = service.images.mobileImage;
    });
  }, []);

  return (
    <div className="w-full md:py-12 max-md:pb-[48px] max-md:pt-0">
      <div className="relative flex flex-row items-center justify-center w-full min-h-[700px] max-md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out hidden md:block"
          style={{
            backgroundImage: `url(${professionalServices[previousIndex].images.desktopImage})`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out hidden md:block"
          style={{
            backgroundImage: `url(${professionalServices[activeIndex].images.desktopImage})`,
          }}
        />

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto flex flex-row items-center justify-between px-8 gap-10">
          <div className="max-w-xl space-y-8">
            <h2 className="uppercase text-[#ffffff]">
              WELLNESS SERVICES <br /> FOR EVERYONE.
            </h2>
            <p className="description leading-[20px] text-[#ffffff]">
              Take full advantage of a wide range of wellness <br /> services at
              every Evolve location, available at an <br /> additional cost.
            </p>
            <Link to="/explore?category=wellness">
              <button className="btnPrimary">FIND A WELLNESS EXPERT</button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 max-w-[500px]">
            {professionalServices.map((service, index) => {
              const isActive = index === activeIndex;
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleManualClick(index)}
                  className={`group relative w-[155px] h-[155px] flex flex-col items-center justify-center text-[#fff] backdrop-blur-[12px] rounded-[10px] cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/20 ring-2 ring-white"
                      : "bg-[#00000066] hover:bg-white/20 hover:ring-1 hover:ring-white/50"
                  }
                `}
                >
                  <div className="mb-2 text-[16px] font-[kanit] font-[500] leading-[16px] uppercase">
                    <IconComponent />
                  </div>
                  <div className="text-[16px] font-kanit font-[500] leading-[20px] uppercase text-[#fff] text-center px-[5px]">
                    {service.title}
                  </div>

                  {isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-md blur-xl opacity-50 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:hidden relative w-full min-h-[552px] flex flex-col px-[16px] py-[32px] justify-between items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out md:hidden"
          style={{
            backgroundImage: `url(${professionalServices[previousIndex].images.mobileImage})`,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out md:hidden"
          style={{
            backgroundImage: `url(${professionalServices[activeIndex].images.mobileImage})`,
          }}
        />

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 flex flex-col items-center w-full  gap-6">
          <h2 className="uppercase text-[#ffffff] font-bold">
            WELLNESS SERVICES FOR EVERYONE.
          </h2>
          <p className="description leading-[20px] text-[#ffffff] ">
            Take full advantage of a wide range of wellness services at every
            Evolve location, available at an additional cost.
          </p>
          <div className="flex justify-start w-full">
            <Link to="/explore?category=wellness">
              <button className="btnPrimary">FIND A WELLNESS EXPERT</button>
            </Link>
          </div>
        </div>
        <div className="relative w-full mt-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2 pl-2">
              {professionalServices.map((service, index) => {
                const isActive = index === activeIndex;
                const IconComponent = service.icon;

                return (
                  <div key={index} className="flex-[0_0_70%] min-w-0 px-2 py-4">
                    <div
                      className={`w-full min-h-[102px] px-3 rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative group overflow-hidden transition-all duration-300 transform ${
                        isActive ? "scale-110" : "scale-95"
                      }`}
                      onClick={() => handleManualClick(index)}
                    >
                      <div
                        className={`absolute inset-0 z-0 rounded-[10px] transition-all duration-300 ${
                          isActive
                            ? "bg-white/20 border-white ring-2 ring-white border"
                            : "bg-[#00000066]"
                        }`}
                      />

                      <div className="relative z-10 transition-colors duration-500 w-full text-center flex flex-col items-center justify-center gap-2">
                        <div
                          className={`mb-1 text-[20px] transition-all duration-200 ${
                            isActive ? "text-[#fff]" : "text-[#fff]"
                          }`}
                        >
                          <IconComponent />
                        </div>
                        <div className="text-[14px] font-kanit font-[400] leading-[20px] uppercase text-[#fff] text-center">
                          {service.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessServices;
