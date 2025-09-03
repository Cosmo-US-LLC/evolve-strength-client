import React from "react";

function WorkAtEvolve() {
  const benefits = [
    {
      title: "Rewarding",
      description:
        "Build your practice with the support of top facilities and a strong client base.",
    },
    {
      title: "Empowering",
      description:
        "Collaborate with a diverse team of professionals who help each other grow.",
    },
    {
      title: "Thriving",
      description:
        "Access opportunities to learn, connect, and expand your career.",
    },
  ];

  return (
    <section className="bg-black text-white">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-6">WORK AT EVOLVE STRENGTH</h1>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          At Evolve Strength, we're more than a gym, we're a community of
          trainers and health professionals working together to help people
          thrive.
        </p>
      </div>

      {/* Body Section - Two Columns */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Team Photo */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/wellness/wellness-4.webp"
                alt="Evolve Strength team of fitness and health professionals collaborating in a modern gym"
                className="w-full h-full object-cover"
              />
              {/* Overlay to enhance text readability if needed */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkAtEvolve;
