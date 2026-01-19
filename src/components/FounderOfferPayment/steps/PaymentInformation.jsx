import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
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

function PaymentInformation({ formData, updateFormData, onNext, onBack, primaryMember }) {
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
      });
    });
    return () => subscription.unsubscribe();
  }, [form, updateFormData]);

  const onSubmit = (values) => {
    updateFormData({
      cardNumber: values.cardNumber,
      expiryDate: values.expiryDate,
      cvv: values.cvv,
    });
    onNext();
  };

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="flex flex-col gap-1 items-start mb-6">
        <h2 className="font-['Kanit'] !font-medium text-[#000] !text-[20px] capitalize !leading-[28px]">
          Add Payment Information
        </h2>
        <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          Provide billing details to complete your founder membership
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Card Number (Stripe-style with card brand icon) */}
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
                      className={`pr-12 ${
                        fieldState.error ? "border-red-500" : "border-[#d4d4d4]"
                      }`}
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

          {/* Expiry Date & CVV */}
          <div className="flex gap-4">
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
                      className={
                        fieldState.error ? "border-red-500" : "border-[#d4d4d4]"
                      }
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
                      className={
                        fieldState.error ? "border-red-500" : "border-[#d4d4d4]"
                      }
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
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="mt-1 size-4 flex-shrink-0 cursor-pointer"
                      />
                    </FormControl>
                    <label
                      htmlFor="agreedToTerms"
                      className="flex-1 font-['Vazirmatn'] font-normal text-black text-[14px] leading-[22px] cursor-pointer"
                    >
                      Please confirm you have read our{" "}
                      <Link
                        to="/terms-and-conditions"
                        target="_blank"
                        className="text-[#4ab04a] underline"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/terms-and-conditions"
                        target="_blank"
                        className="text-[#4ab04a] underline"
                      >
                        Conditions
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
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="mt-1 size-4 flex-shrink-0 cursor-pointer"
                      />
                    </FormControl>
                    <label
                      htmlFor="agreedToAuthorization"
                      className="flex-1 font-['Vazirmatn'] font-normal text-black text-[14px] leading-[22px] cursor-pointer"
                    >
                      I authorize Evolve Strength to change my card for membership fees.
                      I understand my membership renews automatically unless I cancel as
                      stated in the contract. I have read and agree to the{" "}
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
            <MembershipSummaryCard primaryMember={primaryMember} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-0 md:mt-8">
            <button
              type="button"
              onClick={onBack}
              className="flex gap-1.5 items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
            <button type="submit" className="btnPrimary">
              Complete Payment
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PaymentInformation;
