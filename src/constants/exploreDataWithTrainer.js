// Updated explore data that references trainer IDs from centralized trainer data
// This approach eliminates data duplication and ensures consistency

import {
  TRAINER_IDS,
  getTrainersByLocation,
  getTrainersByIds,
  getAvailableLocations,
} from "./trainerData.js";

// category images
import exploreLocations from "../assets/images/explore/discoverTWS/locations.webp";
import exploreWellness from "../assets/images/explore/discoverTWS/wellness.webp";
import exploreTrainers from "../assets/images/explore/discoverTWS/trainers.webp";

// icons
import AllIcon from "@/assets/images/explore/locations/all-icon.svg";
import ChiropracticIcon from "@/assets/images/explore/locations/chiropractic.svg";
import MassageTherapyIcon from "@/assets/images/explore/locations/message-therapy.svg";
import PhysiotherapyIcon from "@/assets/images/explore/locations/pilates.svg";
import AcupunctureIcon from "@/assets/images/explore/locations/acupuncture.svg";
import DietitianServicesIcon from "@/assets/images/explore/locations/dietitian-services.svg";
import EstheticianIcon from "@/assets/images/explore/locations/esthetician.svg";
import LaserTherapyIcon from "@/assets/images/explore/locations/laser-therapy.svg";
import OsteopathyIcon from "@/assets/images/explore/locations/osteopathy.svg";
import MentalHealthIcon from "@/assets/images/explore/locations/mental-health.svg";
// Using AllIcon for Personal Trainer since no specific icon exists
const PersonalTrainerIcon = AllIcon;

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

// Helper function to get trainer IDs for a specific role across all locations
const getTrainerIdsForRole = (role) => {
  const allLocations = getAvailableLocations();
  const trainerIds = [];

  allLocations.forEach((location) => {
    const trainers = getTrainersByLocation(location);
    const roleTrainers = trainers.filter(
      (trainer) =>
        trainer.role && trainer.role.toLowerCase().includes(role.toLowerCase())
    );
    trainerIds.push(...roleTrainers.map((trainer) => trainer.id));
  });

  return trainerIds;
};

// Helper function to get trainer IDs for a specific role in a specific location
const getTrainerIdsForRoleInLocation = (role, locationName) => {
  const trainers = getTrainersByLocation(locationName);
  const roleTrainers = trainers.filter(
    (trainer) =>
      trainer.role && trainer.role.toLowerCase().includes(role.toLowerCase())
  );
  return roleTrainers.map((trainer) => trainer.id);
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
        id: "location-vancouver-post",
        city: "VANCOUVER",
        branch: "POST",
        locationTitle: "VANCOUVER POST",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=40327",
        heroImage: postHero,
        details: "Details for VANCOUVER POST",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("VANCOUVER POST"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "VANCOUVER POST"
        ),
      },
      {
        id: "location-burnaby-brentwood",
        city: "BURNABY",
        branch: "BRENTWOOD",
        locationTitle: "BURNABY BRENTWOOD",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=40248",
        heroImage: brentwoodHero,
        details: "Details for BURNABY BRENTWOOD",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("BURNABY BRENTWOOD"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "BURNABY BRENTWOOD"
        ),
      },
      {
        id: "location-calgary-seton",
        city: "CALGARY",
        branch: "SETON",
        locationTitle: "CALGARY SETON",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=40097",
        heroImage: setonHero,
        details: "Details for CALGARY SETON",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("CALGARY SETON"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "CALGARY SETON"
        ),
      },
      {
        id: "location-calgary-royal-oak",
        city: "CALGARY",
        branch: "ROYAL OAK",
        locationTitle: "CALGARY ROYAL OAK",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=40142",
        heroImage: royalOakHero,
        details: "Details for CALGARY ROYAL OAK",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("CALGARY ROYAL OAK"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "CALGARY ROYAL OAK"
        ),
      },
      {
        id: "location-calgary-sunridge",
        city: "CALGARY",
        branch: "SUNRIDGE",
        locationTitle: "CALGARY SUNRIDGE",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=06973",
        heroImage: sunridgeHero,
        details: "Details for CALGARY SUNRIDGE",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("CALGARY SUNRIDGE"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "CALGARY SUNRIDGE"
        ),
      },
      {
        id: "location-edmonton-south",
        city: "EDMONTON",
        branch: "SOUTH",
        locationTitle: "EDMONTON SOUTH",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=06962",
        heroImage: southHero,
        details: "Details for EDMONTON SOUTH",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("EDMONTON SOUTH"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "EDMONTON SOUTH"
        ),
      },
      {
        id: "location-edmonton-downtown",
        city: "EDMONTON",
        branch: "DOWNTOWN",
        locationTitle: "EDMONTON DOWNTOWN",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=06967",
        heroImage: downtownHero,
        details: "Details for EDMONTON DOWNTOWN",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("EDMONTON DOWNTOWN"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "EDMONTON DOWNTOWN"
        ),
      },
      {
        id: "location-edmonton-north",
        city: "EDMONTON",
        branch: "NORTH",
        locationTitle: "EDMONTON NORTH",
        statelink:"https://subscription.evolvestrength.ca/membership-plans?location=06964",
        heroImage: northHero,
        details: "Details for EDMONTON NORTH",
        services: [
          { id: "service-all", name: "All", icon: AllIcon },
          {
            id: "service-personal-trainer",
            name: "Personal Trainer",
            icon: PersonalTrainerIcon,
          },
          {
            id: "service-esthetician",
            name: "Esthetician",
            icon: EstheticianIcon,
          },
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
          {
            id: "service-physiotherapy",
            name: "Physiotherapy",
            icon: PhysiotherapyIcon,
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
            id: "service-osteopathy",
            name: "Osteopathy",
            icon: OsteopathyIcon,
          },
          {
            id: "service-laser",
            name: "Laser Therapy",
            icon: LaserTherapyIcon,
          },
          {
            id: "service-mental-health",
            name: "Mental Health Support",
            icon: MentalHealthIcon,
          },
        ],
        trainerIds: getTrainerIdsForLocation("EDMONTON NORTH"),
        personalTrainerIds: getTrainerIdsForRoleInLocation(
          "Personal Trainer",
          "EDMONTON NORTH"
        ),
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
        id: "wellness-esthetician",
        name: "ESTHETICIAN",
        trainerIds: getTrainerIdsForRole("Esthetician"),
      },
      {
        id: "wellness-chiropractic-care",
        name: "CHIROPRACTIC CARE",
        trainerIds: getTrainerIdsForRole("Chiropractor"),
      },
      {
        id: "wellness-physiotherapy",
        name: "PHYSIOTHERAPY",
        trainerIds: getTrainerIdsForRole("Physiotherapist"),
      },
      {
        id: "wellness-massage-therapy",
        name: "MASSAGE THERAPY",
        trainerIds: getTrainerIdsForRole("Massage Therapist"),
      },
      {
        id: "wellness-acupuncture",
        name: "ACUPUNCTURE",
        trainerIds: getTrainerIdsForRole("Acupuncturist"),
      },
      {
        id: "wellness-dietitian-services",
        name: "DIETITIAN SERVICES",
        trainerIds: getTrainerIdsForRole("Dietitian"),
      },
      {
        id: "wellness-osteopathy",
        name: "OSTEOPATHY",
        trainerIds: getTrainerIdsForRole("Osteopath"),
      },
      {
        id: "wellness-laser-therapy",
        name: "LASER THERAPY",
        trainerIds: getTrainerIdsForRole("Laser Therapist"),
      },
      {
        id: "wellness-mental-health",
        name: "MENTAL HEALTH",
        trainerIds: getTrainerIdsForRole("Mental Health Professional"),
      },
      // {
      //   id: "wellness-personal-trainer",
      //   name: "PERSONAL TRAINER",
      //   trainerIds: getTrainerIdsForRole("Personal Trainer"),
      // },
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

// Get trainers for a specific service in a specific location
export const getTrainersForLocationService = (locationId, serviceId) => {
  const location = getLocationById(locationId);
  if (!location) return [];

  // Map ALL location service IDs to roles for filtering
  const serviceToRoleMap = {
    "service-personal-trainer": "Personal Trainer",
    "service-esthetician": "Esthetician",
    "service-chiropractic": "Chiropractor",
    "service-massage": "Massage Therapist",
    "service-physiotherapy": "Physiotherapist",
    "service-acupuncture": "Acupuncturist",
    "service-dietitian": "Dietitian",
    "service-osteopathy": "Osteopath",
    "service-laser": "Laser Therapist",
    "service-mental-health": "Mental Health Professional",
  };

  // Get the role to filter by
  const roleToFilter = serviceToRoleMap[serviceId];
  if (!roleToFilter) return [];

  // Filter trainers by role
  const allLocationTrainers = getTrainersByIds(location.trainerIds);
  return allLocationTrainers.filter(
    (trainer) =>
      trainer.role &&
      trainer.role.toLowerCase().includes(roleToFilter.toLowerCase())
  );
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
