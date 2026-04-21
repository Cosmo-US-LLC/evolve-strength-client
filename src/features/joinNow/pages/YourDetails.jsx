import React, { useCallback, useEffect, useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/joinNow/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/features/joinNow/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/features/joinNow/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/features/joinNow/components/ui/alert-dialog";
import { Calendar } from "@/features/joinNow/components/ui/calendar";
import { format, subYears } from "date-fns";
import { cn } from "@/features/joinNow/lib/utils";
import { loadGoogleMaps } from "@/features/joinNow/lib/loadGoogleMap";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";
import locations, { provinceMap } from "../lib/locations";
import MembershipBenefits from "../components/MembershipBenefits";
import { fetchClubPlans } from "../lib/apis";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import { AnimatedCircularProgressBar } from "@/features/joinNow/components/ui/animated-circular-progress-bar";
import EditMembershipBox from "@/features/joinNow/components/EditMembershipBox";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .refine((val) => {
      const phone = parsePhoneNumberFromString(val, "CA");
      return phone ? phone.isValid() : false;
    }, "Enter a valid phone number."),
  address: z.preprocess((val) => {
    return val
      .replaceAll("é", "e")
      .replace(/[^A-Za-z0-9 #]/g, "")
      .slice(0, 44);
  }, z.string().min(1, "Mailing address is required.")),
  // return address.replaceAll('é', 'e').replace(/[^A-Za-z0-9 /#]/g, "").slice(0, 44);
  province: z.string().min(1, "Province is required."),
  city: z.string().min(1, "City is required."),
  postalCode: z
    .string()
    .min(6, "Postal code must be at least 6 characters long. (e.g. M1A 1A1)")
    .refine(
      (value) =>
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
          value ?? ""
        ),
      "Postal code is invalid"
    )
    .min(1, "Postal code is required."),
  // postalCode: z.string().min(1, "Postal code is required."),
  // dob: z.date({ required_error: "Date of birth is required." }),
  dob: z
    .preprocess((val) => {
      if (val instanceof Date) return val;
      return val ? new Date(val) : new Date();
    }, z.date({ required_error: "Date of birth is required." }))
    .refine(
      (date) => {
        return subYears(new Date(), 18) >= date;
      },
      {
        message: "Date of birth is required",
      }
    ),
  gender: z
    .string({
      required_error: "Gender is required.",
      invalid_type_error: "Gender must be a string.",
    })
    .refine((val) => ["Male", "Female", "Unknown"].includes(val), {
      message: "Gender is required.",
    }),
  // gender: z.enum(["Male", "Female", "Other"], {
  //   required_error: "Gender is required.",
  // }),
});

function usePhoneFormat(country = "CA") {
  const prev = useRef({ digits: "", key: "" });

  const onKeyDown = useCallback((e) => {
    prev.current.key = e.key; // capture Backspace/Delete/etc.
  }, []);

  const formatPhone = useCallback(
    (val) => {
      // raw digits (limit to 10 for NANP)
      let digits = val.replace(/\D/g, "").slice(0, 10);

      // If user hit Backspace but digit count didn't shrink, they deleted a mask char.
      if (
        prev.current.key === "Backspace" &&
        digits.length === prev.current.digits.length &&
        digits.length > 0
      ) {
        digits = digits.slice(0, -1);
      }

      prev.current.digits = digits;
      prev.current.key = "";

      return new AsYouType(country).input(digits);
    },
    [country]
  );

  return { onKeyDown, formatPhone };
}

const YourDetails = () => {
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

  const [plansIds, setPlansIds] = useState([]);
  const [plansDetails, setPlansDetails] = useState([]);

  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setApiError(null);
    fetchClubPlans(locationPostal, setPlansIds, setPlansDetails);
  }, []);

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

  useEffect(() => {
    localStorage?.removeItem("pricing");
  }, []);

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
      // console.log("0", currentPlan);
      // console.log("1", plansDetails);
      // console.log("2", plansDetails[currentPlan]?.schedules);
      // console.log("3", plansDetails[currentPlan]?.schedules[0]);
      // console.log("4", loading);
      const pricing = {
        biWeekly: `${
          plansDetails?.length > 0
            ? subDollarAmounts([
                plansDetails[currentPlan]?.schedules[0]?.scheduleAmount,
                plansDetails[currentPlan]?.downPayments[0]?.tax,
              ])
            : "$--.--"
        }`,
        addons: `${
          plansDetails?.length > 0
            ? sumDollarAmounts([
                ...addons?.map((addon) => addon?.schedulePreTaxAmount),
              ])
            : "$--.--"
        }`,
        tax: `${
          plansDetails?.length > 0
            ? sumDollarAmounts([
                plansDetails[currentPlan]?.downPayments[0]?.tax,
                ...addons?.map((addon) =>
                  subDollarAmounts([
                    addon?.scheduleAmount,
                    addon?.schedulePreTaxAmount,
                  ])
                ),
              ])
            : "$--.--"
        }`,
        dueToday: `${
          plansDetails?.length > 0
            ? sumDollarAmounts([
                plansDetails[currentPlan]?.downPayments[0]?.total,
                ...addons?.map((addon) => addon?.scheduleAmount),
              ])
            : "$--.--"
        }`,
        nextDue: `${
          plansDetails?.length > 0 &&
          format(
            new Date(plansDetails[currentPlan]?.schedules[0]?.scheduleDueDate),
            "MMM d, yyyy"
          )
        }`,
        nextDueAmt: `${
          plansDetails?.length > 0
            ? sumDollarAmounts([
                plansDetails[currentPlan]?.schedules[0]?.scheduleAmount,
                ...addons?.map((addon) => addon?.scheduleAmount),
              ])
            : "$--.--"
        }`,
      };
      // console?.log(
      //   "5",
      //   sumDollarAmounts([
      //     plansDetails[currentPlan]?.schedules[0]?.scheduleAmount,
      //     ...planAddons?.map((addon) => addon?.scheduleAmount),
      //   ])
      // );
      // console?.log("6", pricing);
      if (
        !pricing?.biWeekly?.includes("--") &&
        !pricing?.tax?.includes("--") &&
        !pricing?.dueToday?.includes("--") &&
        !pricing?.nextDue?.includes("--") &&
        !pricing?.nextDueAmt?.includes("--")
      ) {
        localStorage?.setItem("pricing", JSON.stringify(pricing));
      }
    }
  }, [plansDetails, currentPlan]);

  // console.log(plansDetails && plansDetails[currentPlan]?.downPayments[0]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      province: "",
      city: "",
      postalCode: "",
      dob: undefined,
      gender: "",
    },
  });

  const normalizeGender = (g) => {
    if (!g) return undefined;
    const val = g.trim().toLowerCase();
    if (val === "male") return "Male";
    if (val === "female") return "Female";
    if (val === "unknown") return "Unknown";
    return undefined; // anything else -> unset
  };

  useEffect(() => {
    const stored = localStorage.getItem("yourDetails");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const reverseProvinceMap = Object.fromEntries(
          Object.entries(provinceMap).map(([key, value]) => [value, key])
        );
        const digits = (parsed.phone_mobile || "").replace(/\D/g, "");
        const formattedPhone = new AsYouType("CA").input(digits);
        form.reset({
          firstName: parsed.first_name || "",
          lastName: parsed.last_name || "",
          email: parsed.email || "",
          phone: formattedPhone || "",
          address: parsed.address || "",
          province:
            reverseProvinceMap[parsed.province] || parsed.province || "",
          city: parsed.city || "",
          postalCode: parsed.postal_code || "",
          dob: parsed.birthday ? new Date(parsed.birthday) : undefined,
          gender: normalizeGender(parsed.gender),
          // gender: parsed.gender || "",
        });
      } catch (err) {
        console.error("Failed to load your details from localStorage", err);
      }
    }
  }, [form]);

  const onSubmit = async (values) => {
    // await fetch("https://example.com/api/your-details", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    const phone = values?.phone || "";
    const normalized = phone.replace(/\D/g, "");

    const dateObj = new Date(values?.dob);
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const selectedDate = `${month}/${day}/${year}`;

    const rawPostalCode = values?.postalCode;
    const formattedPostalCode = rawPostalCode
      .toUpperCase()
      .replace(/\s+/g, "")
      .replace(/(.{3})(.{3})/, "$1 $2");

    let payload = {
      club_id: locationPostal,
      first_name: values?.firstName || "John",
      last_name: values?.lastName || "Doe",
      email: values?.email || "",
      birthday: selectedDate || "",
      gender: values?.gender || "",
      phone_mobile: normalized || "",
      address: values?.address || "",
      city: values?.city || "",
      province: provinceMap[values?.province] || "",
      postal_code: formattedPostalCode || "",
      company_id:
        locations?.find((val) => val?.postalCode == locationPostal)
          ?.accountId || "missing clubLocationId",
    };
    console.log(payload);
    localStorage.setItem("yourDetails", JSON.stringify(payload));
    navigate(
      `/join-now/payment-info?location=${location}&plan=${currentPlan}${
        services ? `&services=${services}` : ""
      }`
    );
  };

  const handleBack = () => {
    navigate(
      `/join-now/membership-type?location=${location}&plan=${currentPlan}${
        services ? `&services=${services}` : ""
      }`
    );
  };
  const [
    autocompleteInitializedForPostal,
    setAutocompleteInitializedForPostal,
  ] = useState(false);
  const [
    autocompleteInitializedForAddress,
    setAutocompleteInitializedForAddress,
  ] = useState(false);

  const addressRef = useRef(null);
  const postalCodeRef = useRef(null);

  const cleanString = (str = "") =>
    str.replaceAll("é", "e").replace(/[^A-Za-z0-9 /#]/g, "");

  const formatAddress = (address) => cleanString(address).slice(0, 44);

  const handlePostalCodeFocus = async () => {
    if (!autocompleteInitializedForPostal && postalCodeRef.current) {
      try {
        const google = await loadGoogleMaps(
          import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
        );
        const autocomplete = new google.maps.places.Autocomplete(
          postalCodeRef.current,
          {
            types: ["(regions)"],
            componentRestrictions: { country: "ca" },
          }
        );

        autocomplete.setFields(["address_components", "formatted_address"]);

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          let postalCode = "";
          let formattedAddress = "";
          let shortAddress = "";
          let province = "";
          let city = "";

          if (place.address_components) {
            for (const component of place.address_components) {
              if (component.types.includes("postal_code")) {
                postalCode = component.long_name;
                continue;
              }
              if (component.types.includes("street_number")) {
                shortAddress = cleanString(component.long_name);
                continue;
              }
              if (component.types.includes("route")) {
                shortAddress = cleanString(
                  `${shortAddress} ${component.long_name}`
                );
                continue;
              }
              if (component.types.includes("administrative_area_level_1")) {
                province = cleanString(component.long_name);
                continue;
              }
              if (component.types.includes("administrative_area_level_3")) {
                city = cleanString(component.long_name);
                continue;
              }
              if (component.types.includes("locality")) {
                city = cleanString(component.long_name);
                continue;
              }
            }
          }

          if (place.formatted_address) {
            formattedAddress = place.formatted_address;
          } else {
            const cityComp =
              place.address_components?.find((c) =>
                c.types.includes("locality")
              )?.long_name || "";
            const provinceComp =
              place.address_components?.find((c) =>
                c.types.includes("administrative_area_level_1")
              )?.long_name || "";
            formattedAddress = [cityComp, provinceComp]
              .filter(Boolean)
              .join(", ");
          }

          const cleanedAddress = formatAddress(formattedAddress);

          if (postalCode) {
            form.setValue("postalCode", postalCode, { shouldValidate: true });
          }
          if (shortAddress) {
            form.setValue("address", shortAddress, { shouldValidate: true });
          } else if (formattedAddress) {
            form.setValue("address", cleanedAddress, { shouldValidate: true });
          }
          if (province) {
            form.setValue("province", province, { shouldValidate: true });
          }
          if (city) {
            form.setValue("city", city, { shouldValidate: true });
          }
        });

        setAutocompleteInitializedForPostal(true);
      } catch (err) {
        console.error("Failed to load Google Maps script:", err);
      }
    }
  };

  const handleAddressFocus = async () => {
    if (!autocompleteInitializedForAddress && addressRef.current) {
      try {
        const google = await loadGoogleMaps(
          import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
        );

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
          const formattedAddress = place.formatted_address || "";
          let postalCode = "";
          let shortAddress = "";
          let province = "";
          let city = "";

          if (place.address_components) {
            for (const component of place.address_components) {
              if (component.types.includes("postal_code")) {
                postalCode = component.long_name;
                continue;
              }
              if (component.types.includes("street_number")) {
                shortAddress = cleanString(component.long_name);
                continue;
              }
              if (component.types.includes("route")) {
                shortAddress = cleanString(
                  `${shortAddress} ${component.long_name}`
                );
                continue;
              }
              if (component.types.includes("administrative_area_level_1")) {
                province = cleanString(component.long_name);
                continue;
              }
              if (component.types.includes("administrative_area_level_3")) {
                city = cleanString(component.long_name);
                continue;
              }
              if (component.types.includes("locality")) {
                city = cleanString(component.long_name);
                continue;
              }
            }
          }

          const cleanedAddress = formatAddress(formattedAddress);

          if (shortAddress) {
            form.setValue("address", shortAddress, { shouldValidate: true });
          } else if (formattedAddress) {
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

  // const formatPhone = (val) => {
  //   const digits = val.replace(/\D/g, "").slice(0, 10);
  //   return new AsYouType("CA").input(digits);
  // };
  const { onKeyDown, formatPhone } = usePhoneFormat("CA");

  // const formatPhone = (val) => new AsYouType("CA").input(val);

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Left Sidebar - Progress Indicator */}
          <div className="lg:hidden bg-[#F4F4F4] p-4 flex items-center gap-[14px]">
            <AnimatedCircularProgressBar
              value={66}
              gaugePrimaryColor="#4ab04a"
              gaugeSecondaryColor="#dddddd"
              step="2"
              className={"w-[50px] h-[50px]"}
            />

            <div>
              <h1 className="text-base font-bold leading-5">Your Details</h1>
              <p className="text-xs leading-4 text-[#6F6D66]">
                Tell us a bit about yourself
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
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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

              {/* Your Details - Active */}
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 4.99246H10C10.3438 4.99246 10.625 4.71121 10.625 4.36746V3.11621C10.625 2.77246 10.3438 2.4909 10 2.4909H9.03125C8.67594 0.836523 6.32406 0.836211 5.96875 2.4909H5C4.65625 2.4909 4.375 2.77215 4.375 3.1159V4.36684C4.375 4.71059 4.65625 4.99215 5 4.99215V4.99246ZM7.5 9.7859C9.01719 9.73746 9.01375 7.54152 7.5 7.49402C5.98594 7.54152 5.98312 9.73777 7.5 9.7859ZM5.9375 13.4346H9.0625C9.23438 13.4346 9.375 13.294 9.375 13.1221V12.2871C9.2875 9.80434 5.71187 9.80465 5.625 12.2871V13.1221C5.625 13.294 5.76562 13.4346 5.9375 13.4346Z"
                      fill="white"
                    />
                    <path
                      d="M11.5625 3.42941H11.25V4.36753C11.2501 4.53174 11.2178 4.69435 11.155 4.84608C11.0922 4.99781 11.0002 5.13568 10.8841 5.25182C10.768 5.36796 10.6302 5.46009 10.4785 5.52295C10.3268 5.5858 10.1642 5.61816 10 5.61816H5C4.8358 5.61816 4.6732 5.5858 4.5215 5.52295C4.3698 5.46009 4.23198 5.36796 4.1159 5.25182C3.99981 5.13568 3.90775 4.99781 3.84497 4.84608C3.78219 4.69435 3.74992 4.53174 3.75 4.36753V3.42941C2.60312 3.31128 1.56344 4.12003 1.5625 5.30566V16.8744C1.56267 17.3718 1.76022 17.8487 2.11178 18.2005C2.46334 18.5523 2.94016 18.7502 3.4375 18.7507H11.5625C12.5969 18.7507 13.4375 17.9097 13.4375 16.8747V5.30566C13.4373 4.80831 13.2398 4.33136 12.8882 3.97957C12.5367 3.62778 12.0598 3.4299 11.5625 3.42941ZM5 12.2875C5.00047 11.8176 5.13357 11.3573 5.384 10.9596C5.63442 10.5619 5.992 10.2429 6.41563 10.0394C6.20245 9.87395 6.02975 9.66212 5.91063 9.41998C5.79151 9.17784 5.7291 8.91176 5.72813 8.64191C5.81125 6.29691 9.18813 6.29503 9.27187 8.64191C9.27187 9.20753 9 9.71441 8.58437 10.0394C9.008 10.2429 9.36558 10.5619 9.616 10.9596C9.86643 11.3573 9.99953 11.8176 10 12.2875V13.1225C9.99934 13.371 9.90038 13.6092 9.72472 13.7849C9.54907 13.9607 9.311 14.0598 9.0625 14.0607H5.9375C5.42188 14.0607 5 13.6385 5 13.1225V12.2875ZM10.625 16.8747H4.375C4.20312 16.8747 4.0625 16.7341 4.0625 16.5622C4.0625 16.3903 4.20312 16.2494 4.375 16.2494H10.625C11.0334 16.2566 11.0372 16.8666 10.625 16.8744V16.8747ZM10.625 15.6238H4.375C4.20312 15.6238 4.0625 15.4832 4.0625 15.3113C4.0625 15.1394 4.20312 14.9988 4.375 14.9988H10.625C11.0334 15.0057 11.0372 15.616 10.625 15.6238ZM14.6438 17.5188C14.8188 17.9469 15.075 18.3316 15.4031 18.66C15.4656 18.7194 15.5437 18.7507 15.625 18.7507C15.7063 18.7507 15.7844 18.7194 15.8469 18.66C16.4264 18.0751 16.7844 17.3069 16.8594 16.4869H14.3875C14.4219 16.84 14.5063 17.1841 14.6438 17.5188ZM17.5 6.55628H16.875C16.8584 5.98534 16.9975 5.16128 16.5094 4.73347C15.7531 3.94909 14.3531 4.52347 14.375 5.61847V7.18159H17.5C17.6719 7.18159 17.8125 7.32222 17.8125 7.49409V10.621C17.8125 10.7928 17.9531 10.9338 18.125 10.9338C18.2969 10.9338 18.4375 10.7932 18.4375 10.6213V7.49441C18.4368 7.24591 18.3379 7.00777 18.1622 6.832C17.9866 6.65623 17.7485 6.55711 17.5 6.55628Z"
                      fill="white"
                    />
                    <path
                      d="M14.375 7.80664H16.875V15.861H14.375V7.80664Z"
                      fill="white"
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

              {/* Payment Info - Inactive */}
              <div className="flex items-start space-x-4">
                <div className="rounded-full border-[1px] border-[#969698] w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6107_1340)">
                      <path
                        d="M18.6361 16.3637H15.4543C13.4493 16.3637 11.818 14.7324 11.818 12.7274C11.818 10.7223 13.4493 9.09108 15.4543 9.09108H18.6361C18.6958 9.09112 18.7549 9.07939 18.8101 9.05656C18.8652 9.03373 18.9154 9.00025 18.9576 8.95804C18.9998 8.91582 19.0333 8.86569 19.0561 8.81053C19.0789 8.75536 19.0907 8.69623 19.0906 8.63653V7.27292C19.0906 6.31975 18.3513 5.54458 17.4172 5.46941L14.8067 0.909826C14.5648 0.488128 14.1742 0.186727 13.7067 0.0615729C13.2415 -0.062729 12.7551 0.00255401 12.3387 0.244894L3.38986 5.45475H1.81817C0.815441 5.45475 0 6.27015 0 7.27292V18.1818C0 19.1846 0.815398 20 1.81817 20H17.2725C18.2752 20 19.0906 19.1846 19.0906 18.1818V16.8182C19.0907 16.7585 19.0789 16.6994 19.0561 16.6442C19.0333 16.5891 18.9998 16.5389 18.9576 16.4967C18.9154 16.4545 18.8652 16.421 18.8101 16.3982C18.7549 16.3754 18.6958 16.3636 18.6361 16.3637ZM15.3704 3.72484L16.3609 5.45475H12.3991L15.3704 3.72484ZM5.19665 5.45475L12.7963 1.03055C13.0018 0.910252 13.242 0.878292 13.4715 0.93957C13.7036 1.0017 13.8972 1.15174 14.0175 1.36169L14.0184 1.36336L6.99112 5.45475H5.19665Z"
                        fill="#969698"
                      />
                      <path
                        d="M18.6356 10H15.4538C13.9499 10 12.7266 11.2233 12.7266 12.7272C12.7266 14.2311 13.9499 15.4545 15.4538 15.4545H18.6356C19.3875 15.4545 19.9992 14.8428 19.9992 14.0908V11.3636C19.9992 10.6117 19.3875 10 18.6356 10ZM15.4538 13.6363C14.9527 13.6363 14.5447 13.2284 14.5447 12.7272C14.5447 12.2261 14.9527 11.8182 15.4538 11.8182C15.9549 11.8182 16.3629 12.2261 16.3629 12.7272C16.3629 13.2284 15.955 13.6363 15.4538 13.6363Z"
                        fill="#969698"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6107_1340">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="max-lg:hidden">
                  <h3 className="font-bold text-gray-600">Payment Info</h3>
                  <p className="text-gray-600 text-sm">
                    Securely enter your payment details
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:hidden">
                <h3 className="font-bold text-black text-[16px]">
                  Your Details
                </h3>
                <p className="text-[#393939] text-sm text-[14px]">
                  Tell us a bit about yourself
                </p>
              </div>
            </div>
          </div>

          {/* Main Content - Form */}
          <Form {...form}>
            <form
              className="max-lg:space-y-4 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="max-lg:px-4 lg:col-span-2">
                <EditMembershipBox className="lg:hidden" />

                <h2 className="text-xl font-[kanit] font-medium text-black mb-4 lg:mb-6">
                  Enter Your Details
                </h2>

                {/* Form */}
                <div className="max-lg:border max-lg:border-[#D4D4D4] max-lg:bg-[#fcfcfc] max-lg:rounded-[8px] max-lg:px-4 max-lg:pt-5 space-y-4">
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>First Name</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                              {...field}
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
                        <FormItem>
                          {/* <FormLabel>Last Name</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Email Address</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="Email Address"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                              {...field}
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
                        <FormItem>
                          {/* <FormLabel>Phone Number</FormLabel> */}
                          <FormControl>
                            <Input
                              // placeholder="(920) 999-0000"
                              placeholder="Phone Number"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                              autoComplete="new-postal-code"
                              {...field}
                              maxLength={14}
                              onKeyDown={onKeyDown}
                              onChange={(e) =>
                                field.onChange(formatPhone(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Address</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder="Address"
                            className="min-h-[46px] text-[16px] placeholder:text-sm placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                            autoComplete="new-postal-code-2"
                            {...field}
                            ref={(el) => {
                              field.ref(el);
                              addressRef.current = el;
                            }}
                            onFocus={handleAddressFocus}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Province</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder="Province"
                            className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                            autoComplete="new-postal-code"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>City</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="City"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                              autoComplete="new-postal-code"
                              {...field}
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
                        <FormItem>
                          {/* <FormLabel>Postal Code</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="Postal Code"
                              className="min-h-[46px] text-[16px] placeholder:text-[16px] placeholder:text-black px-4 py-3 border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                              autoComplete="new-postal-code"
                              {...field}
                              ref={(el) => {
                                field.ref(el);
                                postalCodeRef.current = el;
                              }}
                              onFocus={handlePostalCodeFocus}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={
                                    "w-full justify-start text-left font-normal min-h-[46px] text-sm px-4 py-3 placeholder:text-sm placeholder:text-black border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
                                  }
                                >
                                  {field.value
                                    ? format(field.value, "d MMM, yyyy")
                                    : "DOB"}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 w-fit !h-full bg-white" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > subYears(new Date(), 18)
                                }
                                defaultMonth={subYears(new Date(), 18)}
                                initialFocus
                                className="min-w-[250px] !h-full"
                                captionLayout="dropdown"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    /> */}
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <>
                          <FormItem className="flex flex-col">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal min-h-[46px] text-sm px-4 py-3 placeholder:text-sm placeholder:text-black border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none"
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
                                  disabled={(date) =>
                                    date > subYears(new Date(), 18)
                                  }
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
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
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
                              <SelectTrigger className="min-h-[46px] text-sm px-4 py-3 placeholder:text-sm placeholder:text-black border border-[#D4D4D4] bg-[#FFF] rounded-[5px] shadow-none">
                                <SelectValue
                                  placeholder="Gender"
                                  className="text-sm text-black placeholder:text-sm placeholder:text-black"
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
                  </div>

                  <div className="max-lg:hidden flex justify-between items-center mt-8">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        handleBack();
                      }}
                      className="text-black cursor-pointer font-semibold flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      BACK
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-brand-green disabled:bg-neutral-500 text-white h-fit cursor-pointer font-bold py-3 px-16 rounded-[5px] hover:bg-brand-green/90"
                    >
                      {loading ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        "NEXT"
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Benefits */}
              <div className="max-lg:px-4 lg:col-span-1">
                <EditMembershipBox className="max-lg:hidden" />
                <MembershipBenefits />
              </div>

              {/* Submission */}
              <div className="flex lg:hidden items-center gap-2 max-lg:px-4 mt-0 lg:mt-8 pb-5">
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
                  disabled={loading}
                  className="w-full h-fit disabled:bg-neutral-500 bg-brand-green text-white cursor-pointer font-bold py-[14px] px-16 rounded-[5px] lg:rounded-lg hover:bg-brand-green/90"
                >
                  {loading ? <LoaderCircle className="animate-spin" /> : "NEXT"}
                </Button>
              </div>
            </form>
          </Form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default YourDetails;
