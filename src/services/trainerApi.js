/**
 * Trainer API Service - Simplified
 * Direct API integration without static data dependencies
 */

const API_URL = "https://esuite-api.evolvestrength.ca/v1/trainers/public";

// Simple in-flight and cache maps to prevent duplicate network requests
const inFlightRequests = new Map(); // key -> Promise
const responseCache = new Map(); // key -> data array
let currentController = null; // Abort previous request when a new one starts

// Franchise ID to Location Name mapping
export const FRANCHISE_MAP = {
  7: "EDMONTON DOWNTOWN",
  8: "EDMONTON SOUTH",
  9: "EDMONTON NORTH",
  10: "CALGARY ROYAL OAK",
  11: "CALGARY SETON",
  12: "BURNABY BRENTWOOD",
  13: "VANCOUVER POST",
  14: "CALGARY SUNRIDGE",
};

export const FRANCHISE_OPTIONS = Object.entries(FRANCHISE_MAP)
  .map(([id, name]) => ({
    id: Number(id),
    name: name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const FRANCHISE_ID_BY_NAME = Object.entries(FRANCHISE_MAP).reduce(
  (acc, [id, name]) => {
    acc[name] = Number(id);
    return acc;
  },
  {}
);

export const TRAINER_ROLE_IDS = {
  PERSONAL_TRAINER: 16,
  WELLNESS_EXPERT: 17,
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

  // Keep full contacts array with type info for icon rendering
  const contactsWithTypes = contacts.map((c) => ({
    id: c.id,
    type: c.type,
    value: c.value,
  }));

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
    specialty: apiTrainer.specialty || null,
    image: apiTrainer.photo_url,
    bio: apiTrainer.bio || "",
    areas_of_focus: areasOfFocus,
    certification: certifications,
    email,
    phone,
    social_links: socialLinks,
    contacts: contactsWithTypes, // Full contacts array with type info
    franchise_id: apiTrainer.franchise_id,
  };
};

/**
 * Fetch all trainers from API
 */
const buildRequestBody = (filters = {}) => {
  if (!filters || typeof filters === "string") {
    return {};
  }

  const body = {};

  if (filters.franchise) {
    body["franchise"] = Number(filters.franchise);
  }

  if (filters.trainerRole) {
    body["trainer-role"] = Number(filters.trainerRole);
  }

  if (filters.areaOfFocus) {
    const areas = Array.isArray(filters.areaOfFocus)
      ? filters.areaOfFocus
      : [filters.areaOfFocus];
    body["area-of-focus"] = areas.filter(Boolean).map(String);
  }

  if (filters.service) {
    const services = Array.isArray(filters.service)
      ? filters.service
      : [filters.service];
    body["service"] = services.filter(Boolean).map(String);
  }

  return body;
};

export const fetchAllTrainers = async (params = "") => {
  try {
    const body = buildRequestBody(params);
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const transformed = data.map(transformTrainer);
    // Cache successful responses by request body
    // responseCache.set(cacheKey, transformed);
    return transformed;
  } catch (error) {
    // If aborted or failed, make sure not to cache the failure
    if (error?.name !== "AbortError") {
      console.error("❌ Error fetching trainers:", error);
    }
    throw error;
    // } finally {
    // Clear in-flight record
    // inFlightRequests.delete(cacheKey);
    // Clear controller if this is the latest
    // if (currentController === controller) {
    //   currentController = null;
    // }
  }
  // const body = buildRequestBody(params);
  // const cacheKey = JSON.stringify(body);

  // // Serve from cache if available
  // if (responseCache.has(cacheKey)) {
  //   return responseCache.get(cacheKey);
  // }

  // // If an identical request is already in flight, return the same promise
  // if (inFlightRequests.has(cacheKey)) {
  //   return inFlightRequests.get(cacheKey);
  // }

  // // Start a new request and store the promise to dedupe callers
  // // Abort any previous request (we only care about the latest query)
  // if (currentController) {
  //   try {
  //     currentController.abort();
  //   } catch (_) {
  //     // ignore
  //   }
  // }

  // const controller = new AbortController();
  // currentController = controller;
  // // const signal = controller.signal;

  // const requestPromise = (async () => {
  //   try {
  //     const response = await fetch(`${API_URL}`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //       // signal,
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     const transformed = data.map(transformTrainer);
  //     // Cache successful responses by request body
  //     // responseCache.set(cacheKey, transformed);
  //     return transformed;
  //   } catch (error) {
  //     // If aborted or failed, make sure not to cache the failure
  //     if (error?.name !== "AbortError") {
  //       console.error("❌ Error fetching trainers:", error);
  //     }
  //     throw error;
  //   } finally {
  //     // Clear in-flight record
  //     inFlightRequests.delete(cacheKey);
  //     // Clear controller if this is the latest
  //     if (currentController === controller) {
  //       currentController = null;
  //     }
  //   }
  // })();

  // inFlightRequests.set(cacheKey, requestPromise);
  // return requestPromise;
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
export const WELLNESS_SERVICES_DISCOVER = [
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
  {
    id: "wellness-pilates",
    name: "Pilates",
    role: "Pilates",
  },
];
export const TRAINER_SERVICES_DISCOVER = [
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
  {
    id: "wellness-pilates",
    name: "Pilates",
    role: "Pilates",
  },
];


