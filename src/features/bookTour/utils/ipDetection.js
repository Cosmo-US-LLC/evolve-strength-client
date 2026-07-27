/**
 * Simple IP detection - just what you need for HubSpot
 */

/**
 * Get user's IP address
 * @returns {Promise<string|null>} - IP address or null
 */
export async function getUserIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn("Could not fetch IP address:", error.message);
    return null;
  }
}

/**
 * Test function to check IP detection and location
 * Run this in browser console: testIPLocation()
 */
export async function testIPLocation() {
  console.log("🧪 Testing IP Detection and Location...");

  try {
    // Test IP detection
    const ip = await getUserIP();

    if (ip) {
      console.log("✅ IP Address:", ip);

      // Test location detection using the same IP
      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const locationData = await locationResponse.json();

      console.log("📍 Location Data:");
      console.log("- Country:", locationData.country_name);
      console.log("- Region:", locationData.region);
      console.log("- City:", locationData.city);
      console.log("- Timezone:", locationData.timezone);
      console.log("- ISP:", locationData.org);

      return { ip, location: locationData };
    } else {
      console.log("❌ No IP address detected");
      return null;
    }
  } catch (error) {
    console.error("❌ Test failed:", error);
    return null;
  }
}

// Make test function available globally for console testing
if (typeof window !== "undefined") {
  window.testIPLocation = testIPLocation;
}
