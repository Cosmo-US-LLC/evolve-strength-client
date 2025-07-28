import React from 'react'
import LocationHero from '@/components/PageComponents/Downtown/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/Downtown/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/Downtown/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/Downtown/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/Downtown/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/Downtown/Desktop/Services'
import Spacious from '@/components/PageComponents/Downtown/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/Downtown/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/Downtown/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/Downtown/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/Downtown/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/Downtown/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/Downtown/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/Downtown/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/Downtown/Desktop/Personalizedassessment'

function Downtown() {
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

export default Downtown










   
       