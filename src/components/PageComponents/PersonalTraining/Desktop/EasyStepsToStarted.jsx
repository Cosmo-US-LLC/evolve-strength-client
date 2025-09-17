import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function EasyStepsToStarted() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    skipSnaps: false,
    inViewThreshold: 0.9,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const steps = [
    {
      number: "1",
      title: "Pick a Location",
      description: "Choose from 7 Evolve gyms across Canada.",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/FreeAssessment/pick_location.webp",
    },
    {
      number: "2",
      title: "Join Evolve",
      description:
        "Sign up with a simple biweekly fee and unlock full gym access.",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/FreeAssessment/join_evolve.webp",
    },
    {
      number: "3",
      title: "Explore Trainers",
      description: "Browse personal trainers based on your goals.",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/FreeAssessment/explore_trainer.webp",
    },
    {
      number: "4",
      title: "Start Training",
      description: "Connect with your trainer and begin your journey.",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/PersonalTraning/FreeAssessment/start_training.webp",
    },
  ];

  const StepCard = ({ step }) => (
    <div className="flex flex-col items-center text-center p-5 rounded-[10px] bg-white md:shadow-lg-[#F9F9F9] md:shadow-xl min-w-0">
      <div className="w-12 h-12 rounded-full bg-[#4AB04A] text-[#fff] flex items-center justify-center text-[32px] leading-[32px] font-[600] mb-4">
        {step.number}
      </div>
      <h3 className="text-[24px] font-[600] text-[#000] mb-3 font-[kanit] leading-[25px]">
        {step.title}
      </h3>
      <p className="text-[#000] text-[16px] font-[300] leading-[24px] font-[kanit] mb-6">
        {step.description}
      </p>
      <div className="w-full h-60 rounded-lg overflow-hidden mt-auto">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );

  return (
    <section className="py-10 bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative">
        <h2 className="text-center text-[#000] mb-10">
          4 EASY STEPS TO GET STARTED
        </h2>

        {/* Desktop: Flexbox Layout */}
        <div className="hidden md:flex justify-between gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex-1">
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile: Embla Carousel */}
        <div className="md:hidden mb-8 relative rounded-[10px] bg-[#fff]">
          <div className="overflow-hidden w-full touch-pan-y" ref={emblaRef}>
            <div className="flex select-none -ml-1 will-change-transform">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-2.5 relative flex-shrink-0"
                >
                  <StepCard step={step} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden absolute bottom-[150px] right-[146px] z-10 flex gap-2">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="text-center mt-[70px]">
          <a href="/join-now/">
            <button className="btnPrimary mb-6">JOIN EVOLVE</button>
          </a>
          <p className="text-[#000] text-[16px] font-[300] leading-[24px] font-[kanit]">
            Not ready to commit?{" "}
            <Link
              to="https://tour.evolvestrength.ca/tour-form"
              className="text-[#4AB04A] font-[600] leading-[22px] font-[kanit] underline"
            >
              Book A Free Tour
            </Link>{" "}
            to see the facility and meet some of our trainers before you decide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EasyStepsToStarted;
