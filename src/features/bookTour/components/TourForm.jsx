import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loadGoogleMaps } from "../utils/loadGoogleMaps";
import { getCookie } from "../utils/cookieUtils";
import { getUserIP } from "../utils/ipDetection";
import { format, parse, subYears } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import "../index.css";

export let locations = [
  {
    postalCode: "06967",
    clubName: "Edmonton Downtown",
    clubAddress: "# 12328 102 ave nw Edmonton, Alberta, T5N 0L",
    accountId: "06687",
  },
  // {
  //   postalCode: "06973",
  //   clubName: "Calgary Sunridge",
  //   clubAddress: "# 2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
  //   accountId: "11353",
  // },
  {
    postalCode: "06964",
    clubName: "Edmonton North",
    clubAddress: "# 13457 149 St Edmonton, Alberta, T5L 2T3",
    accountId: "06689",
  },
  {
    postalCode: "40142",
    clubName: "Calgary Royal Oak",
    clubAddress: "# 8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
    accountId: "09065",
  },
  {
    postalCode: "40097",
    clubName: "Calgary Seton",
    clubAddress: "# 710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
    accountId: "07882",
  },
  // {
  //   postalCode: "06962",
  //   clubName: "Edmonton South",
  //   clubAddress: "# 4825 89 St NW Edmonton, Alberta, T6E 5K1",
  //   accountId: "06688",
  // },
  {
    postalCode: "40248",
    clubName: "Burnaby Brentwood",
    clubAddress:
      "# 1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
    accountId: "10171",
  },
  {
    postalCode: "40327",
    // clubName: "Vancouver, The Post",
    clubName: "Vancouver Post",
    clubAddress: "# 658 Homer St Vancouver, British Columbia, V6B 2R4",
    accountId: "11044",
  },
];

const primaryGoals = [
  "Lose Weight",
  "Build Muscle",
  "Increase Flexibility",
  "Improve Endurance",
  "Look & Feel Better",
  "Reduce Stress",
  "Enhance Mobility",
  "Improve Athletic Skills",
  "Improve Immunity & Strength",
];

const services = [
  "Personal Training",
  "Group Training",
  "Kinesiologist",
  "Massage Therapy",
  "Physiotherapy",
  "Chiropractic",
  "Acupuncture",
  "Mental Health Therapy",
  "Osteopath",
  "Esthetician",
];

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;
const API_BASE_URL = import.meta.env.VITE_APP_API_URL || "";

export default function TourForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loadingForm, setLoadingForm] = useState(true);
  const location = searchParams.get("location");

  useEffect(() => {
    if (location && location == "06962" && locations.findIndex((loc) => loc.postalCode === "06962") === -1) {
      locations.push({
        postalCode: "06962",
        clubName: "Edmonton South",
        clubAddress: "# 4825 89 St NW Edmonton, Alberta, T6E 5K1",
        accountId: "06688",
      });
    }
    setLoadingForm(false);
  }, [location]);

  return (
    <div className="min-h-dvh">
      <main className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <LeftPanel />
          {loadingForm ? (
            <div className="flex items-center justify-center p-8">
              {/* <p className="text-lg text-gray-500">Loading form...</p> */}
            </div>
          ) : (
            <FormCard
              onSuccess={(location_name, date, time) => {
                navigate(
                  `/book-a-tour/thank-you?location_name=${location_name}&date=${date}&time=${time}`,
                );
              }}
              location={location}
            />
          )}
        </div>
      </main>
    </div>
  );
}

function LeftPanel() {
  return (
    <section className="sticky top-0 h-[105svh] pb-6 pt-[72px] lg:block hidden">
      <div className="relative h-full overflow-hidden rounded-xl bg-[#F8F8F8] shadow-sm">
        <img
          className="h-full w-full object-cover object-top opacity-100"
          src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/book_a_tour/book-tour.webp"
          alt="Athlete training"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute bottom-6 left-6 right-6 text-white text-left">
          <p className="uppercase text-[13.589px] leading-[23.092px] font-[700] text-[#F8F8F8] font-[Vazirmatn]">
            Commit to something. Join today.
          </p>
          <h1 className="mt-2 text-[40px] leading-[39px] font-bold uppercase text-[#FFF] font-[Kanit]">
            when you feel like quitting, remember why you started
          </h1>
        </div>
      </div>
    </section>
  );
}

function FormCard({ onSuccess, location = false }) {
  const navigate = useNavigate();

  const handleBack = () => {
    const ref = document.referrer;

    if (ref && ref.includes("evolvestrength.ca")) {
      navigate(-1);
    } else {
      window.location.href = "https://evolvestrength.ca/";
    }
  };

  const today = new Date();
  today.setDate(today.getDate() - 1);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Start from same day/month 18 years ago
  const eighteenYearsAgo = subYears(new Date(), 18);
  const minDate = new Date(
    eighteenYearsAgo.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const [formData, setFormData] = useState({
    email: "",
    companyEmail: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postal: "",
    tourDate: "",
    tourTime: "",
    gymAccountId: !location
      ? ""
      : locations.find(
          (loc) =>
            loc.postalCode === location ||
            loc.clubName == decodeURIComponent(location),
        )?.accountId || "",
    gymName: !location
      ? ""
      : locations.find(
          (loc) =>
            loc.postalCode === location ||
            loc.clubName == decodeURIComponent(location),
        )?.clubName || "",
    gymAddress: !location
      ? ""
      : locations.find(
          (loc) =>
            loc.postalCode === location ||
            loc.clubName == decodeURIComponent(location),
        )?.clubAddress || "",
    gymPostalCode: !location
      ? ""
      : locations.find(
          (loc) =>
            loc.postalCode === location ||
            loc.clubName == decodeURIComponent(location),
        )?.postalCode || "",
  });
  const [errors, setErrors] = useState({
    email: "",
    companyEmail: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addressRef = useRef(null);
  const postalRef = useRef(null);

  useEffect(() => {
    let addressAutocomplete;
    let postalAutocomplete;

    const parsePlace = (place) => {
      if (!place || !place.address_components) return;
      let postalCode = "";
      let province = "";
      let city = "";
      let streetNumber = "";
      let route = "";

      place.address_components.forEach((component) => {
        if (component.types.includes("postal_code"))
          postalCode = component.long_name;
        else if (component.types.includes("administrative_area_level_1"))
          province = component.long_name;
        else if (component.types.includes("administrative_area_level_3"))
          city = component.long_name;
        else if (component.types.includes("locality") && !city)
          city = component.long_name;
        else if (component.types.includes("street_number"))
          streetNumber = component.long_name;
        else if (component.types.includes("route")) route = component.long_name;
      });

      const formattedAddress =
        streetNumber || route
          ? `${streetNumber} ${route}`.trim()
          : place.formatted_address?.split(",")[0] || "";
      const formatPostal = (val) => {
        const clean = val.replace(/[^A-Za-z0-9]/g, "");
        if (clean.length <= 3) return clean.toUpperCase();
        return `${clean.slice(0, 3).toUpperCase()} ${clean
          .slice(3, 6)
          .toUpperCase()}`;
      };

      setFormData((prev) => ({
        ...prev,
        address: formattedAddress.replace(/[^A-Za-z0-9 \/#]/g, "").slice(0, 44),
        city: city.replace(/[^A-Za-z0-9' -]/g, "").slice(0, 23),
        province: province.replace(/[^A-Za-z0-9' -]/g, "").slice(0, 23),
        postal: postalCode ? formatPostal(postalCode) : prev.postal,
      }));
      setErrors((prev) => ({
        ...prev,
        address: "",
        city: "",
        province: "",
        postal: "",
      }));
    };

    async function init() {
      try {
        const google = await loadGoogleMaps(
          import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
        );
        if (addressRef.current) {
          addressAutocomplete = new google.maps.places.Autocomplete(
            // addressAutocomplete = new google.maps.places.PlaceAutocompleteElement(
            addressRef.current,
            {
              componentRestrictions: { country: "ca" },
            },
          );
          addressAutocomplete.setFields([
            "address_components",
            "formatted_address",
          ]);
          addressAutocomplete.addListener("place_changed", () => {
            parsePlace(addressAutocomplete.getPlace());
          });
        }
        if (postalRef.current) {
          postalAutocomplete = new google.maps.places.Autocomplete(
            // postalAutocomplete = new google.maps.places.PlaceAutocompleteElement(
            postalRef.current,
            {
              types: ["(regions)"],
              componentRestrictions: { country: "ca" },
            },
          );
          postalAutocomplete.setFields([
            "address_components",
            "formatted_address",
          ]);
          postalAutocomplete.addListener("place_changed", () => {
            parsePlace(postalAutocomplete.getPlace());
          });
        }
      } catch (err) {
        console.error("Failed to load Google Maps", err);
      }
    }
    init();
  }, []);

  const submitHubspotTracking = async ({ data, goals, services }) => {
    if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
      console.warn(
        "HubSpot environment variables are not configured; skipping tracking submission.",
      );
      return;
    }

    const fields = [];
    const addField = (name, value, { allowEmpty = false } = {}) => {
      if (value === undefined || value === null) return;
      const stringValue =
        typeof value === "string" ? value.trim() : `${value}`.trim();
      if (!stringValue && !allowEmpty) return;
      fields.push({ name, value: stringValue });
    };

    addField(
      "choose_a_gym_location_for_your_tour",
      data.gymName || formData.gymName,
      { allowEmpty: true },
    );
    addField("start_date", data.tourDate);
    addField("tour_time", data.tourTime);
    addField("firstname", data.firstName);
    addField("lastname", data.lastName);
    addField("date_of_birth", data.dob);
    addField("phone", data.phone);
    addField("email", data.email);
    addField("work_email", data.companyEmail);
    addField("0-2/address", data.address);
    addField("0-2/zip", data.postal);
    addField("city", data.city);
    addField("0-2/state", data.province);
    if (goals.length) addField("select_your_primary_goals", goals.join(", "));
    if (services.length)
      addField("select_your_preferred_services_", services.join(", "));
    addField("consent_check_box", data.agree_checkbox ? "true" : "false", {
      allowEmpty: true,
    });
    // addField("agree_checkbox", data.agree_checkbox ? "true" : "false", {
    //   allowEmpty: true,
    // });
    // addField("n18_years_old", data.n18_years_old ? "true" : "false", {
    //   allowEmpty: true,
    // });
    // addField(
    //   "privacy_policy_checkbox",
    //   data.privacy_policy_checkbox ? "true" : "false",
    //   { allowEmpty: true }
    // );

    if (!fields.length) return;

    // Get HubSpot tracking cookie and user IP using utilities
    const hutk = getCookie("hubspotutk");
    const userIP = await getUserIP();

    const contextEntries = [
      ["pageUri", typeof window !== "undefined" ? window.location.href : ""],
      ["pageName", typeof document !== "undefined" ? document.title : ""],
    ];

    if (hutk) {
      contextEntries.push(["hutk", hutk]);
    }

    // Add IP address to context if available
    if (userIP) {
      contextEntries.push(["ipAddress", userIP]);
    }

    const context = Object.fromEntries(
      contextEntries.filter(([, value]) => Boolean(value)),
    );

    const payload = {
      fields,
      ...(Object.keys(context).length ? { context } : {}),
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(text || `HubSpot submission failed (${response.status})`);
    }
  };

  const handleGymChange = (e) => {
    const selectedAccountId = e.target.value;
    const found = locations.find((loc) => loc.accountId === selectedAccountId);
    // Update query param to reflect current location without page reload
    if (found && typeof window !== "undefined") {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("location", found.postalCode);
        window.history.replaceState(null, "", url);
      } catch (err) {
        try {
          const params = new URLSearchParams(window.location.search);
          params.set("location", found.postalCode);
          const hash = window.location.hash || "";
          const base = window.location.origin + window.location.pathname;
          window.history.replaceState(
            null,
            "",
            `${base}?${params.toString()}${hash}`,
          );
        } catch (_) {}
      }
    }
    setFormData((prev) => ({
      ...prev,
      gymAccountId: selectedAccountId,
      gymName: found ? found.clubName : "",
      gymAddress: found ? found.clubAddress : "",
      gymPostalCode: found ? found.postalCode : "",
      tourTime: "", // Clear time when gym changes
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    if (email.length > 254) return "Email is too long";
    return "";
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone) return "Phone number is required";
    if (cleanPhone.length < 10)
      return "Phone number must be at least 10 digits";
    if (cleanPhone.length > 15) return "Phone number is too long";
    const digitCount = (phone.match(/\d/g) || []).length;
    if (digitCount < 10) return "Phone number must contain at least 10 digits";
    return "";
  };

  const validatePostalCode = (postal) => {
    if (!postal) return "Postal code is required";
    const cleanPostal = postal.replace(/\s/g, "").toUpperCase();
    if (cleanPostal.length < 6)
      return "Postal code is too short. Format should be: A1A 1A1 (e.g., M5V 3A8)";
    if (cleanPostal.length > 6)
      return "Postal code is too long. Format should be: A1A 1A1 (e.g., M5V 3A8)";
    if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleanPostal))
      return "Invalid format. Canadian postal codes follow: A1A 1A1 (e.g., M5V 3A8, K1A 0B1)";
    return "";
  };

  const validateAddress = (address) => {
    const pattern = /^[A-Za-z0-9 \/#]{1,44}$/;
    if (!address) return "Address is required";
    if (!pattern.test(address.trim()))
      return "Address can only contain letters, digits, spaces, /, or # (max 44 characters)";
    return "";
  };

  const validateProvince = (province) => {
    const pattern = /^(?=.{1,23}$)[A-Za-z0-9]+([ '-][A-Za-z0-9]+)*$/;
    if (!province) return "Province is required";
    if (!pattern.test(province.trim()))
      return "Province field expected format between 1 and 23 alphanumeric characters, (spaces, dashes, and apostrophes are allowed to separate).";
    return "";
  };

  const validateCity = (city) => {
    const pattern = /^(?=.{1,23}$)[A-Za-z0-9]+([ '-][A-Za-z0-9]+)*$/;
    if (!city) return "City is required";
    if (!pattern.test(city.trim()))
      return "City field expected format between 1 and 23 alphanumeric characters, (spaces, dashes, and apostrophes are allowed to separate).";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "postal") {
      const cleanValue = value.replace(/[^A-Za-z0-9]/g, "");
      if (cleanValue.length <= 3) processedValue = cleanValue.toUpperCase();
      else if (cleanValue.length <= 6)
        processedValue =
          cleanValue.slice(0, 3).toUpperCase() +
          " " +
          cleanValue.slice(3).toUpperCase();
      else
        processedValue =
          cleanValue.slice(0, 3).toUpperCase() +
          " " +
          cleanValue.slice(3, 6).toUpperCase();
    } else if (name === "address") {
      processedValue = value.replace(/[^A-Za-z0-9 \/#]/g, "").slice(0, 44);
    } else if (name === "province" || name === "city") {
      processedValue = value.replace(/[^A-Za-z0-9' -]/g, "").slice(0, 23);
    } else if (name === "phone") {
      processedValue = value.replace(/[^0-9]/g, "").slice(0, 15);
    }
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "email") error = validateEmail(value);
    else if (name === "companyEmail" && value) error = validateEmail(value);
    else if (name === "phone") error = validatePhone(value);
    else if (name === "address") error = validateAddress(value);
    else if (name === "province") error = validateProvince(value);
    else if (name === "city") error = validateCity(value);
    else if (name === "postal") error = validatePostalCode(value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    const companyEmailError = formData.companyEmail
      ? validateEmail(formData.companyEmail)
      : "";
    const phoneError = validatePhone(formData.phone);
    const addressError = validateAddress(formData.address);
    const provinceError = validateProvince(formData.province);
    const cityError = validateCity(formData.city);
    const postalError = validatePostalCode(formData.postal);
    const newErrors = {
      email: emailError,
      companyEmail: companyEmailError,
      phone: phoneError,
      address: addressError,
      province: provinceError,
      city: cityError,
      postal: postalError,
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fix the validation errors before submitting.");
      return;
    }

    try {
      setIsSubmitting(true);
      const data = Object.fromEntries(new FormData(e.currentTarget));

      // Collect goals and services from checkboxes
      const goals = Array.from(
        e.currentTarget.querySelectorAll('input[name="goals"]:checked'),
      ).map((cb) => cb.value);
      const services = Array.from(
        e.currentTarget.querySelectorAll('input[name="services"]:checked'),
      ).map((cb) => cb.value);

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
        Qubec: "QC",
        Saskatchewan: "SK",
        Yukon: "YT",
      };
      const provinceCode = provinceMap[data.province] || data.province;

      const personPayload = {
        company_id: data.accountId,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone_mobile: data.phone,
        address: data.address,
        city: data.city,
        state: provinceCode,
        zip: data.postal,
        birthday: data.dob,
        contact_method: "Internet",
        contact_method_name: "Internet",
        source_name: "Digital Marketing Funnel",
        notes: `Tour request for ${data.firstName || ""} ${
          data.lastName || ""
        } at ${formData.gymName || ""}, Goals: ${goals.join(", ") || ""}`,
        goals: goals.join(", "),
        tag_list: `${services.join(", ")}, ${goals.join(", ")}`,
        // Removed external_id as it's not supported by GymSales
      };

      const res = await fetch(`${API_BASE_URL}/gymsales/tour`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personPayload,
          tourDate: data.tourDate,
          tourTime: data.tourTime,
          gymName: formData.gymName,
          gymAddress: formData.gymAddress,
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(json?.error || `Request failed (${res.status})`);

      try {
        await submitHubspotTracking({ data, goals, services });
      } catch (hubspotError) {
        console.error("HubSpot submission failed:", hubspotError);
      }

      onSuccess?.(formData.gymName, data.tourDate, data.tourTime);
    } catch (error) {
      console.error("Submission failed:", error);
      alert(`Submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-8 pb-6 lg:pt-[72px]">
      <div className="flex justify-start">
        <button
          type="button"
          // onClick={() => router.back()}
          onClick={handleBack}
          className="mb-4 lg:mb-2 inline-flex items-center gap-2 text-[16px] cursor-pointer lg:text-[20px] leading-[18px] font-[300] text-[#000]/90 font-[Kanit]"
        >
          <img
            src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/book_a_tour/Button-next-slide.png"
            alt="Back"
            className="w-6 h-6 lg:w-8 lg:h-8"
          />
          Back
        </button>
      </div>
      <section
        className={`rounded-xl border border-neutral-200 bg-white shadow-sm ${
          isSubmitting ? "opacity-95" : ""
        }`}
      >
        <div className="rounded-t-xl bg-brand-dark px-4 lg:px-6 py-4 lg:py-5 text-white">
          <h3 className="text-lg text-[#FFF] text-center font-[Kanit] text-[20px] lg:text-[24px] font-normal leading-[22px] lg:leading-[26px] uppercase">
            LET'S PLAN YOUR TOUR
          </h3>
          <p className="pt-2 text-sm text-white/80 text-[#FFF] text-center font-[Kanit] text-[16px] lg:text-[18px] font-light leading-[17px] lg:leading-[19px]">
            Fill this out and we'll handle the rest.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 lg:space-y-6 px-4 lg:px-6 py-4 lg:py-6"
          aria-busy={isSubmitting}
        >
          <div className="space-y-2 text-left">
            <label
              htmlFor="gym"
              className="text-[16px] md:text-[18px] font-[400] font-[Kanit] leading-normal"
            >
              Choose a gym location for your tour{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              id="gym"
              name="accountId"
              required
              className="w-full h-12 rounded-lg border border-neutral-300 px-2 py-2.5 outline-none focus:ring-2 focus:ring-brand-green disabled:opacity-60 font-[Kanit] text-[16px] font-[300] leading-normal"
              defaultValue={
                !location
                  ? ""
                  : locations.find(
                      (loc) =>
                        loc.postalCode === location ||
                        loc.clubName === decodeURIComponent(location),
                    )?.accountId || ""
              }
              onChange={handleGymChange}
              disabled={isSubmitting}
            >
              <option value="" disabled>
                Select a Gym Location
              </option>
              {locations.map((l) => (
                <option key={l.postalCode} value={l.accountId}>
                  {l.clubName}
                </option>
              ))}
            </select>
            <input
              type="hidden"
              name="gymAccountId"
              value={formData.gymAccountId}
            />
            <input type="hidden" name="gymName" value={formData.gymName} />
            <input
              type="hidden"
              name="gymAddress"
              value={formData.gymAddress}
            />
            <input
              type="hidden"
              name="gymPostalCode"
              value={formData.gymPostalCode}
            />
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-[16px] text-left">
            <Field label="Tour Date * ">
              <DatePicker
                name="tourDate"
                placeholder="Select Date"
                disabled={isSubmitting}
                required
                min={today}
                fromYear={today.getFullYear()}
                onDateChange={(date) => {
                  setFormData((prev) => ({
                    ...prev,
                    tourDate: date,
                    tourTime: "",
                  }));
                }}
              />
            </Field>
            <Field label="Tour Start Time *">
              <TimePicker
                name="tourTime"
                placeholder="Select Time"
                disabled={isSubmitting}
                required
                gymName={formData.gymName}
                selectedDate={
                  formData.tourDate ? new Date(formData.tourDate) : null
                }
                value={formData.tourTime}
                onTimeChange={(time) => {
                  setFormData((prev) => ({ ...prev, tourTime: time }));
                }}
              />
            </Field>
          </div>

          <div></div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-left">
            <Field label="First Name *">
              <input
                required
                name="firstName"
                className={`${inputBase} disabled:opacity-60`}
                placeholder="First Name"
                disabled={isSubmitting}
              />
            </Field>
            <Field label="Last Name *">
              <input
                required
                name="lastName"
                className={`${inputBase} disabled:opacity-60`}
                placeholder="Last Name"
                disabled={isSubmitting}
              />
            </Field>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-left">
            <Field label="Date of Birth *">
              <DatePicker
                name="dob"
                placeholder="dd/mm/yyyy"
                disabled={isSubmitting}
                required
                max={eighteenYearsAgo}
                fromYear={1900}
                toYear={eighteenYearsAgo.getFullYear()}
              />
            </Field>
            <Field label="Phone Number *">
              <input
                required
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="(123) 456-7890"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.phone}
                </p>
              )}
            </Field>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-left">
            <Field label="Email Address *">
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.email ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="Email Address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.email}
                </p>
              )}
            </Field>
            <Field label="Company Email">
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.companyEmail ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="Company Email"
                disabled={isSubmitting}
              />
              {errors.companyEmail && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.companyEmail}
                </p>
              )}
            </Field>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-left">
            <Field label="Address *">
              <input
                required
                name="address"
                ref={addressRef}
                value={formData.address}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.address ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="Address"
                disabled={isSubmitting}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.address}
                </p>
              )}
            </Field>
            <Field label="Postal Code *">
              <input
                required
                name="postal"
                ref={postalRef}
                value={formData.postal}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.postal ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="A1A 1A1"
                maxLength="7"
                disabled={isSubmitting}
              />
              {errors.postal && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.postal}
                </p>
              )}
            </Field>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-left">
            <Field label="City *">
              <input
                required
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.city ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="City"
                disabled={isSubmitting}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.city}
                </p>
              )}
            </Field>
            <Field label="Province *">
              <input
                required
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`${inputBase} ${
                  errors.province ? "border-red-500 focus:ring-red-500" : ""
                } disabled:opacity-60`}
                placeholder="Province"
                disabled={isSubmitting}
              />
              {errors.province && (
                <p className="text-red-500 text-xs mt-1 font-[Kanit]">
                  {errors.province}
                </p>
              )}
            </Field>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <CheckboxGroup title="Select Your Primary Goals:">
              {primaryGoals.map((g) => (
                <Checkbox key={g} name="goals" value={g} label={g} />
              ))}
            </CheckboxGroup>
            <CheckboxGroup title="Select Your Preferred Services:">
              {services.map((s) => (
                <Checkbox key={s} name="services" value={s} label={s} />
              ))}
            </CheckboxGroup>
          </div>

          <div className="space-y-3 text-[16px] text-left">
            <div className="text-[16px] font-[Kanit] leading-normal text-left">
              <Consent name="sms" fieldName="agree_checkbox">
                By checking this box, I confirm I'm 18 or older and agree to
                Evolve Strength's{" "}
                <a
                  href="https://evolvestrength.ca/privacy-policy/"
                  target="_blank"
                  className="hover:underline"
                >
                  <strong>Privacy Policy </strong>
                </a>{" "}
                and{" "}
                <a
                  href="https://evolvestrength.ca/terms-and-conditions/"
                  target="_blank"
                  className="hover:underline"
                >
                  <strong>Terms & Conditions</strong>
                </a>
                . I agree to receive text messages from Evolve Strength and can
                text STOP anytime to unsubscribe or HELP for assistance.
              </Consent>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg bg-brand-green px-4 py-3 font-semibold font-[Kanit] text-white transition hover:brightness-95 active:brightness-90 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 flex items-center justify-center gap-2`}
          >
            {isSubmitting && (
              <span
                className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/60 border-t-white"
                aria-hidden="true"
              ></span>
            )}
            {isSubmitting ? "Processing…" : "SUBMIT NOW"}
          </button>
        </form>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-[16px] md:text-[18px] font-[400] font-[Kanit] leading-normal text-left">
        {label.split("*")[0]}
        {label.includes("*") && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function CheckboxGroup({ title, children }) {
  return (
    <fieldset className="rounded-lg border border-neutral-200 p-3">
      <legend className="px-1 text-[16px] md:text-[17px] font-[400] font-[Kanit]">
        {title}
      </legend>
      <div className="mt-2 grid grid-cols-1 gap-2">{children}</div>
    </fieldset>
  );
}

function Checkbox({ name, value, label }) {
  const id = `${name}-${value}`.toLowerCase().replace(/\s+/g, "-");
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-2 text-[16px] md:text-[18px] font-[400] font-[Kanit]"
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        className="mt-1 h-4 w-4 rounded border-neutral-300 accent-brand-green text-white"
      />
      <span className="text-[16px] font-[300] font-[Kanit] leading-normal">
        {label}
      </span>
    </label>
  );
}

function Consent({ name, fieldName, children }) {
  const id = `consent-${name}`;
  const inputName = fieldName || id;
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-2">
      <div className="w-4 h-4 mt-1">
        <input
          id={id}
          type="checkbox"
          name={inputName}
          value="true"
          required
          className="mt-0.5 h-4 w-4 rounded border-neutral-300 accent-brand-green text-white"
        />
      </div>
      <span className="text-neutral-700 text-[16px] md:text-[16px] font-[300] font-[Kanit] leading-normal">
        {children}
      </span>
    </label>
  );
}

const inputBase =
  "w-full h-12 rounded-lg border border-neutral-300 px-3 py-2.5 outline-none focus:ring-2 focus:ring-brand-green font-[Kanit] placeholder:text-[16px] placeholder:font-[300] placeholder:font-[Kanit] placeholder:leading-normal";

function DatePicker({
  name,
  placeholder,
  disabled,
  required,
  min,
  max,
  fromYear,
  toYear,
  onDateChange,
}) {
  const [open, setOpen] = useState(false);
  const [touch, setTouch] = useState(false);
  const [date, setDate] = useState();
  const [dateMonth, setDateMonth] = useState();
  const formatted = date ? format(date, "yyyy-MM-dd") : "";

  useEffect(() => {
    if (open) {
      // setDate(max);]
      setTimeout(() => {
        setTouch(true);
      }, 100);
    }
    if (!open) {
      setTouch(false);
    }
  }, [open]);

  useEffect(() => {
    if (date) {
      setDateMonth(new Date(date));
    }
  }, [date]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`${inputBase} flex items-center justify-between disabled:opacity-60`}
          disabled={disabled}
        >
          <span
            className={
              formatted
                ? "text-black text-[16px] font-[Kanit] leading-normal"
                : "text-neutral-400 text-[16px] font-[300] font-[Kanit] leading-normal"
            }
          >
            {formatted || placeholder}
          </span>
          <CalendarIcon className="h-4 w-4 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="!p-0 w-fit bg-white !border-neutral-300 z-50"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          // onSelect={setDate}
          onSelect={(d) => {
            setDate(d);
            if (d) {
              setOpen(false); // close on pick
              onDateChange?.(format(d, "yyyy-MM-dd"));
            }
          }}
          initialFocus
          disabled={(d) => (min && d < min) || (max && d > max)}
          fromDate={min}
          toDate={max}
          // endMonth={new Date(2007, 8)}
          month={touch ? undefined : dateMonth ? dateMonth : max}
          fromYear={fromYear}
          toYear={toYear}
          captionLayout={fromYear || toYear ? "dropdown" : undefined}
          className={"bg-white"}
        />
      </PopoverContent>
      <input type="hidden" name={name} value={formatted} required={required} />
    </Popover>
  );
}

// Gym operating hours configuration
const gymOperatingHours = {
  "Edmonton Downtown": {
    monday: { open: "05:00", close: "22:00" },
    tuesday: { open: "05:00", close: "22:00" },
    wednesday: { open: "05:00", close: "22:00" },
    thursday: { open: "05:00", close: "22:00" },
    friday: { open: "05:00", close: "22:00" },
    saturday: { open: "07:00", close: "20:00" },
    sunday: { open: "07:00", close: "20:00" },
  },
  "Edmonton North": {
    monday: { open: "06:00", close: "22:00" },
    tuesday: { open: "06:00", close: "22:00" },
    wednesday: { open: "06:00", close: "22:00" },
    thursday: { open: "06:00", close: "22:00" },
    friday: { open: "06:00", close: "22:00" },
    saturday: { open: "08:00", close: "20:00" },
    sunday: { open: "08:00", close: "20:00" },
  },
  "Edmonton South": {
    monday: { open: "06:00", close: "22:00" },
    tuesday: { open: "06:00", close: "22:00" },
    wednesday: { open: "06:00", close: "22:00" },
    thursday: { open: "06:00", close: "22:00" },
    friday: { open: "06:00", close: "22:00" },
    saturday: { open: "08:00", close: "20:00" },
    sunday: { open: "08:00", close: "20:00" },
  },
  "Calgary Royal Oak": {
    monday: { open: "05:00", close: "22:00" },
    tuesday: { open: "05:00", close: "22:00" },
    wednesday: { open: "05:00", close: "22:00" },
    thursday: { open: "05:00", close: "22:00" },
    friday: { open: "05:00", close: "22:00" },
    saturday: { open: "07:00", close: "20:00" },
    sunday: { open: "07:00", close: "20:00" },
  },
  "Calgary Seton": {
    monday: { open: "05:00", close: "22:00" },
    tuesday: { open: "05:00", close: "22:00" },
    wednesday: { open: "05:00", close: "22:00" },
    thursday: { open: "05:00", close: "22:00" },
    friday: { open: "05:00", close: "22:00" },
    saturday: { open: "07:00", close: "20:00" },
    sunday: { open: "07:00", close: "20:00" },
  },
  "Burnaby Brentwood": {
    monday: { open: "05:00", close: "22:30" },
    tuesday: { open: "05:00", close: "22:30" },
    wednesday: { open: "05:00", close: "22:30" },
    thursday: { open: "05:00", close: "22:30" },
    friday: { open: "05:00", close: "22:30" },
    saturday: { open: "07:30", close: "20:00" },
    sunday: { open: "07:30", close: "20:00" },
  },
  "Vancouver Post": {
    monday: { open: "05:00", close: "22:30" },
    tuesday: { open: "05:00", close: "22:30" },
    wednesday: { open: "05:00", close: "22:30" },
    thursday: { open: "05:00", close: "22:30" },
    friday: { open: "05:00", close: "22:30" },
    saturday: { open: "07:00", close: "20:00" },
    sunday: { open: "07:00", close: "20:00" },
  },
};

// Generate time slots based on gym hours and selected date
const generateTimeSlots = (gymName, selectedDate) => {
  if (!gymName || !selectedDate) return [];

  const gymHours = gymOperatingHours[gymName];
  if (!gymHours) return [];

  const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const dayName = dayNames[dayOfWeek];

  const hours = gymHours[dayName];
  if (!hours) return [];

  const { open, close } = hours;
  const slots = [];

  // Parse opening and closing times
  const [openHour, openMinute] = open.split(":").map(Number);
  const [closeHour, closeMinute] = close.split(":").map(Number);

  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;

  // Generate 15-minute intervals
  for (let minutes = openTime; minutes < closeTime; minutes += 15) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    // Convert to 12-hour format
    const time12h = new Date(2000, 0, 1, hour, minute).toLocaleTimeString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      },
    );

    slots.push(time12h);
  }

  return slots;
};

function TimePicker({
  name,
  placeholder,
  disabled,
  required,
  gymName,
  selectedDate,
  value,
  onTimeChange,
  min,
  max,
  fromYear,
  toYear,
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(value || "");

  // Sync local state with prop value
  useEffect(() => {
    setDate(value || "");
  }, [value]);

  // Generate time slots based on gym and selected date
  const times = generateTimeSlots(gymName, selectedDate);

  const to24Hour = (time12h) =>
    format(parse(time12h, "hh:mm a", new Date()), "HH:mm");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`${inputBase} flex items-center justify-between disabled:opacity-60 relative`}
          disabled={disabled}
        >
          <span
            className={
              date
                ? "text-black text-[16px] font-[Kanit] leading-normal"
                : "text-neutral-400 text-[16px] font-[300] font-[Kanit] leading-normal"
            }
          >
            {date || placeholder}
          </span>
          <Clock className="h-4 w-4 opacity-50" />

          <input
            type="time"
            className="h-0 w-0 p-0 m-0 select-none pointer-events-none outline-none border border-white absolute left-8 bottom-0"
            // hidden
            name={name}
            value={date ? to24Hour(date) : ""}
            onChange={() => {}}
            required={required}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit bg-white !border-neutral-300 z-50 py-2 h-[200px] overflow-y-auto"
        align="start"
      >
        <div className="w-[160px] flex flex-col px-0 gap-1">
          {times.length > 0 ? (
            times.map((h, i) => (
              <Button
                key={i}
                variant={"ghost"}
                className={`!p-0 !h-[26px] !w-full cursor-pointer !font-[400] font-[Kanit] lowercase ${
                  h == date
                    ? "bg-brand-green text-white hover:bg-brand-green/80"
                    : "hover:bg-neutral-200 bg-neutral-50"
                }`}
                onClick={() => {
                  setDate(h);
                  onTimeChange?.(h);
                  if (h) setOpen(false);
                }}
              >
                {h}
              </Button>
            ))
          ) : (
            <div className="flex items-center justify-center h-full min-h-[180px] p-2">
              <div className="text-[16px] md:text-[16px] font-[400] font-[Kanit] leading-normal text-neutral-500 text-center">
                {!gymName
                  ? "Please select a gym location first — each location has different timings."
                  : !selectedDate
                    ? "Please select a date first."
                    : "No available times for this day."}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
