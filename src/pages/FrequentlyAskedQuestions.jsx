import React from 'react'
import { faqMain } from "@/constants/faqContent";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

function FAQs() {
  return (
    <div>
      <div className="max-md:hidden">
      </div>
      <div className=' pt-[50px]'>
      <FrequentlyAskedQuestions {...faqMain} />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  )
}

export default FAQs