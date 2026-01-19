let googleMapsScriptLoadingPromise;

export function loadGoogleMaps(apiKey) {
  if (typeof window === "undefined") return Promise.reject("No window object");

  if (!apiKey || apiKey === "undefined") {
    console.error(
      "Google Maps API key is missing. Please set VITE_APP_GOOGLE_MAPS_API_KEY in your .env file"
    );
    return Promise.reject(
      "Google Maps API key is missing. Please set VITE_APP_GOOGLE_MAPS_API_KEY in your .env file and restart your dev server."
    );
  }

  if (!googleMapsScriptLoadingPromise) {
    googleMapsScriptLoadingPromise = new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.google && window.google.maps) {
        resolve(window.google);
        return;
      }

      // Create and load script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        resolve(window.google);
      };

      script.onerror = reject;

      document.head.appendChild(script);
    });
  }

  return googleMapsScriptLoadingPromise;
}
