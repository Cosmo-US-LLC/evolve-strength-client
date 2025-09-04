import React from "react";

function JoinEvolveWithDreamTeam() {
  const openPositions = [
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
  ];

  return (
    <section className="bg-[#fff] py-14">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#000]">
                JOIN THE EVOLVE STRENGTH DREAM TEAM
              </h2>
              <h4 className="text-[#000]">
                Open Positions
              </h4>
            </div>

            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white p-4 rounded-[6px] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-[#000]">
                      {position.role}
                    </h4>
                    <h4 className="text-[#000]">
                      {position.location}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <button className="btnPrimary">
              JOIN NOW
            </button>
          </div>

          <div className="relative">
            <div className="relative h-auto rounded-[10px] overflow-hidden">
              <img
                src="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/join_evolve_dream_team.webp"
                alt="Fitness professional performing exercise in Evolve Strength gym with modern equipment and green turf floor"
                className="w-full h-full object-cover"
              />
      
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinEvolveWithDreamTeam;
