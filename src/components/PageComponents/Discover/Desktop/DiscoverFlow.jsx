import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FRANCHISE_ID_BY_NAME,
  LOCATION_CONFIG,
  WELLNESS_SERVICES_DISCOVER,
  TRAINER_SERVICES_DISCOVER,
  TRAINER_ROLE_IDS,
  fetchAllTrainers,
  getAllAreasOfFocus,
} from "@/services/trainerApi";
import { STEP, CATEGORY } from "./components/constants";
import DiscoverHeader from "./components/DiscoverHeader/DiscoverHeader";
import DiscoverHero from "./components/DiscoverHero/DiscoverHero";
import DiscoverServices from "./components/DiscoverServices/DiscoverServices";
import DiscoverProviders from "./components/DiscoverProviders/DiscoverProviders";
import DiscoverProfile from "./components/DiscoverProfile/DiscoverProfile";

const getLocationNameFromSearch = (search) => {
  if (!search) return null;

  const params = new URLSearchParams(search);
  const byKey =
    params.get("locationName") ||
    params.get("location") ||
    params.get("loc") ||
    null;

  if (byKey) {
    return decodeURIComponent(byKey).toUpperCase();
  }
  if (search.startsWith("?") && search.length > 1) {
    return decodeURIComponent(search.slice(1)).toUpperCase();
  }

  return null;
};

const getLocationConfig = (locationName) => {
  if (!locationName) return null;
  return (
    LOCATION_CONFIG.find(
      (loc) => loc.name.toUpperCase() === locationName.toUpperCase()
    ) || null
  );
};

const DiscoverFlow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [step, setStep] = useState(STEP.HERO);
  const [category, setCategory] = useState(CATEGORY.WELLNESS);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const locationName = useMemo(
    () => getLocationNameFromSearch(location.search),
    [location.search]
  );

  const locationConfig = useMemo(
    () => getLocationConfig(locationName),
    [locationName]
  );

  const displayServices = useMemo(() => {
    const services =
      category === CATEGORY.TRAINERS
        ? TRAINER_SERVICES_DISCOVER
        : WELLNESS_SERVICES_DISCOVER;

    return [...services].sort((a, b) => a.name.localeCompare(b.name));
  }, [category]);

  const activeRoles = useMemo(() => {
    if (!selectedServiceIds || selectedServiceIds.length === 0) return [];
    
    return selectedServiceIds
      .map((id) => {
        const svc = displayServices.find((s) => s.id === id);
        return svc?.role || null;
      })
      .filter(Boolean);
  }, [selectedServiceIds, displayServices]);

  const franchiseId = useMemo(
    () => (locationName ? FRANCHISE_ID_BY_NAME[locationName] : undefined),
    [locationName]
  );

  // Scroll to top when component first mounts (navigating from another page)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [step]);

  // Keep URL in sync if location is missing
  useEffect(() => {
    if (!locationName) return;

    if (!location.search.includes("=")) {
      return;
    }
    const params = new URLSearchParams(location.search);
    if (!params.get("locationName")) {
      params.set("locationName", locationName);
      navigate(`/discover?${params.toString()}`, { replace: true });
    }
  }, [locationName, location.search, navigate]);

  // Fetch trainers based on category and filters
  useEffect(() => {
    if (!franchiseId) return;

    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const params = {
          franchise: franchiseId,
          trainerRole:
            category === CATEGORY.TRAINERS
              ? TRAINER_ROLE_IDS.PERSONAL_TRAINER
              : TRAINER_ROLE_IDS.WELLNESS_EXPERT,
        };

        // Always fetch all trainers for the category, then filter client-side with OR logic
        // This ensures consistent behavior for single and multiple filters
        const data = await fetchAllTrainers(params);
        if (!mounted) return;

        const filteredByLocation = data.filter(
          (t) => t.location?.toUpperCase() === locationName.toUpperCase()
        );
        setTrainers(filteredByLocation);
      } catch (err) {
        if (!mounted) return;
        console.error("Error loading discover trainers:", err);
        setError(
          err?.message || "Unable to load providers for this location right now."
        );
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [franchiseId, locationName, category]);

  const visibleProviders = useMemo(() => {
    if (!Array.isArray(trainers)) return [];

    // Map trainers and ensure unique IDs
    let filtered = trainers.map((t) => ({
      ...t,
      displayName: t.trainerName || t.name,
    }));

    // Remove duplicates based on ID
    const seenIds = new Set();
    filtered = filtered.filter((t) => {
      if (seenIds.has(t.id)) {
        return false;
      }
      seenIds.add(t.id);
      return true;
    });

    // Client-side filtering with OR logic (match ANY selected filter)
    // If no filters selected, show all trainers
    // Uses same logic as Explore: checks if selected area is included in trainer's areas_of_focus string
    // This allows "Women's Health" to match "Women's Health and Fitness"
    if (category === CATEGORY.TRAINERS && selectedFocusAreas.length > 0) {
      filtered = filtered.filter((t) => {
        if (!t.areas_of_focus) return false;
        // Convert to lowercase for case-insensitive matching
        const trainerAreasLower = String(t.areas_of_focus).toLowerCase();
        // OR logic: trainer matches if ANY of the selected areas is included in their areas_of_focus
        // This allows partial matches like "Women's Health" matching "Women's Health and Fitness"
        const matches = selectedFocusAreas.some((area) =>
          trainerAreasLower.includes(area.toLowerCase())
        );
        return matches;
      });
    }

    // Client-side filtering for wellness with OR logic (based on specialty field)
    // If no filters selected, show all trainers
    // Wellness providers are filtered by their specialty field
    // Match specialty to role name - specialty must contain the role name (ignoring prefixes like "Registered")
    if (category === CATEGORY.WELLNESS && activeRoles && Array.isArray(activeRoles) && activeRoles.length > 0) {
      filtered = filtered.filter((t) => {
        if (!t.specialty) return false;
        
        const specialtyLower = String(t.specialty).toLowerCase().trim();
        
        // Check if specialty matches any of the selected roles
        const hasMatch = activeRoles.some((selectedRole) => {
          if (!selectedRole) return false;
          const selectedRoleLower = String(selectedRole).toLowerCase().trim();
          
          // Special case: Mental Health Professional can match Psychologist, Therapist, Counselor
          if (selectedRoleLower === "mental health professional" || selectedRoleLower.includes("mental health")) {
            return specialtyLower.includes("psychologist") || 
                   specialtyLower.includes("therapist") || 
                   specialtyLower.includes("counselor") ||
                   specialtyLower.includes("mental health");
          }
          
          // For other services, check if specialty contains the role name
          // Remove "Registered" prefix from specialty before matching (it's not part of the role name)
          // e.g., role "Massage Therapist" should match specialty "Registered Massage Therapist"
          // by checking if "Massage Therapist" (after removing "Registered") contains "Massage Therapist"
          let specialtyForMatching = specialtyLower;
          // Remove "Registered" prefix if present
          specialtyForMatching = specialtyForMatching.replace(/^registered\s+/i, '');
          
          // Check if specialty (without "Registered") contains the role name
          return specialtyForMatching.includes(selectedRoleLower);
        });
        
        return hasMatch;
      });
    }

    return filtered;
  }, [trainers, category, selectedFocusAreas, activeRoles]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;

    if (isUpSwipe) {
      handleStart();
    }
  };

  const handleStart = () => {
    setStep(STEP.SERVICES);
  };

  const handleCategorySelect = (nextCategory) => {
    setCategory(nextCategory);
    setSelectedServiceIds([]);
    setSelectedFocusAreas([]);
    setSelectedProvider(null);
    setStep(STEP.PROVIDERS);
  };

  const handleServiceFilterSelect = (serviceIds) => {
    setSelectedServiceIds(serviceIds);
  };

  const handleFocusAreaSelect = (areas) => {
    setSelectedFocusAreas(areas);
  };

  const handleResetFilters = () => {
    setSelectedServiceIds([]);
    setSelectedFocusAreas([]);
  };

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    setStep(STEP.PROFILE);
  };

  const handleBackFromProfile = () => {
    setStep(STEP.PROVIDERS);
    setSelectedProvider(null);
  };

  const handleBack = () => {
    if (step === STEP.SERVICES) {
      setStep(STEP.HERO);
    } else if (step === STEP.PROVIDERS) {
      setStep(STEP.SERVICES);
    } else if (step === STEP.PROFILE) {
      setStep(STEP.PROVIDERS);
      setSelectedProvider(null);
    }
  };

  // Basic empty/invalid state
  if (!locationName || !locationConfig || !franchiseId) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-xl shadow-xl max-w-xl w-full p-8 md:p-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Location not found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t determine which Evolve location to show. Make sure
            your link includes a valid location name, for example:
          </p>
          <code className="block bg-gray-100 rounded-md px-4 py-3 text-sm md:text-base text-left overflow-x-auto">
            /discovr?EDMONTON SOUTH
          </code>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <DiscoverHeader
        step={step}
        STEP={STEP}
        handleBack={handleBack}
        locationConfig={locationConfig}
        onHomeClick={() => setStep(STEP.HERO)}
      />

      {step === STEP.HERO && (
        <DiscoverHero
          onStart={handleStart}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
      )}

      {step === STEP.SERVICES && (
        <DiscoverServices onCategorySelect={handleCategorySelect} />
      )}

      {step === STEP.PROVIDERS && (
        <DiscoverProviders
          category={category}
          selectedServiceIds={selectedServiceIds}
          selectedFocusAreas={selectedFocusAreas}
          onServiceFilterSelect={handleServiceFilterSelect}
          onFocusAreaSelect={handleFocusAreaSelect}
          onResetFilters={handleResetFilters}
          loading={loading}
          error={error}
          locationConfig={locationConfig}
          visibleProviders={visibleProviders}
          onProviderClick={handleProviderClick}
        />
      )}

      {step === STEP.PROFILE && selectedProvider && (
        <DiscoverProfile provider={selectedProvider} />
      )}
    </div>
  );
};

export default DiscoverFlow;

