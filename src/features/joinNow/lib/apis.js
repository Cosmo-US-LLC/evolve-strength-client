const baseUrl = import.meta.env.VITE_APP_API_URL || "";

async function fetchClubPlans(locationPostal, setPlansIds, setPlansDetails) {
  try {
    const response = await fetch(
      `${baseUrl}/getClubInfo?location=${parseInt(locationPostal)}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch club plans");
    }
    const { plans: data = [] } = await response.json();

    const idx12 = data.findIndex((v) => v.planName?.includes("12"));
    if (idx12 === -1) throw new Error("12-month plan not found");

    const otherIdx = data.findIndex((v) => !v.planName?.includes("12"));
    if (otherIdx === -1) throw new Error("No-contract plan not found");

    const ids = [data[otherIdx].planId, data[idx12].planId];
    setPlansIds(ids);

    const details = await Promise.all(
      ids.map((id) => {
        return fetchClubPlansDetails(id, locationPostal);
      })
    );
    setPlansDetails(details);
    console.log(details);
  } catch (error) {
    console.error(error);
  }
}

async function fetchClubPlansDetails(id, locationPostal) {
  try {
    const response = await fetch(
      `${baseUrl}/getPlanDetails?location=${parseInt(
        locationPostal
      )}&planId=${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch club plan details");
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

export { fetchClubPlans, fetchClubPlansDetails };