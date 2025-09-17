import React, { useState } from "react";
import locationImg from "../../assets/images/form/future-form.webp";
import arrowUp from "../../assets/images/form/arrow-down (2).svg";
import arrowDown from "../../assets/images/form/arrow-down (1).svg";
import { Link } from "react-router-dom";
import MetaTags from "@/components/Metatags/Meta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SuccessFullScreen from "../ui/SuccessFullScreen";
import { ArrowLeft } from "lucide-react";
import FormsHeader from "../ui/FormsHeader";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  businessExperience: "",
  liquidCapital: "",
  franchiseExperience: "",
  bankruptcy: "",
  isMember: "",
  about: "",
};

const businessExperienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5+ years",
];
const liquidCapitalOptions = [
  "$50,000-$100,000",
  "$100,000-$250,000",
  "$250,000-$500,000",
  "$500,000+",
];
const franchiseExperienceOptions = ["None", "Some", "Extensive"];
const bankruptcyOptions = ["Yes", "No"];
const isMemberOptions = ["Yes", "No"];

function YourFitnessFutureForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessFocused, setBusinessFocused] = useState(false);
  const [liquidFocused, setLiquidFocused] = useState(false);
  const [franchiseFocused, setFranchiseFocused] = useState(false);
  const [bankruptcyFocused, setBankruptcyFocused] = useState(false);
  const [isMemberFocused, setIsMemberFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.province) newErrors.province = "Required";
    if (!form.businessExperience) newErrors.businessExperience = "Required";
    if (!form.liquidCapital) newErrors.liquidCapital = "Required";
    if (!form.franchiseExperience) newErrors.franchiseExperience = "Required";
    if (!form.bankruptcy) newErrors.bankruptcy = "Required";
    if (!form.isMember) newErrors.isMember = "Required";
    if (!form.about) newErrors.about = "Required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsSubmitting(true);
        const formData = {
          fields: [
            { name: "firstname", value: form.firstName },
            { name: "lastname", value: form.lastName },
            { name: "email", value: form.email },
            { name: "phone", value: form.phone },
            { name: "address", value: form.address },
            { name: "city", value: form.city },
            { name: "state", value: form.province },
            { name: "business_experience", value: form.businessExperience },
            { name: "available_liquid_capital", value: form.liquidCapital },
            {
              name: "previous_franchise_experience",
              value: form.franchiseExperience,
            },
            {
              name: "have_you_ever_declared_bankruptcy_or_been_involved_in_litigation_",
              value: form.bankruptcy,
            },
            { name: "are_you_a_current_evolve_member_", value: form.isMember },
            { name: "tell_us_about_yourself", value: form.about },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "Franchise Form",
          },
        };

        const response = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/342148198/2df02615-f490-435e-abb4-a44270f455a5",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("There was an error submitting your form. Please try again.");
        }
      } catch {
        alert("There was an error submitting your form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <MetaTags
        title="Franchise Inquiry | Start Your Evolve Strength Ownership Journey"
        description="Ready to own an Evolve Strength franchise? Fill out the form to connect with our team. We'll help you take the first step toward building your fitness business."
      />

      {/* Form Header */}
      <FormsHeader />

      {/* Success Screen Full Screen Overlay */}
      {submitted && (
        <SuccessFullScreen
          title="LET'S OWN A PIECE OF STRENGTH"
          description="Thank you for your franchise application! We've received your information and our team will be in touch with you soon to discuss the next steps in your Evolve Strength ownership journey."
          buttonText="BACK TO HOME"
          buttonLink="/"
          icon="trophy"
        />
      )}

      <div className="flex md:gap-12 px-4 pt-24 pb-12 flex-col md:flex-row max-w-[1280px] mx-auto justify-center">
        {/* Left Image & Headline */}
        <div className="w-full md:max-w-[40%] flex-shrink-0 flex flex-col">
          {/* Back Button */}
          <Link
            to="/franchise"
            className="flex items-center gap-2 mb-6 text-black hover:text-gray-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back</span>
          </Link>

          <h2 className="font-[700] leading-[39px] mb-4">
            LET'S BUILD YOUR FITNESS FUTURE TOGETHER
          </h2>
          <p className="mb-6 text-[16px] font-[300] !font-[Kanit] leading-[24px]">
            Have questions or ready to take the first step? Reach out today and
            let's create a personalized path to your health, strength, and
            recovery goals—designed just for you.
          </p>
          <div className="rounded-[8px] max-w-[500px] overflow-hidden bg-white max-md:hidden">
            <img
              src={locationImg}
              alt="Fitness Facility"
              className="object-cover w-full h-[710px]"
            />
          </div>
        </div>
        {/* Right Form */}
        <div className="bg-[#FCFCFC] rounded-[10px] border md:max-w-[40%] w-full p-0 overflow-hidden">
          <form
            className="p-5 flex flex-col gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block form-label mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.firstName ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className="input-error mt-1">{errors.firstName}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block form-label mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.lastName ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <p className="input-error mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="block form-label mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.email ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="input-error mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="block form-label mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.phone ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="input-error mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="address" className="block form-label mb-1">
                Your Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Street Address"
                className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                  errors.address ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                disabled={isSubmitting}
              />
              {errors.address && (
                <p className="input-error mt-1">{errors.address}</p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:flex-1">
                <label htmlFor="city" className="block form-label mb-1">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Toronto"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.city ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.city && (
                  <p className="input-error mt-1">{errors.city}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="province" className="block form-label mb-1">
                  Province / State *
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={form.province}
                  onChange={handleChange}
                  placeholder="Ontario"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.province ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.province && (
                  <p className="input-error mt-1">{errors.province}</p>
                )}
              </div>
            </div>
            {/* Business Experience */}
            <div className="w-full">
              <label
                htmlFor="businessExperience"
                className="block form-label mb-1"
              >
                Business Experience *
              </label>
              <div className="relative w-full">
                <select
                  id="businessExperience"
                  name="businessExperience"
                  value={form.businessExperience}
                  onChange={handleChange}
                  onFocus={() => setBusinessFocused(true)}
                  onBlur={() => setBusinessFocused(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.businessExperience
                      ? "border-red-500"
                      : "border-[#D4D4D4]"
                  } ${
                    form.businessExperience === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">
                    Select the years of business experience
                  </option>
                  {businessExperienceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  {businessFocused ? (
                    <img
                      src={arrowUp}
                      alt="Arrow Up"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.businessExperience === ""
                            ? "grayscale(1)"
                            : "none",
                      }}
                    />
                  ) : (
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.businessExperience === ""
                            ? "grayscale(1)"
                            : "none",
                      }}
                    />
                  )}
                </span>
              </div>
              {errors.businessExperience && (
                <p className="input-error mt-1">{errors.businessExperience}</p>
              )}
            </div>
            {/* Liquid Capital */}
            <div className="w-full">
              <label htmlFor="liquidCapital" className="block form-label mb-1">
                Available Liquid Capital *
              </label>
              <div className="relative w-full">
                <select
                  id="liquidCapital"
                  name="liquidCapital"
                  value={form.liquidCapital}
                  onChange={handleChange}
                  onFocus={() => setLiquidFocused(true)}
                  onBlur={() => setLiquidFocused(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.liquidCapital ? "border-red-500" : "border-[#D4D4D4]"
                  } ${
                    form.liquidCapital === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select available liquid capital</option>
                  {liquidCapitalOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  {liquidFocused ? (
                    <img
                      src={arrowUp}
                      alt="Arrow Up"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.liquidCapital === "" ? "grayscale(1)" : "none",
                      }}
                    />
                  ) : (
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.liquidCapital === "" ? "grayscale(1)" : "none",
                      }}
                    />
                  )}
                </span>
              </div>
              {errors.liquidCapital && (
                <p className="input-error mt-1">{errors.liquidCapital}</p>
              )}
            </div>
            {/* Franchise Experience */}
            <div className="w-full">
              <label
                htmlFor="franchiseExperience"
                className="block form-label mb-1"
              >
                Previous Franchise Experience *
              </label>
              <div className="relative w-full">
                <select
                  id="franchiseExperience"
                  name="franchiseExperience"
                  value={form.franchiseExperience}
                  onChange={handleChange}
                  onFocus={() => setFranchiseFocused(true)}
                  onBlur={() => setFranchiseFocused(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.franchiseExperience
                      ? "border-red-500"
                      : "border-[#D4D4D4]"
                  } ${
                    form.franchiseExperience === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">
                    Select the previous franchise experience
                  </option>
                  {franchiseExperienceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  {franchiseFocused ? (
                    <img
                      src={arrowUp}
                      alt="Arrow Up"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.franchiseExperience === ""
                            ? "grayscale(1)"
                            : "none",
                      }}
                    />
                  ) : (
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.franchiseExperience === ""
                            ? "grayscale(1)"
                            : "none",
                      }}
                    />
                  )}
                </span>
              </div>
              {errors.franchiseExperience && (
                <p className="input-error mt-1">{errors.franchiseExperience}</p>
              )}
            </div>
            {/* Bankruptcy/Litigation */}
            <div className="w-full">
              <label htmlFor="bankruptcy" className="block form-label mb-1">
                Have You Ever Declared Bankruptcy Or Been Involved In
                Litigation? *
              </label>
              <div className="relative w-full">
                <select
                  id="bankruptcy"
                  name="bankruptcy"
                  value={form.bankruptcy}
                  onChange={handleChange}
                  onFocus={() => setBankruptcyFocused(true)}
                  onBlur={() => setBankruptcyFocused(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.bankruptcy ? "border-red-500" : "border-[#D4D4D4]"
                  } ${
                    form.bankruptcy === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">
                    Have You Ever Declared Bankruptcy or Been Involved in
                    Litigation?
                  </option>
                  {bankruptcyOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  {bankruptcyFocused ? (
                    <img
                      src={arrowUp}
                      alt="Arrow Up"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.bankruptcy === "" ? "grayscale(1)" : "none",
                      }}
                    />
                  ) : (
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      style={{
                        filter:
                          form.bankruptcy === "" ? "grayscale(1)" : "none",
                      }}
                    />
                  )}
                </span>
              </div>
              {errors.bankruptcy && (
                <p className="input-error mt-1">{errors.bankruptcy}</p>
              )}
            </div>
            {/* Evolve Member */}
            <div className="w-full">
              <label htmlFor="isMember" className="block form-label mb-1">
                Are You a Current Evolve Member? *
              </label>
              <div className="relative w-full">
                <select
                  id="isMember"
                  name="isMember"
                  value={form.isMember}
                  onChange={handleChange}
                  onFocus={() => setIsMemberFocused(true)}
                  onBlur={() => setIsMemberFocused(false)}
                  className={`appearance-none w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.isMember ? "border-red-500" : "border-[#D4D4D4]"
                  } ${
                    form.isMember === ""
                      ? "text-[#6F6D66] text-[12px]"
                      : "text-[#000] text-[16px]"
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Are You a Current Evolve Member?</option>
                  {isMemberOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6F6D66]">
                  {isMemberFocused ? (
                    <img
                      src={arrowUp}
                      alt="Arrow Up"
                      width={20}
                      height={20}
                      style={{
                        filter: form.isMember === "" ? "grayscale(1)" : "none",
                      }}
                    />
                  ) : (
                    <img
                      src={arrowDown}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      style={{
                        filter: form.isMember === "" ? "grayscale(1)" : "none",
                      }}
                    />
                  )}
                </span>
              </div>
              {errors.isMember && (
                <p className="input-error mt-1">{errors.isMember}</p>
              )}
            </div>
            {/* About Yourself */}
            <div className="w-full">
              <label htmlFor="about" className="block form-label mb-1">
                Tell Us About Yourself! *
              </label>
              <textarea
                id="about"
                name="about"
                value={form.about}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows={4}
                className={`w-full px-3 py-2 form-placeholder border rounded-[5px] resize-vertical min-h-[80px] ${
                  errors.about ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                disabled={isSubmitting}
              />
              {errors.about && (
                <p className="input-error mt-1">{errors.about}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full btnPrimary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default YourFitnessFutureForm;
