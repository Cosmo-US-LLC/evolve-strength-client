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

  return (
    <div
      className="fixed z-50 bg-[#fff] rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.16)] max-w-[300px] pointer-events-auto border border-[#E5E7EB]"
      style={{
        left: mousePosition.x + 20,
        top: mousePosition.y - 20,
        transform: "translateY(-50%)",
      }}
    >
      {/* Close Button - Only show when onClose is provided (clicked state) */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-20"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <div className="w-full h-[183px] rounded-t-[10px] overflow-hidden relative">
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
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5" />
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
      <div className="px-4 pb-4 flex flex-col gap-4">
        <p className="text-[16px] font-kanit font-[600] leading-normal capitalize">
          {data.name}
        </p>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 mt-0.5 text-[#4AB04A] flex-shrink-0" />
          <p className="text-[14px] font-kanit font-[400] leading-normal capitalize">
            {data.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LocationsHoverCard;
