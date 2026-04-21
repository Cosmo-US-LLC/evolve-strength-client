import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormsHeader from "@/components/ui/FormsHeader";
import ProgressTracker from "@/components/FounderOfferPayment/ProgressTracker";
import MembershipSummaryCard from "@/components/FounderOfferPayment/MembershipSummaryCard";
import PrimaryMemberDetails from "@/components/FounderOfferPayment/steps/PrimaryMemberDetails";
import PaymentInformation from "@/components/FounderOfferPayment/steps/PaymentInformation";
import SuccessCertificate from "@/components/FounderOfferPayment/steps/SuccessCertificate";
import MetaTags from "@/components/Metatags/Meta";
import YourPlan from "@/components/FounderOfferPayment/steps-v2/YourPlan";
import PlanSelect from "@/components/FounderOfferPayment/steps-v2/PlanSelect";
import AdditionalServices from "@/components/FounderOfferPayment/steps-v2/AdditionalServices";
import FounderBenefits from "@/components/FounderOfferPayment/steps-v2/FounderBenefits";

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
  if (dobValue instanceof Date && !Number.isNaN(dobValue.getTime())) {
    const mm = String(dobValue.getMonth() + 1).padStart(2, "0");
    const dd = String(dobValue.getDate()).padStart(2, "0");
    const yyyy = String(dobValue.getFullYear());
    return `${mm}/${dd}/${yyyy}`;
  }

  const value = (dobValue || "").toString().trim();
  if (!value) return "";

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    const mm = String(parsed.getMonth() + 1).padStart(2, "0");
    const dd = String(parsed.getDate()).padStart(2, "0");
    const yyyy = String(parsed.getFullYear());
    return `${mm}/${dd}/${yyyy}`;
  }

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

const extractApiMessage = (responseBody, responseStatusText = "") => {
  const status = responseBody?.data?.restResponse?.status;
  const candidates = [
    status?.errorMessage,
    status?.statusMessage,
    status?.error,
    status?.message,
    responseBody?.error?.message,
    responseBody?.error,
    responseBody?.message,
    responseBody?.errors?.[0]?.message,
    responseBody?.errors?.[0],
    responseBody?.people_create_response?.message,
    responseStatusText,
  ];

  const found = candidates.find(
    (item) => typeof item === "string" && item.trim().length > 0,
  );
  return found ? found.trim() : "";
};

const PRIMARY_MEMBER_STORAGE_KEY = "founderOfferPayment.primaryMember.v1";
const SELECTED_PLAN_STORAGE_KEY = "founderOfferPayment.selectedPlan.v1";
const SELECTED_PLAN_ADDONS_STORAGE_KEY =
  "founderOfferPayment.selectedAddons.v1";
const SUCCESS_STORAGE_KEY = "founderOfferPayment.success.v1";
const SUCCESS_PARAM_KEY = "success";
const SUCCESS_PARAM_VALUE = "1";
const PLAN_TYPE_YEARLY = 0;
const PLAN_TYPE_MONTHLY = 1;
const VALID_PLAN_TYPES = new Set([PLAN_TYPE_YEARLY, PLAN_TYPE_MONTHLY]);
const MAX_STEP = 2;
// TEMP: set to false to restore strict createPerson failure handling.
const ALLOW_CREATE_PERSON_FAILURE = true;

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
      JSON.stringify(data),
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

const loadStoredSuccess = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SUCCESS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (!parsed.member || typeof parsed.member !== "object") return null;
    if (!parsed.verifiedAt) return null;
    return parsed;
  } catch (error) {
    console.warn("Failed to load success record.", error);
    return null;
  }
};

const persistSuccess = (record) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SUCCESS_STORAGE_KEY, JSON.stringify(record));
  } catch (error) {
    console.warn("Failed to persist success record.", error);
  }
};

const clearStoredSuccess = () => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(SUCCESS_STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear success record.", error);
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
      String(normalizePlanType(planType)),
    );
  } catch (error) {
    console.warn("Failed to persist selected plan.", error);
  }
};

const loadStoredSelectedAddons = () => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(SELECTED_PLAN_ADDONS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed;
  } catch (error) {
    console.warn("Failed to load selected addons.", error);
    return {};
  }
};

const persistSelectedAddons = (selectedAddons) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      SELECTED_PLAN_ADDONS_STORAGE_KEY,
      JSON.stringify(selectedAddons),
    );
  } catch (error) {
    console.warn("Failed to persist selected addons.", error);
  }
};

const parseCurrencyAmount = (value) => {
  if (value === null || value === undefined) return 0;
  const normalized = String(value).replace(/[^0-9.-]/g, "");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const fetchClubPlans = async (baseUrl, locationPostal) => {
  try {
    const response = await fetch(
      `${baseUrl}/getClubInfo?location=${parseInt(locationPostal, 10)}`,
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
      `${baseUrl}/getPlanDetails?location=${parseInt(locationPostal, 10)}&planId=${id}`,
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

const isSuccessRecordValid = (record) =>
  Boolean(record?.verifiedAt) && isPrimaryMemberComplete(record?.member);

const hasPrimaryMemberData = (primaryMember) =>
  Object.values(primaryMember || {}).some((value) => {
    if (typeof value === "string") return value.trim().length > 0;
    return Boolean(value);
  });

const LOCATION_NAME = "South Edmonton Common";
const BI_WEEKLY_LABEL = "Bi-weekly";

const formatCurrency = (value) => `$${parseCurrencyAmount(value).toFixed(2)}`;

const getBaseSchedule = (planDetails) =>
  planDetails?.schedules?.find((schedule) => schedule?.addon !== true) ||
  planDetails?.schedules?.[0] ||
  null;

function FounderOfferPayment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const prevStepRef = useRef(1);
  const storedPrimaryMemberRef = useRef(loadStoredPrimaryMember());
  const storedSelectedPlanRef = useRef(loadStoredSelectedPlan());
  const storedSelectedAddonsRef = useRef(loadStoredSelectedAddons());
  const [successRecord, setSuccessRecord] = useState(() => loadStoredSuccess());

  const stepParam = searchParams.get("step");
  const successParam = searchParams.get(SUCCESS_PARAM_KEY);
  const hasValidSuccessRecord = isSuccessRecordValid(successRecord);
  const initialSuccess =
    (stepParam === "thank-you" || isSuccessParam(successParam)) &&
    hasValidSuccessRecord;
  const stepFromUrl = isValidStepParam(stepParam)
    ? paramToStep[stepParam]
    : initialSuccess
      ? MAX_STEP
      : 0;
  const [currentStep, setCurrentStep] = useState(
    stepFromUrl >= 0 && stepFromUrl <= MAX_STEP ? stepFromUrl : 0,
  );
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(initialSuccess);
  const [completedMember, setCompletedMember] = useState(
    hasValidSuccessRecord ? successRecord?.member : null,
  );
  const [planAddons, setPlanAddons] = useState([]);
  const [
    selectedAddonProfitCentersByPlan,
    setSelectedAddonProfitCentersByPlan,
  ] = useState(() => {
    const stored = storedSelectedAddonsRef.current || {};
    return {
      [PLAN_TYPE_YEARLY]: Array.isArray(stored?.[PLAN_TYPE_YEARLY])
        ? stored[PLAN_TYPE_YEARLY]
        : [],
      [PLAN_TYPE_MONTHLY]: Array.isArray(stored?.[PLAN_TYPE_MONTHLY])
        ? stored[PLAN_TYPE_MONTHLY]
        : [],
    };
  });
  const wasSuccessOpenRef = useRef(initialSuccess);

  const planParam = searchParams.get("plan");
  const initialPlan = normalizePlanType(
    planParam,
    storedSelectedPlanRef.current ?? PLAN_TYPE_YEARLY,
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
        dob: null,
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
  const selectedAddonProfitCenters =
    selectedAddonProfitCentersByPlan?.[currentPlan] || [];

  const baseSchedule = getBaseSchedule(selectedPlanDetails);
  const basePlanFeeAmount = parseCurrencyAmount(
    baseSchedule?.schedulePreTaxAmount ||
      selectedPlanDetails?.schedulePreTaxAmount ||
      0,
  );
  const basePlanTotalAmount = parseCurrencyAmount(
    baseSchedule?.scheduleAmount ||
      selectedPlanDetails?.scheduleTotalAmount ||
      baseSchedule?.schedulePreTaxAmount ||
      0,
  );
  const basePlanGstAmount = Math.max(
    basePlanTotalAmount - basePlanFeeAmount,
    0,
  );

  const selectedAddonsFeeAmount = planAddons.reduce((sum, addon) => {
    if (!selectedAddonProfitCenters.includes(addon?.profitCenter)) return sum;
    return sum + parseCurrencyAmount(addon?.schedulePreTaxAmount);
  }, 0);
  const towelAddonFeeAmount = planAddons.reduce((sum, addon) => {
    if (!selectedAddonProfitCenters.includes(addon?.profitCenter)) return sum;
    const profitCenter = (addon?.profitCenter || "").toString().toLowerCase();
    if (!profitCenter.includes("towel")) return sum;
    return sum + parseCurrencyAmount(addon?.schedulePreTaxAmount);
  }, 0);
  const selectedAddonsTotalAmount = planAddons.reduce((sum, addon) => {
    if (!selectedAddonProfitCenters.includes(addon?.profitCenter)) return sum;
    return (
      sum +
      parseCurrencyAmount(addon?.scheduleAmount || addon?.schedulePreTaxAmount)
    );
  }, 0);
  const selectedAddonsGstAmount = Math.max(
    selectedAddonsTotalAmount - selectedAddonsFeeAmount,
    0,
  );

  const feeAmount = basePlanFeeAmount + selectedAddonsFeeAmount;
  const planFeeAmount = feeAmount - towelAddonFeeAmount;
  const gstAmount = basePlanGstAmount + selectedAddonsGstAmount;
  const totalAmount = feeAmount + gstAmount;
  const selectedPlanAmount = totalAmount.toFixed(2);
  const dueTodayAmount = formatCurrency(
    selectedPlanDetails?.downPaymentTotalAmount || 0,
  );
  const planCards = [
    {
      value: PLAN_TYPE_YEARLY,
      label: "1 Year Contract",
      price: formatCurrency(
        getBaseSchedule(planDetailsByType[PLAN_TYPE_YEARLY])
          ?.schedulePreTaxAmount ||
          planDetailsByType[PLAN_TYPE_YEARLY]?.schedulePreTaxAmount ||
          0,
      ),
      taxLabel: "+ tax",
      billingLabel: BI_WEEKLY_LABEL,
    },
    {
      value: PLAN_TYPE_MONTHLY,
      label: "Month to Month",
      price: formatCurrency(
        getBaseSchedule(planDetailsByType[PLAN_TYPE_MONTHLY])
          ?.schedulePreTaxAmount ||
          planDetailsByType[PLAN_TYPE_MONTHLY]?.schedulePreTaxAmount ||
          0,
      ),
      taxLabel: "+ tax",
      billingLabel: BI_WEEKLY_LABEL,
    },
  ];
  const addonCards = planAddons.map((addon) => ({
    profitCenter: addon?.profitCenter || "",
    name:
      addon?.scheduleDescription || addon?.profitCenter || "Additional Service",
    priceLabel: `Recurring ${formatCurrency(
      addon?.schedulePreTaxAmount || addon?.scheduleAmount || 0,
    )} ${BI_WEEKLY_LABEL}`,
  }));

  const syncUrlState = (
    stepIndex,
    planType,
    { mode = "replace", success = false } = {},
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
      `?${params.toString()}`,
    );
  };

  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  useEffect(() => {
    if (initialSuccess) return;
    if (!successParam) return;
    if (hasValidSuccessRecord) return;
    syncUrlState(currentStep, currentPlan, { mode: "replace", success: false });
  }, [
    currentStep,
    currentPlan,
    hasValidSuccessRecord,
    initialSuccess,
    successParam,
  ]);

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
    persistSelectedAddons(selectedAddonProfitCentersByPlan);
  }, [selectedAddonProfitCentersByPlan]);

  useEffect(() => {
    const addons =
      selectedPlanDetails?.schedules
        ?.map((plan) => (plan?.addon === true ? plan : null))
        .filter((addon) => addon !== null) || [];
    setPlanAddons(addons);

    const availableProfitCenters = new Set(
      addons.map((addon) => addon?.profitCenter).filter(Boolean),
    );
    setSelectedAddonProfitCentersByPlan((prev) => {
      const currentSelected = prev?.[currentPlan] || [];
      const sanitized = currentSelected.filter((profitCenter) =>
        availableProfitCenters.has(profitCenter),
      );
      if (sanitized.length === currentSelected.length) return prev;
      return { ...prev, [currentPlan]: sanitized };
    });
  }, [selectedPlanDetails, currentPlan]);

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
      const storedSuccess = loadStoredSuccess();
      const hasStoredSuccess = isSuccessRecordValid(storedSuccess);
      const newSuccess =
        (newStepParam === "thank-you" || isSuccessParam(newSuccessParam)) &&
        hasStoredSuccess;

      setCurrentStep(newStep);
      setCurrentPlan(newPlan);
      setSuccessRecord(storedSuccess);
      setCompletedMember(hasStoredSuccess ? storedSuccess?.member : null);
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

    const schedules = ["Dues", ...selectedAddonProfitCenters];
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
      cfTurnstileResponse: payment.cfTurnstileResponse || "",
      skipIpCheck: true,
    };

    if (selectPlan !== "direct_debit") {
      const sanitizedExpiry = (payment.expiryDate || "").replace(/\s+/g, "");
      const cardNumberDigits = String(payment.cardNumber || "").replace(
        /\D/g,
        "",
      );
      const [expMonthRaw, expYearRaw] = sanitizedExpiry.split("/");
      const expMonth = expMonthRaw ? parseInt(expMonthRaw, 10) : "00";
      const expYear = expYearRaw ? parseInt(`20${expYearRaw}`, 10) : "";
      const rawCardType = (payment.cardType?.type || payment.cardType || "")
        .toString()
        .toLowerCase();
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
        },
      );
      let res = null;
      try {
        res = await response.json();
      } catch {
        res = null;
      }
      const status = res?.data?.restResponse?.status;
      const message = status?.message;
      const apiMessage = extractApiMessage(
        res,
        !response.ok ? response.statusText : "",
      );

      if (message && message.toLowerCase() === "success") {
        return { success: true };
      }

      console.error("Payment failed:", message || "Unknown error");
      console.log(res);
      return { success: false, apiMessage };
    } catch (error) {
      console.error("Payment error:", error?.message || error);
      return { success: false, apiMessage: error?.message || "" };
    }
  };

  const createPerson = async (primaryMember) => {
    if (!baseUrl) {
      console.error("Missing VITE_APP_API_URL for person creation.");
      return { success: false, apiMessage: "" };
    }

    const payload = {
      club_id: locationPostal,
      first_name: primaryMember?.firstName || "",
      last_name: primaryMember?.lastName || "",
      email: primaryMember?.email || "",
      birthday: formatDobForSubmission(primaryMember?.dob),
      gender: primaryMember?.gender || "",
      phone_mobile: String(primaryMember?.phone || "").replace(/\D/g, ""),
      address: primaryMember?.address || "",
      city: primaryMember?.city || "",
      province: normalizeProvince(primaryMember?.province),
      postal_code: primaryMember?.postalCode || "",
      company_id: "20534",
    };

    try {
      const response = await fetch(`${baseUrl}/createPerson`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let res = null;
      try {
        res = await response.json();
      } catch {
        res = null;
      }
      const person = res?.people_create_response;
      const apiMessage = extractApiMessage(res, response.statusText);

      if (person?.id) {
        return { success: true };
      }

      console.warn("Person creation failed or missing ID.", res);
      return { success: false, apiMessage };
    } catch (error) {
      console.error("Error creating person:", error?.message || error);
      return { success: false, apiMessage: error?.message || "" };
    }
  };

  const handlePaymentSubmit = async ({
    cardNumber,
    expiryDate,
    cvv,
    cardType,
    cfTurnstileResponse,
  }) => {
    // console.log(selectedPlanDetails)
    // return true;
    if (!selectedPlanDetails?.planId || !selectedPlanDetails?.planValidation) {
      setPaymentError(
        plansError ||
          (isPlansLoading
            ? "Plans are still loading. Please try again shortly."
            : "Unable to load plan details. Please refresh and try again."),
      );
      return false;
    }

    setIsSubmittingPayment(true);
    setPaymentError("");

    const paymentResult = await makePayment(
      {
        primaryMember: formData.primaryMember,
        payment: {
          cardNumber,
          expiryDate,
          cvv,
          cardType,
          cfTurnstileResponse,
        },
      },
      {
        paymentPlanId: selectedPlanDetails.planId,
        planValidationHash: selectedPlanDetails.planValidation,
        activePresale: selectedPlanDetails.activePresale,
      },
    );

    if (!paymentResult?.success) {
      const apiMessage = paymentResult?.apiMessage;
      setPaymentError(apiMessage || "");
      setIsSubmittingPayment(false);
      return false;
    }

    const personCreated = await createPerson(formData.primaryMember);
    if (!personCreated?.success && !ALLOW_CREATE_PERSON_FAILURE) {
      setPaymentError(personCreated?.apiMessage || "");
      setIsSubmittingPayment(false);
      return false;
    }
    if (!personCreated?.success && ALLOW_CREATE_PERSON_FAILURE) {
      console.warn(
        "TEMP: createPerson failed but continuing as success.",
        personCreated?.apiMessage,
      );
    }

    const completedData = { ...formData.primaryMember };
    const successRecordPayload = {
      verifiedAt: new Date().toISOString(),
      member: completedData,
    };
    persistSuccess(successRecordPayload);
    setSuccessRecord(successRecordPayload);
    setCompletedMember(completedData);
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
        dob: null,
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
          const containerTop =
            containerRef.current.getBoundingClientRect().top +
            window.pageYOffset;
          window.scrollTo({ top: containerTop - 60, behavior: "smooth" });
        } else {
          // Fallback: scroll window to top with minor offset
          window.scrollTo({ top: 60, behavior: "smooth" });
        }
      }, 100);
      prevStepRef.current = currentStep;
    }
  }, [currentStep]);

  useEffect(() => {
    if (wasSuccessOpenRef.current && !isSuccessModalOpen) {
      clearStoredSuccess();
      setSuccessRecord(null);
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

  const handleAddonToggle = (profitCenter) => {
    if (!profitCenter) return;
    setSelectedAddonProfitCentersByPlan((prev) => {
      const currentSelected = prev?.[currentPlan] || [];
      const nextSelected = currentSelected.includes(profitCenter)
        ? currentSelected.filter((item) => item !== profitCenter)
        : [...currentSelected, profitCenter];
      return { ...prev, [currentPlan]: nextSelected };
    });
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
          <div className="flex min-h-full flex-col">
            {/* Legacy rollback path:
            <PlanType
              onNext={handleNext}
              onBack={handleBack}
              currentPlan={currentPlan}
              onPlanChange={handlePlanChange}
              selectedPlanDetails={selectedPlanDetails}
              isPlansLoading={isPlansLoading}
              plansError={plansError}
              planAddons={planAddons}
              selectedServices={selectedAddonProfitCenters}
              onToggleService={handleAddonToggle}
              paymentAmount={basePlanFeeAmount.toFixed(2)}
            />
            */}
            <div className="space-y-4 lg:hidden">
              <YourPlan
                locationName={LOCATION_NAME}
                dueToday={dueTodayAmount}
              />
              <PlanSelect
                plans={planCards}
                currentPlan={currentPlan}
                onPlanChange={handlePlanChange}
                isLoading={isPlansLoading}
                error={plansError}
              />
              <AdditionalServices
                addons={addonCards}
                selectedServices={selectedAddonProfitCenters}
                onToggleService={handleAddonToggle}
                isLoading={isPlansLoading}
              />
              <FounderBenefits />
            </div>

            <div className="hidden lg:block">
              <YourPlan
                locationName={LOCATION_NAME}
                dueToday={dueTodayAmount}
              />
            </div>

            <div className="pt-[40vh] flex flex-col-reverse gap-3 lg:mt-auto lg:flex-row lg:items-center lg:justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center justify-center gap-1.5 font-['Kanit'] text-[16px] font-light uppercase text-black underline hover:cursor-pointer lg:justify-start"
              >
                <span aria-hidden="true">←</span>
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="btnPrimary w-full lg:w-auto"
                disabled={isPlansLoading || !selectedPlanDetails}
              >
                Next
              </button>
            </div>
          </div>
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
            feeAmount={feeAmount}
            planFeeAmount={planFeeAmount}
            addonLabel={towelAddonFeeAmount > 0 ? "Add-ons" : ""}
            untaxedAddonFeeAmount={towelAddonFeeAmount}
            gstAmount={gstAmount}
            totalAmount={totalAmount}
          />
        );
      default:
        return null;
    }
  };

  const renderDesktopSidebar = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-3">
          <PlanSelect
            plans={planCards}
            currentPlan={currentPlan}
            onPlanChange={handlePlanChange}
            isLoading={isPlansLoading}
            error={plansError}
          />
          <AdditionalServices
            addons={addonCards}
            selectedServices={selectedAddonProfitCenters}
            onToggleService={handleAddonToggle}
            isLoading={isPlansLoading}
          />
          <FounderBenefits />
        </div>
      );
    }

    if (currentStep === 1) {
      return (
        <YourPlan locationName={LOCATION_NAME} dueToday={dueTodayAmount} />
      );
    }

    if (currentStep === 2) {
      return (
        <MembershipSummaryCard
          paymentAmount={selectedPlanAmount}
          feeAmount={feeAmount}
          planFeeAmount={planFeeAmount}
          addonLabel={towelAddonFeeAmount > 0 ? "Add-ons" : ""}
          untaxedAddonFeeAmount={towelAddonFeeAmount}
          gstAmount={gstAmount}
          totalAmount={totalAmount}
        />
      );
    }

    return null;
  };

  return (
    <>
      <MetaTags
        title="Founder Membership"
        description="Join as a Founder Member at Evolve Strength and lock in exclusive presale pricing before we open."
      />

      <div
        className={`h-screen bg-white flex flex-col ${isSuccessModalOpen && "overflow-hidden"}`}
      >
        <FormsHeader />
        <div className="flex-1 pb-8 pt-14 md:pt-16">
          <div
            ref={containerRef}
            className="mx-auto flex h-full max-w-[1440px] flex-col px-0 py-0 md:px-8 md:pt-8"
          >
            {currentStep !== 3 && (
              <div className="mb-4 flex-shrink-0 pb-0 max-md:px-0 md:mb-6 md:border-b md:border-[#d4d4d4] lg:hidden">
                <ProgressTracker currentStep={currentStep} />
              </div>
            )}

            <div className="flex min-h-0 flex-1 flex-col items-start gap-4 lg:flex-row lg:gap-8">
              {currentStep !== 3 && (
                <div className="hidden w-64 flex-shrink-0 lg:block xl:w-[280px] 2xl:w-[300px]">
                  <ProgressTracker currentStep={currentStep} />
                </div>
              )}

              <div className="w-full min-w-0 flex-1 px-4 md:px-0 lg:pr-2">
                {currentStep === 1 && (
                  <div className="mb-4 lg:hidden">
                    <YourPlan
                      locationName={LOCATION_NAME}
                      dueToday={dueTodayAmount}
                    />
                  </div>
                )}
                <div className="pb-8">{renderStep()}</div>
              </div>

              {currentStep !== 3 && (
                <div className="hidden w-[300px] flex-shrink-0 lg:block">
                  {renderDesktopSidebar()}
                </div>
              )}
            </div>
          </div>
        </div>
        {isSuccessModalOpen && (
          <div className="fixed top-0 left-0 z-[900] w-screen h-screen flex items-center justify-center bg-black/80 px-4 py-8">
            <div className="w-full max-w-[904px]">
              <SuccessCertificate
                primaryMember={completedMember || formData.primaryMember}
                onBack={() => {
                  clearStoredSuccess();
                  setSuccessRecord(null);
                  setIsSuccessModalOpen(false);
                  navigate("/presale-edmonton-south-common");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FounderOfferPayment;
