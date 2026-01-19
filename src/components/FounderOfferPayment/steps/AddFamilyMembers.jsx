import React, { useState } from "react";
import { ArrowLeft, Plus, Trash2, Users } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Family member schema - validates only if member has any data
const familyMemberSchema = z
  .object({
    id: z.number(),
    firstName: z.string().default(""),
    lastName: z.string().default(""),
    email: z.string().default(""),
    phone: z.string().optional().default(""),
  })
  .superRefine((data, ctx) => {
    const hasAnyData =
      (data.firstName && data.firstName.trim()) ||
      (data.lastName && data.lastName.trim()) ||
      (data.email && data.email.trim()) ||
      (data.phone && data.phone.trim());

    // If no data, member is valid (optional)
    if (!hasAnyData) return;

    // If has data, validate required fields
    if (!data.firstName || !data.firstName.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "First name is required",
        path: ["firstName"],
      });
    } else {
      if (data.firstName.trim().length > 50) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "First name must be less than 50 characters",
          path: ["firstName"],
        });
      } else if (!/^[a-zA-Z\s'-]+$/.test(data.firstName.trim())) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "First name can only contain letters, spaces, hyphens, and apostrophes",
          path: ["firstName"],
        });
      }
    }

    if (!data.lastName || !data.lastName.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Last name is required",
        path: ["lastName"],
      });
    } else {
      if (data.lastName.trim().length > 50) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Last name must be less than 50 characters",
          path: ["lastName"],
        });
      } else if (!/^[a-zA-Z\s'-]+$/.test(data.lastName.trim())) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Last name can only contain letters, spaces, hyphens, and apostrophes",
          path: ["lastName"],
        });
      }
    }

    if (!data.email || !data.email.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email is required",
        path: ["email"],
      });
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid email address",
          path: ["email"],
        });
      } else if (data.email.trim().length > 254) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email must be less than 254 characters",
          path: ["email"],
        });
      }
    }

    // Validate phone if provided (simple 10-digit check)
    if (data.phone && data.phone.trim()) {
      const digitsOnly = data.phone.replace(/\D/g, "");
      if (digitsOnly.length !== 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid 10-digit phone number",
          path: ["phone"],
        });
      }
    }
  });

// Form schema
const formSchema = z.object({
  familyMembers: z.array(familyMemberSchema).optional(),
});

// Phone formatter: (334) 343-4343
const formatPhone = (value = "") => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

function AddFamilyMembers({
  familyMembers: initialFamilyMembers,
  updateFamilyMembers,
  onNext,
  onBack,
}) {
  const [showAddButton, setShowAddButton] = useState(
    initialFamilyMembers.length === 0
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyMembers: initialFamilyMembers.length > 0 
        ? initialFamilyMembers 
        : [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "familyMembers",
  });

  // Update parent when form changes
  React.useEffect(() => {
    const subscription = form.watch((value) => {
      updateFamilyMembers(value.familyMembers || []);
      if ((value.familyMembers || []).length === 0) {
        setShowAddButton(true);
      } else {
        setShowAddButton(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, updateFamilyMembers]);

  const addFamilyMember = () => {
    append({
      id: Date.now(),
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setShowAddButton(false);
  };

  const removeFamilyMember = (index) => {
    remove(index);
    if (fields.length === 1) {
      setShowAddButton(true);
    }
  };

  const handleNext = () => {
    // Validate only if there are family members with data
    if (fields.length > 0) {
      form.handleSubmit(
        () => {
          onNext();
        },
        (errors) => {
          // Focus on first error
          const firstError = Object.keys(errors.familyMembers || {})[0];
          if (firstError) {
            const fieldName = Object.keys(
              errors.familyMembers?.[firstError] || {}
            )[0];
            if (fieldName) {
              const errorElement = document.querySelector(
                `[name="familyMembers.${firstError}.${fieldName}"]`
              );
              if (errorElement) {
                setTimeout(() => errorElement.focus(), 100);
              }
            }
          }
        }
      )();
    } else {
      // Optional step - can proceed even without family members
      onNext();
    }
  };

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="flex flex-col gap-1 items-start mb-6">
        <h2 className="font-['Kanit'] !font-medium text-[#000] !text-[20px] capitalize !leading-[28px]">
          Add Family Member (Optional)
        </h2>
        <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          Lock founder pricing for your entire family (optional)
        </p>
      </div>

      <Form {...form}>
        <form className="flex flex-col gap-6">
          {/* Family Member Cards */}
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="bg-white border border-[#d4d4d4] rounded-[8px] px-4 py-6"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-3 items-center">
                  <p className="font-['Kanit'] font-semibold text-[#0a0a0a] text-[16px] leading-[24px]">
                    Family Member #{index + 1}
                  </p>
                  <span className="bg-[#00a63e] border border-transparent rounded-[8px] px-2.5 py-1.5">
                    <p className="font-['Kanit'] font-light text-white text-[12px] leading-[16px]">
                      Founder Rate Applied
                    </p>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFamilyMember(index)}
                  className="size-8 rounded-[8px] flex items-center justify-center hover:bg-gray-100"
                >
                  <Trash2 className="size-4 text-red-500" />
                </button>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4">
                {/* First Name & Last Name */}
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name={`familyMembers.${index}.firstName`}
                    render={({ field }) => {
                      const error = form.formState.errors.familyMembers?.[index];
                      return (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="First Name"
                              className={
                                error ? "border-red-500" : "border-[#d4d4d4]"
                              }
                            />
                          </FormControl>
                          {error?.firstName && (
                            <FormMessage>{error.firstName.message}</FormMessage>
                          )}
                          {error && !error.firstName && (
                            <FormMessage>{error.message}</FormMessage>
                          )}
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name={`familyMembers.${index}.lastName`}
                    render={({ field }) => {
                      const error = form.formState.errors.familyMembers?.[index];
                      return (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Last Name"
                              className={
                                error ? "border-red-500" : "border-[#d4d4d4]"
                              }
                            />
                          </FormControl>
                          {error?.lastName && (
                            <FormMessage>{error.lastName.message}</FormMessage>
                          )}
                        </FormItem>
                      );
                    }}
                  />
                </div>

                {/* Email & Phone */}
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name={`familyMembers.${index}.email`}
                    render={({ field }) => {
                      const error = form.formState.errors.familyMembers?.[index];
                      return (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Email Address"
                              className={`h-[49px] font-['Kanit'] font-light text-[16px] text-black placeholder:text-black ${
                                error ? "border-red-500" : "border-[#d4d4d4]"
                              }`}
                            />
                          </FormControl>
                          {error?.email && (
                            <FormMessage>{error.email.message}</FormMessage>
                          )}
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name={`familyMembers.${index}.phone`}
                    render={({ field }) => {
                      const error = form.formState.errors.familyMembers?.[index];
                      return (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              type="tel"
                              {...field}
                              placeholder="Phone Number (Optional)"
                              inputMode="tel"
                              onChange={(e) => {
                                const formatted = formatPhone(e.target.value);
                                field.onChange(formatted);
                              }}
                              className={`h-[49px] font-['Kanit'] font-light text-[16px] text-black placeholder:text-black ${
                                error?.phone ? "border-red-500" : "border-[#d4d4d4]"
                              }`}
                            />
                          </FormControl>
                          {error?.phone && (
                            <FormMessage>{error.phone.message}</FormMessage>
                          )}
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add Family Member Button */}
          {showAddButton && (
            <button
              type="button"
              onClick={addFamilyMember}
              className="border border-black border-dashed rounded-[8px] px-[17px] py-3 flex gap-2 items-center justify-center"
            >
              <Users className="size-4 text-black" />
              <p className="font-['Kanit'] font-normal text-[#0a0a0a] text-[14px] leading-[20px]">
                Add a family member
              </p>
            </button>
          )}

          {!showAddButton && fields.length > 0 && (
            <button
              type="button"
              onClick={addFamilyMember}
              className="border border-black border-dashed rounded-[8px] px-[17px] py-3 flex gap-2 items-center justify-center"
            >
              <Plus className="size-4 text-black" />
              <p className="font-['Kanit'] font-normal text-[#0a0a0a] text-[14px] leading-[20px]">
                Add another family member
              </p>
            </button>
          )}
        </form>
      </Form>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="flex gap-1.5 items-center hover:cursor-pointer font-['Kanit'] font-light text-black text-[16px] uppercase"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>
        <button type="button" onClick={handleNext} className="btnPrimary">
          Next
        </button>
      </div>
    </div>
  );
}

export default AddFamilyMembers;
