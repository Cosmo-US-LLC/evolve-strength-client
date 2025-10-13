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
      <div className=" mb-12 max-w-[1280px] mx-auto px-4 md:px-8">
        <h2 className="text-[#fff] md:text-left text-center mb-4">
          PUMP IT. RUN IT. LIFT IT. LOVE IT.
        </h2>
        <h4 className="text-[#fff]  md:text-left text-center opacity-90">
          Dive into all the zones that make working out fun.
        </h4>
      </div>

      <div className="flex flex-col md:flex-row gap-5 max-w-[1280px] mx-auto md:px-8 px-4 h-auto md:h-96">
        {gymZones.map((zone, index) => (
          <div
            key={zone.id}
            className={`
              relative rounded-[5px] cursor-pointer transition-all duration-300 ease-out flex items-end
              ${
                hoveredZone === zone.id
                  ? "md:flex-[12] z-10 overflow-hidden"
                  : "md:flex-1 md:overflow-visible overflow-hidden"
              }
              ${hoveredZone === zone.id ? "h-96 md:h-full" : "h-14 md:h-full"}
              ${hoveredZone && hoveredZone !== zone.id ? "opacity-100" : ""}
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent md:px-6 px-3 md:py-6 py-3 text-[#FFF]">
              <h3
                className={`uppercase text-[#fff] z-10 tracking-wide  ${
                  hoveredZone === zone.id
                    ? "md:rotate-0 md:relative"
                    : "md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-6 md:left-10 md:whitespace-nowrap"
                }`}
              >
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
