import React, { useEffect, useRef, useState } from "react";

import defaultVideo from "../../../../public/assets/videos/Default_Video.webm";
import strengthZoneVideo from "../../../../public/assets/videos/Strength_Zone.webm";
import cardioZoneVideo from "../../../../public/assets/videos/Cardio_Zone.webm";
import turfAreaVideo from "../../../../public/assets/videos/Turf_Area.webm";

const gymZones = [
  {
    title: "Strength Zone",
    video: strengthZoneVideo,
    number: 1,
  },
  {
    title: "Cardio Zone",
    video: cardioZoneVideo,
    number: 2,
  },
  {
    title: "Turf Area",
    video: turfAreaVideo,
    number: 3,
  },
];

function SouthEdmontonCommonGymZone() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const desktopActiveVideo =
    hoveredIndex === null ? defaultVideo : gymZones[hoveredIndex].video;

  /** Two-layer crossfade on desktop avoids remount flicker (gray gap under semi-transparent columns). */
  const [activeLayer, setActiveLayer] = useState(0);
  const [srcPair, setSrcPair] = useState([defaultVideo, defaultVideo]);
  const activeLayerRef = useRef(0);
  const pendingLayerRef = useRef(null);

  useEffect(() => {
    const next = desktopActiveVideo;
    const hidden = 1 - activeLayerRef.current;

    setSrcPair((prev) => {
      const alreadyThere = prev[hidden] === next;

      if (alreadyThere) {
        if (activeLayerRef.current !== hidden) {
          queueMicrotask(() => {
            setActiveLayer(hidden);
            activeLayerRef.current = hidden;
          });
        }
        pendingLayerRef.current = null;
        return prev;
      }

      pendingLayerRef.current = hidden;
      const copy = [...prev];
      copy[hidden] = next;
      return copy;
    });
  }, [desktopActiveVideo]);

  const handleLayerCanPlay = (layerIndex) => {
    if (pendingLayerRef.current !== layerIndex) return;
    setActiveLayer(layerIndex);
    activeLayerRef.current = layerIndex;
    pendingLayerRef.current = null;
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[400px] md:min-h-[800px]">
      {/* Desktop: crossfading pair (no key remount) */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden bg-black">
        <video
          src={srcPair[0]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => handleLayerCanPlay(0)}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
            activeLayer === 0 ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
          aria-hidden
        />
        <video
          src={srcPair[1]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => handleLayerCanPlay(1)}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
            activeLayer === 1 ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
          aria-hidden
        />
      </div>

      <div className="bg-black/30 hidden md:flex relative z-10 w-full flex-row justify-end items-end min-h-[800px]">
        {gymZones.map((zone, index) => (
          <div
            key={zone.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex-1 p-6 md:p-8 flex flex-col justify-end cursor-pointer relative group overflow-hidden transition-all duration-200 min-h-[800px] ${
              zone.number === 2 ? "border-x border-white/20" : ""
            }`}
          >
            <div className="relative z-10 flex w-full pb-12 flex-col justify-end">
              <h3 className="text-center !text-[20px] md:!text-[24px] font-[kanit] leading-[26px] md:leading-[24px] !font-[500] text-[#fff]">
                {zone.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: each zone is its own block with its video (no default video, no accordion) */}
      <div className="md:hidden flex flex-col w-full gap-[16px]">
        {gymZones.map((zone) => (
          <div
            key={zone.title}
            className="relative w-full min-h-[280px] overflow-hidden"
          >
            <video
              src={zone.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            />
            <div className="absolute inset-0 z-10 flex items-end justify-center bg-black/40 pb-8 pt-16 px-4">
              <h3 className="text-center text-[#fff] !text-[20px] font-[kanit] leading-[22px] font-[500]">
                {zone.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SouthEdmontonCommonGymZone;
