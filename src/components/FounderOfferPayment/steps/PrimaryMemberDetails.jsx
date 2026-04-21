import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loadGoogleMaps } from "@/lib/loadGoogleMap";
import { checkGoogleMapsKey } from "@/utils/checkEnv";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { format, subYears } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const toDateOrUndefined = (value) => {
  if (!value) return undefined;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

const getAge = (date) => {
  const now = new Date();
  let age = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) {
    age--;
  }
  return age;
};

// Helper: compute date limits for DOB input
// const getDobLimits = () => {
//   const today = new Date();

//   // Max: today minus 18 years
//   const maxDate = new Date(
//     today.getFullYear() - 18,
//     today.getMonth(),
//     today.getDate(),
//   );

//   // Min: today minus 120 years
//   const minDate = new Date(
//     today.getFullYear() - 120,
//     today.getMonth(),
//     today.getDate(),
//   );

//   const toInputDate = (d) =>
//     `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
//       d.getDate(),
//     ).padStart(2, "0")}`;

//   return {
//     min: toInputDate(minDate),
//     max: toInputDate(maxDate),
//   };
// };

// Zod Schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required.")
    .max(50, "First name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes",
    ),
  lastName: z
    .string()
    .min(1, "Last name is required.")
    .max(50, "Last name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes",
    ),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(254, "Email must be less than 254 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine((val) => {
      // Allow common formats but require exactly 10 digits total
      const digitsOnly = (val || "").replace(/\D/g, "");
      return digitsOnly.length === 10;
    }, "Please enter a valid 10-digit phone number"),
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
      "City can only contain letters, spaces, and hyphens",
    ),
  postalCode: z
    .string()
    .min(6, "Postal code must be at least 6 characters long. (e.g. M1A 1A1)")
    .refine(
      (value) =>
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
          value ?? "",
        ),
      "Please enter a valid Canadian postal code (e.g., A1A 1A1)",
    ),
  dob: z.preprocess(
    (value) => toDateOrUndefined(value),
    z
      .date({ required_error: "Date of birth is required." })
      .refine(
        (date) => date <= new Date(),
        "Date of birth cannot be in the future",
      )
      .refine((date) => getAge(date) >= 18, "You must be at least 18 years old")
      .refine(
        (date) => getAge(date) < 120,
        "Please enter a valid date of birth",
      ),
  ),
  gender: z.string().min(1, "Gender is required."),
});

function PrimaryMemberDetails({ formData, updateFormData, onNext, onBack }) {
  // const [isIOSDevice, setIsIOSDevice] = useState(false);
  const [
    autocompleteInitializedForAddress,
    setAutocompleteInitializedForAddress,
  ] = useState(false);
  const [
    autocompleteInitializedForPostal,
    setAutocompleteInitializedForPostal,
  ] = useState(false);
  const addressRef = useRef(null);
  const postalCodeRef = useRef(null);

  // Debug: Check environment variable on component mount
  useEffect(() => {
    checkGoogleMapsKey();
  }, []);

  // useEffect(() => {
  //   if (typeof navigator === "undefined") return;
  //   const isIOS =
  //     /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  //     (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  //   setIsIOSDevice(isIOS);
  // }, []);

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
      dob: toDateOrUndefined(formData.dob),
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
            "Google Maps API key is missing. Please ensure VITE_APP_GOOGLE_MAPS_API_KEY is set in your .env file and restart your dev server.",
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
          },
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
                    `${shortAddress} ${component.long_name}`,
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
            "Google Maps API key is missing. Please ensure VITE_APP_GOOGLE_MAPS_API_KEY is set in your .env file and restart your dev server.",
          );
          return;
        }

        const google = await loadGoogleMaps(apiKey);

        const autocomplete = new google.maps.places.Autocomplete(
          postalCodeRef.current,
          {
            types: ["(regions)"],
            componentRestrictions: { country: "ca" },
          },
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
                    `${shortAddress} ${component.long_name}`,
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

  const addressError = form.formState.errors.address;
  const postalCodeError = form.formState.errors.postalCode;
  // const dobLimits = getDobLimits();

  return (
    <div className="w-full max-w-[720px]">
      {/* Mobile back (top, non-sticky) */}
      {/* <button
        type="button"
        onClick={onBack}
        className="mb-4 flex gap-1.5 py-2 font-['Kanit'] text-[16px] font-light uppercase text-black hover:cursor-pointer md:hidden"
      >
        <ArrowLeft className="size-3" />
        Back
      </button> */}

      <div className="mb-6 flex flex-col gap-1 md:mb-8">
        <h2 className="!font-[Kanit] !text-[20px] !font-[600] !leading-[28px] text-[#000] md:!text-[24px]">
          Enter Your Details
        </h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 md:gap-5"
        >
          {/* First Name & Last Name */}
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="First Name"
                      className={`${
                        form.formState.errors.firstName
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      } text-black! text-base!`}
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
                      className={`${
                        form.formState.errors.lastName
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      } text-black! text-base!`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email & Phone */}
          <div className="grid gap-4 grid-cols-2">
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
                      className={`h-[49px] ${`${
                        form.formState.errors.email
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      }`} text-black! text-base!`}
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
                      } text-black! text-base!`}
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
                    className={`${addressError ? "border-red-500" : "border-[#d4d4d4]"} text-black! text-base!`}
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
                    className={`${
                      form.formState.errors.province
                        ? "border-red-500"
                        : "border-[#d4d4d4]"
                    } text-black! text-base!`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City & Postal Code */}
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="City"
                      className={`${
                        form.formState.errors.city
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      } text-black! text-base!`}
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
                      className={`${postalCodeError ? "border-red-500" : "border-[#d4d4d4]"} text-black! text-base!`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* DOB & Gender */}
          <div className="grid gap-4 grid-cols-2">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <>
                  <FormItem className="flex-1 flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left  min-h-[50px] text-[16px] font-["Vazirmatn"] font-[400] px-4 py-3 placeholder:text-sm placeholder:text-black border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none ${!field.value && "text-[#8A8A8A]"}`}
                          >
                            {field.value
                              ? format(field.value, "d MMM, yyyy")
                              : "DOB"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white"
                        align="start"
                        side="bottom"
                        sideOffset={5}
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > subYears(new Date(), 18)}
                          defaultMonth={subYears(new Date(), 18)}
                          initialFocus
                          className="min-w-[250px] min-h-[340px]"
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            {/* <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex-1 relative">
                  <FormControl className="w-full">
                    <div className="relative w-full h-full max-h-[50px] flex">
                      {isIOSDevice && !field.value && (
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                          DOB
                        </span>
                      )}
                      <Input
                        {...field}
                        type="date"
                        min={dobLimits.min}
                        max={dobLimits.max}
                        placeholder="DOB"
                        className={`${
                          form.formState.errors.dob
                            ? "border-red-500"
                            : "border-[#d4d4d4]"
                        } text-black! text-base! cursor-pointer flex-1`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex-1">
                  {/* <FormLabel>Gender</FormLabel> */}
                  <Select
                    // onValueChange={field.onChange}
                    // defaultValue={field.value}
                    onValueChange={field.onChange}
                    // defaultValue={field.value ?? undefined}
                    value={field.value ?? undefined}
                    key={field.value ?? "unset"}
                  >
                    <FormControl>
                      <SelectTrigger className="min-h-[50px] w-full text-[16px] font-['Vazirmatn'] font-[400] px-4 py-3 placeholder:text-sm placeholder:text-black border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none">
                        <SelectValue
                          placeholder="Gender"
                          className="text-[16px] font-['Vazirmatn'] font-[400] text-black placeholder:text-sm placeholder:text-black"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Unknown">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="gender"
              render={() => (
                <FormItem className="flex-1 relative" ref={dropdownRef}>
                  <FormControl>
                    <button
                      type="button"
                      onClick={() => setShowGenderDropdown(!showGenderDropdown)}
                      className={`w-full px-4 py-3 border rounded-[5px] form-placeholder flex items-center justify-between cursor-pointer ${
                        form.formState.errors.gender
                          ? "border-red-500"
                          : "border-[#d4d4d4]"
                      } text-black! text-base!`}
                    >
                      <span className={genderValue ? "" : "text-[#8A8A8A]"}>
                        {genderValue || "Gender"}
                      </span>
                      <ChevronDown
                        className={`size-[14px] transition-transform duration-300 ${showGenderDropdown ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>
                  </FormControl>
                  {showGenderDropdown && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-[#d4d4d4] rounded-[5px] shadow-lg z-50">
                      {genderOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleGenderSelect(option)}
                          className="w-full px-4 py-1 text-left hover:bg-gray-100 form-placeholder cursor-pointer hover:text-black! "
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-4 flex flex-col gap-3 md:mt-8 md:flex-row md:items-center md:justify-between">
            <button
              type="button"
              onClick={onBack}
              className="hidden items-center gap-1.5 font-['Kanit'] text-[16px] font-light uppercase text-black hover:cursor-pointer md:flex"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
            <button type="submit" className="btnPrimary w-full md:w-auto">
              Next
            </button>
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

export default PrimaryMemberDetails;
