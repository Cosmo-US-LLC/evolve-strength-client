import React, { useEffect } from "react";
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
import MembershipSummaryCard from "@/components/FounderOfferPayment/MembershipSummaryCard";
import {
  validateCardNumber,
  validateExpiryDate,
  validateCVV,
} from "@/utils/validation";
import { Checkbox } from "@/components/ui/checkbox";

// Zod Schema
const formSchema = z.object({
  // Required fields; react-payment-inputs meta handles detailed validation
  cardNumber: z.string().min(1, "Card number is required."),
  expiryDate: z.string().min(1, "Expiry date is required."),
  cvv: z.string().min(1, "CVC is required."),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "Please confirm you have read our Terms and Conditions",
  }),
  agreedToAuthorization: z.boolean().refine((val) => val === true, {
    message: "Please accept the authorization and agreement",
  }),
});

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
        cardType: meta.cardType?.type || "",
      });
    });
    return () => subscription.unsubscribe();
  }, [form, updateFormData, meta.cardType]);

  const onSubmit = async (values) => {
    let hasErrors = false;

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
      cardType: meta.cardType?.type || "",
    });

    if (onSubmitPayment) {
      const success = await onSubmitPayment({
        cardNumber: values.cardNumber,
        expiryDate: values.expiryDate,
        cvv: values.cvv,
        cardType: meta.cardType?.type || "",
      });
      if (success) {
        onNext();
      }
      return;
    }

    onNext();
  };

  return (
    <div className="w-full max-w-[640px] mx-auto">
      {/* Mobile back (top, non-sticky) */}
      <button
        type="button"
        onClick={onBack}
        className="md:hidden mb-4 py-2 flex gap-1.5 underline items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
      >
        <ArrowLeft className="size-4" />
        Back
      </button>

      <div className="flex flex-col gap-1 items-start mb-6">
        <h2 className="font-['Kanit'] !font-medium text-[#000] !text-[20px] capitalize !leading-[20px]">
          Enter your Payment Details
        </h2>
        {/* <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          Provide billing details to complete your founder membership
        </p> */}
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
          <div className="flex gap-4">
            <div className="w-full">
              <label
                className="text-[14px] md:text-[16px] font-[Kanit] font-[500] leading-[156.25%]"
                htmlFor="Expiry Date*"
              >
                Expiry Date*
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
                        placeholder="CVC"
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

          {/* Mobile MembershipSummaryCard - Above Navigation Buttons */}
          <div className="lg:hidden mt-2 md:mt-8 mb-6">
            <MembershipSummaryCard
              primaryMember={primaryMember}
              paymentAmount={paymentAmount}
              feeAmount={feeAmount}
              planFeeAmount={planFeeAmount}
              addonLabel={addonLabel}
              untaxedAddonFeeAmount={untaxedAddonFeeAmount}
              gstAmount={gstAmount}
              totalAmount={totalAmount}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 justify-between mt-0 md:mt-8">
            <button
              type="button"
              onClick={onBack}
              className="hidden md:flex gap-1.5 underline items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
            {/* Desktop/tablet CTA (non-sticky) */}
            <div className="hidden md:flex flex-col items-end gap-2 w-full md:w-auto">
              {submitError && (
                <p className="text-[12px] md:text-[13px] text-red-600">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                className="btnPrimary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Lock My Rate"}
              </button>
              {/* <p className="font-['Kanit'] text-[13px] md:text-[13px] font-light leading-[18px] md:leading-[20px] text-black/60">
                No Deduction from your card will occur until Gym Launch.
              </p> */}
            </div>
          </div>
          {/* Informational note shown before checkout */}
          <div
            role="note"
            className="w-full rounded-[12px] mb-4 -mt-8 md:mt-0 md:mb-0 border border-[#4ab04a]/25 bg-[#F4FFF6] px-3 md:px-4 py-3 flex flex-row gap-3 sm:items-center"
          >
            <div className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#4ab04a]/10">
              <Info className="size-4 text-[#2E7D32]" />
            </div>

            <p className="font-['Kanit'] text-[13px] md:text-[15px] font-light leading-[18px] md:leading-[20px] text-black/60">
              No Deduction from your card will occur until{" "}
              <span className="font-medium text-black/75">Gym Launch</span>.
            </p>
          </div>

          {/* Mobile sticky CTA */}
          {/* <div className="md:hidden h-[84px]" aria-hidden="true" /> */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-[640px] px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 bg-white/95 backdrop-blur border-t border-black/10">
              {submitError && (
                <p className="mb-2 text-[12px] text-red-600 text-right">
                  {submitError}
                </p>
              )}
              <button
                type="submit"
                className="btnPrimary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Lock My Rate"}
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PaymentInformation;
