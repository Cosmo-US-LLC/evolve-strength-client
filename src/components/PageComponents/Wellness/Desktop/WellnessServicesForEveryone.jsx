import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const services = [
  { name: "Massage Therapy", image: "/path/to/massage.jpg" },
  { name: "Dietitian", image: "/path/to/dietitian.jpg" },
  { name: "Osteopathy", image: "/path/to/osteopathy.jpg" },
  { name: "Esthetician", image: "/path/to/esthetician.jpg" },
  { name: "Pilates", image: "/path/to/pilates.jpg" },
];

const WellnessServicesForEveryone = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    if (!thumbApi) return;
    thumbApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="relative w-full h-[600px] md:h-[700px]">
      {/* MAIN SLIDER */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative min-w-full h-[600px] md:h-[700px] transition-opacity duration-700"
              style={{
                opacity: selectedIndex === idx ? 1 : 0.5,
              }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-5xl font-extrabold uppercase">
                  {service.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM ARROWS */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="border border-white rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-white/20"
        >
          ←
        </button>
        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="border border-white rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-white/20"
        >
          →
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 overflow-hidden" ref={thumbRef}>
        <div className="flex gap-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`relative cursor-pointer rounded overflow-hidden border-2 ${
                selectedIndex === idx
                  ? "border-green-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs md:text-sm font-semibold">
                {service.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessServicesForEveryone;
