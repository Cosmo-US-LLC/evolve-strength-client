import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1514512364185-4c2b678c5a16?auto=format&fit=crop&w=800&q=80",
];

function EvolveLookLike() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef();

  // Auto-slide
  useEffect(() => {
    if (!emblaApi) return;
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [emblaApi, isHovered]);

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Helper to determine slide type
  const getSlideType = (idx) => {
    if (idx === selectedIndex) return "center";
    if (idx === (selectedIndex - 1 + images.length) % images.length)
      return "left";
    if (idx === (selectedIndex + 1) % images.length) return "right";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            WHAT DOES EVOLVE LOOK LIKE?
          </h2>
          <p className="text-lg text-gray-600">
            See how we bring it all together.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all">
          APPLY NOW
        </button>
      </div>
      {/* Embla Carousel */}
      <div
        className="mb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((img, idx) => {
              const slideType = getSlideType(idx);
              let flexClass = "flex-[0_0_0%]";
              let scale = 0.7;
              let z = "z-0";
              let opacity = "opacity-0";
              if (slideType === "center") {
                flexClass = "flex-[0_0_44%]";
                scale = 1;
                z = "z-10";
                opacity = "opacity-100";
              } else if (slideType === "left" || slideType === "right") {
                flexClass = "flex-[0_0_28%]";
                scale = 0.85;
                z = "z-5";
                opacity = "opacity-60";
              }
              return (
                <div
                  key={img}
                  className={`px-2 transition-all duration-300 ${flexClass} ${z} ${opacity}`}
                  style={{
                    transform: `scale(${scale})`,
                  }}
                >
                  <div
                    className={`rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden mx-auto transition-all duration-300`}
                    style={{
                      width: "100%",
                      aspectRatio: slideType === "center" ? "16/9" : "4/5",
                      height: slideType === "center" ? 320 : 180,
                    }}
                  >
                    <img
                      src={img}
                      alt="Evolve slide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Carousel Controls */}
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
          aria-label="Previous"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
          aria-label="Next"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default EvolveLookLike;
