import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import slide1 from "../../../../assets/images/franchise/Evolvelooklike/image_1.webp";
import slide2 from "../../../../assets/images/home/facility/image_2.webp";
import slide3 from "../../../../assets/images/home/facility/image_3.webp";
import slide4 from "../../../../assets/images/home/facility/royal_oak_9.webp";
import slide5 from "../../../../assets/images/home/facility/sunridge8.webp";
import slide6 from "../../../../assets/images/home/facility/image_6.webp";

const professionals = [
  { title: "Physiotherapy", image: slide1 },
  { title: "Pilates", image: slide2 },
  { title: "Massage Therapy", image: slide3 },
  { title: "Chiropractic Care", image: slide4 },
  { title: "Acupuncture", image: slide5 },
  { title: "Dietitian Services", image: slide6 },
];

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EvolveLookLike = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "keepSnaps",
      dragFree: false,
      startIndex: 0,
      inViewThreshold: 0.7,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__content");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0.75, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `scale(${scale})`;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);

    // Ensure we start at the first slide
    const timer = setTimeout(() => {
      emblaApi.scrollTo(0);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="md:py-12">
      <div className="relative flex flex-col gap-16">
        {/* Header */}
        <div className=" w-full max-w-[1280px] mx-auto md:px-8 px-4 md:flex md:items-end md:justify-between items-center justify-center mb-4">
          <div className="md:flex-1  flex flex-col gap-3">
            <h2 className="text-[#000] uppercase ">
              What Does Evolve Look Like?
            </h2>
            <h4 className="text-[#000] font-normal ">
              See how we bring it all together.
            </h4>
          </div>
          <div className="md:flex-1 flex items-start flex-col md:flex-row md:justify-end pt-3 md:pt-0 ">
            <Link to="/your-fitness-future">
                          <button className="btnPrimary">Apply Now</button>
                        </Link>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex flex-col items-center">
          <div className="overflow-x-hidden w-full" ref={emblaRef}>
            <div className="flex gap-1">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 transition-transform duration-300"
                  style={{
                    flex: "0 0 70%",
                    maxWidth: "70%",
                  }}
                >
                  <div className="embla__slide__content bg-white rounded-[10px] shadow-md md:h-[450px] h-[200px] flex items-center justify-center">
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-100 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-100 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolveLookLike;
