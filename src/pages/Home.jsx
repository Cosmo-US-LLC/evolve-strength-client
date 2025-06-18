import React from "react";
import Hero from "../components/PageComponents/Home/Desktop/Hero";
 
import WellnessHub from "../components/PageComponents/Home/Desktop/WellnessHub";
import GymExperience from "@/components/PageComponents/Home/Desktop/GymExperience";

function Home() {
  return (
    <div>
      <div className="max-md:hidden">
        <Hero />
        <WellnessHub />
        <GymExperience />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default Home;
