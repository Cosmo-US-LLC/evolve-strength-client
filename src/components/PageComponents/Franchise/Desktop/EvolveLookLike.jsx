import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const EvolveLookLike = ({ slides, options }) => {
  const autoplay = useRef(
    Autoplay({ delay: 0, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true, ...options },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div
        className="overflow-hidden min-h-[400px]" // ✅ Consistent parent height
        ref={emblaRef}
      >
        <div className="embla__container flex items-center">
          {slides.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2   duration-500"
              style={{
                flex: "0 0 70%",
                maxWidth: "70%",
              }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={`w-full object-cover rounded transition-all duration-500 ${
                  index === selectedIndex ? "h-96" : "h-64 opacity-70"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default EvolveLookLike;
