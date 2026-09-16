// HubSpot lead capture for the Presale Park Royal payment flow
// ("Lock My Rate Now" -> /founder-offer-payment?source=park-royal).
//
// Submitted once the visitor completes the "Enter Your Details" step
// (before payment), so the resulting HubSpot lead count is the sum of
// everyone who got that far, whether or not they go on to finish payment
// on the next step: people who dropped off mid-flow, plus people who
// actually joined. This mirrors the Join Now integration
// (src/features/joinNow/lib/hubspot.js) - same portal, same field keys,
// per the client's request to follow "the same flow as the Join Now
// form".
//
// Field keys match the client-confirmed HubSpot contact property names:
// firstname, lastname, email, phone, gender, date_of_birth, address,
// city, zip_code, gym_location, plan_monthlyyearly.
const HUBSPOT_PORTAL_ID = "342148198";
const HUBSPOT_PRESALE_PARK_ROYAL_FORM_ID =
  import.meta.env.VITE_HUBSPOT_PRESALE_PARK_ROYAL_FORM_ID || "";

/**
 * Submit a Presale Park Royal "Enter Your Details" lead to HubSpot.
 *
 * @param {object} details
 * @param {string} details.firstName
 * @param {string} details.lastName
 * @param {string} details.email
 * @param {string} details.phone
 * @param {string} details.address
 * @param {string} details.city
 * @param {string} details.postalCode
 * @param {string} details.dob - date of birth, formatted MM/DD/YYYY
 * @param {string} details.gender
 * @param {string} details.location - the gym location this lead is for
 *   (e.g. "Park Royal"). Hidden field, not entered by the visitor.
 * @param {string} details.plan - the membership plan chosen on the
 *   previous step ("Month to Month" or "1 Year Contract"). Also hidden.
 */
export async function submitPresaleParkRoyalLead({
  firstName,
  lastName,
  email,
  phone,
  address,
  city,
  postalCode,
  dob,
  gender,
  location,
  plan,
}) {
  if (!HUBSPOT_PRESALE_PARK_ROYAL_FORM_ID) {
    console.warn(
      "[presaleParkRoyal] Skipping HubSpot submission: VITE_HUBSPOT_PRESALE_PARK_ROYAL_FORM_ID is not set."
    );
    return;
  }

  try {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };
    const hutk = getCookie("hubspotutk");

    const fields = [
      { name: "firstname", value: firstName || "" },
      { name: "lastname", value: lastName || "" },
      { name: "email", value: email || "" },
      { name: "phone", value: phone || "" },
      { name: "address", value: address || "" },
      { name: "city", value: city || "" },
      { name: "zip_code", value: postalCode || "" },
      { name: "date_of_birth", value: dob || "" },
      { name: "gender", value: gender || "" },
      { name: "gym_location", value: location || "" },
      { name: "plan_monthlyyearly", value: plan || "" },
    ];

    await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_PRESALE_PARK_ROYAL_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: "Presale Park Royal - Enter Your Details",
            ...(hutk && { hutk }),
          },
        }),
      }
    );
  } catch (error) {
    console.error("[presaleParkRoyal] HubSpot submission failed:", error);
  }
}
