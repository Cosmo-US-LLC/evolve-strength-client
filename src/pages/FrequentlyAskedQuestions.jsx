import React from 'react'
import { faqMain } from "@/constants/faqContent";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

function FAQs() {
  return (
    <div>
      <div className="">
      </div>
      <div className=' pt-[50px]'>
      <FrequentlyAskedQuestions {...faqMain} />
      </div>
      
    </div>
  )
}

export default FAQs