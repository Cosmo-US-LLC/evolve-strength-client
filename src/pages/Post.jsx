import React from 'react'
import LocationHero from '@/components/PageComponents/Post/Desktop/LocationHero'
import LocationPartners from '@/components/PageComponents/Post/Desktop/LocationsPartners'
import WhyChooseEvolve from '@/components/PageComponents/Post/Desktop/LoWhyChooseEvlove'
import RightTrainer from '@/components/PageComponents/Post/Desktop/RightTrainer'
import FitnessCategory from '@/components/PageComponents/Post/Desktop/FitnessCategory'
import Services from '@/components/PageComponents/Post/Desktop/Services'
import Spacious from '@/components/PageComponents/Post/Desktop/LocationsSpacious'
import LocationsSeeItForYourSelf from '@/components/PageComponents/Post/Desktop/LocationSeeITYourself'
import JoinUsToday from '@/components/PageComponents/Post/Desktop/JoinToday'
import LocationFAQs from '@/components/PageComponents/Post/Desktop/LocationFaqs'
import LoWhyChooseEvolve from '@/components/PageComponents/Post/Desktop/LoWhyChooseEvlove'
import LocationPricing from '@/components/PageComponents/Post/Desktop/LocationPricing'
import MeetTheTrainers from '@/components/PageComponents/Post/Desktop/MeetTheTrainers'
import SetonLocation from '@/components/PageComponents/Post/Desktop/SetonLocation'
import LoPersonalizedAssesment from '@/components/PageComponents/Post/Desktop/Personalizedassessment'

function Post() {
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

export default Post










   
       