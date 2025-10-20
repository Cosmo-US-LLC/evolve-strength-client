import { createContext, useContext } from "react";

// Create context for trainer data
export const TrainerDataContext = createContext(null);

// Custom hook to use trainer data
export const useTrainerData = () => {
  const context = useContext(TrainerDataContext);
  if (!context) {
    throw new Error("useTrainerData must be used within TrainerDataProvider");
  }
  return context;
};
