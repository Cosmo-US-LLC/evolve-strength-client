// Temporary utility to check environment variables
// Remove this file after debugging

export const checkGoogleMapsKey = () => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
  console.log("=== Environment Variable Check ===");
  console.log("VITE_APP_GOOGLE_MAPS_API_KEY:", apiKey);
  console.log("Type:", typeof apiKey);
  console.log("Is undefined?", apiKey === undefined);
  console.log("All env vars starting with VITE_:", 
    Object.keys(import.meta.env).filter(key => key.startsWith('VITE_'))
  );
  console.log("All import.meta.env:", import.meta.env);
  console.log("===================================");
  return apiKey;
};
