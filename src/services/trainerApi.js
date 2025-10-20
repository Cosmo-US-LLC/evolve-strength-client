/**
 * Trainer API Service - Simplified
 * Direct API integration without static data dependencies
 */

const API_URL = "https://esuite-api.evolvestrength.ca/v1/trainers/public";

// Franchise ID to Location Name mapping
const FRANCHISE_MAP = {
  7: "EDMONTON DOWNTOWN",
  8: "EDMONTON SOUTH",
  9: "EDMONTON NORTH",
  10: "CALGARY ROYAL OAK",
  11: "CALGARY SETON",
  12: "BURNABY BRENTWOOD",
  13: "VANCOUVER POST",
  14: "CALGARY SUNRIDGE",
};

/**
 * Transform API trainer data
 */
export const transformTrainer = (apiTrainer) => {
  const contacts = apiTrainer.contacts || [];
  const email = contacts.find((c) => c.type === "EMAIL")?.value || null;
  const phone = contacts.find((c) => c.type === "PHONE")?.value || null;
  const website = contacts.find((c) => c.type === "WEBSITE")?.value;
  const instagram = contacts.find((c) => c.type === "SOCIAL_IG")?.value;

  const socialLinks = [];
  if (website) socialLinks.push(website);
  if (instagram) socialLinks.push(instagram);

  const location =
    FRANCHISE_MAP[apiTrainer.franchise_id] ||
    apiTrainer.franchise?.name?.toUpperCase() ||
    "UNKNOWN";

  const areasOfFocus = (apiTrainer.focus_area || [])
    .map((area) => area.name)
    .join(", ");

  const certifications = (apiTrainer.certifications || [])
    .map((cert) => cert.name)
    .join(", ");

  // Determine roles: Use trainer_roles array, fallback to specialty
  let roles = [];
  if (apiTrainer.trainer_roles && apiTrainer.trainer_roles.length > 0) {
    // Get all trainer roles and trim whitespace
    roles = apiTrainer.trainer_roles.map((r) => r.name.trim());
  } else if (apiTrainer.specialty) {
    // Fallback to specialty if no trainer_roles
    roles = [apiTrainer.specialty];
  } else {
    roles = ["N/A"];
  }

  // Join all roles for display (e.g., "Personal Trainer, Wellness Expert")
  const roleDisplay = roles.join(", ");

  return {
    id: `${location.toLowerCase().replace(/\s+/g, "-")}-${apiTrainer.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    location,
    trainerName: apiTrainer.name,
    name: apiTrainer.name,
    role: roleDisplay, // ALL roles for display (comma-separated)
    roles: roles, // All roles array for filtering
    image: apiTrainer.photo_url,
    bio: apiTrainer.bio || "",
    areas_of_focus: areasOfFocus,
    certification: certifications,
    email,
    phone,
    social_links: socialLinks,
    franchise_id: apiTrainer.franchise_id,
  };
};

/**
 * Fetch all trainers from API
 */
export const fetchAllTrainers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map(transformTrainer);
  } catch (error) {
    console.error("❌ Error fetching trainers:", error);
    throw error;
  }
};

/**
 * Get trainers by location
 */
export const getTrainersByLocation = (trainers, locationName) => {
  return trainers.filter(
    (trainer) => trainer.location.toUpperCase() === locationName.toUpperCase()
  );
};

/**
 * Get trainers by role (checks ALL roles, not just primary)
 */
export const getTrainersByRole = (trainers, role) => {
  return trainers.filter((trainer) => {
    // Check if ANY of the trainer's roles includes the target role
    if (trainer.roles && Array.isArray(trainer.roles)) {
      return trainer.roles.some((r) =>
        r.toLowerCase().includes(role.toLowerCase())
      );
    }
    // Fallback to single role field
    return (
      trainer.role && trainer.role.toLowerCase().includes(role.toLowerCase())
    );
  });
};

/**
 * Get trainers by location and role (checks ALL roles, not just primary)
 */
export const getTrainersByLocationAndRole = (trainers, locationName, role) => {
  return trainers.filter((trainer) => {
    // Check location
    if (trainer.location.toUpperCase() !== locationName.toUpperCase()) {
      return false;
    }

    // Check if ANY of the trainer's roles includes the target role
    if (trainer.roles && Array.isArray(trainer.roles)) {
      return trainer.roles.some((r) =>
        r.toLowerCase().includes(role.toLowerCase())
      );
    }

    // Fallback to single role field
    return (
      trainer.role && trainer.role.toLowerCase().includes(role.toLowerCase())
    );
  });
};

/**
 * Get all unique locations from trainers
 */
export const getAllLocations = (trainers) => {
  const locations = [...new Set(trainers.map((t) => t.location))];
  return locations.sort();
};

/**
 * Predefined Areas of Focus list (standardized)
 */
export const PREDEFINED_AREAS_OF_FOCUS = [
  "Weight Loss",
  "Strength Training",
  "Hypertrophy",
  "Powerlifting",
  "Olympic Weightlifting",
  "Sports Performance",
  "Athletic Conditioning",
  "Injury Rehab",
  "Pain Management",
  "Mobility and Flexibility",
  "Posture",
  "Technique and Movement",
  "Nutrition and Lifestyle",
  "Women's Health",
  "Prenatal and Postnatal",
  "General Fitness",
  "Beginners",
  "Seniors and Special Populations",
  "Functional Fitness",
  "HIIT and CrossFit",
  "Combat Sports",
  "Allied Health",
];

/**
 * Get all areas of focus (returns predefined list)
 */
export const getAllAreasOfFocus = () => {
  return PREDEFINED_AREAS_OF_FOCUS;
};

/**
 * Get all unique areas of focus from trainers (dynamic from API)
 * Use this if you need to see what areas trainers actually have
 */
export const getAreasOfFocusFromTrainers = (trainers) => {
  const areasSet = new Set();

  trainers.forEach((trainer) => {
    if (trainer.areas_of_focus) {
      const areas = trainer.areas_of_focus.split(",").map((a) => a.trim());
      areas.forEach((area) => {
        if (area) areasSet.add(area);
      });
    }
  });

  return Array.from(areasSet).sort();
};

/**
 * Filter trainers by multiple criteria
 */
export const filterTrainers = (trainers, filters) => {
  let filtered = [...trainers];

  // Filter by location
  if (filters.location) {
    filtered = filtered.filter(
      (t) => t.location.toUpperCase() === filters.location.toUpperCase()
    );
  }

  // Filter by role (checks ALL roles, not just primary)
  if (filters.role) {
    filtered = filtered.filter((t) => {
      // Check if ANY of the trainer's roles includes the target role
      if (t.roles && Array.isArray(t.roles)) {
        return t.roles.some((r) =>
          r.toLowerCase().includes(filters.role.toLowerCase())
        );
      }
      // Fallback to single role field
      return (
        t.role && t.role.toLowerCase().includes(filters.role.toLowerCase())
      );
    });
  }

  // Filter by areas of focus
  if (filters.areasOfFocus && filters.areasOfFocus.length > 0) {
    filtered = filtered.filter((t) => {
      if (!t.areas_of_focus) return false;
      const trainerAreas = t.areas_of_focus.toLowerCase();
      return filters.areasOfFocus.some((area) =>
        trainerAreas.includes(area.toLowerCase())
      );
    });
  }

  return filtered;
};

/**
 * Location data configuration
 */
export const LOCATION_CONFIG = [
  {
    id: "location-vancouver-post",
    city: "VANCOUVER",
    branch: "POST",
    name: "VANCOUVER POST",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
  {
    id: "location-burnaby-brentwood",
    city: "BURNABY",
    branch: "BRENTWOOD",
    name: "BURNABY BRENTWOOD",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
  {
    id: "location-calgary-seton",
    city: "CALGARY",
    branch: "SETON",
    name: "CALGARY SETON",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
  {
    id: "location-calgary-royal-oak",
    city: "CALGARY",
    branch: "ROYAL OAK",
    name: "CALGARY ROYAL OAK",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
  {
    id: "location-edmonton-south",
    city: "EDMONTON",
    branch: "SOUTH",
    name: "EDMONTON SOUTH",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
  {
    id: "location-edmonton-downtown",
    city: "EDMONTON",
    branch: "DOWNTOWN",
    name: "EDMONTON DOWNTOWN",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
  {
    id: "location-edmonton-north",
    city: "EDMONTON",
    branch: "NORTH",
    name: "EDMONTON NORTH",
    services: [
      "Personal Trainer",
      "Esthetician",
      "Chiropractor",
      "Massage Therapist",
      "Physiotherapist",
      "Acupuncturist",
      "Dietitian",
      "Osteopath",
      "Laser Therapist",
      "Mental Health Professional",
    ],
  },
];

/**
 * Wellness services configuration
 */
export const WELLNESS_SERVICES = [
  { id: "wellness-esthetician", name: "Esthetician", role: "Esthetician" },
  {
    id: "wellness-chiropractic-care",
    name: "Chiropractic Care",
    role: "Chiropractor",
  },
  {
    id: "wellness-physiotherapy",
    name: "Physiotherapy",
    role: "Physiotherapist",
  },
  {
    id: "wellness-massage-therapy",
    name: "Massage Therapy",
    role: "Massage Therapist",
  },
  {
    id: "wellness-acupuncture",
    name: "Acupuncture",
    role: "Acupuncturist",
  },
  {
    id: "wellness-dietitian-services",
    name: "Dietitian Services",
    role: "Dietitian",
  },
  { id: "wellness-osteopathy", name: "Osteopathy", role: "Osteopath" },
  {
    id: "wellness-laser-therapy",
    name: "Laser Therapy",
    role: "Laser Therapist",
  },
  {
    id: "wellness-mental-health",
    name: "Mental Health",
    role: "Mental Health Professional",
  },
];
