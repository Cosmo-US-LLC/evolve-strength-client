import React from 'react'
import { faqMain, Locationfaq } from "@/constants/faqContent";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

function FAQs() {
  return (
    <div>
      <div className="">
      </div>
      <div className=' '>
      <FrequentlyAskedQuestions {...Locationfaq} />
      </div>
      
    </div>
  )
}

export default FAQs