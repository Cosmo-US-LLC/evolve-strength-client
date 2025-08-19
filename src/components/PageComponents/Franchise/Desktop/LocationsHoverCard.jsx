import React, { useState, useCallback, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Improved mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Determine if we should show modal (mobile) or tooltip (desktop)
  const shouldShowModal = isMobile;

  return (
    <>
      {/* Modal for Mobile */}
      {shouldShowModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          style={{ touchAction: "none" }} // Prevent touch scrolling on modal
        >
          <div className="bg-white rounded-[10px] shadow-lg max-w-[350px] w-full max-h-[90vh] overflow-hidden ">
            {/* Close Button */}

            {/* Image Carousel */}
            <div className="w-full h-[200px] overflow-hidden relative">
              {onClose && (
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 z-20"
                  style={{ touchAction: "manipulation" }} // Optimize touch response
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex">
                  {images.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <img
                        src={image}
                        alt={`${data.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy" // Optimize image loading
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
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
                    style={{ touchAction: "manipulation" }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
                    style={{ touchAction: "manipulation" }}
                  >
                    <ChevronRight className="w-6 h-6" />
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

            {/* Content */}
            <div className="p-4">
              <p className="font-kanit font-[600] leading-normal capitalize text-[18px] mb-4">
                {data.name}
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-[#4AB04A] flex-shrink-0 w-6 h-6" />
                <p className="font-kanit font-[400] leading-normal capitalize text-[15px]">
                  {data.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tooltip for Desktop */}
      {!shouldShowModal && (
        <div
          className="fixed z-50 max-w-[300px] bg-[#fff] rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.16)] pointer-events-auto border border-[#E5E7EB]"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 20,
            transform: "translateY(-50%)",
            touchAction: "none", // Prevent touch interference on desktop
          }}
        >
          <div className="w-full rounded-t-[10px] overflow-hidden relative h-[183px]">
            {/* Close Button for Desktop */}
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 z-20"
                style={{ touchAction: "manipulation" }}
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <img
                      src={image}
                      alt={`${data.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
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
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 z-10"
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
          <div className="flex flex-col gap-4 px-4 pb-4">
            <p className="font-kanit font-[600] leading-normal capitalize text-[16px]">
              {data.name}
            </p>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-[#4AB04A] flex-shrink-0 w-5 h-5" />
              <p className="font-kanit font-[400] leading-normal capitalize text-[14px]">
                {data.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationsHoverCard;
