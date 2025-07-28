import React from 'react'
import LocationHero from '@/components/PageComponents/South/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/South/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/South/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/South/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/South/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/South/Desktop/Services'
import Spacious from '@/components/PageComponents/South/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/South/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/South/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/South/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/South/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/South/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/South/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/South/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/South/Desktop/Personalizedassessment'

function South() {
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

export default South










   
       