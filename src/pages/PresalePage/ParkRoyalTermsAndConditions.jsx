import React from 'react'
import ParkRoyalTermsAgreementContent from '@/components/PageComponents/TermsAndConditions/Desktop/ParkRoyalTermsAndConditionsContent'

import { parkroyaltermsMain } from '@/constants/ParkRoyalTermsData'
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";
function ParkRoyalTermsAndConditions() {
  return (
    <>
    <MetaTags
        title="Park Royal Membership Terms & Conditions | Evolve Strength"
        description="Review the full terms and conditions of your Park Royal membership, including fees, cancellations, facility use, and liability policies."
      />
      <div className="">
       <ParkRoyalTermsAgreementContent parkroyaltermsMain={parkroyaltermsMain} />

      </div>

    </>
  )
}

export default ParkRoyalTermsAndConditions
