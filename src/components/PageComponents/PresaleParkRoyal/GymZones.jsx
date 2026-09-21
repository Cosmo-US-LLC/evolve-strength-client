import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

// Hosted directly (not bundled) at the client's request.
const strengthZoneWideImage =
  "https://assets.evolvestrength.ca/media/1789998073968-d1d03ed2-de7f-406f-be52-1da977681a8f.webp";
const cardioZoneWideImage =
  "https://assets.evolvestrength.ca/media/1789998096647-c8b82ddd-0ae3-4bfb-b8fc-fea0c944d5b1.webp";
const turfAreaWideImage =
  "https://assets.evolvestrength.ca/media/1789998507648-c8a91475-4100-4c92-9a4e-42deb6c9a821.webp";

// Desktop: one wide panoramic photo with the zone labels overlaid on it,
// hover-driven (see below). Mobile: an accordion of the same three zones,
// one photo card each, only one open (showing its description) at a time
// - both per the updated Figma.
const desktopZones = [
  {
    title: "Strength Zone",
    description:
      "Equip yourself with free weights, machines, and all the tools to build muscle and power.",
    image: strengthZoneWideImage,
  },
  {
    title: "Cardio Zone",
    description:
      "Stay active and boost endurance with treadmills, bikes, rowers, and more.",
    image: cardioZoneWideImage,
  },
  {
    title: "Turf Area",
    description:
      "Train functionally with open space for agility, HIIT, and dynamic workouts.",
    image: turfAreaWideImage,
  },
];

const GymZones = () => {
  // Desktop hover state for the single-photo zone layout below.
  const [hoveredDesktopIndex, setHoveredDesktopIndex] = useState(0);
  const activeDesktopZone = desktopZones[hoveredDesktopIndex];

  // Mobile accordion: only one zone card open (showing its description) at
  // a time. Starts with the first one open, matching the Figma default
  // state. Tapping an already-open card's toggle collapses it.
  const [openMobileIndex, setOpenMobileIndex] = useState(0);
  const toggleMobileZone = (index) => {
    setOpenMobileIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative">
      <div className="flex w-full flex-col justify-start bg-white pb-10 md:pb-0 md:pt-16">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 md:gap-8 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-1 text-center md:gap-2"
          >
            <p className="uppercase font-[500] font-[Kanit] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4ab04a]">
              The Space
            </p>
            <h2 className="uppercase text-center !text-[28px] md:!text-[40px] !font-[700] font-[Kanit] !leading-[34px] md:!leading-[39px] text-[#000]">
              Design To Be Seen. Built To Be Used
            </h2>
          </motion.div>
        </div>

        {/* Desktop: one wide panoramic photo, full viewport width and
            height (not constrained by the max-w-[1280px] content column
            above/below it), split into three hover columns (one per zone,
            matching where that zone actually sits in the photo). Each
            column carries its own name + (only when active) description,
            with a numbered badge pinned to the bottom. Hovering a column
            crossfades the photo to that zone - no auto-cycle, no
            scroll-pin. */}
        <div className="relative hidden w-full overflow-hidden md:mt-4 md:block md:h-screen">
          <AnimatePresence mode="sync">
            <motion.img
              key={hoveredDesktopIndex}
              src={activeDesktopZone.image}
              alt={activeDesktopZone.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient behind the overlay so text/markers stay legible over
              any part of the photo. */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-0 grid grid-cols-3">
            {desktopZones.map((zone, index) => {
              const isActive = index === hoveredDesktopIndex;
              return (
                <button
                  key={zone.title}
                  type="button"
                  onMouseEnter={() => setHoveredDesktopIndex(index)}
                  onFocus={() => setHoveredDesktopIndex(index)}
                  className="group flex cursor-pointer flex-col items-center justify-end gap-2 px-4 pb-6 text-center lg:pb-10"
                >
                  <span
                    className={`font-[Kanit] text-[16px] font-[600] uppercase leading-[1.1] transition-colors duration-200 lg:text-[20px] ${
                      isActive ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {zone.title}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="max-w-[220px] font-[Kanit] text-[16px] font-[300] leading-[26px] text-white/90 lg:max-w-[280px]"
                      >
                        {zone.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <span
                    className={`mt-6 font-[Kanit] text-[14px] font-[500] transition-colors duration-200 lg:mt-8 lg:text-[16px] ${
                      isActive ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: an accordion of the same three zones, one photo card
            each. Only one card is open (showing its description) at a
            time; tapping a card's toggle opens it and collapses whichever
            one was open, tapping the open one again collapses it too. */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 md:hidden">
          {desktopZones.map((zone, index) => {
            const isOpen = index === openMobileIndex;
            return (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                animate={{ height: isOpen ? 220 : 150 }}
                transition={{
                  opacity: { duration: 0.5, ease: "easeOut", delay: index * 0.08 },
                  y: { duration: 0.5, ease: "easeOut", delay: index * 0.08 },
                  height: { duration: 0.3, ease: "easeOut" },
                }}
                className="relative w-full overflow-hidden rounded-[16px]"
              >
                <img
                  src={zone.image}
                  alt={zone.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-[filter] duration-300 ${
                    isOpen ? "blur-[3px] scale-105" : "blur-0"
                  }`}
                />
                <div
                  className={`pointer-events-none absolute inset-0 transition-colors duration-300 ${
                    isOpen ? "bg-black/50" : "bg-black/40"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => toggleMobileZone(index)}
                  className="absolute inset-0 flex cursor-pointer flex-col justify-end p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-[Kanit] text-[16px] font-[600] uppercase leading-[1.1] text-white">
                      {zone.title}
                    </span>
                    <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full border border-white/70 text-white">
                      {isOpen ? (
                        <Minus className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden text-left font-[Kanit] text-[14px] font-[300] leading-[20px] text-white/90"
                      >
                        {zone.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GymZones;
