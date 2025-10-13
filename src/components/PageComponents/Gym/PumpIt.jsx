import React, { useState } from "react";

function PumpIt() {
  const [hoveredZone, setHoveredZone] = useState("machines");

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

  return (
    <div className="bg-black py-20 min-h-screen">
      <div className="text-left mb-15 max-w-[1280px] mx-auto px-4 md:px-8">
        <h2 className="text-6xl md:text-4xl font-black text-white mb-5 tracking-tight leading-tight">
          PUMP IT. RUN IT. LIFT IT. LOVE IT.
        </h2>
        <p className="text-xl text-white font-normal opacity-90">
          Dive into all the zones that make working out fun.
        </p>
      </div>

      <div className="flex gap-5 max-w-[1280px] mx-auto px-8 h-96">
        {gymZones.map((zone, index) => (
          <div
            key={zone.id}
            className={`
              relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out flex items-end
              ${hoveredZone === zone.id ? "flex-[12] z-10 " : "flex-1"}
              ${
                hoveredZone && hoveredZone !== zone.id
                  ? "opacity-30 grayscale"
                  : ""
              }
            `}
            onMouseEnter={() => setHoveredZone(zone.id)}
            onMouseLeave={() => setHoveredZone("machines")}
            style={{
              backgroundImage: `url(${zone.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-0">
                {zone.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PumpIt;
