import React, { useEffect, useState } from "react";
import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  validateCardNumber,
  validateExpiryDate,
  validateCVV,
} from "@/utils/validation";
import { Checkbox } from "@/components/ui/checkbox";

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

// Zod Schema
const formSchema = z.object({
  // Required fields; react-payment-inputs meta handles detailed validation
  cardNumber: z.string().min(1, "Card number is required."),
  expiryDate: z.string().min(1, "Expiry date is required."),
  cvv: z.string().min(1, "CVC is required."),
  cfTurnstileResponse: z.string().min(1, "Please complete the security check."),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read our Terms and Conditions",
  }),
  agreedToAuthorization: z.boolean().refine((val) => val === true, {
    message: "Please accept the authorization and agreement",
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
        { once: true },
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
      { once: true },
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
              "Security check failed to load. For local testing, serve the page over HTTPS or use a non-local domain.",
            );
          },
        });
      } catch (error) {
        if (isMounted) {
          hasInitErrorRef.current = true;
          onTokenChangeRef.current("");
          onErrorRef.current(
            "Unable to load the security check. For local testing, serve the page over HTTPS or use a non-local domain.",
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

function PaymentInformation({
  formData,
  updateFormData,
  onNext,
  onBack,
  primaryMember,
  onSubmitPayment,
  isSubmitting,
  submitError,
  paymentAmount,
  feeAmount,
  planFeeAmount,
  addonLabel,
  untaxedAddonFeeAmount,
  gstAmount,
  totalAmount,
}) {
  const [turnstileResetCount, setTurnstileResetCount] = useState(0);
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta,
  } = usePaymentInputs();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: formData.cardNumber || "",
      expiryDate: formData.expiryDate || "",
      cvv: formData.cvv || "",
      cfTurnstileResponse: formData.cfTurnstileResponse || "",
      agreedToTerms: false,
      agreedToAuthorization: false,
    },
  });

  // Update parent form data when form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      updateFormData({
        cardNumber: value.cardNumber,
        expiryDate: value.expiryDate,
        cvv: value.cvv,
        cfTurnstileResponse: value.cfTurnstileResponse,
        cardType: meta.cardType?.type || "",
      });
    });
    return () => subscription.unsubscribe();
  }, [form, updateFormData, meta.cardType]);

  useEffect(() => {
    if (!submitError) return;
    form.setValue("cfTurnstileResponse", "", { shouldValidate: true });
    setTurnstileResetCount((count) => count + 1);
  }, [form, submitError]);

  const onSubmit = async (values) => {
    let hasErrors = false;

    if (!turnstileSiteKey) {
      form.setError("cfTurnstileResponse", {
        type: "manual",
        message: "Turnstile site key is missing. Add VITE_TURNSTILE_SITE_KEY.",
      });
      return;
    }

    // 1. Check react-payment-inputs meta validation errors
    if (meta.erroredInputs.cardNumber) {
      form.setError("cardNumber", {
        type: "manual",
        message: meta.erroredInputs.cardNumber || "Invalid card number",
      });
      hasErrors = true;
    }

    if (meta.erroredInputs.expiryDate) {
      form.setError("expiryDate", {
        type: "manual",
        message: meta.erroredInputs.expiryDate || "Invalid expiry date",
      });
      hasErrors = true;
    }

    if (meta.erroredInputs.cvc) {
      form.setError("cvv", {
        type: "manual",
        message: meta.erroredInputs.cvc || "Invalid CVC",
      });
      hasErrors = true;
    }

    // 2. Validate card number length (13-19 digits)
    const cardDigits = values.cardNumber.replace(/\D/g, "");
    if (cardDigits.length < 13 || cardDigits.length > 19) {
      form.setError("cardNumber", {
        type: "manual",
        message: "Card number must be between 13 and 19 digits",
      });
      hasErrors = true;
    } else if (cardDigits.length === 16) {
      // For 16-digit cards, also validate using Luhn algorithm
      if (!validateCardNumber(values.cardNumber)) {
        form.setError("cardNumber", {
          type: "manual",
          message: "Invalid card number. Please check and try again",
        });
        hasErrors = true;
      }
    }

    // 3. Validate CVC (3-4 digits)
    if (!validateCVV(values.cvv)) {
      form.setError("cvv", {
        type: "manual",
        message: "CVC must be 3 or 4 digits",
      });
      hasErrors = true;
    }

    // 4. Validate expiry date format and expiration
    if (!values.expiryDate || !values.expiryDate.trim()) {
      form.setError("expiryDate", {
        type: "manual",
        message: "Expiry date is required",
      });
      hasErrors = true;
    } else {
      // Clean the expiry date (remove any extra spaces that react-payment-inputs might add)
      const cleanedExpiryDate = values.expiryDate.trim().replace(/\s+/g, "");
      const expiryValidation = validateExpiryDate(cleanedExpiryDate);

      // Check if format is invalid or card is expired
      if (!expiryValidation.isValid || expiryValidation.isExpired) {
        form.setError("expiryDate", {
          type: "manual",
          message:
            expiryValidation.error ||
            "Invalid expiry date. Please enter a valid date in MM/YY format",
        });
        hasErrors = true;
      }
    }

    // If there are validation errors, prevent submission
    if (hasErrors) {
      // Scroll to first error field
      const firstErrorField = document.querySelector(
        '[class*="border-red-500"]',
      );
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        firstErrorField.focus();
      }
      return;
    }

    // All validations passed - proceed with submission
    updateFormData({
      cardNumber: values.cardNumber,
      expiryDate: values.expiryDate,
      cvv: values.cvv,
      cfTurnstileResponse: values.cfTurnstileResponse,
      cardType: meta.cardType?.type || "",
      skipIpCheck: true,
    });

    if (onSubmitPayment) {
      const success = await onSubmitPayment({
        cardNumber: values.cardNumber,
        expiryDate: values.expiryDate,
        cvv: values.cvv,
        cfTurnstileResponse: values.cfTurnstileResponse,
        cardType: meta.cardType?.type || "",
        skipIpCheck: true,
      });
      if (success) {
        onNext();
      }
      return;
    }

    onNext();
  };

  return (
    <div className="w-full max-w-[720px]">
      {/* Mobile back (top, non-sticky) */}
      {/* <button
        type="button"
        onClick={onBack}
        className="mb-4 flex gap-1.5 py-2 font-['Kanit'] text-[16px] font-light uppercase text-black underline hover:cursor-pointer md:hidden"
      >
        <ArrowLeft className="size-4" />
        Back
      </button> */}

      <div
        role="note"
        className="w-full mb-5 flex flex-row gap-3 rounded-[12px] bg-[#E2F2E2] px-3 py-3 sm:items-center md:mb-6 md:px-4"
      >
        <Info className="size-4 text-[#2E7D32]" />
        <p className="font-['Kanit'] text-[13px] font-light leading-[18px] text-black/70 md:text-[15px] md:leading-[20px]">
          You won’t be billed until we officially open on {" "}
          <span className="font-medium text-black/80">25 May</span>.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-1 items-start md:mb-8">
        <h2 className="font-['Kanit'] !text-[20px] !font-[600] !leading-[28px] text-[#000] md:!text-[24px]">
          Enter your Payment Details
        </h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {/* Card Number (Stripe-style with card brand icon) */}
          <div>
            <label
              className="text-[14px] md:text-[16px] font-[Kanit] font-[500] leading-[156.25%]"
              htmlFor=""
            >
              Card Number*
            </label>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        {...getCardNumberProps({
                          onChange: field.onChange,
                          onBlur: field.onBlur,
                          value: field.value,
                        })}
                        placeholder="1234 5678 9012 3456"
                        className={`pr-12 mt-2 ${
                          fieldState.error
                            ? "border-red-500 "
                            : "border-[#d4d4d4] "
                        } text-black! text-base!`}
                      />
                      {meta.cardType && (
                        <div className="absolute right-3 pointer-events-none">
                          <svg
                            {...getCardImageProps({ images })}
                            className="h-5 w-auto"
                            style={{ display: "block" }}
                          />
                        </div>
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
          </div>

          {/* Expiry Date & CVV */}
          <div className="grid gap-4 grid-cols-2">
            <div className="w-full">
              <label
                className="text-[14px] md:text-[16px] font-[Kanit] font-[500] leading-[156.25%]"
                htmlFor=""
              >
                CVV*
              </label>
              <FormField
                control={form.control}
                name="cvv"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...getCVCProps({
                          onChange: field.onChange,
                          onBlur: field.onBlur,
                          value: field.value,
                        })}
                        placeholder="CVV"
                        className={`${
                          fieldState.error
                            ? "border-red-500 mt-2"
                            : "border-[#d4d4d4] mt-2"
                        } text-black! text-base!`}
                      />
                    </FormControl>
                    <FormMessage>
                      {fieldState.error?.message ||
                        (meta.touchedInputs.cvc && meta.erroredInputs.cvc)}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <label
                className="text-[14px] md:text-[16px] font-[Kanit] font-[500] leading-[156.25%]"
                htmlFor=""
              >
                Expiration Date*
              </label>
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...getExpiryDateProps({
                          onChange: field.onChange,
                          onBlur: field.onBlur,
                          value: field.value,
                        })}
                        placeholder="MM/YY"
                        className={`${
                          fieldState.error
                            ? "border-red-500 mt-2"
                            : "border-[#d4d4d4] mt-2"
                        } text-black! text-base!`}
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
            </div>
          </div>

          {/* Terms and Conditions Checkboxes */}
          <div className="flex flex-col gap-4">
            {/* First Checkbox */}
            <FormField
              control={form.control}
              name="agreedToTerms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-3 items-start">
                    <FormControl>
                      <Checkbox
                        id="agreedToTerms"
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                        className="mt-px w-4 h-4 border-gray-300 rounded focus:ring-[#4ab04a]"
                      />
                    </FormControl>
                    <label
                      htmlFor="agreedToTerms"
                      className="flex-1 font-['Vazirmatn'] font-normal text-black text-[14px] md:text-[16px] leading-[22px] cursor-pointer"
                    >
                      Please confirm you have read our{" "}
                      <Link
                        to="/terms-and-conditions"
                        target="_blank"
                        className="text-[#4ab04a] underline"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                  <FormMessage className="ml-7" />
                </FormItem>
              )}
            />

            {/* Second Checkbox */}
            <FormField
              control={form.control}
              name="agreedToAuthorization"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-3 items-start">
                    <FormControl>
                      {/* <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className=" size-4 flex-shrink-0 cursor-pointer"
                      /> */}
                      <Checkbox
                        id="agreedToAuthorization"
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                        className="mt-px w-4 h-4 border-gray-300 rounded focus:ring-[#4ab04a]"
                      />
                    </FormControl>
                    <label
                      htmlFor="agreedToAuthorization"
                      className="flex-1 font-['Vazirmatn'] font-normal text-black text-[14px] md:text-[16px] leading-[22px] cursor-pointer"
                    >
                      I authorize Evolve Strength to charge my card for
                      membership fees. I understand my membership renews
                      automatically unless I cancel as stated in the contract. I
                      have read and agree to the{" "}
                      <Link
                        to="/terms-and-conditions"
                        target="_blank"
                        className="text-[#4ab04a] underline"
                      >
                        Terms And Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        className="text-[#4ab04a] underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <FormMessage className="ml-7" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="cfTurnstileResponse"
            render={({ field, fieldState }) => (
              <FormItem>
                <label className="text-[14px] md:text-[16px] font-[Kanit] font-[500] leading-[156.25%]">
                  Security Check*
                </label>
                <FormControl>
                  <div className="bg-[#FFF] py-1 mt-2">
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
                        Add `VITE_TURNSTILE_SITE_KEY` to enable the security
                        check.
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Navigation Buttons */}
          <div className="mt-4 flex flex-col gap-3 md:mt-8 md:flex-row md:items-end md:justify-between">
            <button
              type="button"
              onClick={onBack}
              className="hidden items-center gap-1.5 font-['Kanit'] text-[16px] font-light uppercase text-black hover:cursor-pointer md:flex"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
            <div className="flex w-full flex-col items-end gap-2 md:w-auto">
              {submitError && (
                <p className="text-[12px] md:text-[13px] text-red-600">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                className="btnPrimary w-full md:w-auto"
                disabled={isSubmitting || !turnstileSiteKey}
              >
                {isSubmitting ? "Processing..." : "Lock My Rate For $0"}
              </button>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="flex items-center justify-center gap-1.5 font-['Kanit'] text-[16px] font-light uppercase text-black hover:cursor-pointer md:hidden"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PaymentInformation;
