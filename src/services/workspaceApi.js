const ESUITE_API_BASE =
  import.meta.env.VITE_ESUITE_API_URL || "https://esuite-api.evolvestrength.ca/v1";
const API_URL = `${ESUITE_API_BASE}/workspaces/public`;

export const transformWorkspace = (workspace) => ({
  id: workspace.id,
  title: workspace.title,
  location: workspace.franchise_name?.trim() || "Unknown",
  image: workspace.image_url,
  size: workspace.size,
  roomStatus: workspace.room_status,
  pricing: workspace.pricing,
  franchise_id: workspace.franchise_id,
  display_order: workspace.display_order ?? 0,
});

/**
 * Locations come from public API only for franchises that have >= 1
 * PUBLISHED or UNPUBLISHED workspace.
 * - available_count > 0 / show_waitlist false => office cards
 * - available_count === 0 / show_waitlist true => waitlist card
 * Tab/office order follows CMS display_order (API already sorted).
 */
export const buildWorkspaceTabs = (locations = [], offices = []) => {
  const locationTabs = [...locations]
    .sort((a, b) => {
      const orderA = a.display_order ?? 0;
      const orderB = b.display_order ?? 0;
      if (orderA !== orderB) return orderA - orderB;
      return (a.name || "").localeCompare(b.name || "");
    })
    .map((location) => {
      const locationName = location.name?.trim() || "Unknown";
      const available_count = location.available_count ?? 0;
      const show_waitlist =
        location.show_waitlist ?? available_count === 0;

      return {
        id: String(location.franchise_id),
        label: locationName,
        locationName,
        franchise_id: location.franchise_id,
        available_count,
        show_waitlist,
        display_order: location.display_order ?? 0,
      };
    });

  const availableOfficesCount = offices.length;

  const tabsWithCounts = locationTabs.map((tab) => {
    const count =
      tab.available_count ??
      offices.filter((office) => String(office.franchise_id) === tab.id).length;

    return {
      ...tab,
      label: count > 0 ? `${tab.locationName} (${count})` : tab.locationName,
      available_count: count,
      show_waitlist: tab.show_waitlist ?? count === 0,
    };
  });

  const allTab = {
    id: "All",
    label: `All (${availableOfficesCount})`,
    available_count: availableOfficesCount,
    show_waitlist: false,
  };

  return [allTab, ...tabsWithCounts];
};

export const getUnavailableLocations = (tabs) =>
  tabs
    .filter(
      (tab) =>
        tab.id !== "All" &&
        (tab.show_waitlist === true || (tab.available_count ?? 0) === 0),
    )
    .map((tab) => tab.id);

export const fetchPublicWorkspaces = async (filters = {}) => {
  const body = {};
  if (filters.franchise_id) {
    body.franchise_id = Number(filters.franchise_id);
  }
  if (filters.franchise_ids?.length) {
    body.franchise_ids = filters.franchise_ids.map(Number);
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const payload = await response.json();
  const offices = (payload.data ?? [])
    .map(transformWorkspace)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
  const tabs = buildWorkspaceTabs(payload.locations ?? [], offices);
  const unavailableLocations = getUnavailableLocations(tabs);

  return {
    offices,
    tabs,
    unavailableLocations,
  };
};
