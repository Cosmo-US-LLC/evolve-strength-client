import React from 'react'
import LocationHero from '@/components/PageComponents/Locations/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/Locations/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/Locations/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/Locations/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/Locations/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/Locations/Desktop/Services'
import Spacious from '@/components/PageComponents/Locations/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/Locations/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/Locations/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/Locations/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/Locations/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/Locations/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/Locations/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/Locations/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/Locations/Desktop/Personalizedassessment'

function Locations() {
  return (
         <div>
      <div className="max-md:hidden">
        <LocationHero />
        <LocationPartners/>
        <LoWhyChooseEvolve/>
        <LocationPricing/>
        <FitnessCategory/>
        <LoPersonalizedAssesment/>
        <RightTrainer/>
        <Services/>
        <Spacious/>
        <LocationsSeeItForYourSelf/>
        <SetonLocation/>
        <MeetTheTrainers/>
        <JoinUsToday/>
        <LocationFAQs/>


      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  )
}

export default Locations










   
       