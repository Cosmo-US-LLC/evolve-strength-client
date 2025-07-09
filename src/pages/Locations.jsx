import React from 'react'
import LocationHero from '@/components/PageComponents/Locations/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/Locations/Desktop/LocationsPartners'
import PersonalizedAssesment from '@/components/PageComponents/Locations/Desktop/PersonalizedAssesment'
import RightTrainer from '@/components/PageComponents/Locations/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/Locations/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/Locations/Desktop/Services'
import Spacious from '@/components/PageComponents/Locations/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/Locations/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/Locations/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/Locations/Desktop/LocationFaqs'
function Locations() {
  return (
         <div>
      <div className="max-md:hidden">
        <LocationHero />
        <LocationPartners/>
        <PersonalizedAssesment/>
        <FitnessCategory/>
        <RightTrainer/>
        <Services/>
        <Spacious/>
        <LocationsSeeItForYourSelf/>
        <JoinUsToday/>
        <LocationFAQs/>


      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  )
}

export default Locations