// Simple trainer data utility
import southTrainers from "./trainer_data/team_south.json";
import northTrainers from "./trainer_data/team_north.json";
import downtownTrainers from "./trainer_data/team_downtown.json";
import setonTrainers from "./trainer_data/team_seton.json";
import royalOakTrainers from "./trainer_data/team_royaloak.json";
import sunridgeTrainers from "./trainer_data/team_sunridge.json";
import brentwoodTrainers from "./trainer_data/team_brentwood.json";
import vancouverTrainers from "./trainer_data/team_vancouver.json";

// Map location names to their trainer data
const LOCATION_TRAINERS = {
  "EDMONTON SOUTH": southTrainers,
  "EDMONTON NORTH": northTrainers,
  "EDMONTON DOWNTOWN": downtownTrainers,
  "CALGARY SETON": setonTrainers,
  "CALGARY ROYAL OAK": royalOakTrainers,
  "CALGARY SUNRIDGE": sunridgeTrainers,
  "BURNABY BRENTWOOD": brentwoodTrainers,
  "VANCOUVER POST": vancouverTrainers,
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

export default LOCATION_TRAINERS;
