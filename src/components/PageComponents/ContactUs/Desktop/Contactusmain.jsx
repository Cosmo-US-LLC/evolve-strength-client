import React, { useState } from "react";
import SuccessFullScreen from "@/components/ui/SuccessFullScreen"; // single import

const contactLocationsData = {
  heading: "OUR LOCATIONS",
  locations: [
    {
      cityName: "Edmonton Downtown",
      location: "12328 102 ave nw Edmonton, Alberta, T5N 0L9",
      number: "(780) 784-2675",
    },
    {
      cityName: "Edmonton South",
      location: "4825 89 St NW Edmonton, Alberta, T6E 5K1",
      number: "(587) 754-3632",
    },
    {
      cityName: "Edmonton North",
      location: "13457 149 St Edmonton, Alberta, T5L 2T3",
      number: "(780) 784-7870",
    },
    {
      cityName: "Calgary Royal Oak",
      location: "8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
      number: "(403) 452-3169",
    },
    // {
    //   cityName: "Calgary Sunridge",
    //   location: "2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
    //   number: "(587) 393-9428",
    // },
    {
      cityName: "Calgary Seton",
      location: "710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
      number: "(825) 407-9015",
    },
    {
      cityName: "Burnaby Brentwood",
      location: "1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
      number: "(236) 455-6573",
    },
    {
      cityName: "Vancouver Post",
      location: "658 Homer St Vancouver, British Columbia, V6B 2R4",
      number: "(236) 757-5475",
    },
  ],
};

function Contactusmain() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location) newErrors.location = "Please select a location";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const hubspotFormData = {
        fields: [
          { name: "firstname", value: formData.firstName },
          { name: "lastname", value: formData.lastName },
          { name: "email", value: formData.email },
          { name: "phone", value: formData.phone },
          {
            name: "location",
            value: formData.location
              ? `${
                  contactLocationsData.locations.find(
                    (loc) => loc.location === formData.location
                  )?.cityName || formData.location
                } - ${formData.location}`
              : "",
          },
          { name: "message", value: formData.message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Contact Us Form",
        },
      };

      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/342148198/53c692f6-0015-4782-ac3c-c0aab44567d4",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hubspotFormData),
        }
      );

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("HubSpot submission failed", response.status, text);
        alert("There was an error submitting your form. Please try again.");
        return;
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success overlay — show only after success */}
      {submitted && (
        <div className="fixed inset-0 z-[9999]">
          <SuccessFullScreen
            title="THANK YOU FOR CONTACTING US"
            description="Thank you for your message! We've received your information and our team will be in touch with you soon to address your inquiry."
            buttonText="BACK TO HOME"
            buttonLink="/"
            icon="message"
          />
        </div>
      )}

      <div className="max-w-[1280px] relative z-10 px-4 md:px-8 md:mb-15 mb-12 mx-auto flex md:flex-row flex-col w-full h-full gap-8">
        {/* LEFT: LOCATIONS */}
        <div className="w-full md:w-[50%] mb-8">
          <h2 className="text-[#4AB04A] font-bold text-lg mb-4">
            {contactLocationsData.heading}
          </h2>
          <ul className="space-y-6 text-sm">
            {contactLocationsData.locations.map((location, index) => (
              <li key={index}>
                <h3 className="font-bold text-base">{location.cityName}</h3>
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 py-3 md:py-0 description border-b border-[#9D9D9D] md:border-none !font-[Kanit] !font-[300] !text-[14px]">
                  <span className="w-full md:w-[358px] h-auto md:h-[21px] break-words">
                    {location.location}
                  </span>
                  <a
                    href={`tel:${location.number}`}
                    className="h-[21px] block  text-[#000] transition-colors duration-200"
                  >
                    {location.number}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: FORM */}
        <div className="w-full md:w-[50%] h-full md:h-auto items-center gap-[10px] overflow-hidden rounded-[8px] bg-[#ffffff] border border-[#E5E5E5]">
          <h3 className="font-bold mb-6 text-center text-xl bg-[#000000] text-white py-3">
            SEND US A MESSAGE
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block form-label mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.firstName ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className="input-error  mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block form-label mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block form-label mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@email.com"
                  className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                    errors.email ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="input-error mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block form-label mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
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

            <div>
              <label htmlFor="location" className="block form-label mb-1">
                Select Location *
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 form-placeholder border rounded-[5px] ${
                  errors.location ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                disabled={isSubmitting}
              >
                <option value="">Select your preferred location</option>
                {contactLocationsData.locations.map((location, index) => (
                  <option key={index} value={location.location}>
                    {location.cityName}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p className="input-error mt-1">{errors.location}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block form-label mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="I'm interested in joining your gym and would like to know about membership options..."
                rows={4}
                className={`w-full px-3 py-2 form-placeholder border rounded-[5px] resize-none ${
                  errors.message ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="input-error mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btnPrimary ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4AB04A] hover:bg-green-700 active:transform active:scale-95"
              } text-white`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                "SUBMIT NOW"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactusmain;
