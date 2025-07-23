// Updated explore data that references both trainer IDs and service IDs from centralized data files
// This approach eliminates data duplication and ensures consistency

import { TRAINER_IDS, getTrainersByIds } from "./trainerData.js";
import { SERVICE_IDS, getServicesByIds } from "./serviceData.js";

// category images
import exploreLocations from "../assets/images/explore/discoverTWS/locations.webp";
import exploreWellness from "../assets/images/explore/discoverTWS/wellness.webp";
import exploreTrainers from "../assets/images/explore/discoverTWS/trainers.webp";

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
        details: "Details for EDMONTON SOUTH",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.CHIROPRACTIC,
          SERVICE_IDS.MASSAGE_THERAPY,
          SERVICE_IDS.PILATES,
          SERVICE_IDS.ACUPUNCTURE,
          SERVICE_IDS.DIETITIAN,
          SERVICE_IDS.ESTHETICIAN,
          SERVICE_IDS.LASER_THERAPY,
          SERVICE_IDS.OSTEOPATHY,
          SERVICE_IDS.MENTAL_HEALTH,
        ],
        trainerIds: [
          TRAINER_IDS.JORDAN_BROWNE,
          TRAINER_IDS.SHARINA_PALAYPAY,
          TRAINER_IDS.MARYAM_NEAMAH,
          TRAINER_IDS.ROBERT_TENHOVE,
          TRAINER_IDS.LEAH_CHEUNG,
          TRAINER_IDS.PAIGE_THOMSON,
          TRAINER_IDS.MICHELLE_MOEN,
          TRAINER_IDS.CHRISTOPHER_MERRELL,
          TRAINER_IDS.NAOMI_SACHS,
          TRAINER_IDS.KIERYN_MARCELLUS,
          TRAINER_IDS.STEVEN_FITZPATRICK,
          TRAINER_IDS.DENISSE_PETERS,
        ],
      },
      {
        id: "location-calgary-royal-oak",
        city: "CALGARY",
        branch: "ROYAL OAK",
        details: "Details for CALGARY ROYAL OAK",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.MASSAGE_THERAPY,
          SERVICE_IDS.ACUPUNCTURE,
          SERVICE_IDS.DIETITIAN,
          SERVICE_IDS.ESTHETICIAN,
        ],
        trainerIds: [
          TRAINER_IDS.DENISSE_PETERS,
          TRAINER_IDS.STEVEN_FITZPATRICK,
        ],
      },
      {
        id: "location-edmonton-north",
        city: "EDMONTON",
        branch: "NORTH",
        details: "Details for EDMONTON NORTH",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.CHIROPRACTIC,
          SERVICE_IDS.MASSAGE_THERAPY,
          SERVICE_IDS.MENTAL_HEALTH,
        ],
        trainerIds: [TRAINER_IDS.MARYAM_NEAMAH, TRAINER_IDS.ROBERT_TENHOVE],
      },
      {
        id: "location-edmonton-downtown",
        city: "EDMONTON",
        branch: "DOWNTOWN",
        details: "Details for EDMONTON DOWNTOWN",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.MASSAGE_THERAPY,
          SERVICE_IDS.PILATES,
          SERVICE_IDS.LASER_THERAPY,
        ],
        trainerIds: [TRAINER_IDS.LEAH_CHEUNG, TRAINER_IDS.PAIGE_THOMSON],
      },
      {
        id: "location-calgary-sunridge",
        city: "CALGARY",
        branch: "SUNRIDGE",
        details: "Details for CALGARY SUNRIDGE",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.MASSAGE_THERAPY,
          SERVICE_IDS.ESTHETICIAN,
          SERVICE_IDS.OSTEOPATHY,
        ],
        trainerIds: [
          TRAINER_IDS.MICHELLE_MOEN,
          TRAINER_IDS.CHRISTOPHER_MERRELL,
        ],
      },
      {
        id: "location-burnaby-south",
        city: "BURNABY",
        branch: "SOUTH",
        details: "Details for BURNABY SOUTH",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.MASSAGE_THERAPY,
          SERVICE_IDS.ACUPUNCTURE,
          SERVICE_IDS.OSTEOPATHY,
        ],
        trainerIds: [TRAINER_IDS.NAOMI_SACHS, TRAINER_IDS.KIERYN_MARCELLUS],
      },
      {
        id: "location-vancouver-post",
        city: "VANCOUVER",
        branch: "THE POST",
        details: "Details for VANCOUVER THE POST",
        serviceIds: [
          SERVICE_IDS.ALL,
          SERVICE_IDS.DIETITIAN,
          SERVICE_IDS.ESTHETICIAN,
          SERVICE_IDS.MENTAL_HEALTH,
        ],
        trainerIds: [
          TRAINER_IDS.STEVEN_FITZPATRICK,
          TRAINER_IDS.DENISSE_PETERS,
        ],
      },
    ],
  },
  {
    id: "WELLNESS",
    title: "WELLNESS",
    description:
      "Discover our comprehensive wellness services designed to support your health and recovery journey.",
    image: exploreWellness,
    type: "wellness",
    data: [
      {
        id: "wellness-massage-therapy",
        serviceId: SERVICE_IDS.MASSAGE_THERAPY,
        trainerIds: [
          TRAINER_IDS.DENISSE_PETERS,
          TRAINER_IDS.NAOMI_SACHS,
          TRAINER_IDS.MICHELLE_MOEN,
        ],
      },
      {
        id: "wellness-dietitian",
        serviceId: SERVICE_IDS.DIETITIAN,
        trainerIds: [TRAINER_IDS.LEAH_CHEUNG, TRAINER_IDS.STEVEN_FITZPATRICK],
      },
      {
        id: "wellness-osteopathy",
        serviceId: SERVICE_IDS.OSTEOPATHY,
        trainerIds: [
          TRAINER_IDS.PAIGE_THOMSON,
          TRAINER_IDS.MICHELLE_MOEN,
          TRAINER_IDS.NAOMI_SACHS,
        ],
      },
      {
        id: "wellness-esthetician",
        serviceId: SERVICE_IDS.ESTHETICIAN,
        trainerIds: [
          TRAINER_IDS.MARYAM_NEAMAH,
          TRAINER_IDS.CHRISTOPHER_MERRELL,
        ],
      },
      {
        id: "wellness-pilates",
        serviceId: SERVICE_IDS.PILATES,
        trainerIds: [TRAINER_IDS.SHARINA_PALAYPAY, TRAINER_IDS.PAIGE_THOMSON],
      },
      {
        id: "wellness-chiropractic",
        serviceId: SERVICE_IDS.CHIROPRACTIC,
        trainerIds: [TRAINER_IDS.ROBERT_TENHOVE],
      },
      {
        id: "wellness-acupuncture",
        serviceId: SERVICE_IDS.ACUPUNCTURE,
        trainerIds: [TRAINER_IDS.KIERYN_MARCELLUS, TRAINER_IDS.DENISSE_PETERS],
      },
      {
        id: "wellness-laser-therapy",
        serviceId: SERVICE_IDS.LASER_THERAPY,
        trainerIds: [TRAINER_IDS.MARYAM_NEAMAH, TRAINER_IDS.PAIGE_THOMSON],
      },
      {
        id: "wellness-mental-health",
        serviceId: SERVICE_IDS.MENTAL_HEALTH,
        trainerIds: [TRAINER_IDS.MARYAM_NEAMAH, TRAINER_IDS.DENISSE_PETERS],
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

export const getServicesForLocation = (locationId) => {
  const location = getLocationById(locationId);
  if (!location) return [];
  return getServicesByIds(location.serviceIds);
};

export const getTrainersForWellnessService = (serviceId) => {
  const service = getWellnessServiceById(serviceId);
  if (!service) return [];
  return getTrainersByIds(service.trainerIds);
};

export const getServiceForWellness = (wellnessId) => {
  const wellness = getWellnessServiceById(wellnessId);
  if (!wellness) return null;
  return getServiceById(wellness.serviceId);
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
    serviceId: service.serviceId,
  }));
};

export const getLocationsByService = (serviceId) => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  return locationsData.filter((location) =>
    location.serviceIds.includes(serviceId)
  );
};

export const getTrainersByService = (serviceId) => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  const allTrainerIds = locationsData
    .filter((location) => location.serviceIds.includes(serviceId))
    .flatMap((location) => location.trainerIds);

  // Remove duplicates
  const uniqueTrainerIds = [...new Set(allTrainerIds)];
  return getTrainersByIds(uniqueTrainerIds);
};

export default EXPLORE_DATA;
