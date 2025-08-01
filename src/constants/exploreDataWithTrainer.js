// Updated explore data that references trainer IDs from centralized trainer data
// This approach eliminates data duplication and ensures consistency

import {
  TRAINER_IDS,
  getTrainersByLocation,
  getTrainersByIds,
} from "./trainerData.js";

// category images
import exploreLocations from "../assets/images/explore/discoverTWS/locations.webp";
import exploreWellness from "../assets/images/explore/discoverTWS/wellness.webp";
import exploreTrainers from "../assets/images/explore/discoverTWS/trainers.webp";

// icons
import AllIcon from "@/assets/images/explore/locations/all-icon.svg";
import ChiropracticIcon from "@/assets/images/explore/locations/chiropractic.svg";
import MassageTherapyIcon from "@/assets/images/explore/locations/message-therapy.svg";
import PilatesIcon from "@/assets/images/explore/locations/pilates.svg";
import AcupunctureIcon from "@/assets/images/explore/locations/acupuncture.svg";
import DietitianServicesIcon from "@/assets/images/explore/locations/dietitian-services.svg";
import EstheticianIcon from "@/assets/images/explore/locations/esthetician.svg";
import LaserTherapyIcon from "@/assets/images/explore/locations/laser-therapy.svg";
import OsteopathyIcon from "@/assets/images/explore/locations/osteopathy.svg";
import MentalHealthIcon from "@/assets/images/explore/locations/mental-health.svg";

import southHero from "../assets/images/Locations/location-hero/south.webp";
import northHero from "../assets/images/Locations/location-hero/north.webp";
import royalOakHero from "../assets/images/Locations/location-hero/royal-oak.webp";
import downtownHero from "../assets/images/Locations/location-hero/downtown.webp";
import sunridgeHero from "../assets/images/Locations/location-hero/sunridge.webp";
import brentwoodHero from "../assets/images/Locations/location-hero/brentwood.webp";
import postHero from "../assets/images/Locations/location-hero/post.webp";
import setonHero from "../assets/images/Locations/location-hero/seton.webp";

// Helper function to get trainer IDs for a location
const getTrainerIdsForLocation = (locationName) => {
  const trainers = getTrainersByLocation(locationName);
  return trainers.map((trainer) => trainer.id);
};

export const EXPLORE_DATA = [
  {
    id: "LOCATIONS",
    title: "LOCATIONS",
    description:
      "Evolve locations offer a variety of unique services. Find out what your location has to offer.",
    image: exploreLocations,
    type: "locations",
    data: [
      {
        id: "location-edmonton-south",
        city: "EDMONTON",
        branch: "SOUTH",
        locationTitle: "EDMONTON SOUTH",
        heroImage: southHero,
        details: "Details for EDMONTON SOUTH",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH"),
      },
      {
        id: "location-calgary-royal-oak",
        city: "CALGARY",
        branch: "ROYAL OAK",
        locationTitle: "CALGARY ROYAL OAK",
        heroImage: royalOakHero,
        details: "Details for CALGARY ROYAL OAK",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("CALGARY ROYAL OAK"),
      },
      {
        id: "location-edmonton-downtown",
        city: "EDMONTON",
        branch: "DOWNTOWN",
        locationTitle: "EDMONTON DOWNTOWN",
        heroImage: downtownHero,
        details: "Details for EDMONTON DOWNTOWN",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
      },
      {
        id: "location-calgary-seton",
        city: "CALGARY",
        branch: "SETON",
        locationTitle: "CALGARY SETON",
        heroImage: setonHero,
        details: "Details for CALGARY SETON",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("CALGARY SETON"),
      },
      {
        id: "location-calgary-sunridge",
        city: "CALGARY",
        branch: "SUNRIDGE",
        locationTitle: "CALGARY SUNRIDGE",
        heroImage: sunridgeHero,
        details: "Details for CALGARY SUNRIDGE",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("CALGARY SUNRIDGE"),
      },
      {
        id: "location-burnaby-brentwood",
        city: "BURNABY",
        branch: "BRENTWOOD",
        locationTitle: "BURNABY BRENTWOOD",
        heroImage: brentwoodHero,
        details: "Details for BURNABY BRENTWOOD",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("BURNABY BRENTWOOD"),
      },
      {
        id: "location-vancouver-post",
        city: "VANCOUVER",
        branch: "POST",
        locationTitle: "VANCOUVER POST",
        heroImage: postHero,
        details: "Details for VANCOUVER POST",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("VANCOUVER POST"),
      },
      {
        id: "location-edmonton-north",
        city: "EDMONTON",
        branch: "NORTH",
        locationTitle: "EDMONTON NORTH",
        heroImage: northHero,
        details: "Details for EDMONTON NORTH",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-chiropractic",
            name: "Chiropractic Care",
            icon: ChiropracticIcon,
          },
          {
            id: "service-massage",
            name: "Massage Therapy",
            icon: MassageTherapyIcon,
          },
          { id: "service-pilates", name: "Pilates", icon: PilatesIcon },
          {
            id: "service-acupuncture",
            name: "Acupuncture",
            icon: AcupunctureIcon,
          },
          {
            id: "service-dietitian",
            name: "Dietitian Services",
            icon: DietitianServicesIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("EDMONTON NORTH"),
      },
    ],
  },
  {
    id: "WELLNESS",
    title: "WELLNESS",
    description:
      "Discover our comprehensive wellness services designed to support your health journey.",
    image: exploreWellness,
    type: "wellness",
    data: [
      {
        id: "wellness-massage-therapy",
        name: "MASSAGE THERAPY",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
      {
        id: "wellness-chiropractic-care",
        name: "CHIROPRACTIC CARE",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
      {
        id: "wellness-personal-training",
        name: "PERSONAL TRAINING",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
      {
        id: "wellness-dietitian-services",
        name: "DIETITIAN SERVICES",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
      {
        id: "wellness-acupuncture",
        name: "ACUPUNCTURE",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
      {
        id: "wellness-laser-therapy",
        name: "LASER THERAPY",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
      {
        id: "wellness-mental-health",
        name: "MENTAL HEALTH SUPPORT",
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH").concat(
          getTrainerIdsForLocation("EDMONTON NORTH"),
          getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
          getTrainerIdsForLocation("CALGARY SETON"),
          getTrainerIdsForLocation("CALGARY ROYAL OAK"),
          getTrainerIdsForLocation("CALGARY SUNRIDGE"),
          getTrainerIdsForLocation("BURNABY BRENTWOOD"),
          getTrainerIdsForLocation("VANCOUVER POST")
        ),
      },
    ],
  },
  {
    id: "TRAINERS",
    title: "TRAINERS",
    description:
      "Explore certified personal trainers dedicated to helping you reach your fitness goals.",
    image: exploreTrainers,
    type: "trainers",
    data: null, // Will be populated from locations data
  },
];

// Helper functions
export const getDataByCategory = (categoryId) => {
  return EXPLORE_DATA.find((item) => item.id === categoryId);
};

export const getLocationById = (locationId) => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  return locationsData.find((location) => location.id === locationId);
};

export const getWellnessServiceById = (serviceId) => {
  const wellnessData =
    EXPLORE_DATA.find((item) => item.id === "WELLNESS")?.data || [];
  return wellnessData.find((service) => service.id === serviceId);
};

export const getTrainersForLocation = (locationId) => {
  const location = getLocationById(locationId);
  if (!location) return [];
  return getTrainersByIds(location.trainerIds);
};

export const getTrainersForWellnessService = (serviceId) => {
  const service = getWellnessServiceById(serviceId);
  if (!service) return [];
  return getTrainersByIds(service.trainerIds);
};

export const getAllLocations = () => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  return locationsData.map((location) => ({
    id: location.id,
    name: `${location.city} ${location.branch}`,
    city: location.city,
    branch: location.branch,
  }));
};

export const getAllWellnessServices = () => {
  const wellnessData =
    EXPLORE_DATA.find((item) => item.id === "WELLNESS")?.data || [];
  return wellnessData.map((service) => ({
    id: service.id,
    name: service.name,
  }));
};

export const getLocationTitle = (locationId) => {
  const location = getLocationById(locationId);
  return location?.locationTitle || "CALGARY SETON"; // fallback
};

// Get all trainers from all locations
export const getAllTrainers = () => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  const allTrainerIds = locationsData.flatMap(
    (location) => location.trainerIds
  );
  return getTrainersByIds(allTrainerIds);
};

// Get today's date for new trainers filter
export const getToday = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
};

export default EXPLORE_DATA;
