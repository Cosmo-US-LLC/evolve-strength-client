import React from 'react'
import ExploreHero from "@/components/PageComponents/Explore/Desktop/ExploreHero";

function Locations() {
  return (
         <div>
      <div className="max-md:hidden">
        <ExploreHero />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  )
}

export default Locations