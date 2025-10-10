import React from "react";

function TrustedEquipmentBrands() {
  const equipmentImages = [
    {
      id: 1,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/eleiko_eq.webp",
      alt: "Woman performing barbell squat with Eleiko equipment",
      brand: "Eleiko",
    },
    {
      id: 2,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/tech_eq.webp",
      alt: "Woman using Technogym chest press machine",
      brand: "Technogym",
    },
    {
      id: 3,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/rogue_eq.webp",
      alt: "Man using Rogue air bike",
      brand: "Rogue",
    },
    {
      id: 4,
      src: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/atlantis_eq.webp",
      alt: "Woman using Atlantis strength training machine",
      brand: "Atlantis",
    },
  ];

  const brandLogos = [
    {
      name: "Eleiko",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Eleiko_logo.svg",
      alt: "Eleiko Logo",
    },
    {
      name: "Technogym",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/techno-gym-logo.svg",
      alt: "Technogym Logo",
    },
    {
      name: "Rogue",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/gym/rogue-logo.svg",
      alt: "Rogue Logo",
    },
    {
      name: "Atlantis",
      logo: "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/home/EquipmentPartners/Atlantis_logo.svg",
      alt: "Atlantis Logo",
    },
  ];

  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">
        {/* Header Section */}

        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-[50%]">
            <h2 className="text-4xl max-w-[500px] font-bold text-[#000] mb-5 tracking-wide leading-tight">
              TRUSTED EQUIPMENT BRANDS
            </h2>
          </div>
          <div className="w-[50%]">
            <h4 className="text-lg text-[#000] leading-relaxed ">
              Achieve your fitness goals in a space built for results. From
              Olympic-grade machines by top brands like Eleiko and Atlantis to
              fully equipped strength zones, Evolve gives you everything you
              need to train smarter and stronger.
            </h4>
          </div>
        </div>

        {/* Equipment Cards with Brand Logos */}
        <div className="flex flex-col md:flex-row flex-wrap gap-5">
          {equipmentImages.map((image, index) => {
            const brand = brandLogos[index];
            return (
              <div key={image.id} className="flex-1 min-w-0 md:w-1/2 lg:w-1/4">
                <div className="bg-white rounded-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                  {/* Equipment Image */}
                  <div className="relative rounded-lg aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Logo Below Image */}
                  <div className="py-4 bg-[#FFF] flex ">
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="h-10 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedEquipmentBrands;
