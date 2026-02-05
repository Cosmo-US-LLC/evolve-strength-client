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
import PlanType from "@/components/FounderOfferPayment/steps/PlanType";

// Step to URL parameter mapping
const stepToParam = {
  0: "plan-type",
  1: "founder-details",
  2: "payment-details",
};

// URL parameter to step mapping
const paramToStep = {
  "plan-type": 0,
  "founder-details": 1,
  "payment-details": 2,
  "thank-you": 2,
};

const formatDobForSubmission = (dobValue) => {
  const value = (dobValue || "").toString().trim();
  if (!value) return "";

  const ymd = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (ymd) {
    return `${ymd[2]}/${ymd[3]}/${ymd[1]}`;
  }

  const ymdSlash = value.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (ymdSlash) {
    const mm = ymdSlash[2].padStart(2, "0");
    const dd = ymdSlash[3].padStart(2, "0");
    return `${mm}/${dd}/${ymdSlash[1]}`;
  }

  const mdy = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
  if (mdy) {
    const mm = mdy[1].padStart(2, "0");
    const dd = mdy[2].padStart(2, "0");
    const year = mdy[3].length === 2 ? `20${mdy[3]}` : mdy[3];
    return `${mm}/${dd}/${year}`;
  }

  return value;
};

const provinceMap = {
  Alberta: "AB",
  "British Columbia": "BC",
  Manitoba: "MB",
  "New Brunswick": "NB",
  Newfoundland: "NL",
  "Northwest Territories": "NT",
  "Nova Scotia": "NS",
  Nunavut: "NU",
  Ontario: "ON",
  "Prince Edward Island": "PE",
  Quebec: "QC",
  Saskatchewan: "SK",
  Yukon: "YT",
};

const normalizeProvince = (provinceValue) => {
  const value = (provinceValue || "").toString().trim();
  if (!value) return "";
  if (value.length === 2) return value.toUpperCase();
  return provinceMap[value] || value;
};

const PRIMARY_MEMBER_STORAGE_KEY = "founderOfferPayment.primaryMember.v1";
const SELECTED_PLAN_STORAGE_KEY = "founderOfferPayment.selectedPlan.v1";
const SUCCESS_PARAM_KEY = "success";
const SUCCESS_PARAM_VALUE = "1";
const PLAN_TYPE_YEARLY = 0;
const PLAN_TYPE_MONTHLY = 1;
const VALID_PLAN_TYPES = new Set([PLAN_TYPE_YEARLY, PLAN_TYPE_MONTHLY]);
const MAX_STEP = 2;

const isValidStepParam = (stepParam) =>
  Object.prototype.hasOwnProperty.call(paramToStep, stepParam);

const normalizePlanType = (value, fallback = PLAN_TYPE_YEARLY) => {
  const parsed = Number.parseInt(value, 10);
  return VALID_PLAN_TYPES.has(parsed) ? parsed : fallback;
};

const isSuccessParam = (value) =>
  value === SUCCESS_PARAM_VALUE || value === "true";

const loadStoredPrimaryMember = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(PRIMARY_MEMBER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (error) {
    console.warn("Failed to load saved member data.", error);
    return null;
  }
};

const persistPrimaryMember = (data) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      PRIMARY_MEMBER_STORAGE_KEY,
      JSON.stringify(data)
    );
  } catch (error) {
    console.warn("Failed to persist member data.", error);
  }
};

const clearStoredPrimaryMember = () => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(PRIMARY_MEMBER_STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear saved member data.", error);
  }
};

const loadStoredSelectedPlan = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SELECTED_PLAN_STORAGE_KEY);
    if (!raw) return null;
    const normalized = normalizePlanType(raw, NaN);
    return Number.isNaN(normalized) ? null : normalized;
  } catch (error) {
    console.warn("Failed to load saved plan selection.", error);
    return null;
  }
};

const persistSelectedPlan = (planType) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      SELECTED_PLAN_STORAGE_KEY,
      String(normalizePlanType(planType))
    );
  } catch (error) {
    console.warn("Failed to persist selected plan.", error);
  }
};

const fetchClubPlans = async (baseUrl, locationPostal) => {
  try {
    const response = await fetch(
      `${baseUrl}/getClubInfo?location=${parseInt(locationPostal, 10)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch club plans");
    }
    const { plans: data = [] } = await response.json();

    const yearlyPlan = data.find((v) => v.planName?.includes("12"));
    if (!yearlyPlan) throw new Error("12-month plan not found");

    const monthlyPlan = data.find((v) => !v.planName?.includes("12"));
    if (!monthlyPlan) throw new Error("No-contract plan not found");

    return {
      yearlyPlanId: yearlyPlan.planId,
      monthlyPlanId: monthlyPlan.planId,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchClubPlansDetails = async (baseUrl, id, locationPostal) => {
  try {
    const response = await fetch(
      `${baseUrl}/getPlanDetails?location=${parseInt(locationPostal, 10)}&planId=${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch club plan details");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const isPrimaryMemberComplete = (primaryMember) => {
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
    "province",
    "city",
    "postalCode",
    "dob",
    "gender",
  ];

  return requiredFields.every((field) => {
    const value = primaryMember?.[field];
    if (typeof value === "string") return value.trim().length > 0;
    return Boolean(value);
  });
};

const hasPrimaryMemberData = (primaryMember) =>
  Object.values(primaryMember || {}).some((value) => {
    if (typeof value === "string") return value.trim().length > 0;
    return Boolean(value);
  });

function FounderOfferPayment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const prevStepRef = useRef(1);
  const storedPrimaryMemberRef = useRef(loadStoredPrimaryMember());
  const storedSelectedPlanRef = useRef(loadStoredSelectedPlan());

  const stepParam = searchParams.get("step");
  const initialSuccess =
    stepParam === "thank-you" ||
    isSuccessParam(searchParams.get(SUCCESS_PARAM_KEY));
  const stepFromUrl = isValidStepParam(stepParam)
    ? paramToStep[stepParam]
    : initialSuccess
      ? MAX_STEP
      : 0;
  const [currentStep, setCurrentStep] = useState(
    stepFromUrl >= 0 && stepFromUrl <= MAX_STEP ? stepFromUrl : 0
  );
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(initialSuccess);
  const [completedMember, setCompletedMember] = useState(null);
  const wasSuccessOpenRef = useRef(initialSuccess);

  const planParam = searchParams.get("plan");
  const initialPlan = normalizePlanType(
    planParam,
    storedSelectedPlanRef.current ?? PLAN_TYPE_YEARLY
  );
  const [currentPlan, setCurrentPlan] = useState(initialPlan);

  const [formData, setFormData] = useState(() => {
    const storedPrimaryMember = storedPrimaryMemberRef.current || {};
    return {
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
        ...storedPrimaryMember,
      },
      payment: {
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardType: "",
      },
    };
  });
  const [planDetailsByType, setPlanDetailsByType] = useState({
    [PLAN_TYPE_YEARLY]: null,
    [PLAN_TYPE_MONTHLY]: null,
  });
  const [plansError, setPlansError] = useState("");
  const [isPlansLoading, setIsPlansLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);
  const selectedPlanDetails = planDetailsByType[currentPlan] || null;
  const selectedPlanAmount =
    selectedPlanDetails?.scheduleTotalAmount ||
    selectedPlanDetails?.schedules?.[0]?.schedulePreTaxAmount ||
    "";

  const syncUrlState = (
    stepIndex,
    planType,
    { mode = "replace", success = false } = {}
  ) => {
    const stepValue = stepToParam[stepIndex] ? stepIndex : 0;
    const planValue = normalizePlanType(planType);
    const params = new URLSearchParams({
      step: stepToParam[stepValue],
      plan: String(planValue),
    });
    if (success) {
      params.set(SUCCESS_PARAM_KEY, SUCCESS_PARAM_VALUE);
    }
    const historyMethod = mode === "push" ? "pushState" : "replaceState";
    window.history[historyMethod](
      { step: stepValue, plan: planValue },
      "",
      `?${params.toString()}`
    );
  };

  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  useEffect(() => {
    if (isSuccessModalOpen) return;
    if (!hasPrimaryMemberData(formData.primaryMember)) {
      clearStoredPrimaryMember();
      return;
    }
    persistPrimaryMember(formData.primaryMember);
  }, [formData.primaryMember, isSuccessModalOpen]);

  useEffect(() => {
    persistSelectedPlan(currentPlan);
  }, [currentPlan]);

  useEffect(() => {
    if (isSuccessModalOpen) return;
    if (currentStep <= 1) return;
    if (isPrimaryMemberComplete(formData.primaryMember)) return;

    setCurrentStep(1);
    syncUrlState(1, currentPlan, { mode: "replace" });
  }, [currentStep, currentPlan, formData.primaryMember, isSuccessModalOpen]);

  const handleNext = async () => {
    if (currentStep < MAX_STEP) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      syncUrlState(nextStep, currentPlan, { mode: "push" });
    }
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const newStepParam = urlParams.get("step");
      const newPlanParam = urlParams.get("plan");
      const newSuccessParam = urlParams.get(SUCCESS_PARAM_KEY);
      const newStep = isValidStepParam(newStepParam)
        ? paramToStep[newStepParam]
        : 0;
      const newPlan = normalizePlanType(newPlanParam, PLAN_TYPE_YEARLY);
      const newSuccess =
        newStepParam === "thank-you" || isSuccessParam(newSuccessParam);

      setCurrentStep(newStep);
      setCurrentPlan(newPlan);
      setIsSuccessModalOpen(newSuccess);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const baseUrl = import.meta.env.VITE_APP_API_URL || "";
  const locationPostal = "32176";

  useEffect(() => {
    let isActive = true;

    const loadPlans = async () => {
      if (!baseUrl) {
        setPlansError("Missing VITE_APP_API_URL for plan lookup.");
        return;
      }
      setIsPlansLoading(true);
      setPlansError("");
      try {
        const planIds = await fetchClubPlans(baseUrl, locationPostal);
        if (!planIds || !isActive) return;
        const [yearlyPlanDetails, monthlyPlanDetails] = await Promise.all([
          fetchClubPlansDetails(baseUrl, planIds.yearlyPlanId, locationPostal),
          fetchClubPlansDetails(baseUrl, planIds.monthlyPlanId, locationPostal),
        ]);

        if (isActive) {
          setPlanDetailsByType({
            [PLAN_TYPE_YEARLY]: yearlyPlanDetails || null,
            [PLAN_TYPE_MONTHLY]: monthlyPlanDetails || null,
          });
        }
      } catch (error) {
        if (isActive) {
          setPlansError(error?.message || "Unable to load plans.");
        }
      } finally {
        if (isActive) {
          setIsPlansLoading(false);
        }
      }
    };

    loadPlans();

    return () => {
      isActive = false;
    };
  }, [baseUrl]);

  const makePayment = async ({ primaryMember, payment }, planDetails) => {
    const selectPlan = "credit_debit"; // TODO: wire actual plan selection.
    const cardTypeMap = {
      visa: "visa",
      mastercard: "mastercard",
      amex: "americanexpress",
      discover: "discover",
    };
    const allowedCardTypes = new Set([
      "visa",
      "discover",
      "mastercard",
      "americanexpress",
    ]);

    const schedules = ["Dues"]; // TODO: include add-on schedules when available.
    const payload = {
      paymentPlanId: planDetails?.paymentPlanId || "", // Required for payment.
      planValidationHash: planDetails?.planValidationHash || "", // Required for payment.
      campaignId: "730E227DC96B7F9EE05302E014ACD689",
      activePresale: planDetails?.activePresale ? "true" : "false",
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
        birthday: formatDobForSubmission(primaryMember.dob),
        wellnessProgramId: "", // TODO: provide wellness program id if needed.
        barcode: "", // TODO: provide barcode if needed.
        agreementAddressInfo: {
          addressLine1: primaryMember.address || "",
          addressLine2: "", // TODO: add address line 2 if needed.
          city: primaryMember.city || "",
          state: normalizeProvince(primaryMember.province),
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
      const cardNumberDigits = String(payment.cardNumber || "").replace(
        /\D/g,
        ""
      );
      const [expMonthRaw, expYearRaw] = sanitizedExpiry.split("/");
      const expMonth = expMonthRaw ? parseInt(expMonthRaw, 10) : "00";
      const expYear = expYearRaw ? parseInt(`20${expYearRaw}`, 10) : "";
      const rawCardType = (
        payment.cardType?.type || payment.cardType || ""
      ).toString().toLowerCase();
      const mappedCardType = cardTypeMap[rawCardType] || rawCardType;
      const creditCardType = allowedCardTypes.has(mappedCardType)
        ? mappedCardType
        : "";

      payload.todayBillingInfo = {
        isTodayBillingSameAsDraft: "true",
        todayCcCvvCode: payment.cvv?.trim() || "",
        todayCcBillingZip: primaryMember.postalCode || "",
      };

      payload.draftBillingInfo.draftCreditCard = {
        creditCardFirstName: primaryMember.firstName || "",
        creditCardLastName: primaryMember.lastName || "",
        creditCardType,
        creditCardAccountNumber: cardNumberDigits,
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

    if (!baseUrl) {
      console.error("Missing VITE_APP_API_URL for payment submission.");
      return false;
    }

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

  const createPerson = async () => {
    const userInfo = localStorage?.getItem("yourDetails");
    if (!userInfo) {
      console.error("Missing yourDetails in localStorage for createPerson.");
      return false;
    }

    if (!baseUrl) {
      console.error("Missing VITE_APP_API_URL for person creation.");
      return false;
    }

    try {
      const response = await fetch(`${baseUrl}/createPerson`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userInfo,
      });

      const res = await response.json();
      const person = res?.people_create_response;

      if (person?.id) {
        return true;
      }

      console.warn("Person creation failed or missing ID.");
      return false;
    } catch (error) {
      console.error("Error creating person:", error?.message || error);
      return false;
    }
  };

  const handlePaymentSubmit = async ({ cardNumber, expiryDate, cvv, cardType }) => {
    // console.log(selectedPlanDetails)
    // return true;
    if (!selectedPlanDetails?.planId || !selectedPlanDetails?.planValidation) {
      setPaymentError(
        plansError ||
          (isPlansLoading
            ? "Plans are still loading. Please try again shortly."
            : "Unable to load plan details. Please refresh and try again.")
      );
      return false;
    }

    setIsSubmittingPayment(true);
    setPaymentError("");

    const paymentSuccess = await makePayment(
      {
        primaryMember: formData.primaryMember,
        payment: {
          cardNumber,
          expiryDate,
          cvv,
          cardType,
        },
      },
      {
        paymentPlanId: selectedPlanDetails.planId,
        planValidationHash: selectedPlanDetails.planValidation,
        activePresale: selectedPlanDetails.activePresale,
      }
    );

    if (!paymentSuccess) {
      setPaymentError("Payment failed. Please check your details and try again.");
      setIsSubmittingPayment(false);
      return false;
    }

    const personCreated = await createPerson();
    if (!personCreated) {
      setPaymentError(
        "Payment succeeded, but we could not create your profile. Please contact support."
      );
      setIsSubmittingPayment(false);
      return false;
    }

    setCompletedMember({ ...formData.primaryMember });
    setFormData((prev) => ({
      ...prev,
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
        cardType: "",
      },
    }));
    clearStoredPrimaryMember();
    setIsSuccessModalOpen(true);
    syncUrlState(currentStep, currentPlan, { mode: "replace", success: true });
    setIsSubmittingPayment(false);
    return true;
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

  useEffect(() => {
    if (wasSuccessOpenRef.current && !isSuccessModalOpen) {
      setCompletedMember(null);
      setCurrentStep(0);
      syncUrlState(0, currentPlan, { mode: "replace" });
    }
    wasSuccessOpenRef.current = isSuccessModalOpen;
  }, [isSuccessModalOpen, currentPlan]);

  const handlePlanChange = (planType) => {
    const normalizedPlan = normalizePlanType(planType, currentPlan);
    setCurrentPlan(normalizedPlan);
    syncUrlState(currentStep, normalizedPlan, { mode: "replace" });
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
      syncUrlState(previousStep, currentPlan, { mode: "push" });
    } else {
      navigate("/presale-edmonton-south-common");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PlanType
            onNext={handleNext}
            onBack={handleBack}
            currentPlan={currentPlan}
            onPlanChange={handlePlanChange}
            selectedPlanDetails={selectedPlanDetails}
            isPlansLoading={isPlansLoading}
            plansError={plansError}
          />
        );
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
            onSubmitPayment={handlePaymentSubmit}
            isSubmitting={isSubmittingPayment}
            submitError={paymentError}
            paymentAmount={selectedPlanAmount}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col md:overflow-hidden ">
      <FormsHeader />
      <div className="flex-1 pt-14 md:pt-16 md:overflow-hidden">
        {/* <div ref={containerRef} className="max-w-[1280px] h-full mx-auto px-0 md:px-8 py-0 md:py-8 flex flex-col"> */}
        <div ref={containerRef} className="max-w-[1440px] h-full mx-auto px-0 md:px-8 py-0 md:pt-8 flex flex-col">
          {/* Mobile Progress Tracker - Top */}
          {currentStep !== 3 && (
            <div className="lg:hidden mb-6 pb-0 max-md:px-0 md:border-b md:border-[#d4d4d4] flex-shrink-0">
              <ProgressTracker currentStep={currentStep} />
            </div>
          )}

          {/* Mobile LocationCard - Below ProgressTracker */}
          {currentStep !== 2 && currentStep !== 3 && (
            <div className="lg:hidden mb-6 max-md:px-4 flex-shrink-0">
              <LocationCard />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start flex-1 min-h-0 ">
            {/* Left Sidebar - Progress Tracker (Desktop) */}
            {currentStep !== 3 && (
              <div className="hidden lg:block w-64 xl:w-[280px] 2xl:w-[300px] flex-shrink-0">
                <ProgressTracker currentStep={currentStep} />
              </div>
            )}

            {/* Main Content - Scrollable */}
            <div className="flex-1 min-w-0 w-full md:w-[640px] lg:h-full lg:overflow-y-auto scrollbar-hide lg:pr-2 max-md:px-4">
              <div className="pb-8">{renderStep()}</div>
            </div>

            {/* Right Sidebar - Location & Benefits or Membership Summary */}
            {currentStep !== 3 && (
              <>
                {/* Desktop Sidebar */}
                <div className="hidden xl:block w-64 xl:w-[280px] 2xl:w-[300px] flex-shrink-0 max-md:px-4">
                  {currentStep === 2 ? (
                    <MembershipSummaryCard
                      primaryMember={formData.primaryMember}
                      paymentAmount={selectedPlanAmount}
                    />
                  ) : (
                    <div className="flex flex-col gap-4">
                      <LocationCard dueToday={selectedPlanDetails?.downPaymentTotalAmount || "$--.--"} />
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
      {isSuccessModalOpen && (
        <div className="absolute top-0 left-0 z-[900] w-screen h-screen flex items-center justify-center bg-black/80 px-4 py-8">
          <div className="w-full max-w-[904px]">
            <SuccessCertificate
              primaryMember={completedMember || formData.primaryMember}
              onBack={() => navigate("/presale-edmonton-south-common")}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FounderOfferPayment;
