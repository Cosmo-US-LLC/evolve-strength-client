import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

function PumpIt() {
  // const [hoveredZone, setHoveredZone] = useState("machines");

  const gymZones = [
    {
      id: "machines",
      title: "Machines Section",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/machines_bg.webp",
      description: "State-of-the-art selectorized equipment",
    },
    {
      id: "strength",
      title: "Strength Training",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/strength_training_bg.webp",
      description: "Power racks, squat cages, and free weights",
    },
    {
      id: "olympic",
      title: "Olympic Lifting",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/olympic_lifting_bg.webp",
      description: "Dedicated platforms for Olympic lifts",
    },
    {
      id: "cardio",
      title: "Cardio Zone",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/cardio_zone_bg.webp",
      description: "Treadmills, bikes, and rowing machines",
    },
    {
      id: "turf",
      title: "Turf Area",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/truf_area_bg.webp",
      description: "Functional training and agility work",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Reset autoplay after manual navigation
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Reset autoplay after manual navigation
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) {
        autoplayPlugin.stop();
        autoplayPlugin.play();
      }
    }
  }, [emblaApi]);

  const handleScroll = () => {
    const element = document.querySelector("#available-offices");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 0;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black py-20 ">
      <div className=" mb-12 max-w-[1280px] mx-auto px-6 md:px-8">
        <h2 className="text-[#fff] text-left  mb-4">
          PUMP IT. RUN IT. LIFT IT. LOVE IT.
        </h2>
        <h4 className="text-[#fff] text-left opacity-90">
          Dive into all the zones that make working out fun.
        </h4>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-7">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ">
            {gymZones.map((pro, idx) => (
              <div
                key={idx}
                className="pl-0.5 md:pl-2.5 w-fit basis-full md:basis-[28.57%] flex-shrink-0"
              >
                <div className="flex relative rounded-lg overflow-hidden">
                  {/* Desktop Image */}
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[600px] object-cover hidden md:block"
                  />
                  {/* Mobile Image */}
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className="w-full h-[380px] object-cover block md:hidden"
                  />
                  <h3 className="absolute px-4 bottom-[30px] left-0 right-0 flex items-center justify-start text-[#FFF] leading-[24px] font-[500]">
                    {pro.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -top-1/6 -translate-y-1/2 left-[90%] z-10 max-md:hidden">
          <button
            onClick={scrollPrev}
            className="bg-[#000] p-2 rounded-full border border-[#fff] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#000]"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute -top-1/6 -translate-y-1/2 right-[2%] z-10 max-md:hidden">
          <button
            onClick={scrollNext}
            className="bg-[#000] p-2 rounded-full border border-[#fff] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#000]"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div
          className="md:hidden pt-6 max-md:flex justify-center items-center space-x-2"
        >
          <div className=" ">
            <button
              onClick={scrollPrev}
              className="bg-[#000] p-2 rounded-full border border-[#fff] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#000]"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className=" ">
            <button
              onClick={scrollNext}
              className="bg-[#000] p-2 rounded-full border border-[#fff] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#000]"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PumpIt;
