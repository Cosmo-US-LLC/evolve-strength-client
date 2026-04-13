import React, { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FLOOR_PLAN_SLIDES } from "@/constants/floorPlanSlides";

const EvolveFloorPlan = ({
  slides = FLOOR_PLAN_SLIDES.franchise.slides,
  heading = FLOOR_PLAN_SLIDES.franchise.heading,
  description = FLOOR_PLAN_SLIDES.franchise.description,
  videoSrc,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // ✅ Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ Scroll animation
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoSrc) return;
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, videoSrc]);

  useEffect(() => {
    if (!videoSrc) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [videoSrc]);

  return (
    <div className="pb-16 md:pt-[130px]">
      <div className="w-full max-w-[1280px] mx-auto md:px-8 px-4 flex md:flex-row flex-col gap-8 items-start">
        <div className="md:w-[40%] w-full flex flex-col gap-6 justify-center">
          <h2 className="text-[#000] uppercase font-[700] leading-[39px]">
            {heading}
          </h2>
          <p className="text-[#000] leading-[26px] font-[400] max-w-[368px]">
            {description}
          </p>
        </div>

        <div
          ref={sectionRef}
          className={`relative md:w-[60%] pt-10 md:pt-0 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-80 scale-95"
          }`}
        >
          <Carousel className="w-full">
            {slides.length > 1 && (
              <div className="absolute -top-[40px] right-[50px] flex z-10">
                <CarouselPrevious className="bg-[#fff] w-[42px] h-[42px] p-1 rounded-full hover:bg-gray-100" />
                <CarouselNext className="bg-[#fff] w-[42px] h-[42px] p-1 rounded-full hover:bg-gray-100" />
              </div>
            )}

            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  {videoSrc ? (
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="relative w-full group cursor-pointer focus:outline-none active:scale-95 transition-transform duration-150"
                      aria-label="Play video"
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
                        className="w-full rounded p-2"
                      />

                      {/* ✅ Overlay FIXED */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/0 md:bg-black/10 rounded transition-opacity duration-300
                        ${
                          isMobile
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`bg-white/90 rounded-full p-4 shadow-lg ${
                            isMobile ? "animate-pulse" : ""
                          }`}
                        >
                          <Play className="h-7 w-7 text-black fill-black" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
                      className="w-full rounded p-2"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {videoSrc && modalOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute cursor-pointer md:top-3 top-2 md:right-4 right-3 z-10 text-black hover:text-white hover:bg-black transition-colors bg-white rounded-full p-1"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              src={videoSrc}
              autoPlay
              controls
              className="w-full rounded-lg shadow-2xl"
              aria-label="Vancouver Post club video"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolveFloorPlan;

// import React, { useState, useEffect } from "react";
// import { Play, X } from "lucide-react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { FLOOR_PLAN_SLIDES } from "@/constants/floorPlanSlides";

// const EvolveFloorPlan = ({
//   slides = FLOOR_PLAN_SLIDES.franchise.slides,
//   heading = FLOOR_PLAN_SLIDES.franchise.heading,
//   description = FLOOR_PLAN_SLIDES.franchise.description,
//   videoSrc,
// }) => {
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     if (!videoSrc) return;
//     document.body.style.overflow = modalOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [modalOpen, videoSrc]);

//   useEffect(() => {
//     if (!videoSrc) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") setModalOpen(false);
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [videoSrc]);

//   return (
//     <div className="pb-16 md:pt-[130px]">
//       <div className="w-full max-w-[1280px] mx-auto md:px-8 px-4 flex md:flex-row flex-col gap-8 items-start">
//         <div className="md:w-[40%] w-full flex flex-col  gap-6 justify-center">
//           <h2 className="text-[#000] uppercase font-[700] leading-[39px]">
//             {heading}
//           </h2>
//           <p className="text-[#000] leading-[26px] font-[400] max-w-[368px]">
//             {description}
//           </p>
//         </div>

//         <div className="relative md:w-[60%] pt-10 md:pt-0">
//           <Carousel className="w-full">
//             {slides.length > 1 && (
//               <div className="absolute -top-[40px] right-[50px] flex z-10">
//                 <CarouselPrevious className="bg-[#fff] w-[42px] h-[42px] p-1 rounded-full hover:bg-gray-100" />
//                 <CarouselNext className="bg-[#fff] w-[42px] h-[42px] p-1 rounded-full hover:bg-gray-100" />
//               </div>
//             )}

//             <CarouselContent>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   {videoSrc ? (
//                     <button
//                       type="button"
//                       onClick={() => setModalOpen(true)}
//                       className="relative w-full group cursor-pointer focus:outline-none"
//                       aria-label="Play video"
//                     >
//                       <img
//                         src={slide.image}
//                         alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
//                         className="w-full rounded p-2"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
//                         <div className="bg-white/90 rounded-full p-4 shadow-lg">
//                           <Play className="h-8 w-8 text-black fill-black" />
//                         </div>
//                       </div>
//                     </button>
//                   ) : (
//                     <img
//                       src={slide.image}
//                       alt={slide.alt || `Evolve Floor Plan Slide ${slide.id}`}
//                       className="w-full rounded p-2"
//                     />
//                   )}
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div>
//       </div>
//       {videoSrc && modalOpen && (
//         <div
//           className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90"
//           onClick={() => setModalOpen(false)}
//         >
//           <div
//             className="relative w-[90vw] max-w-5xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               onClick={() => setModalOpen(false)}
//               className="absolute cursor-pointer md:top-3 top-2 md:right-4 right-3 z-10 text-black hover:text-white hover:bg-black transition-colors bg-white rounded-full p-1"
//               aria-label="Close video"
//             >
//               <X className="h-6 w-6" />
//             </button>
//             <video
//               src={videoSrc}
//               autoPlay
//               controls
//               className="w-full rounded-lg shadow-2xl"
//               aria-label="Vancouver Post club video"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EvolveFloorPlan;
