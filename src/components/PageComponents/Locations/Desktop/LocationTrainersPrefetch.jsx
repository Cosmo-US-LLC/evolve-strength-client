import { useEffect } from "react";
import { prefetchTrainersForLocation } from "@/services/trainerApi";

/**
 * Starts loading location trainers as soon as the page mounts,
 * before MeetTheTrainers scrolls into view.
 */
function LocationTrainersPrefetch({ location }) {
  useEffect(() => {
    if (location) {
      prefetchTrainersForLocation(location, { personalTrainersOnly: true });
    }
  }, [location]);

  return null;
}

export default LocationTrainersPrefetch;
