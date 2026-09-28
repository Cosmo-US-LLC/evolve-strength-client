// Thin wrapper around the GTM dataLayer. Self-initializes `window.dataLayer`
// because the GTM snippet in index.html only loads on hosts listed in
// GTM_CONTAINERS and returns before setting up `dataLayer` anywhere else -
// without this, pushEvent would throw on localhost and Vercel previews.
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
