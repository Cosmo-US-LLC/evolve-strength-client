import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FormsHeader from "../ui/FormsHeader";
import SuccessFullScreen from "../ui/SuccessFullScreen";

function Intake() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventName: "",
    preferredContact: "",
    comments: "",
    consent: false,
  });

  const [selectedLocation, setSelectedLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    "Select Location",
    "Edmonton Downtown",
    "Edmonton South",
    "Edmonton North",
    "Calgary Royal Oak",
    "Calgary Seton",
    "Burnaby Brentwood",
    "Vancouver Post",
  ];

  const contactMethods = [
    "Select preference",
    "Phone",
    "Email",
    "Text Message",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.eventName.trim())
      newErrors.eventName = "Event name is required";
    if (!selectedLocation || selectedLocation === "Select Location")
      newErrors.location = "Location is required";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus on first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField === "location") {
        document
          .querySelector('select[value="' + selectedLocation + '"]')
          ?.focus();
      } else {
        document.querySelector(`[name="${firstErrorField}"]`)?.focus();
      }
      return;
    }

    try {
      setIsSubmitting(true);

      // Get HubSpot tracking cookie and other tracking data
      const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
      };

      const hutk = getCookie("hubspotutk");

      // Get user's IP address (client-side approximation)
      const getUserIP = async () => {
        try {
          const response = await fetch("https://api.ipify.org?format=json");
          const data = await response.json();
          return data.ip;
        } catch (error) {
          console.warn("Could not fetch IP address:", error);
          return null;
        }
      };

      const userIP = await getUserIP();

      const hubspotFormData = {
        fields: [
          { name: "location", value: selectedLocation || "" },
          { name: "firstname", value: formData.firstName },
          { name: "lastname", value: formData.lastName },
          { name: "email", value: formData.email },
          { name: "phone", value: formData.phone },
          { name: "event_name", value: formData.eventName },
          {
            name: "preferred_contact_method",
            value: formData.preferredContact,
          },
          {
            name: "intake_additional_comments_or_questions",
            value: formData.comments,
          },
          {
            name: "intake_agree_checkbox",
            value: formData.consent ? "Yes" : "No",
          },
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Quick Info Form - Intake",
          ...(hutk && { hutk }),
          ...(userIP && { ipAddress: userIP }),
        },
      };

      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/342148198/ec5de179-8970-4a69-bca2-fd28690a7594",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotFormData),
        }
      );

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("HubSpot submission failed", response.status, text);
        throw new Error("Submission failed");
      }

      console.log("Form submitted successfully:", {
        ...formData,
        location: selectedLocation,
      });

      // Show success screen
      setSubmitted(true);

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventName: "",
        preferredContact: "",
        comments: "",
        consent: false,
      });
      setSelectedLocation("");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Form Header */}
      <FormsHeader />

      {/* Success Screen Full Screen Overlay */}
      {submitted && (
        <div className="fixed inset-0 z-[9999] bg-white">
          <SuccessFullScreen
            title="Thank You for Your Interest"
            description="We've received your information and will be in touch soon to discuss your fitness goals and how we can help you achieve them."
            buttonText="BACK TO HOME"
            buttonLink="/"
            icon="check"
          />
        </div>
      )}

      <div className="flex flex-col lg:flex-row px-0 md:px-8 pt-24 pb-12">
        <div className="max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col lg:flex-row w-full">
          {/* Left side - Image */}
          <div className="hidden lg:block w-full lg:w-1/2 relative rounded-[8px] overflow-hidden bg-white mb-6 lg:mb-0 lg:mr-4">
            <img
              src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/intake/left-intake.webp"
              alt="Fitness training"
              className="w-full h-[300px] lg:h-full object-cover"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 px-0 md:px-10 bg-white rounded-lg lg:rounded-r-lg">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-base mb-5 transition-colors duration-200 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors duration-200">
                <ArrowLeft size={16} />
              </div>
              Back
            </Link>

            <div className="bg-gray-800 text-white p-4 md:p-5 rounded-t-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h1 className="!text-[16px] md:text-[18px] font-[400] uppercase">
                    QUICK INFO FORM
                  </h1>
                  <p className="text-[14px] md:text-[15px] font-[400] opacity-90">
                    We require details so we can better assist you.
                  </p>
                </div>
                <div className="w-full md:w-auto md:max-w-[160px]">
                  <select
                    value={selectedLocation}
                    onChange={(e) => {
                      setSelectedLocation(e.target.value);
                      if (errors.location) {
                        setErrors((prev) => ({
                          ...prev,
                          location: "",
                        }));
                      }
                    }}
                    className={`bg-gray-700 text-white border rounded px-3 py-[10px] text-sm w-full ${
                      errors.location ? "border-red-500" : "border-gray-600"
                    }`}
                  >
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-b-lg border border-gray-200">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <h3>Personal Information</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="block form-label mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.firstName ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
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
                      required
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.lastName ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col">
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
                      required
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.email ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
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
                      required
                      className={`w-full px-3 h-[40px] flex items-center justify-center form-placeholder border rounded-[5px] ${
                        errors.phone ? "border-red-500" : "border-[#D4D4D4]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="eventName" className="block form-label mb-1">
                    Event Name *
                  </label>
                  <textarea
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    placeholder="Enter event name"
                    rows={3}
                    required
                    className={`w-full px-3 py-2 form-placeholder border rounded-[5px] resize-none ${
                      errors.eventName ? "border-red-500" : "border-[#D4D4D4]"
                    }`}
                  />
                  {errors.eventName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.eventName}
                    </p>
                  )}
                </div>

                <h3>Contact Preferences</h3>

                <div className="flex flex-col">
                  <label
                    htmlFor="preferredContact"
                    className="block form-label mb-1"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-3 h-[40px] flex items-center justify-center form-placeholder border border-[#D4D4D4] rounded-[5px]"
                  >
                    {contactMethods.map((method, index) => (
                      <option key={index} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="comments" className="block form-label mb-1">
                    Additional Comments or questions
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Tell us anything else you'd like us to know."
                    rows={3}
                    className="w-full px-3 py-2 form-placeholder border border-[#D4D4D4] rounded-[5px] resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="text-sm font-[kanit] text-[#000]">
                    I agree to be contacted by{" "}
                    <strong>{selectedLocation || "Location"}</strong> regarding
                    membership information and fitness programs. I understand I
                    can opt out at any time.
                  </span>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
                )}

                <button
                  type="submit"
                  className="mt-2 btnPrimary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT NOW"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intake;
