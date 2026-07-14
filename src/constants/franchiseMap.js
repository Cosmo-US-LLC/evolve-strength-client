// Trainer location mappings used by explore/discover pages.
// Workspaces use franchises directly from the public workspaces API.
export const FRANCHISE_MAP = {
  15: "SOUTH EDMONTON COMMON",
  7: "EDMONTON DOWNTOWN",
  9: "EDMONTON NORTH",
  10: "CALGARY ROYAL OAK",
  11: "CALGARY SETON",
  12: "BURNABY BRENTWOOD",
  13: "VANCOUVER POST",
};

export const FRANCHISE_OPTIONS = Object.entries(FRANCHISE_MAP)
  .map(([id, name]) => ({
    id: Number(id),
    name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const FRANCHISE_ID_BY_NAME = Object.entries(FRANCHISE_MAP).reduce(
  (acc, [id, name]) => {
    acc[name] = Number(id);
    return acc;
  },
  {},
);
