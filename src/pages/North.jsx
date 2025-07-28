import React from 'react'
import LocationHero from '@/components/PageComponents/North/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/North/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/North/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/North/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/North/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/North/Desktop/Services'
import Spacious from '@/components/PageComponents/North/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/North/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/North/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/North/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/North/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/North/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/North/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/North/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/North/Desktop/Personalizedassessment'

function North() {
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

export default North










   
       