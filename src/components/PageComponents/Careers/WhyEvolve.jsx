import React from "react";

function WhyEvolve() {
  const evolveCards = [
    {
      title: "Work Spaces",
      description:
        "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
      image: "/src/assets/images/wellness/wellness-1.webp",
    },
    {
      title: "Professional environment",
      description:
        "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
      image: "/src/assets/images/wellness/wellness-2.webp",
    },
    {
      title: "Growth-focused culture",
      description:
        "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
      image: "/src/assets/images/wellness/wellness-3.webp",
    },
      {
      title: "Work Spaces",
      description:
        "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
      image: "/src/assets/images/wellness/wellness-1.webp",
    },
    {
      title: "Professional environment",
      description:
        "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
      image: "/src/assets/images/wellness/wellness-2.webp",
    },
    {
      title: "Growth-focused culture",
      description:
        "Set up your practice in our vibrant wellness hubs, with flexible, spacious spaces for health professionals.",
      image: "/src/assets/images/wellness/wellness-3.webp",
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4 leading-tight">
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
