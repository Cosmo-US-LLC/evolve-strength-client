import React, { useState, useCallback } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

function LocationsHoverCard({ show, mousePosition, data, onClose }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!show || !data) return null;

  const images = data.images || [data.image]; // Fallback to single image if images array doesn't exist

  // Check if we're on mobile (clicked state with onClose handler)
  const isMobile = onClose && window.innerWidth < 768;

  return (
    <div
      className={`bg-[#fff] rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.16)] pointer-events-auto border border-[#E5E7EB] ${
        isMobile
          ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-[350px]"
          : "fixed z-50 max-w-[300px]"
      }`}
      style={
        !isMobile
          ? {
              left: mousePosition.x + 20,
              top: mousePosition.y - 20,
              transform: "translateY(-50%)",
            }
          : {}
      }
    >
      {/* Close Button - Only show when onClose is provided (clicked state) */}
      {onClose && (
        <button
          onClick={onClose}
          className={`absolute bg-black/50 hover:bg-black/70 text-white rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 z-20 ${
            isMobile ? "top-3 right-3 w-8 h-8" : "top-2 right-2 w-6 h-6"
          }`}
        >
          <X className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
        </button>
      )}

      <div
        className={`w-full rounded-t-[10px] overflow-hidden relative ${
          isMobile ? "h-[200px]" : "h-[183px]"
        }`}
      >
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img
                  src={image}
                  alt={`${data.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
                isMobile ? "w-10 h-10" : "w-8 h-8"
              }`}
            >
              <ChevronLeft className={isMobile ? "w-6 h-6" : "w-5 h-5"} />
            </button>
            <button
              onClick={scrollNext}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
                isMobile ? "w-10 h-10" : "w-8 h-8"
              }`}
            >
              <ChevronRight className={isMobile ? "w-6 h-6" : "w-5 h-5"} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>
      <div className={`flex flex-col gap-4 ${isMobile ? "p-4" : "px-4 pb-4"}`}>
        <p
          className={`font-kanit font-[600] leading-normal capitalize ${
            isMobile ? "text-[18px]" : "text-[16px]"
          }`}
        >
          {data.name}
        </p>
        <div className="flex items-start gap-3">
          <MapPin
            className={`mt-0.5 text-[#4AB04A] flex-shrink-0 ${
              isMobile ? "w-6 h-6" : "w-5 h-5"
            }`}
          />
          <p
            className={`font-kanit font-[400] leading-normal capitalize ${
              isMobile ? "text-[15px]" : "text-[14px]"
            }`}
          >
            {data.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LocationsHoverCard;
