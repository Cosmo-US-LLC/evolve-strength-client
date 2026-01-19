import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormsHeader from "@/components/ui/FormsHeader";
import ProgressTracker from "@/components/FounderOfferPayment/ProgressTracker";
import LocationCard from "@/components/FounderOfferPayment/LocationCard";
import BenefitsCard from "@/components/FounderOfferPayment/BenefitsCard";
import MembershipSummaryCard from "@/components/FounderOfferPayment/MembershipSummaryCard";
import PrimaryMemberDetails from "@/components/FounderOfferPayment/steps/PrimaryMemberDetails";
import PaymentInformation from "@/components/FounderOfferPayment/steps/PaymentInformation";
import SuccessCertificate from "@/components/FounderOfferPayment/steps/SuccessCertificate";

// Step to URL parameter mapping
const stepToParam = {
  1: "founder-details",
  2: "payment-details",
  3: "thank-you",
};

// URL parameter to step mapping
const paramToStep = {
  "founder-details": 1,
  "payment-details": 2,
  "thank-you": 3,
};

function FounderOfferPayment() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const prevStepRef = useRef(1);
  
  // Initialize currentStep from URL param or default to 1
  const stepParam = searchParams.get("step");
  const stepFromUrl = stepParam ? (paramToStep[stepParam] || 1) : 1;
  const [currentStep, setCurrentStep] = useState(
    stepFromUrl >= 1 && stepFromUrl <= 3 ? stepFromUrl : 1
  );
  
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

  // Update URL param when step changes
  useEffect(() => {
    const newStep = currentStep;
    if (newStep >= 1 && newStep <= 3) {
      const stepParamName = stepToParam[newStep];
      setSearchParams({ step: stepParamName }, { replace: true });
    }
  }, [currentStep, setSearchParams]);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Scroll to top on mobile when step changes
  useEffect(() => {
    // Only scroll on mobile (screen width < 1024px which is lg breakpoint)
    if (window.innerWidth < 1024 && currentStep !== prevStepRef.current) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        // Scroll to top with minor offset
        if (containerRef.current) {
          const containerTop = containerRef.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: containerTop - 60, behavior: 'smooth' });
        } else {
          // Fallback: scroll window to top with minor offset
          window.scrollTo({ top: 60, behavior: 'smooth' });
        }
      }, 100);
      prevStepRef.current = currentStep;
    }
  }, [currentStep]);

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
          <PaymentInformation
            formData={formData.payment}
            updateFormData={(data) => updateFormData("payment", data)}
            onNext={handleNext}
            onBack={handleBack}
            primaryMember={formData.primaryMember}
          />
        );
      case 3:
        return (
          <SuccessCertificate
            primaryMember={formData.primaryMember}
            onBack={() => navigate("/presale-edmonton-south-common")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden ">
      <FormsHeader />
      <div className="flex-1 pt-16 overflow-hidden">
        <div ref={containerRef} className="max-w-[1280px] h-full mx-auto px-4 md:px-8 py-4 md:py-8 flex flex-col">
          {/* Mobile Progress Tracker - Top */}
          {currentStep !== 3 && (
            <div className="lg:hidden mb-6 pb-4 border-b border-[#d4d4d4] flex-shrink-0">
              <ProgressTracker currentStep={currentStep} />
            </div>
          )}

          {/* Mobile LocationCard - Below ProgressTracker */}
          {currentStep !== 3 && (
            <div className="lg:hidden mb-6 flex-shrink-0">
              <LocationCard />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start flex-1 min-h-0">
            {/* Left Sidebar - Progress Tracker (Desktop) */}
            {currentStep !== 3 && (
              <div className="hidden lg:block w-[300px] flex-shrink-0">
                <ProgressTracker currentStep={currentStep} />
              </div>
            )}

            {/* Main Content - Scrollable */}
            <div className="flex-1 min-w-0 w-full lg:h-full lg:overflow-y-auto scrollbar-hide lg:pr-2">
              <div className="pb-8">{renderStep()}</div>
            </div>

            {/* Right Sidebar - Location & Benefits or Membership Summary */}
            {currentStep !== 3 && (
              <>
                {/* Desktop Sidebar */}
                <div className="hidden xl:block w-[300px] flex-shrink-0">
                  {currentStep === 2 ? (
                    <MembershipSummaryCard
                      primaryMember={formData.primaryMember}
                    />
                  ) : (
                    <div className="flex flex-col gap-4">
                      <LocationCard />
                      <BenefitsCard />
                    </div>
                  )}
                </div>

                {/* Mobile Sidebar - Below Content */}
                {/* <div className="xl:hidden w-full lg:hidden mt-4">
                  {currentStep === 2 && (
                    <MembershipSummaryCard
                      primaryMember={formData.primaryMember}
                    />
                  )}
                </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderOfferPayment;
