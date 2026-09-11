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
  const [isDesktop, setIsDesktop] = useState(false);

  // The scroll-scrubbed pin effect below is desktop-only. On mobile it
  // never tracked scroll position reliably (mobile browsers resize their
  // chrome mid-scroll, address bars, etc.), so mobile just gets a normal
  // in-flow section with a tap-to-switch accordion instead.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // The pinned card's height is auto (hugs its content) instead of a
  // forced 100svh, so it never has leftover blank space below the last
  // item. The scroll math needs the box's *actual* rendered height - both
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

  // Mobile: instead of scroll-driven switching, the zone auto-advances
  // every second (matches the reference site's behaviour - a plain timer,
  // not tied to scroll position at all). Tapping a title jumps straight to
  // it and resets the timer so it doesn't immediately flip away again.
  useEffect(() => {
    if (isDesktop) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % zones.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isDesktop, activeIndex]);

  const selectZone = (index) => setActiveIndex(index);

  // Scroll-scrubbed pin effect: a tall section with a sticky frame inside.
  // Scroll progress through the tall section drives which zone is active.
  // The scroll handler is rAF-throttled so the layout read
  // (getBoundingClientRect) never runs more than once per frame, which is
  // a common source of scroll jank. Desktop only - see isDesktop above.
  useEffect(() => {
    if (!isDesktop) return;

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
  }, [pinHeight, isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={
        isDesktop
          ? {
              height: pinHeight
                ? `${pinHeight * zones.length}px`
                : `${zones.length * 100}svh`,
            }
          : undefined
      }
    >
      <div
        ref={pinRef}
        className="flex w-full flex-col justify-start bg-white px-4 pb-10 md:sticky md:top-0 md:h-[100svh] md:justify-center md:overflow-hidden md:px-8 md:py-16"
      >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-1 text-center md:gap-2"
        >
          <p className="font-[Kanit] text-[13px] md:text-[16px] font-[500] uppercase leading-[18px] md:leading-[24px] text-[#4ab04a]">
            The Space
          </p>
          <h2 className="font-[Kanit] !text-[22px] md:!text-[40px] !font-[600] uppercase !leading-[26px] md:!leading-[46px] text-[#000]">
            Built To Be Seen. Built To Be Used
          </h2>
        </motion.div>

        {/* Desktop: description / image / title-list, three columns, driven
            by the scroll-pin effect above */}
        <div className="hidden md:flex md:flex-row md:items-start md:gap-12">
          <div className="md:block md:w-1/3 overflow-hidden">
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

          <div className="relative mx-auto h-auto w-full shrink-0 overflow-hidden rounded-[16px] md:w-1/3 md:max-w-[381px] md:aspect-[381/500]">
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
              <button
                key={zone.title}
                type="button"
                onClick={() => selectZone(index)}
                onMouseEnter={() => selectZone(index)}
                className={`py-4 text-left font-[Kanit] text-[36px] font-[600] uppercase leading-[1] transition-colors duration-200 cursor-pointer ${
                  index === activeIndex ? "text-[#4ab04a]" : "text-[#c4c4c4]"
                }`}
              >
                {zone.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single image + description that auto-advance through
            the zones every second, with a 2-column grid of titles that
            highlights whichever one is currently showing. Tapping a title
            jumps straight to it. */}
        <div className="flex flex-col gap-5 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto h-[270px] w-full overflow-hidden rounded-[16px]"
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={activeIndex}
                src={activeZone.image}
                alt={activeZone.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-2 gap-x-4 gap-y-3"
          >
            {zones.map((zone, index) => (
              <button
                key={zone.title}
                type="button"
                onClick={() => selectZone(index)}
                className={`text-left font-[Kanit] text-[16px] font-[600] uppercase leading-[1.2] transition-colors duration-200 cursor-pointer ${
                  index === activeIndex ? "text-[#4ab04a]" : "text-[#c4c4c4]"
                }`}
              >
                {zone.title}
              </button>
            ))}
          </motion.div>

          <div className="relative min-h-[60px]">
            <AnimatePresence mode="sync">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 font-[Kanit] text-[16px] leading-[24px] font-[300] text-[#000]"
              >
                {activeZone.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default GymZones;
