import React from "react";

function WhyEvolve() {
  const evolveCards = [
    {
      title: "Work Spaces",
      description:
        "Modern, flexible hubs for health pros.",
      image: "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/work_spaces.webp",
    },
    {
      title: "Professional environment",
      description:
        "Collaborate and grow with experts.",
      image: "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/professional_environment.webp",
    },
    {
      title: "Growth-focused culture",
      description:
        "A network that drives success.",
      image: "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/groth_culture.webp",
    },
      {
      title: "Premium Equipment",
      description:
        "Top-tier tools at your fingertips.",
      image: "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/premium_equiqment.webp",
    },
    {
      title: "Flexibility & Independence",
      description:
        "Set your own schedule.",
      image: "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/flexibility.webp",
    },
    {
      title: "Strong Community",
      description:
        "Thrive with like-minded professionals.",
      image: "https://tor1.digitaloceanspaces.com/evolve-strength/assets/images/careers/careersHero/strong_community.webp",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <h2 className="text-[#000] mb-8 text-left">
          WHY EVOLVE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {evolveCards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="relative h-60 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 flex flex-col justify-end px-8 py-4 text-white">
                  <h3 className="text-2xl font-semibold mb-1 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-95">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyEvolve;
