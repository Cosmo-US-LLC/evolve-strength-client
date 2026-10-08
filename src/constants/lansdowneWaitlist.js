// Single source of truth for Lansdowne waitlist page facts and media.
// No street address or opening date beyond the year: client has not confirmed them.
export const LANSDOWNE = {
  name: "Lansdowne",
  openingYear: 2027, // not shown on the page since design v2
  locationLine: "Inside Lansdowne Centre, Richmond BC",
  disciplines: [
    "Bodybuilding",
    "Powerlifting",
    "Olympic Lifting",
    "Functional Fitness",
    "General Fitness",
  ],
  sqFt: 33000,
  sqFtShort: 33, // shown as "33K"
  privateOffices: 20,
  anchorSpaces: 2,
  // Where the page's secondary CTAs send people
  leasingUrl: "/join-the-wait-list",
  trainerUrl: "/join-as-trainer",
  privacyUrl: "/privacy-policy",
};

// TODO: placeholders reused from Park Royal until real Lansdowne photography exists.
export const LANSDOWNE_IMAGES = {
  hero: {
    desktop:
      "https://assets.evolvestrength.ca/media/1784191958310-801be316-2715-4165-bf74-5c0a222e5833.webp",
    mobile:
      "https://assets.evolvestrength.ca/media/1784284481158-42228d3e-55ea-4326-8dd1-de9493b2c409.webp",
  },
  facilityTall:
    "https://assets.evolvestrength.ca/media/1784188141013-f269da9b-8f20-4d5b-83c3-cf95f3b90545.webp",
  facilityFloor:
    "https://assets.evolvestrength.ca/media/1784188164900-43763fe3-9495-4ddc-a5ac-b3e6800cc231.webp",
  space: {
    desktop:
      "https://assets.evolvestrength.ca/media/1784191958310-801be316-2715-4165-bf74-5c0a222e5833.webp",
    mobile:
      "https://assets.evolvestrength.ca/media/1784284481158-42228d3e-55ea-4326-8dd1-de9493b2c409.webp",
  },
  location: {
    desktop:
      "https://assets.evolvestrength.ca/media/1784194417531-22c0ab72-7d3b-476e-96f4-9d9952580a94.webp",
    mobile:
      "https://assets.evolvestrength.ca/media/1784284609508-abdf9fab-f121-43b0-9dfa-9c30cb771b3a.webp",
  },
  officesColumnA: [
    "https://assets.evolvestrength.ca/media/1784200929617-4cf97ea3-1602-40e5-82f6-2fbcecd47c79.webp",
    "https://assets.evolvestrength.ca/media/1784200949027-3c15788e-5342-4a29-b66d-083a6bc4e5a1.webp",
    "https://assets.evolvestrength.ca/media/1784200968046-2d7af29b-40fd-43b2-98c2-fcb8d877ab01.webp",
    "https://assets.evolvestrength.ca/media/1784200992507-3f9035b4-cce0-42da-a128-70be24edc566.webp",
  ],
  officesColumnB: [
    "https://assets.evolvestrength.ca/media/1784201015590-c26736fa-1953-4c79-91b0-c14f0d1d6e50.webp",
    "https://assets.evolvestrength.ca/media/1784201040401-1088f067-7ce6-45aa-a250-5b50b3b6d488.webp",
    "https://assets.evolvestrength.ca/media/1784201065145-5946e514-d2e4-48ad-995f-7b83427e4243.webp",
    "https://assets.evolvestrength.ca/media/1784201087034-916e649d-d6ac-47dc-ae02-295af2419e07.webp",
  ],
  formBackground:
    "https://assets.evolvestrength.ca/media/1784034777603-f33e27dd-7938-4c90-be0f-42ea8ddae6f1.webp",
};
