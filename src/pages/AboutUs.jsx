import GrowYourBusinessSection from "@/components/PageComponents/Spaces/Desktop/GrowYourBusinessSection";
import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="max-md:hidden">
        <GrowYourBusinessSection />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default AboutUs;
