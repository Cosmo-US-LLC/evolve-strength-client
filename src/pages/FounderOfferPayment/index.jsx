import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormsHeader from "@/components/ui/FormsHeader";
import ProgressTracker from "@/components/FounderOfferPayment/ProgressTracker";
import LocationCard from "@/components/FounderOfferPayment/LocationCard";
import BenefitsCard from "@/components/FounderOfferPayment/BenefitsCard";
import MembershipSummaryCard from "@/components/FounderOfferPayment/MembershipSummaryCard";
import PrimaryMemberDetails from "@/components/FounderOfferPayment/steps/PrimaryMemberDetails";
import AddFamilyMembers from "@/components/FounderOfferPayment/steps/AddFamilyMembers";
import PaymentInformation from "@/components/FounderOfferPayment/steps/PaymentInformation";
import SuccessCertificate from "@/components/FounderOfferPayment/steps/SuccessCertificate";

function FounderOfferPayment() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    primaryMember: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      province: "",
      city: "",
      postalCode: "",
      dob: "",
      gender: "",
    },
    familyMembers: [],
    payment: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/presale-edmonton-south-common");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PrimaryMemberDetails
            formData={formData.primaryMember}
            updateFormData={(data) => updateFormData("primaryMember", data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <AddFamilyMembers
            familyMembers={formData.familyMembers}
            updateFamilyMembers={(members) =>
              setFormData((prev) => ({ ...prev, familyMembers: members }))
            }
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <PaymentInformation
            formData={formData.payment}
            updateFormData={(data) => updateFormData("payment", data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <SuccessCertificate
            primaryMember={formData.primaryMember}
            familyMembers={formData.familyMembers}
            onBack={() => navigate("/presale-edmonton-south-common")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <FormsHeader />
      <div className="flex-1 overflow-hidden pt-16">
        <div className="max-w-[1280px] h-full mx-auto px-4 md:px-8 py-8">
          <div className="flex gap-8 items-start h-full">
            {/* Left Sidebar - Progress Tracker */}
            {currentStep !== 4 && (
              <div className="hidden lg:block w-[300px] flex-shrink-0">
                <ProgressTracker currentStep={currentStep} />
              </div>
            )}

            {/* Main Content - Scrollable */}
            <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide pr-2">
              <div className="pb-8">{renderStep()}</div>
            </div>

            {/* Right Sidebar - Location & Benefits or Membership Summary */}
            {currentStep !== 4 && (
              <div className="hidden xl:block w-[300px] flex-shrink-0">
                {currentStep === 3 ? (
                  <MembershipSummaryCard
                    primaryMember={formData.primaryMember}
                    familyMembers={formData.familyMembers}
                  />
                ) : (
                  <div className="flex flex-col gap-4">
                    <LocationCard />
                    <BenefitsCard />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderOfferPayment;
