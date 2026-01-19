import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { loadGoogleMaps } from "@/lib/loadGoogleMap";
import { checkGoogleMapsKey } from "@/utils/checkEnv";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

// Clean address string helper
const cleanString = (str = "") =>
  str.replaceAll("é", "e").replace(/[^A-Za-z0-9 /#]/g, "");

const formatAddress = (address) => cleanString(address).slice(0, 44);

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

// Helper: compute date limits for DOB input
const getDobLimits = () => {
  const today = new Date();

  // Max: today minus 18 years
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  // Min: today minus 120 years
  const minDate = new Date(
    today.getFullYear() - 120,
    today.getMonth(),
    today.getDate()
  );

  const toInputDate = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

  return {
    min: toInputDate(minDate),
    max: toInputDate(maxDate),
  };
};

// Zod Schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required.")
    .max(50, "First name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  lastName: z
    .string()
    .min(1, "Last name is required.")
    .max(50, "Last name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(254, "Email must be less than 254 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine(
      (val) => {
        // Allow common formats but require exactly 10 digits total
        const digitsOnly = (val || "").replace(/\D/g, "");
        return digitsOnly.length === 10;
      },
      "Please enter a valid 10-digit phone number"
    ),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be less than 200 characters"),
  province: z.string().min(1, "Province is required."),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s-]+$/,
      "City can only contain letters, spaces, and hyphens"
    ),
  postalCode: z
    .string()
    .min(6, "Postal code must be at least 6 characters long. (e.g. M1A 1A1)")
    .refine(
      (value) =>
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
          value ?? ""
        ),
      "Please enter a valid Canadian postal code (e.g., A1A 1A1)"
    ),
  dob: z
    .string()
    .min(1, "Date of birth is required.")
    .refine(
      (val) => {
        const date = new Date(val);
        if (isNaN(date.getTime())) return false;
        if (date > new Date()) return false;
        let age = new Date().getFullYear() - date.getFullYear();
        const monthDiff = new Date().getMonth() - date.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && new Date().getDate() < date.getDate())
        ) {
          age--;
        }
        return age >= 18 && age < 120;
      },
      (val) => {
        const date = new Date(val);
        if (isNaN(date.getTime())) return "Please enter a valid date";
        if (date > new Date()) return "Date of birth cannot be in the future";
        let age = new Date().getFullYear() - date.getFullYear();
        const monthDiff = new Date().getMonth() - date.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && new Date().getDate() < date.getDate())
        ) {
          age--;
        }
        if (age < 18) return "You must be at least 18 years old";
        if (age >= 120) return "Please enter a valid date of birth";
        return "Invalid date of birth";
      }
    ),
  gender: z.string().min(1, "Gender is required."),
});

function PrimaryMemberDetails({ formData, updateFormData, onNext, onBack }) {
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [autocompleteInitializedForAddress, setAutocompleteInitializedForAddress] =
    useState(false);
  const [autocompleteInitializedForPostal, setAutocompleteInitializedForPostal] =
    useState(false);
  const dropdownRef = useRef(null);
  const addressRef = useRef(null);
  const postalCodeRef = useRef(null);

  // Debug: Check environment variable on component mount
  useEffect(() => {
    checkGoogleMapsKey();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      address: formData.address || "",
      province: formData.province || "",
      city: formData.city || "",
      postalCode: formData.postalCode || "",
      dob: formData.dob || "",
      gender: formData.gender || "",
    },
  });

  // Update parent form data when form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      updateFormData(value);
    });
    return () => subscription.unsubscribe();
  }, [form, updateFormData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGenderDropdown(false);
      }
    };

    if (showGenderDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGenderDropdown]);

  const handleGenderSelect = (gender) => {
    form.setValue("gender", gender, { shouldValidate: true });
    setShowGenderDropdown(false);
  };

  // Address Autocomplete Handler
  const handleAddressFocus = async () => {
    if (!autocompleteInitializedForAddress && addressRef.current) {
      try {
        const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
        
        // Debug: Log all env variables (remove in production)
        console.log("Environment variables:", {
          hasKey: !!apiKey,
          keyValue: apiKey,
          allEnv: import.meta.env,
        });
        
        if (!apiKey || apiKey === "undefined") {
          console.error(
            "Google Maps API key is missing. Please ensure VITE_APP_GOOGLE_MAPS_API_KEY is set in your .env file and restart your dev server."
          );
          console.error("Available env vars:", Object.keys(import.meta.env));
          return;
        }
        
        const google = await loadGoogleMaps(apiKey);

        const autocomplete = new google.maps.places.Autocomplete(
          addressRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "ca" },
          }
        );

        autocomplete.setFields(["formatted_address", "address_components"]);

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          let postalCode = "";
          let shortAddress = "";
          let province = "";
          let city = "";

          if (place.address_components) {
            for (const component of place.address_components) {
              if (component.types.includes("postal_code")) {
                postalCode = component.long_name;
              }
              if (component.types.includes("street_number")) {
                shortAddress = cleanString(component.long_name);
              }
              if (component.types.includes("route")) {
                if (shortAddress) {
                  shortAddress = cleanString(
                    `${shortAddress} ${component.long_name}`
                  );
                } else {
                  shortAddress = cleanString(component.long_name);
                }
              }
              if (component.types.includes("administrative_area_level_1")) {
                province = cleanString(component.long_name);
              }
              if (
                component.types.includes("locality") ||
                component.types.includes("administrative_area_level_3")
              ) {
                city = cleanString(component.long_name);
              }
            }
          }

          // Update form fields - always update all available fields
          if (shortAddress) {
            form.setValue("address", shortAddress, { shouldValidate: true });
          } else if (place.formatted_address) {
            const cleanedAddress = formatAddress(place.formatted_address);
            form.setValue("address", cleanedAddress, { shouldValidate: true });
          }
          
          if (postalCode) {
            form.setValue("postalCode", postalCode, { shouldValidate: true });
          }
          if (province) {
            form.setValue("province", province, { shouldValidate: true });
          }
          if (city) {
            form.setValue("city", city, { shouldValidate: true });
          }
        });

        setAutocompleteInitializedForAddress(true);
      } catch (err) {
        console.error("Failed to load Google Maps script:", err);
      }
    }
  };

  // Postal Code Autocomplete Handler
  const handlePostalCodeFocus = async () => {
    if (!autocompleteInitializedForPostal && postalCodeRef.current) {
      try {
        const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
        
        if (!apiKey || apiKey === "undefined") {
          console.error(
            "Google Maps API key is missing. Please ensure VITE_APP_GOOGLE_MAPS_API_KEY is set in your .env file and restart your dev server."
          );
          return;
        }
        
        const google = await loadGoogleMaps(apiKey);

        const autocomplete = new google.maps.places.Autocomplete(
          postalCodeRef.current,
          {
            types: ["(regions)"],
            componentRestrictions: { country: "ca" },
          }
        );

        autocomplete.setFields([
          "address_components",
          "formatted_address",
          "geometry",
        ]);

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          let postalCode = "";
          let shortAddress = "";
          let province = "";
          let city = "";

          if (place.address_components) {
            for (const component of place.address_components) {
              if (component.types.includes("postal_code")) {
                postalCode = component.long_name;
              }
              if (component.types.includes("street_number")) {
                shortAddress = cleanString(component.long_name);
              }
              if (component.types.includes("route")) {
                if (shortAddress) {
                  shortAddress = cleanString(
                    `${shortAddress} ${component.long_name}`
                  );
                } else {
                  shortAddress = cleanString(component.long_name);
                }
              }
              if (component.types.includes("administrative_area_level_1")) {
                province = cleanString(component.long_name);
              }
              if (
                component.types.includes("locality") ||
                component.types.includes("administrative_area_level_3")
              ) {
                city = cleanString(component.long_name);
              }
            }
          }

          // Update form fields - update all available fields including address
          if (postalCode) {
            form.setValue("postalCode", postalCode, { shouldValidate: true });
          }
          if (province) {
            form.setValue("province", province, { shouldValidate: true });
          }
          if (city) {
            form.setValue("city", city, { shouldValidate: true });
          }
          
          // Update address if we have street information
          if (shortAddress) {
            form.setValue("address", shortAddress, { shouldValidate: true });
          } else if (place.formatted_address) {
            // If no street number/route, use formatted address
            const cleanedAddress = formatAddress(place.formatted_address);
            form.setValue("address", cleanedAddress, { shouldValidate: true });
          }
        });

        setAutocompleteInitializedForPostal(true);
      } catch (err) {
        console.error("Failed to load Google Maps script:", err);
      }
    }
  };

  const onSubmit = (values) => {
    updateFormData(values);
    onNext();
  };

  const genderValue = form.watch("gender");
  const addressError = form.formState.errors.address;
  const postalCodeError = form.formState.errors.postalCode;
  const dobLimits = getDobLimits();

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="font-['Kanit'] font-medium text-[#000] !text-[20px] capitalize !leading-[28px]">
          Tell us about the primary member
        </h2>
        <p className="font-['Kanit'] font-light text-[#393939] text-[14px] leading-[22px]">
          We'll use this information to set up your founder membership
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {/* First Name & Last Name */}
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="First Name"
                      className={
                        form.formState.errors.firstName
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Last Name"
                      className={
                        form.formState.errors.lastName
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email & Phone */}
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email Address"
                      className={`h-[49px] ${
                        form.formState.errors.email
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="Phone Number"
                      inputMode="tel"
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        field.onChange(formatted);
                      }}
                      className={`h-[49px] ${
                        form.formState.errors.phone
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    ref={(el) => {
                      field.ref(el);
                      addressRef.current = el;
                    }}
                    onFocus={handleAddressFocus}
                    placeholder="Address"
                    className={
                      addressError ? "border-red-500" : "border-[#d4d4d4]"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Province */}
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Province"
                    className={
                      form.formState.errors.province
                        ? "border-red-500"
                        : "border-[#d4d4d4]"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City & Postal Code */}
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="City"
                      className={
                        form.formState.errors.city
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      ref={(el) => {
                        field.ref(el);
                        postalCodeRef.current = el;
                      }}
                      onFocus={handlePostalCodeFocus}
                      placeholder="Postal Code"
                      className={
                        postalCodeError ? "border-red-500" : "border-[#d4d4d4]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* DOB & Gender */}
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      min={dobLimits.min}
                      max={dobLimits.max}
                      placeholder="DOB"
                      className={
                        form.formState.errors.dob
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex-1 relative" ref={dropdownRef}>
                  <FormControl>
                    <button
                      type="button"
                      onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                      className={`w-full px-4 py-3 border rounded-[5px] form-placeholder flex items-center justify-between ${
                        form.formState.errors.gender
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }`}
                    >
                      <span className={genderValue ? "" : "text-gray-400"}>
                        {genderValue || "Gender"}
                      </span>
                      <ChevronDown className="size-[10px]" />
                    </button>
                  </FormControl>
                  {showGenderDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#d4d4d4] rounded-[5px] shadow-lg z-50">
                      {genderOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleGenderSelect(option)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 form-placeholder"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
            <button type="submit" className="btnPrimary">
              Next
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PrimaryMemberDetails;
