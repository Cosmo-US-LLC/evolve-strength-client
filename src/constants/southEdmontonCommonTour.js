/**
 * South Edmonton Common club id for `/book-a-tour` (matches FounderOffer `locationPostal` / API `location`).
 */
export const SOUTH_EDMONTON_COMMON_TOUR_LOCATION_ID = "32176";

export function southEdmontonCommonBookTourHref() {
  const id = encodeURIComponent(SOUTH_EDMONTON_COMMON_TOUR_LOCATION_ID);
  return `/book-a-tour?location=${id}`;
}
