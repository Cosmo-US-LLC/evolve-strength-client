import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theSpaceImage from "@/assets/images/PresaleParkRoyal/the_space.jpg";
import turfRecoveryImage from "@/assets/images/PresaleParkRoyal/turf_recovery.jpg";
import cardioZoneImage from "@/assets/images/PresaleParkRoyal/cardio_zone.jpg";
import recoverySuiteImage from "@/assets/images/PresaleParkRoyal/recovery_suite.jpg";

const zones = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    image: theSpaceImage,
  },
  {
    title: "Cardio Zone",
    description:
      "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    image: cardioZoneImage,
  },
  {
    title: "Turf Area",
    description:
      "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    image: turfRecoveryImage,
  },
  {
    title: "Recovery Suite",
    description:
      "Recover faster, stay injury-free, and recharge with our full range of recovery services.",
    image: recoverySuiteImage,
  },
];

const GymZones = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeZone = zones[activeIndex];
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const [pinHeight, setPinHeight] = useState(0);

  // The pinned card's height is auto (hugs its content) on mobile instead
  // of a forced 100svh, so it never has leftover blank space below the
  // last item; on desktop it's still forced to 100svh via CSS. Either
  // way, the scroll math needs the box's *actual* rendered height - both
  // for how tall the scroll track needs to be (zones.length * pinHeight)
  // and for when to advance to the next zone - so it's measured directly
  // off the element rather than assumed from the viewport.
  useEffect(() => {
    const measure = () => {
      if (pinRef.current) setPinHeight(pinRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    window.visualViewport?.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.visualViewport?.removeEventListener("resize", measure);
    };
  }, []);

  // Scroll-scrubbed pin effect: a tall section with a sticky frame inside.
  // Scroll progress through the tall section drives which zone is active.
  // The scroll handler is rAF-throttled so the layout read
  // (getBoundingClientRect) never runs more than once per frame, which is
  // a common source of scroll jank.
  useEffect(() => {
    let ticking = false;

    const computeActiveIndex = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el || !pinHeight) return;

      const rect = el.getBoundingClientRect();
      const scrollableHeight = rect.height - pinHeight;
      if (scrollableHeight <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableHeight);
      const progress = scrolled / scrollableHeight;
      const index = Math.min(
        zones.length - 1,
        Math.floor(progress * zones.length)
      );

      setActiveIndex((prev) => (prev === index ? prev : index));
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(computeActiveIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pinHeight]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        height: pinHeight
          ? `${pinHeight * zones.length}px`
          : `${zones.length * 100}svh`,
      }}
    >
      <div
        ref={pinRef}
        className="sticky top-0 flex h-[100svh] w-full flex-col justify-start md:justify-center overflow-y-auto bg-white px-4 pt-[76px] pb-2 md:overflow-hidden md:px-8 md:py-16"
      >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center gap-1 text-center md:gap-2">
          <p className="font-[Kanit] text-[13px] md:text-[16px] font-[500] uppercase leading-[18px] md:leading-[24px] text-[#4ab04a]">
            The Space
          </p>
          <h2 className="font-[Kanit] !text-[22px] md:!text-[40px] !font-[600] uppercase !leading-[26px] md:!leading-[46px] text-[#000]">
            Built To Be Seen. Built To Be Used
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
          <div className="hidden md:block md:w-1/3 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-[Kanit] text-[18px] font-[300] leading-[26px] text-[#000]"
              >
                {activeZone.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative mx-auto h-[270px] w-full shrink-0 overflow-hidden rounded-[16px] md:h-auto md:w-1/3 md:max-w-[381px] md:aspect-[381/500]">
            <AnimatePresence mode="sync">
              <motion.img
                key={activeIndex}
                src={activeZone.image}
                alt={activeZone.title}
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="flex w-full flex-col md:w-1/3 divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
            {zones.map((zone, index) => (
              <div key={zone.title} className="flex flex-col overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`py-2 md:py-4 text-left font-[Kanit] text-[18px] md:text-[36px] font-[600] uppercase leading-[1.15] md:leading-[1] transition-colors duration-200 cursor-pointer ${
                    index === activeIndex ? "text-[#4ab04a]" : "text-[#c4c4c4]"
                  }`}
                >
                  {zone.title}
                </button>
                <AnimatePresence initial={false}>
                  {index === activeIndex && (
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="pb-2 font-[Kanit] text-[16px] leading-[24px] font-[300] text-[#000] md:hidden"
                    >
                      {zone.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default GymZones;
