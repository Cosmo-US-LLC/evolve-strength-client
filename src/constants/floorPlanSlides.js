// Floor plan slides data for different locations and contexts

export const FLOOR_PLAN_SLIDES = {
  // Franchise page - shows all locations
  franchise: {
    heading: "Preferred Size Range: 20,000–35,000 SQ FT",
    description:
      "Includes: gym floor, training zones, sublease offices, locker rooms, and retail area",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide1.webp",
        alt: "Evolve Strength franchise floor plan - Vancouver Post location",
      },
      {
        id: 2,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide2.webp",
        alt: "Evolve Strength franchise floor plan - Brentwood location",
      },
    ],
  },

  // Vancouver Post location specific
  vancouverPost: {
    heading: "Gyms as Big as Your Goals",
    description:
      "Features: spacious gym floor, premium training zones, modern locker rooms, and retail space",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide2.webp",
        alt: "Evolve Strength Brentwood floor plan",
      },
    ],
  },

  // Brentwood location specific
  brentwood: {
    heading: "Gyms as Big as Your Goals",
    description:
      "Includes: comprehensive gym floor, specialized training areas, executive offices, and wellness retail",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide1.webp",
        alt: "Evolve Strength Vancouver Post floor plan",
      },
    ],
  },

  // Calgary Royal Oak location specific
  calgaryRoyalOak: {
    heading: "Calgary Royal Oak Location: 28,000 SQ FT",
    description:
      "Features: state-of-the-art equipment zones, group training spaces, and premium amenities",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide1.webp",
        alt: "Evolve Strength Calgary Royal Oak floor plan",
      },
    ],
  },

  // Calgary Seton location specific
  calgarySeton: {
    heading: "Calgary Seton Location: 32,000 SQ FT",
    description:
      "Includes: expansive fitness floor, dedicated wellness areas, and modern facility design",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide2.webp",
        alt: "Evolve Strength Calgary Seton floor plan",
      },
    ],
  },

  // Edmonton Downtown location specific
  edmontonDowntown: {
    heading: "Edmonton Downtown Location: 22,000 SQ FT",
    description:
      "Features: urban fitness design, premium training zones, and downtown accessibility",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide2.webp",
        alt: "Evolve Strength Edmonton Downtown floor plan",
      },
    ],
  },

  // Edmonton North location specific
  edmontonNorth: {
    heading: "Edmonton North Location: 26,000 SQ FT",
    description:
      "Includes: comprehensive fitness areas, community spaces, and northern Alberta accessibility",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide1.webp",
        alt: "Evolve Strength Edmonton North floor plan",
      },
    ],
  },

  // Edmonton South location specific
  edmontonSouth: {
    heading: "Edmonton South Location: 24,000 SQ FT",
    description:
      "Features: modern facility design, specialized training zones, and southern Edmonton convenience",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide2.webp",
        alt: "Evolve Strength Edmonton South floor plan",
      },
    ],
  },

  // Edmonton South Common location specific
  edmontonSouthCommon: {
    heading: "Edmonton South Common Location: 27,000 SQ FT",
    description:
      "Includes: premium fitness amenities, wellness services, and South Common accessibility",
    slides: [
      {
        id: 1,
        image:
          "/assets/images/franchise/EvolveFloorPlan/slide1.webp",
        alt: "Evolve Strength Edmonton South Common floor plan",
      },
    ],
  },
};

// Helper function to get floor plan data by location
export const getFloorPlanData = (location) => {
  return FLOOR_PLAN_SLIDES[location] || FLOOR_PLAN_SLIDES.franchise;
};

// Helper function to get slides by location (for backward compatibility)
export const getFloorPlanSlides = (location) => {
  const data = getFloorPlanData(location);
  return data.slides || data;
};
