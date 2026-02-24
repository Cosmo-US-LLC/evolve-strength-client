import React from 'react'
import EdmontonTermsAgreementContent from '@/components/PageComponents/TermsAndConditions/Desktop/EdmontonSouthTermsAndConditionsContent'

import { southtermsMain } from '@/constants/EdmontonSouthTermsData'
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";
function EdmontonSouthTermsAndConditions() {
  return (
    <>
    <MetaTags
        title="Edmonton South Common Membership Terms & Conditions | Evolve Strength"
        description="Review the full terms and conditions of your Edmonton South Common membership, including fees, cancellations, facility use, and liability policies."
      />
      <div className="">
       <EdmontonTermsAgreementContent southtermsMain={southtermsMain} />

      </div>
      
    </>
  )
}

export default EdmontonSouthTermsAndConditions