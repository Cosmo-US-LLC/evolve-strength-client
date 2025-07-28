import React from 'react'
import LocationHero from '@/components/PageComponents/RoyalOak/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/RoyalOak/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/RoyalOak/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/RoyalOak/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/RoyalOak/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/RoyalOak/Desktop/Services'
import Spacious from '@/components/PageComponents/RoyalOak/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/RoyalOak/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/RoyalOak/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/RoyalOak/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/RoyalOak/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/RoyalOak/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/RoyalOak/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/RoyalOak/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/RoyalOak/Desktop/Personalizedassessment'

function RoyalOak() {
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

export default RoyalOak










   
       