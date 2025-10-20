// Trainer data utility with API integration
// Note: This file is kept for backward compatibility
// New code should use the trainerApi.js directly with React Context

// Static JSON imports as fallback
import southTrainers from "./trainer_data/team_south.json";
import northTrainers from "./trainer_data/team_north.json";
import downtownTrainers from "./trainer_data/team_downtown.json";
import setonTrainers from "./trainer_data/team_seton.json";
import royalOakTrainers from "./trainer_data/team_royaloak.json";
import sunridgeTrainers from "./trainer_data/team_sunridge.json";
import brentwoodTrainers from "./trainer_data/team_brentwood.json";
import vancouverTrainers from "./trainer_data/team_vancouver.json";

// Static fallback data
const STATIC_TRAINERS = {
  "EDMONTON SOUTH": southTrainers,
  "EDMONTON NORTH": northTrainers,
  "EDMONTON DOWNTOWN": downtownTrainers,
  "CALGARY SETON": setonTrainers,
  "CALGARY ROYAL OAK": royalOakTrainers,
  "CALGARY SUNRIDGE": sunridgeTrainers,
  "BURNABY BRENTWOOD": brentwoodTrainers,
  "VANCOUVER POST": vancouverTrainers,
};

// Runtime data (will be replaced with API data)
let LOCATION_TRAINERS = { ...STATIC_TRAINERS };

/**
 * Initialize trainer data from API
 * Note: This function is deprecated. Use the new trainerApi.js with React Context instead.
 */
export const initializeTrainerData = async () => {
  console.log(
    "⚠️ initializeTrainerData is deprecated. Using static data as fallback."
  );
  LOCATION_TRAINERS = { ...STATIC_TRAINERS };
  rebuildTrainerIdsMapping();
  return STATIC_TRAINERS;
};

// Get trainers by location
export const getTrainersByLocation = (location) => {
  return LOCATION_TRAINERS[location] || [];
};

// Get all available locations
export const getAvailableLocations = () => {
  return Object.keys(LOCATION_TRAINERS);
};

// Get trainer by ID
export const getTrainerById = (trainerId) => {
  for (const trainers of Object.values(LOCATION_TRAINERS)) {
    const trainer = trainers.find((t) => t.id === trainerId);
    if (trainer) return trainer;
  }
  return null;
};

// Get multiple trainers by IDs
export const getTrainersByIds = (trainerIds) => {
  if (!trainerIds || !Array.isArray(trainerIds)) return [];

  const trainers = [];
  for (const trainerId of trainerIds) {
    const trainer = getTrainerById(trainerId);
    if (trainer) {
      trainers.push(trainer);
    }
  }
  return trainers;
};

// Create TRAINER_IDS mapping for exploreDataWithTrainer.js
export let TRAINER_IDS = {};

// Function to rebuild TRAINER_IDS mapping
const rebuildTrainerIdsMapping = () => {
  TRAINER_IDS = {};
  for (const locationKey in LOCATION_TRAINERS) {
    const trainers = LOCATION_TRAINERS[locationKey];
    if (trainers && Array.isArray(trainers)) {
      trainers.forEach((trainer) => {
        // Create a simplified key from trainerName
        const key = (trainer.trainerName || trainer.name)
          .toUpperCase()
          .replace(/[^A-Z0-9]/g, "_") // Replace non-alphanumeric with underscore
          .replace(/__+/g, "_") // Replace multiple underscores with single
          .replace(/_$/, ""); // Remove trailing underscore if any
        TRAINER_IDS[key] = trainer.id;
      });
    }
  }
};

// Initialize TRAINER_IDS with static data
rebuildTrainerIdsMapping();

export default LOCATION_TRAINERS;
