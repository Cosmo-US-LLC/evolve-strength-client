import React from "react";
import AllLocationsHero from "@/components/PageComponents/Locations/Desktop/AllLocations/AllLocationsHero";
import AllGymLocations from "@/components/PageComponents/Locations/Desktop/AllLocations/AllGymLocations";
import MetaTags from "@/components/Metatags/Meta";

function AllLocations() {
  return (
    <>
      <MetaTags
        title="Evolve Strength Gym Locations Across Canada | Find a Gym Near You"
        description="Explore all Evolve Strength gyms in Burnaby, Vancouver, Calgary, and Edmonton. Get directions, call directly, or join the waitlist for new locations like Edmonton South Common"
      />
      <AllLocationsHero />
      <AllGymLocations />
    </>
  );
}

export default AllLocations;
