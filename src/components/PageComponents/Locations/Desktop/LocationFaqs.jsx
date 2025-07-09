import React from 'react'
import { faqMain, Locationfaq } from "@/constants/faqContent";
import FrequentlyAskedQuestions from "@/components/PageComponents/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

function FAQs() {
  return (
    <div>
      <div className="max-md:hidden">
      </div>
      <div className=' '>
      <FrequentlyAskedQuestions {...Locationfaq} />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  )
}

export default FAQs