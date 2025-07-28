import React from 'react'
import LocationHero from '@/components/PageComponents/Sunridge/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/Sunridge/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/Sunridge/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/Sunridge/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/Sunridge/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/Sunridge/Desktop/Services'
import Spacious from '@/components/PageComponents/Sunridge/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/Sunridge/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/Sunridge/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/Sunridge/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/Sunridge/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/Sunridge/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/Sunridge/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/Sunridge/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/Sunridge/Desktop/Personalizedassessment'

function Sunridge() {
  return (
         <div>
      <div className="">
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
     
    </div>
  )
}

export default Sunridge










   
       