import React from "react";

function JoinEvolveWithDreamTeam() {
  const openPositions = [
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
    { role: "Fitness Coaching", location: "Edmonton Downtown" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Job Listings */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                JOIN THE EVOLVE STRENGTH DREAM TEAM
              </h2>
              <h3 className="text-2xl font-semibold text-black mb-8">
                Open Positions
              </h3>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-800">
                      {position.role}
                    </span>
                    <span className="text-lg font-medium text-gray-800">
                      {position.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <button className="w-full lg:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              JOIN NOW
            </button>
          </div>

          {/* Right Column - Action Photo */}
          <div className="relative">
            <div className="relative h-96 lg:h-[600px] rounded-t-lg overflow-hidden">
              <img
                src="/src/assets/images/wellness/wellness-5.webp"
                alt="Fitness professional performing exercise in Evolve Strength gym with modern equipment and green turf floor"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay to enhance the image */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinEvolveWithDreamTeam;
