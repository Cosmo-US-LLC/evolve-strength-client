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

  const handleNext = async () => {
    if (currentStep < 3) {
      if (currentStep === 2) {
        const didSubmit = await makePayment({
          primaryMember: formData.primaryMember,
          payment: formData.payment,
        });

        if (didSubmit) {
          setCurrentStep(3);
        }
        return;
      }

      setCurrentStep(currentStep + 1);
    }
  };

  const makePayment = async ({ primaryMember, payment }) => {
    const selectPlan = "credit_debit"; // TODO: wire actual plan selection.
    const cardTypeMap = {
      visa: "visa",
      mastercard: "mastercard",
      amex: "americanexpress",
      discover: "discover",
    };

    const schedules = ["Dues"]; // TODO: include add-on schedules when available.
    const payload = {
      paymentPlanId: "", // TODO: add selected plan id.
      planValidationHash: "", // TODO: add plan validation hash.
      campaignId: "", // TODO: add presale campaign id.
      activePresale: "true",
      sendAgreementEmail: "true",
      agreementContactInfo: {
        firstName: primaryMember.firstName || "",
        middleInitial: (primaryMember.firstName || "").charAt(0).toUpperCase(),
        lastName: primaryMember.lastName || "",
        email: primaryMember.email || "",
        gender: primaryMember.gender || "",
        homePhone: primaryMember.phone || "",
        cellPhone: primaryMember.phone || "",
        workPhone: "", // TODO: collect work phone if required.
        birthday: primaryMember.dob || "",
        wellnessProgramId: "", // TODO: provide wellness program id if needed.
        barcode: "", // TODO: provide barcode if needed.
        agreementAddressInfo: {
          addressLine1: primaryMember.address || "",
          addressLine2: "", // TODO: add address line 2 if needed.
          city: primaryMember.city || "",
          state: primaryMember.province || "",
          country: "CA",
          zipCode: primaryMember.postalCode || "",
        },
        emergencyContact: {
          ecFirstName: "", // TODO: collect emergency contact first name.
          ecLastName: "", // TODO: collect emergency contact last name.
          ecPhone: "", // TODO: collect emergency contact phone.
          ecPhoneExtension: "", // TODO: collect emergency contact extension.
        },
      },
      todayBillingInfo: {},
      draftBillingInfo: {},
      schedules,
      marketingPreferences: {
        email: "true",
        sms: "true",
        directMail: "true",
        pushNotification: "true",
      },
    };

    if (selectPlan !== "direct_debit") {
      const sanitizedExpiry = (payment.expiryDate || "").replace(/\s+/g, "");
      const [expMonthRaw, expYearRaw] = sanitizedExpiry.split("/");
      const expMonth = expMonthRaw ? parseInt(expMonthRaw, 10) : "00";
      const expYear = expYearRaw ? parseInt(`20${expYearRaw}`, 10) : "";
      const creditCardType = payment.cardType
        ? cardTypeMap[payment.cardType] || "unsupported"
        : ""; // TODO: set card type from payment input meta.

      payload.todayBillingInfo = {
        isTodayBillingSameAsDraft: "true",
        todayCcCvvCode: payment.cvv?.trim() || "",
        todayCcBillingZip: primaryMember.postalCode || "",
      };

      payload.draftBillingInfo.draftCreditCard = {
        creditCardFirstName: primaryMember.firstName || "",
        creditCardLastName: primaryMember.lastName || "",
        creditCardType,
        creditCardAccountNumber: payment.cardNumber?.replace(/\s+/g, "") || "",
        creditCardExpMonth: expMonth,
        creditCardExpYear: expYear,
      };
    } else {
      payload.draftBillingInfo.draftBankAccount = {
        draftAccountFirstName: primaryMember.firstName || "",
        draftAccountLastName: primaryMember.lastName || "",
        draftAccountRoutingNumber: "", // TODO: add institution + transit numbers.
        draftAccountNumber: "", // TODO: add account number.
        draftAccountType: "Checking",
      };
      payload.todayBillingInfo.bankAccount = {
        accountFirstName: primaryMember.firstName || "",
        accountLastName: primaryMember.lastName || "",
        accountRoutingNumber: "", // TODO: add institution + transit numbers.
        accountNumber: "", // TODO: add account number.
        accountType: "Checking",
      };
    }

    const baseUrl = `${import.meta.env.VITE_APP_API_URL || ""}`;
    if (!baseUrl) {
      console.error("Missing VITE_APP_API_URL for payment submission.");
      return false;
    }

    const locationPostal = ""; // TODO: provide location postal code for submitAgreement query.
    const locationParam = locationPostal ? parseInt(locationPostal, 10) : "";

    try {
      const response = await fetch(
        `${baseUrl}/submitAgreement?location=${locationParam}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const res = await response.json();
      const message = res?.data?.restResponse?.status?.message;

      if (message && message.toLowerCase() === "success") {
        return true;
      }

      console.error("Payment failed:", message || "Unknown error");
      console.log(res);
      return false;
    } catch (error) {
      console.error("Payment error:", error?.message || error);
      return false;
    }
  };

  // const createPeople = async () => {
  //   const userInfo = localStorage?.getItem("yourDetails");
  //   try {
  //     const baseUrl = `${import.meta.env.VITE_APP_API_URL}`;
  //     const response = await fetch(`${baseUrl}/createPerson`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: userInfo,
  //     });

  //     const res = await response.json();
  //     const person = res?.people_create_response;

  //     if (person?.id) {
  //       // http://localhost:3000/success?date=1/1/25&plan=0&amount=36.74
  //       localStorage?.removeItem("pricing");
  //       localStorage?.setItem("date", format(new Date(), "M/d/yy"));
  //       localStorage?.setItem("plan", currentPlan);
  //       localStorage?.setItem(
  //         "amount",
  //         plansDetails?.length > 0 &&
  //           sumDollarAmounts([
  //             plansDetails[currentPlan]?.downPayments[0]?.total,
  //             ...planAddons?.map((addon) => addon?.scheduleAmount),
  //           ])
  //       );
  //       navigate(`/success`);
  //     } else {
  //       // setIsLoading(false);
  //       console.warn("Person creation failed or missing ID.");
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     console.error("Error creating person:", error.message);
  //     setIsLoading(false);
  //     // setIsLoading(false);
  //   }
  // };

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
