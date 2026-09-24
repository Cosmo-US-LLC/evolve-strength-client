// Thin wrapper around the GTM dataLayer. Self-initializes `window.dataLayer`
// because the GTM snippet in index.html gates loading to production hosts
// only (ALLOWED_HOSTS in index.html) and returns before setting up
// `dataLayer` anywhere else - without this, pushEvent would throw on
// localhost, Vercel previews, and staging.
export function pushEvent(name, params = {}) {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn("[analytics] pushEvent failed:", name, err);
    }
  }
}
