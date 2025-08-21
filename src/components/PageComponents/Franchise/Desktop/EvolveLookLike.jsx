import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const professionals = [
  {
    title: "Physiotherapy",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/Evolvelooklike/image_1.webp",
  },
  {
    title: "Pilates",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/Evolvelooklike/image_2.webp",
  },
  {
    title: "Massage Therapy",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/Evolvelooklike/image_3.webp",
  },
  {
    title: "Chiropractic Care",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/Evolvelooklike/image_4.webp",
  },
  {
    title: "Acupuncture",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/Evolvelooklike/image_5.webp",
  },
  {
    title: "Dietitian Services",
    image:
      "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/franchise/Evolvelooklike/image_6.webp",
  },
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
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
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

  return (
    <section className="md:py-12 py-8">
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
          <div className="overflow-hidden w-full max-w-full" ref={emblaRef}>
            <div className="flex">
              {professionals.map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_70%] md:flex-[0_0_70%] min-w-0 pl-2 md:pl-4 first:pl-0"
                >
                  <div className="embla__slide w-full">
                    <div className="embla__slide__content bg-white rounded-[10px] shadow-md md:h-[450px] h-[220px] flex items-center justify-center overflow-hidden mx-1 md:mx-2">
                      <img
                        src={pro.image}
                        alt={pro.title}
                        className="w-full h-full object-cover rounded-[10px]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-100 transition-all"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-100 transition-all"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolveLookLike;
