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
    <section className="bg-[#000] text-[#fff] py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-[529px]">WORK AT EVOLVE STRENGTH</h2>
          <h4 className="max-w-[578px]">
            At Evolve Strength, we're more than a gym, we're a community of
            trainers and health professionals working together to help people
            thrive.
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-auto md:h-[350px] rounded-[6px] overflow-hidden">
              <img
                src="https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/work_at_evolve.webp"
                alt="Evolve Strength team of fitness and health professionals collaborating in a modern gym"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <h3 className="mb-2 text-white">{benefit.title}</h3>
                <h4 className="max-w-[406px] text-gray-300">
                  {benefit.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkAtEvolve;
