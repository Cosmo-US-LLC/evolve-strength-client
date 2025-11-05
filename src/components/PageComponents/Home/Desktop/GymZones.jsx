import React, { useEffect, useMemo, useRef, useState } from "react";

// Assets extracted from the selected Figma node (9690:546)
const imgCard8 = "http://localhost:3845/assets/ddd8260375e2222b1413174936b2dde2359e11d1.png";
const imgCard7 = "http://localhost:3845/assets/68bfe34fe598141c39c6e3bd14813cc4aca5c846.png";
const imgCard9 = "http://localhost:3845/assets/3cb28cfcd03d7d8e4cec9139ef226118e6bb93da.png";
const imgCard10 = "http://localhost:3845/assets/86c2d48aebd26121403cb128e98b45b0a615aabd.png";
const imgCard11 = "http://localhost:3845/assets/3cfce8f8da31e384ef2c59cbbf84d0b36e8680a3.png";
// Mobile arrow style per node 9690:1926
const iconPrev = "http://localhost:3845/assets/94148a9b25cf1cbc17ab111398e20ac3b778af64.svg";
const iconNext = "http://localhost:3845/assets/e4989f2fb2cdf87ec1f53e93fad0469ad701c31c.svg";

function GymZones() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = useMemo(
    () => [
      { title: "Machines Section", image: imgCard8 },
      { title: "Strength Training", image: imgCard7 },
      { title: "Olympic Lifting", image: imgCard9 },
      { title: "Cardio Zone", image: imgCard10 },
      { title: "Turf Area", image: imgCard11 },
    ],
    []
  );

  const scrollByAmount = (dir) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector("[data-zone-card]");
    const delta = (card?.clientWidth || 320) + 16; // card width + gap
    node.scrollBy({ left: dir * delta, behavior: "smooth" });
    const nextIndex = Math.max(0, Math.min(cards.length - 1, activeIndex + (dir > 0 ? 1 : -1)));
    setActiveIndex(nextIndex);
  };

  // Sync dot state with manual scroll/swipe
  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    const handler = () => {
      const card = node.querySelector("[data-zone-card]");
      const w = (card?.clientWidth || 320) + 16;
      const idx = Math.round(node.scrollLeft / w);
      if (idx !== activeIndex) setActiveIndex(Math.max(0, Math.min(cards.length - 1, idx)));
    };
    node.addEventListener("scroll", handler, { passive: true });
    return () => node.removeEventListener("scroll", handler);
  }, [activeIndex, cards.length]);

  return (
    <section className="bg-black text-white py-16 md:py-24" data-node-id="9690:546">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="uppercase font-[700] text-[28px] leading-[30px] md:text-[40px] md:leading-[39px]">
              Pump it. Run it. Lift it. Love it.
            </h2>
            <p className="mt-3 text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] text-white/80 max-w-[640px]">
              Dive into all the zones that make working out fun.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              aria-label="Previous"
              onClick={() => scrollByAmount(-1)}
              className="h-[46px] w-[46px] rounded-[23px] border border-white/30 grid place-items-center hover:border-white/70 transition"
            >
              <img src={iconPrev} alt="Prev" className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByAmount(1)}
              className="h-[46px] w-[46px] rounded-[23px] border border-white grid place-items-center hover:border-white/70 transition"
            >
              <img src={iconNext} alt="Next" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative">

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollSnapType: "x mandatory" }}
            onWheel={(e) => {
              // horizontal wheel support for trackpads
              if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
            }}
          >
            {cards.map((c, i) => (
              <article
                key={i}
                data-zone-card
                className="relative shrink-0 w-[80%] sm:w-[360px] md:w-[400px] h-[420px] md:h-[600px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={c.image} 
                  alt={c.title}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-4 md:p-6">
                  <h3 className="text-white text-[18px] md:text-[24px] font-[600] leading-tight">
                    {c.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile controls per design: centered below track with dots */}
          <div className="sm:hidden mt-6 flex items-center justify-center gap-6">
            <button
              aria-label="Previous"
              onClick={() => scrollByAmount(-1)}
              className="h-[42px] w-[42px] rounded-[21px] grid place-items-center border-[0.7px] border-white"
            >
              <img src={iconPrev} alt="Prev" className="h-[15px] w-[17px]" />
            </button>
            <div className="flex items-center gap-3">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={
                    "h-2 w-2 rounded-full " +
                    (i === activeIndex ? "bg-[#4ab04a]" : "bg-white/40")
                  }
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => scrollByAmount(1)}
              className="h-[42px] w-[42px] rounded-[21px] grid place-items-center border-[0.7px] border-white"
            >
              <img src={iconNext} alt="Next" className="h-[15px] w-[17px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GymZones;


