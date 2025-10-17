import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const gymCards = [
  {
    title: "Premium Equipment",
    description:
      "Train on top-of-the-line machines and free weights, all expertly maintained for smarter lifts and faster results.",
    video: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1760703686095-2b7f5707-b22c-41ab-b746-a1a23c6fa234.webm",
    videomobile:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1760632418364-2ae4dfc4-dbf7-4a7e-b6bf-514a32eadcba.mp4",
  },
  {
    title: "Room to Move",
    description:
      "Spacious, open training zones give you freedom to focus, move freely, and challenge your limits.",
    video: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1760703608053-568cac3d-912b-4505-99bb-84a94b9b79a6.webm",
     videomobile:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1760632354725-62c014a5-4988-4976-a834-89d492aa8c6b.mp4",
  },
  {
    title: "Atmosphere",
    description:
      "Stay motivated in a vibrant, inspiring space designed to energize and elevate every workout experience.",
    video: "https://evolve-strength.tor1.digitaloceanspaces.com/media/1760703643796-bfad9aab-51e1-4ed5-af09-1f804aff883b.webm",
     videomobile:"https://evolve-strength.tor1.digitaloceanspaces.com/media/1760632574411-b43edd39-e64a-46cc-8401-2b10f516aa6f.mp4",
  },
];

const WhatsMakeEvolveDiff = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultIndex = 0;
  const activeIndex = hoveredIndex !== null ? hoveredIndex : defaultIndex;

  // Mobile state - simplified like PersonalGymExperience
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  // Preload images
  useEffect(() => {
    gymCards.forEach((card) => {
      const img = new Image();
      img.src = card.bgImage;
    });
  }, []);

  // Handle mobile carousel selection with crossfade
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      if (idx !== selectedIndex) {
        setPreviousIndex(selectedIndex);
        setSelectedIndex(idx);
      }
    };

    emblaApi.on("select", onSelect);

    // Set initial index
    const initialIdx = emblaApi.selectedScrollSnap();
    setSelectedIndex(initialIdx);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, selectedIndex]);

  return (
    <div>
      <div className="space-y-[20px] py-12 text-center relative z-[9] max-w-[1280px] mx-auto flex flex-col justify-center items-center  h-full  px-4 md:px-8">
        <h2 className="!text-[#000] uppercase md:text-center text-left">What Makes Evolve Different</h2>
        <h4 className="!text-[#000] leading-[25px] md:text-center text-left max-w-[593px]">
          Evolve excels with its user-focused design and advanced technology,
          enhancing productivity and fostering teamwork in dynamic settings.
        </h4>
      </div>
      <div className="relative w-full overflow-hidden max-md:hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {gymCards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                key={card.video}
              >
                <source src={card.video} type="video/webm" />
              </video>
            </div>
          ))}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-row justify-start items-start min-h-[700px] px-8 pt-16">
          <div className="flex flex-col gap-4 w-[380px]">
            {gymCards.map((card, index) => {
              const isActive =
                hoveredIndex === index ||
                (hoveredIndex === null && index === 0);

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="p-6 rounded-r-[8px] flex flex-col gap-4 cursor-pointer relative group overflow-hidden transition-all duration-75 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 z-0 bg-[#ffffff] flex flex-col items-start justify-center transition-transform duration-75 ease-in-out ${
                      isActive ? "translate-x-0" : "-translate-x-full"
                    }`}
                  />

                  <div
                    className={`relative z-10 transition-colors duration-75 ${
                      isActive ? "text-[#000]" : "text-[#ffffff]"
                    }`}
                  >
                    <h2
                      className={`uppercase mb-3 !text-[30px] font-semibold transition-all duration-75 group-hover:translate-y-[-2px] group-hover:opacity-90 ${
                        isActive ? "text-[#000]" : "text-[#ffffff]"
                      }`}
                    >
                      {card.title}
                    </h2>
                    <h4
                      className={`leading-[24px] text-sm transition-all duration-75 group-hover:translate-y-[-1px] group-hover:opacity-90 ${
                        isActive ? "text-[#000]" : "text-[#ffffff]"
                      }`}
                    >
                      {card.description}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Carousel - Simplified like PersonalGymExperience */}
      <div className="md:hidden">
        
        <div className="relative w-full overflow-hidden min-h-[512px] flex flex-col">
         <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                key={gymCards[previousIndex].videomobile}
              >
                <source src={gymCards[previousIndex].videomobile} type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                key={gymCards[selectedIndex].videomobile}
              >
                <source src={gymCards[selectedIndex].videomobile} type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

          <div className="flex-1" />

          <div className="relative z-20 pb-2 pl-4">
            <div className="w-full" ref={emblaRef}>
              <div className="flex">
                {gymCards.map((card, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <div
                      key={index}
                      className="flex-[0_0_75vw] min-w-0 px-3 py-4"
                      onClick={() => {
                        if (emblaApi) {
                          emblaApi.scrollTo(index);
                          setPreviousIndex(selectedIndex);
                          setSelectedIndex(index);
                        }
                      }}
                    >
                      <div
                        className={`w-full min-h-[180px] px-4 py-4 rounded-[6px] flex flex-col justify-center gap-4 cursor-pointer relative group overflow-hidden transition-all duration-75 transform 
                          ${isSelected ? "scale-105" : "scale-95"}
                        `}
                      >
                        <div className="absolute inset-0 z-0 bg-[#ffffff] rounded-[10px]" />

                        <div className="relative z-10 transition-colors duration-75 w-full">
                          <h2 className="uppercase mb-3 text-[#1C1C1C] font-semibold">
                            {card.title}
                          </h2>
                          <p className="description leading-[24px] md:leading-[26px] text-[16px] text-[#000]">
                            {card.description}
                          </p>
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
    </div>
  );
};

export default WhatsMakeEvolveDiff;
