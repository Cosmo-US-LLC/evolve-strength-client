import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const professionals = [
  {
    title: "Physiotherapy",
    image:
      "/assets/images/franchise/Evolvelooklike/image_1.webp",
  },
  {
    title: "Pilates",
    image:
      "/assets/images/franchise/Evolvelooklike/image_2.webp",
  },
  {
    title: "Massage Therapy",
    image:
      "/assets/images/franchise/Evolvelooklike/image_3.webp",
  },
  // {
  //   title: "Chiropractic Care",
  //   image:
  //     "/assets/images/franchise/Evolvelooklike/image_4.webp",
  // },
  {
    title: "Acupuncture",
    image:
      "/assets/images/franchise/Evolvelooklike/image_5.webp",
  },
  {
    title: "Dietitian Services",
    image:
      "/assets/images/franchise/Evolvelooklike/image_6.webp",
  },
];

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const Evolvegallery = ({ imageRadious, slidesGap, buttonsTop, slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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
        const scale = numberWithinRange(tweenValue, slidesGap, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `scale(${scale})`;
        }
      });
    });
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    // Set up scroll snaps for pagination
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);

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
        <div className=" w-full max-w-[1280px] mx-auto md:px-8 px-4 md:flex md:items-center md:justify-center items-center justify-center mb-4">
          <div className="md:flex-1  flex flex-col gap-3">
            <h2 className="text-[#000] md:text-center text-left uppercase ">
              Evolve gallery
            </h2>
            <h4 className="text-[#000] max-w-[611px] mx-auto md:text-center text-left font-normal ">
              Welcome to our gym gallery, where fitness meets innovation!
              Explore a vibrant space designed to inspire and motivate.
            </h4>
          </div>
        </div>

        {/* Slider */}
        <div className="relative flex flex-col items-center">
          <div className="overflow-hidden w-full max-w-full" ref={emblaRef}>
            <div className="flex">
              {(slides ? slides : professionals).map((pro, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_73%] md:flex-[0_0_73%] min-w-0 pl-0 md:pl-4 first:pl-0"
                >
                  <div className="embla__slide w-full">
                    <div
                      className={`embla__slide__content bg-white shadow-md md:h-[600px] h-[180px] flex items-center justify-center overflow-hidden mx-1 md:mx-2`}
                      style={{ borderRadius: imageRadious }}
                    >
                      <img
                        src={pro.image}
                        alt={pro.title}
                        className={`w-full h-full object-cover`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div
            className={`flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 ${buttonsTop}`}
          >
            <button
              onClick={scrollPrev}
              className="w-10 h-10 max-md:w-[40px] max-md:h-[40px] cursor-pointer md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-[#000] text-black hover:text-white rounded-full border-[1px] border-[#000] transition-colors duration-200"
            >
              <ArrowLeft size={18} className="stroke-current" />
            </button>

            {/* Pagination Dots */}
            {/* <div className="flex gap-2 md:hidden">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-black "
                      : "bg-black/30"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div> */}

            <button
              onClick={scrollNext}
              className="w-10 h-10 max-md:w-[40px] max-md:h-[40px] cursor-pointer md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-[#000] text-black hover:text-white rounded-full border-[1px] border-[#000] transition-colors duration-200"
            >
              <ArrowRight size={18} className="stroke-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolvegallery;
