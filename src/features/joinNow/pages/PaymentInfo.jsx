import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/features/joinNow/components/ui/form";
import { Input } from "@/features/joinNow/components/ui/input";
import { Button } from "@/features/joinNow/components/ui/button";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import locations from "@/features/joinNow/lib/locations";
import { fetchClubPlans } from "@/features/joinNow/lib/apis";
import { format } from "date-fns";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import PaymentSecureIcons from "@/features/joinNow/components/PaymentSecure";
import { Checkbox } from "@/features/joinNow/components/ui/checkbox";
import { AnimatedCircularProgressBar } from "@/features/joinNow/components/ui/animated-circular-progress-bar";

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
const API_BASE_URL = import.meta.env.VITE_APP_API_URL || "";
const BROWSER_ID_KEY = "paymentBrowserId";
const KNOWN_IPS_KEY = "knownPaymentIps";
const BLOCKED_KEY = "paymentBlocked";
const COOLDOWN_UNTIL_KEY = "paymentCooldownUntil";

const formSchema = z.object({
  cardNumber: z.string().min(1, "Card number is required"),
  cvc: z.string().min(1, "CVV is required"),
  expiry: z.string().min(1, "Expiration date is required"),
  cfTurnstileResponse: z
    .string()
    .min(1, "Please complete the security check"),
  termsAccepted: z.boolean().refine((val) => val, {
    message: "You must accept the terms",
  }),
});

const ensureTurnstileScript = () =>
  new Promise((resolve, reject) => {
    if (window.turnstile) {
      resolve(window.turnstile);
      return;
    }

    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.turnstile), {
        once: true,
      });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Failed to load Turnstile")),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(window.turnstile), {
      once: true,
    });
    script.addEventListener(
      "error",
      () => reject(new Error("Failed to load Turnstile")),
      { once: true }
    );
    document.head.appendChild(script);
  });

const TurnstileWidget = ({
  siteKey,
  onTokenChange,
  onError,
  resetSignal,
  theme = "light",
}) => {
  const containerRef = React.useRef(null);
  const widgetIdRef = React.useRef(null);
  const onTokenChangeRef = React.useRef(onTokenChange);
  const onErrorRef = React.useRef(onError);
  const hasInitErrorRef = React.useRef(false);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
    onErrorRef.current = onError;
  }, [onTokenChange, onError]);

  useEffect(() => {
    let isMounted = true;

    const renderWidget = async () => {
      if (!siteKey || !containerRef.current || hasInitErrorRef.current) return;

      try {
        const turnstile = await ensureTurnstileScript();
        if (!isMounted || !turnstile || widgetIdRef.current !== null) return;

        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => onTokenChangeRef.current(token),
          "expired-callback": () => {
            onTokenChangeRef.current("");
            onErrorRef.current("Security check expired. Please try again.");
          },
          "error-callback": () => {
            hasInitErrorRef.current = true;
            onTokenChangeRef.current("");
            onErrorRef.current(
              "Security check failed to load. For local testing, serve the page over HTTPS or use a non-local domain."
            );
          },
        });
      } catch (error) {
        if (isMounted) {
          hasInitErrorRef.current = true;
          onTokenChangeRef.current("");
          onErrorRef.current(
            "Unable to load the security check. For local testing, serve the page over HTTPS or use a non-local domain."
          );
        }
      }
    };

    renderWidget();

    return () => {
      isMounted = false;
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme]);

  useEffect(() => {
    if (
      hasInitErrorRef.current ||
      !window.turnstile ||
      widgetIdRef.current === null
    ) {
      return;
    }
    window.turnstile.reset(widgetIdRef.current);
  }, [resetSignal]);

  return <div ref={containerRef} className="min-h-[65px]" />;
};

const ensureBrowserId = () => {
  const existingBrowserId = localStorage.getItem(BROWSER_ID_KEY);
  if (existingBrowserId) return existingBrowserId;

  const browserId =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `browser_${Date.now()}_${Math.random().toString(16).slice(2)}`;

  localStorage.setItem(BROWSER_ID_KEY, browserId);
  return browserId;
};

const getStoredBoolean = (key) => localStorage.getItem(key) === "true";

const getStoredCooldownUntil = () => {
  const value = localStorage.getItem(COOLDOWN_UNTIL_KEY);
  return value ? Number(value) : null;
};

const formatDuration = (seconds) => {
  if (seconds <= 60) {
    return `${seconds} second${seconds === 1 ? "" : "s"}`;
  }

  const minutes = Math.ceil(seconds / 60);
  return `${minutes} minute${minutes === 1 ? "" : "s"}`;
};

const PaymentInfo = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const location = params.get("location") || "";
  const currentPlan = params.get("plan") || "";
  const services = params.get("services") || "";
  const addOnsList = services ? services.split(",") : [];
  const [planAddons, setPlanAddons] = useState([]);
  const locationPostal =
    locations.find((loc) => loc.name.toLowerCase() === location.toLowerCase())
      ?.postalCode || "";
  const pricingInfo = localStorage?.getItem("pricing")
    ? JSON.parse(localStorage?.getItem("pricing"))
    : null;

  const [plansIds, setPlansIds] = useState([]);
  const [plansDetails, setPlansDetails] = useState([]);

  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileResetCount, setTurnstileResetCount] = useState(0);
  const [browserId, setBrowserId] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState(null);
  const [cooldownSecondsLeft, setCooldownSecondsLeft] = useState(0);

  useEffect(() => {
    setApiError(null);
    fetchClubPlans(locationPostal, setPlansIds, setPlansDetails);
  }, []);

  useEffect(() => {
    setBrowserId(ensureBrowserId());

    setIsBlocked(getStoredBoolean(BLOCKED_KEY));
    setCooldownUntil(getStoredCooldownUntil());
  }, []);

  useEffect(() => {
    if (!cooldownUntil) {
      setCooldownSecondsLeft(0);
      localStorage.removeItem(COOLDOWN_UNTIL_KEY);
      return;
    }

    const updateCooldown = () => {
      const secondsLeft = Math.max(
        0,
        Math.ceil((cooldownUntil - Date.now()) / 1000)
      );

      setCooldownSecondsLeft(secondsLeft);

      if (secondsLeft === 0) {
        setCooldownUntil(null);
        localStorage.removeItem(COOLDOWN_UNTIL_KEY);
      }
    };

    updateCooldown();
    const intervalId = window.setInterval(updateCooldown, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [cooldownUntil]);

  useEffect(() => {
    if (plansDetails.length > 0) {
      setLoading(false);
      const addons = plansDetails[currentPlan]?.schedules
        .map((plan) =>
          plan?.addon === true && addOnsList.includes(plan?.profitCenter)
            ? plan
            : null
        )
        .filter((addon) => addon !== null);
      setPlanAddons(addons);
      console.log(addons);
    }
  }, [plansDetails, currentPlan]);

  console.log(plansDetails && plansDetails[currentPlan]?.downPayments[0]);

  function sumDollarAmounts(amounts) {
    const total = amounts.reduce(
      (acc, val) => acc + parseFloat(val?.replace(/[^0-9.-]+/g, "")),
      0
    );

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);
  }
  function subDollarAmounts(amounts) {
    if (amounts.length === 0 || amounts == undefined) return "$0.00";

    // Start from first element, then subtract others
    const total = amounts
      .slice(1)
      .reduce(
        (acc, val) => acc - parseFloat(val?.replace(/[^0-9.-]+/g, "")),
        parseFloat(amounts[0]?.replace(/[^0-9.-]+/g, ""))
      );

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      cvc: "",
      expiry: "",
      cfTurnstileResponse: "",
      termsAccepted: false,
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta,
    getCardImageProps,
  } = usePaymentInputs();

  const updateKnownIps = (ips) => {
    if (!Array.isArray(ips)) return;
    localStorage.setItem(KNOWN_IPS_KEY, JSON.stringify(ips));
  };

  const resetTurnstile = () => {
    form.setValue("cfTurnstileResponse", "", { shouldValidate: true });
    setTurnstileResetCount((count) => count + 1);
  };

  const setBlockedState = (blocked) => {
    setIsBlocked(blocked);
    localStorage.setItem(BLOCKED_KEY, blocked ? "true" : "false");
  };

  const setCooldownState = (retryAfterSeconds) => {
    if (!retryAfterSeconds || retryAfterSeconds <= 0) {
      setCooldownUntil(null);
      localStorage.removeItem(COOLDOWN_UNTIL_KEY);
      return;
    }

    const nextCooldownUntil = Date.now() + retryAfterSeconds * 1000;
    setCooldownUntil(nextCooldownUntil);
    localStorage.setItem(COOLDOWN_UNTIL_KEY, `${nextCooldownUntil}`);
  };

  async function makePayment(data) {
    const selectPlan = "credit_debit";
    const userInfo = JSON.parse(localStorage?.getItem("yourDetails"));
    const userAddons = localStorage?.getItem("addons") || false;
    const cardTypeMap = {
      visa: "visa",
      mastercard: "mastercard",
      amex: "americanexpress",
      discover: "discover",
    };

    let schedules = ["Dues"];
    if (services) {
      schedules = ["Dues", "Towel"];
    }

    const payload = {
      cfTurnstileResponse: data?.cfTurnstileResponse || "",
      paymentPlanId: plansDetails[currentPlan]?.planId || "",
      planValidationHash: plansDetails[currentPlan]?.planValidation || "",
      campaignId: "730E227DC96B7F9EE05302E014ACD689",
      activePresale: "true",
      sendAgreementEmail: "true",
      agreementContactInfo: {
        firstName: userInfo?.first_name || "John",
        middleInitial: userInfo?.first_name.charAt(0).toUpperCase() || "",
        lastName: userInfo?.last_name || "Doe",
        email: userInfo?.email || "",
        gender: userInfo?.gender || "",
        homePhone: userInfo?.phone_mobile || "9495898283",
        cellPhone: userInfo?.phone_mobile || "9495898283",
        workPhone: "",
        birthday: userInfo?.birthday || "",
        wellnessProgramId: "",
        barcode: "",
        agreementAddressInfo: {
          addressLine1: userInfo?.address || "",
          addressLine2: "",
          city: userInfo?.city || "",
          state: userInfo?.province || "ON",
          country: "CA",
          zipCode: userInfo?.postal_code || "",
        },
        emergencyContact: {
          ecFirstName: "",
          ecLastName: "",
          ecPhone: "",
          ecPhoneExtension: "",
        },
      },
      todayBillingInfo: {},
      draftBillingInfo: {},
      schedules: schedules,
      marketingPreferences: {
        email: "true",
        sms: "true",
        directMail: "true",
        pushNotification: "true",
      },
    };

    if (selectPlan !== "direct_debit") {
      payload.todayBillingInfo = {
        isTodayBillingSameAsDraft: "true",
        todayCcCvvCode: data?.cvc.trim() || "",
        todayCcBillingZip: userInfo?.postal_code || "",
      };

      payload.draftBillingInfo.draftCreditCard = {
        creditCardFirstName: userInfo?.first_name || "John",
        creditCardLastName: userInfo?.last_name || "Doe",
        creditCardType: meta.cardType
          ? cardTypeMap[meta.cardType.type] || "unsupported"
          : null,
        // creditCardType: meta?.cardType?.type.trim(),
        creditCardAccountNumber: data?.cardNumber?.replace(/\s+/g, "") || "",
        creditCardExpMonth:
          parseInt(data?.expiry?.split(" / ")[0].trim()) || "00",
        creditCardExpYear:
          parseInt(`20${data?.expiry?.split(" / ")[1].trim()}`) || "",
      };
      // 👉 Debit (Bank Account) flow
    } else if (selectPlan === "direct_debit") {
      payload.draftBillingInfo.draftBankAccount = {
        draftAccountFirstName: userInfo?.first_name || "John",
        draftAccountLastName: userInfo?.last_name || "Doe",
        draftAccountRoutingNumber:
          `0${data?.institutionNumber}${data?.transitNumber}` || "",
        draftAccountNumber: data?.accountNumber || "",
        draftAccountType: "Checking",
      };
      payload.todayBillingInfo.bankAccount = {
        accountFirstName: data?.firstName || "John",
        accountLastName: data?.lastName || "Doe",
        accountRoutingNumber:
          `0${data?.institutionNumber}${data?.transitNumber}` || "",
        accountNumber: data?.accountNumber || "",
        accountType: "Checking",
      };
    }

    // console.log(data, payload);

    const baseUrl = import.meta.env.VITE_APP_API_URL || "";
    const response = await fetch(
      `${baseUrl}/submitAgreement?location=${parseInt(locationPostal)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-browser-id": browserId || ensureBrowserId(),
        },
        body: JSON.stringify(payload),
      }
    );

    const res = await response.json().catch(() => ({}));
    const statusMessage = res?.data?.restResponse?.status?.message;
    const message =
      statusMessage || res?.message || "Payment failed. Please try again.";

    if (Array.isArray(res?.knownIps)) {
      updateKnownIps(res.knownIps);
    }

    if (response.ok && message.toLowerCase() === "success") {
      setBlockedState(false);
      setCooldownState(null);
      createPeople();
      return;
    }

    if (response.status === 403 || res?.blocked === true) {
      setBlockedState(true);
      setApiError(
        message || "Payment submissions are blocked for this device or network."
      );
      resetTurnstile();
      setIsLoading(false);
      return;
    }

    if (response.status === 429) {
      setCooldownState(res?.retryAfterSeconds || 0);
      setApiError(message);
      resetTurnstile();
      setIsLoading(false);
      return;
    }

    console.log(res);
    console.error("Payment failed:", message);
    setApiError(message);
    resetTurnstile();
    setIsLoading(false);
  }

  const createPeople = async () => {
    const userInfo = localStorage?.getItem("yourDetails");
    try {
      const response = await fetch(`${API_BASE_URL}/createPerson`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: userInfo,
      });

      const res = await response.json();
      const person = res?.people_create_response;

      if (person?.id) {
        // http://localhost:3000/success?date=1/1/25&plan=0&amount=36.74
        localStorage?.removeItem("pricing");
        localStorage?.setItem("date", format(new Date(), "M/d/yy"));
        localStorage?.setItem("plan", currentPlan);
        localStorage?.setItem(
          "amount",
          plansDetails?.length > 0 &&
            sumDollarAmounts([
              plansDetails[currentPlan]?.downPayments[0]?.total,
              ...planAddons?.map((addon) => addon?.scheduleAmount),
            ])
        );
        navigate(`/join-now/success`);
      } else {
        // setIsLoading(false);
        console.warn("Person creation failed or missing ID.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error creating person:", error.message);
      setIsLoading(false);
      // setIsLoading(false);
    }
  };

  const onSubmit = async (values) => {
    setApiError(null);
    if (isBlocked) {
      setApiError(
        "Payment submissions are blocked for this device or network."
      );
      return;
    }
    if (cooldownSecondsLeft > 0) {
      setApiError(
        `Please wait ${formatDuration(
          cooldownSecondsLeft
        )} before trying again.`
      );
      return;
    }
    if (!turnstileSiteKey) {
      form.setError("cfTurnstileResponse", {
        type: "manual",
        message: "Turnstile site key is missing. Add VITE_TURNSTILE_SITE_KEY.",
      });
      return;
    }
    setIsLoading(true);
    // await fetch("https://example.com/api/payment", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    makePayment(values);
    // navigate("/join-now/success");
  };

  const handleBack = () => {
    navigate(
      `/join-now/your-details?location=${location}&plan=${currentPlan}${
        services ? `&services=${services}` : ""
      }`
    );
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Left Sidebar - Progress Indicator */}
          <div className="lg:hidden bg-[#F4F4F4] p-4 flex items-center gap-[14px]">
            <AnimatedCircularProgressBar
              value={100}
              gaugePrimaryColor="#4ab04a"
              gaugeSecondaryColor="#dddddd"
              step="3"
              className={"w-[50px] h-[50px]"}
            />

            <div>
              <h1 className="text-base font-bold leading-5">Payment Info</h1>
              <p className="text-xs leading-4 text-[#6F6D66]">
                Securely enter your payment details
              </p>
            </div>
          </div>
          {/* Dashboard Progress Bar */}
          <div className="max-lg:hidden lg:col-span-1">
            <div className="space-y-2 max-lg:flex max-lg:items-center max-lg:gap-2">
              {/* Membership Type - Completed */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#4AB04A] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.6668 5L7.50016 14.1667L3.3335 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-black">Membership Type</h3>
                  <p className="text-black text-sm">
                    Pick the membership that fits you best
                  </p>
                </div>
              </div>

              <div className="border-1 border-gray-300 max-lg:grow lg:w-px h-px lg:h-16 lg:ml-5"></div>

              {/* Your Details - Completed */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#4AB04A] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.6668 5L7.50016 14.1667L3.3335 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-black">Your Details</h3>
                  <p className="text-black text-sm">
                    Tell us a bit about yourself
                  </p>
                </div>
              </div>

              <div className="border-1 border-gray-300 max-lg:grow lg:w-px h-px lg:h-16 lg:ml-5"></div>

              {/* Payment Info - Active */}
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6107_1549)">
                      <path
                        d="M18.6361 16.3637H15.4543C13.4493 16.3637 11.818 14.7324 11.818 12.7274C11.818 10.7223 13.4493 9.09108 15.4543 9.09108H18.6361C18.6958 9.09112 18.7549 9.07939 18.8101 9.05656C18.8652 9.03373 18.9154 9.00025 18.9576 8.95804C18.9998 8.91582 19.0333 8.86569 19.0561 8.81053C19.0789 8.75536 19.0907 8.69623 19.0906 8.63653V7.27292C19.0906 6.31975 18.3513 5.54458 17.4172 5.46941L14.8067 0.909826C14.5648 0.488128 14.1742 0.186727 13.7067 0.0615729C13.2415 -0.062729 12.7551 0.00255401 12.3387 0.244894L3.38986 5.45475H1.81817C0.815441 5.45475 0 6.27015 0 7.27292V18.1818C0 19.1846 0.815398 20 1.81817 20H17.2725C18.2752 20 19.0906 19.1846 19.0906 18.1818V16.8182C19.0907 16.7585 19.0789 16.6994 19.0561 16.6442C19.0333 16.5891 18.9998 16.5389 18.9576 16.4967C18.9154 16.4545 18.8652 16.421 18.8101 16.3982C18.7549 16.3754 18.6958 16.3636 18.6361 16.3637ZM15.3704 3.72484L16.3609 5.45475H12.3991L15.3704 3.72484ZM5.19665 5.45475L12.7963 1.03055C13.0018 0.910252 13.242 0.878292 13.4715 0.93957C13.7036 1.0017 13.8972 1.15174 14.0175 1.36169L14.0184 1.36336L6.99112 5.45475H5.19665Z"
                        fill="white"
                      />
                      <path
                        d="M18.6356 10H15.4538C13.9499 10 12.7266 11.2233 12.7266 12.7272C12.7266 14.2311 13.9499 15.4545 15.4538 15.4545H18.6356C19.3875 15.4545 19.9992 14.8428 19.9992 14.0908V11.3636C19.9992 10.6117 19.3875 10 18.6356 10ZM15.4538 13.6363C14.9527 13.6363 14.5447 13.2284 14.5447 12.7272C14.5447 12.2261 14.9527 11.8182 15.4538 11.8182C15.9549 11.8182 16.3629 12.2261 16.3629 12.7272C16.3629 13.2284 15.955 13.6363 15.4538 13.6363Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6107_1549">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-black">Payment Info</h3>
                  <p className="text-black text-sm">
                    Securely enter your payment details
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:hidden">
                <h3 className="font-bold text-black text-[16px]">
                  Payment Info
                </h3>
                <p className="text-[#393939] text-sm text-[14px]">
                  Securely enter your payment details
                </p>
              </div>
            </div>
          </div>

          {/* Main Content - Payment Form */}
          <Form {...form}>
            <form
              className="lg:col-span-3 max-lg:px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="lg:col-span-2">
                <h2 className="text-xl lg:text-2xl font-[kanit] font-medium text-black mb-6">
                  Enter Your Payment Details
                </h2>
                <div className="space-y-4 mb-4">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Card Number *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...getCardNumberProps({
                                onChange: field.onChange,
                                onBlur: field.onBlur,
                                value: field.value,
                              })}
                              placeholder="0000-0000-0000-0000"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                            />
                            {meta.cardType && (
                              <svg
                                {...getCardImageProps({ images })}
                                className="absolute right-3 top-1/2 -translate-y-1/2 h-6"
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage>
                          {fieldState.error?.message ||
                            (meta.touchedInputs.cardNumber &&
                              meta.erroredInputs.cardNumber)}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiry"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel>Expiration Date*</FormLabel>
                          <FormControl>
                            <Input
                              {...getExpiryDateProps({
                                onChange: field.onChange,
                                onBlur: field.onBlur,
                                value: field.value,
                              })}
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                            />
                          </FormControl>
                          <FormMessage>
                            {fieldState.error?.message ||
                              (meta.touchedInputs.expiryDate &&
                                meta.erroredInputs.expiryDate)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cvc"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel>CVV*</FormLabel>
                          <FormControl>
                            <Input
                              {...getCVCProps({
                                onChange: field.onChange,
                                onBlur: field.onBlur,
                                value: field.value,
                              })}
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                            />
                          </FormControl>
                          <FormMessage>
                            {fieldState.error?.message ||
                              (meta.touchedInputs.cvc &&
                                meta.erroredInputs.cvc)}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-px w-4 h-4 border-gray-300 rounded focus:ring-brand-green"
                          />
                        </FormControl>
                        <div className="pb-1">
                          <FormLabel>
                            <p className="inline leading-tight text-sm font-normal">
                              I authorize Evolve Strength to charge my card for
                              membership fees. I understand my membership renews
                              automatically unless I cancel, as stated in the
                              contract. I have read and agree to the{" "}
                              <a
                                href="https://www.evolvestrength.ca/terms-and-conditions"
                                className="font-bold text-brand-green"
                                target="_blank"
                              >
                                Terms And Conditions
                              </a>{" "}
                              and{" "}
                              <a
                                href="https://www.evolvestrength.ca/privacy-policy"
                                className="font-bold text-brand-green"
                                target="_blank"
                              >
                                Privacy Policy
                              </a>
                              .
                            </p>
                            {/* Please confirm you have read our{" "}
                            <a href="#" className="font-bold">
                              Terms And Conditions
                            </a> */}
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cfTurnstileResponse"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Security Check *</FormLabel>
                        <FormControl>
                          <div className="bg-[#FFF] py-1">
                            {turnstileSiteKey ? (
                              <TurnstileWidget
                                siteKey={turnstileSiteKey}
                                resetSignal={turnstileResetCount}
                                onTokenChange={(token) => {
                                  field.onChange(token);
                                  if (token) {
                                    form.clearErrors("cfTurnstileResponse");
                                  }
                                }}
                                onError={(message) => {
                                  form.setError("cfTurnstileResponse", {
                                    type: "manual",
                                    message,
                                  });
                                }}
                              />
                            ) : (
                              <p className="text-sm text-red-500">
                                Add `VITE_TURNSTILE_SITE_KEY` to enable the
                                security check.
                              </p>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  {(isBlocked || cooldownSecondsLeft > 0) && (
                    <div className="rounded-[5px] border border-[#D4D4D4] bg-[#F8F8F8] p-4 text-sm text-[#393939]">
                      {isBlocked && (
                        <p className="text-red-500">
                          Payment submissions are blocked for this device or
                          network.
                        </p>
                      )}
                      {!isBlocked && cooldownSecondsLeft > 0 && (
                        <p className="text-red-500">
                          Please wait {formatDuration(cooldownSecondsLeft)}{" "}
                          before trying again.
                        </p>
                      )}
                    </div>
                  )}
                  {/* <div className="grid grid-cols-2 gap-4 items-center mt-5 lg:mt-50"> */}
                  <div className="max-lg:hidden mt-5 lg:mt-50">
                    <div className="flex justify-between items-center">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={handleBack}
                        className="text-black cursor-pointer font-semibold flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        BACK
                      </Button>
                      {/* <div className="flex items-center gap-4">
                        <div className="w-[112px] h-[32px]">
                          <PaymentSecureIcons />
                        </div>
                      </div> */}
                      <Button
                        type="submit"
                        disabled={
                          isLoading ||
                          loading ||
                          !turnstileSiteKey ||
                          isBlocked ||
                          cooldownSecondsLeft > 0
                        }
                        className="bg-brand-green h-fit cursor-pointer disabled:bg-neutral-500 text-white font-medium py-[12px] px-4 rounded-[5px] hover:bg-brand-green/90"
                      >
                        {isLoading ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          "PROCEED TO PAY"
                        )}
                      </Button>
                    </div>
                    {apiError && (
                      <p className="pt-4 col-span-2 w-full text-sm text-right text-red-500">
                        {apiError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Membership Summary */}
              <div className="lg:col-span-1 min-w-full">
                <div className="bg-[#FCFCFC] border border-[#D4D4D4] rounded-lg py-4 px-3">
                  <p className="text-[#393939] text-sm font-[300]">
                    Your Membership at
                  </p>
                  <h3 className="mb-4">
                    <span className="uppercase font-[kanit] font-[700] text-lg text-black">
                      {location}
                    </span>
                  </h3>

                  <div className="space-y-4 bg-[#F8F8F8]  rounded-[8px] p-[16px]">
                    {/* <div className="flex justify-between items-center pb-2 border-b border-gray-200"> */}
                    <div className="flex justify-between items-center ">
                      <span className="text-black text-[14px] font-[500]">
                        Start Date
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        {format(new Date(), "MMMM d, yyyy")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-black text-[14px] font-[500]">
                        Subscription
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        {currentPlan == "0"
                          ? "Month to Month"
                          : "1 Year Contract"}
                      </span>
                    </div>
                    {/* {currentPlan == 1 && (
                    )} */}
                    <div className="flex justify-between items-center ">
                      <span className="text-black text-[14px] font-[500]">
                        Bi-Weekly
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        {pricingInfo
                          ? pricingInfo?.biWeekly
                          : plansDetails?.length > 0 && !loading
                          ? subDollarAmounts([
                              plansDetails[currentPlan]?.schedules[0]
                                ?.scheduleAmount,
                              plansDetails[currentPlan]?.downPayments[0]?.tax,
                            ])
                          : "$--.--"}
                      </span>
                    </div>
                    {addOnsList.length > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-black text-[14px] font-[500]">
                          Add-ons
                        </span>
                        <span className="text-black text-[14px] font-[300]">
                          {pricingInfo
                            ? pricingInfo?.addons
                            : plansDetails?.length > 0 && !loading
                            ? sumDollarAmounts([
                                ...planAddons?.map(
                                  (addon) => addon?.schedulePreTaxAmount
                                ),
                              ])
                            : "$--.--"}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center ">
                      <span className="text-black text-[14px] font-[500]">
                        Initiation Fee
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        $0.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-black text-[14px] font-[500]">
                        Tax
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        {pricingInfo
                          ? pricingInfo?.tax
                          : plansDetails?.length > 0 && !loading
                          ? sumDollarAmounts([
                              plansDetails[currentPlan]?.downPayments[0]?.tax,
                              ...planAddons?.map((addon) =>
                                subDollarAmounts([
                                  addon?.scheduleAmount,
                                  addon?.schedulePreTaxAmount,
                                ])
                              ),
                            ])
                          : "$--.--"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-black text-[14px] font-[500]">
                        Total Due Today
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        {/* {plansDetails &&
                          plansDetails[currentPlan]?.downPayments[0]?.total} */}
                        {pricingInfo
                          ? pricingInfo?.dueToday
                          : plansDetails?.length > 0 && !loading
                          ? sumDollarAmounts([
                              plansDetails[currentPlan]?.downPayments[0]?.total,
                              ...planAddons?.map(
                                (addon) => addon?.scheduleAmount
                              ),
                            ])
                          : "$--.--"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-black text-[14px] font-[500]">
                        Due on{" "}
                        {pricingInfo
                          ? pricingInfo?.nextDue
                          : plansDetails?.length > 0 &&
                            format(
                              new Date(
                                plansDetails[
                                  currentPlan
                                ]?.schedules[0]?.scheduleDueDate
                              ),
                              "MMM d, yyyy"
                            )}
                      </span>
                      <span className="text-black text-[14px] font-[300]">
                        {/* $36.74 */}
                        {pricingInfo
                          ? pricingInfo?.nextDueAmt
                          : plansDetails?.length > 0 && !loading
                          ? sumDollarAmounts([
                              plansDetails[currentPlan]?.schedules[0]
                                ?.scheduleAmount,
                              ...planAddons?.map(
                                (addon) => addon?.scheduleAmount
                              ),
                            ])
                          : "$--.--"}
                        {/* {plansDetails &&
                          plansDetails[currentPlan]?.schedules[0]?.scheduleAmount} */}
                      </span>
                    </div>
                  </div>

                  {/* <p className="text-[#393939] text-[12px]  mt-4">
                    Please note that you'll be billed every two weeks (biweekly)
                    to keep payments easy and manageable.
                  </p> */}
                  <div className="mt-4">
                    <p className="text-sm leading-[16px]">
                      {/* <i>
                        <strong>Members under 18 must join in person. </strong>
                        Online membership sign up isn't available, but you can
                        still book a free tour.
                        <br />
                        <br />
                        Please note that you'll be billed every two weeks
                        (bi-weekly) to keep payments easy and manageable.
                      </i> */}
                      <i>
                        If you are under 18, you cannot join online, your
                        membership must be completed in person. You can still{" "}
                        <strong>
                          <a
                            href="https://evolvestrength.ca/book-a-tour"
                            className="hover:underline text-brand-green"
                          >
                            Book a Free Tour
                          </a>
                        </strong>
                        .
                        <br />
                        <br />
                        Please note that you'll be billed every two weeks
                        (bi-weekly) to keep payments easy and manageable.
                      </i>
                    </p>
                  </div>
                </div>
              </div>

              {/* Submission */}
              <div className="pb-5 lg:hidden">
                {apiError && (
                  <p className="pt-4 col-span-2 w-full text-sm text-red-500 text-center">
                    {apiError}
                  </p>
                )}
                <div className="flex items-center gap-2 max-lg:px-0 mt-4">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => {
                      handleBack();
                    }}
                    className="w-fit pl-0 text-black underline cursor-pointer font-semibold flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    BACK
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      isLoading ||
                      loading ||
                      !turnstileSiteKey ||
                      isBlocked ||
                      cooldownSecondsLeft > 0
                    }
                    className="w-full h-fit bg-brand-green disabled:bg-neutral-500 text-white cursor-pointer font-bold py-[14px] px-16 rounded-[5px] hover:bg-brand-green/90"
                  >
                    {isLoading || loading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      "PROCEED TO PAY"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
