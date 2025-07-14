import React, { useState } from "react";
import CorporateMembershipWizard from "./CorporateMembershipWizard";
import CheckMembershipForm from "./CheckMembershipForm";
import ApplyCorporateMembershipForm from "./ApplyCorporateMembershipForm";
import ApplicationSubmitted from "./ApplicationSubmitted";
import CompanyAlreadyRegistered from "./CompanyAlreadyRegistered";
import CompanyNotRegistered from "./CompanyNotRegistered";

function CorporateMembershipContainer() {
  const [step, setStep] = useState("wizard");
  const [lastStep, setLastStep] = useState(null);

  // Simulate membership check (replace with real API later)
  const checkMembership = () => {
    // Placeholder: randomly decide if company is registered
    const isRegistered = Math.random() > 0.5;
    setLastStep("check");
    setStep(isRegistered ? "registered" : "notRegistered");
  };

  const handleApplySubmit = () => {
    setLastStep("apply");
    setStep("submitted");
  };

  const handleBack = () => {
    if (step === "check" || step === "apply") {
      setStep("wizard");
    } else if (
      step === "registered" ||
      step === "notRegistered" ||
      step === "submitted"
    ) {
      setStep(lastStep === "check" ? "check" : "apply");
    } else {
      setStep("wizard");
    }
  };

  const handleReturnHome = () => {
    // You can redirect or reset the wizard here
    setStep("wizard");
    setLastStep(null);
  };

  const handleShare = () => {
    // Implement share logic (e.g., copy link, open modal, etc.)
    alert("Share link copied to clipboard!");
  };

  // Render the correct step
  switch (step) {
    case "wizard":
      return (
        <CorporateMembershipWizard
          onSelectOption={(opt) => setStep(opt === "check" ? "check" : "apply")}
        />
      );
    case "check":
      return (
        <CheckMembershipForm
          onBack={handleBack}
          onCheckMembership={checkMembership}
        />
      );
    case "apply":
      return (
        <ApplyCorporateMembershipForm
          onBack={handleBack}
          onSubmit={handleApplySubmit}
        />
      );
    case "registered":
      return (
        <CompanyAlreadyRegistered
          onBack={handleBack}
          onReturnHome={handleReturnHome}
        />
      );
    case "notRegistered":
      return <CompanyNotRegistered onBack={handleBack} onShare={handleShare} />;
    case "submitted":
      return (
        <ApplicationSubmitted
          onBack={handleBack}
          onReturnHome={handleReturnHome}
        />
      );
    default:
      return null;
  }
}

export default CorporateMembershipContainer;
