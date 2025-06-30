import TermsAndCondition from '@/components/PageComponents/TermsAndConditions/Desktop/TermsAndConditions'
import React from 'react'

function TermsAndConditions() {
  return (
        <div>
      <div className="max-md:hidden">
        <TermsAndCondition />
      </div>
      <div className="md:hidden">Home Mobile</div>
    </div>
  )
}

export default TermsAndConditions