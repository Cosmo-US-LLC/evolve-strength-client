// HubSpot lead capture for the Join Now flow.
//
// Submitted once the visitor completes the "Your Details" step (before
// payment), so the resulting HubSpot lead count is the sum of everyone who
// got that far, whether or not they go on to finish payment on the next
// step: people who dropped off mid-flow, plus people who actually joined.
//
// Follows the same public hsforms.com submission pattern already used
// elsewhere on the site (see src/components/Form/EdmontonSouthCommonForm.jsx).
//
// Field keys below match the exact HubSpot contact property names the
// client confirmed for this form (firstname, lastname, email, phone,
// gender, date_of_birth, address, city, zip_code, gym_location,
// plan_monthlyyearly). No province/state field - the client's list didn't
// include one, so it's omitted here.
const HUBSPOT_PORTAL_ID = "342148198";
const HUBSPOT_JOIN_NOW_FORM_ID =
  import.meta.env.VITE_HUBSPOT_JOIN_NOW_FORM_ID || "";

/**
 * Submit a Join Now "Your Details" lead to HubSpot.
 *
 * @param {object} details
 * @param {string} details.firstName
 * @param {string} details.lastName
 * @param {string} details.email
 * @param {string} details.phone - digits only, as collected from the form
 * @param {string} details.address
 * @param {string} details.city
 * @param {string} details.postalCode
 * @param {string} details.dob - date of birth, formatted MM/DD/YYYY
 * @param {string} details.gender
 * @param {string} details.location - the gym location name selected earlier
 *   in the flow (e.g. "Calgary Seton"). Submitted as a hidden field so the
 *   lead always carries which location it's for, even though the visitor
 *   never sees or fills in this field themselves - it was already chosen
 *   back on the location page / membership-type step and just carried
 *   through the flow via the `location` query param.
 * @param {string} details.plan - the membership plan chosen on the
 *   previous step ("Month to Month" or "1 Year Contract"). Also hidden -
 *   carried through via the `plan` query param, not re-entered here.
 */
export async function submitJoinNowLead({
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
  if (!HUBSPOT_JOIN_NOW_FORM_ID) {
    // Form not created in HubSpot yet - skip quietly rather than error.
    console.warn(
      "[joinNow] Skipping HubSpot submission: VITE_HUBSPOT_JOIN_NOW_FORM_ID is not set."
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
      // Hidden fields: which gym location this lead is for, and which plan
      // they picked. Neither is entered by the visitor - both are carried
      // through the flow via query params from earlier steps.
      { name: "gym_location", value: location || "" },
      { name: "plan_monthlyyearly", value: plan || "" },
    ];

    await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_JOIN_NOW_FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: "Join Now - Your Details",
            ...(hutk && { hutk }),
          },
        }),
      }
    );
  } catch (error) {
    // Never let a HubSpot submission failure block the actual signup flow.
    console.error("[joinNow] HubSpot submission failed:", error);
  }
}
