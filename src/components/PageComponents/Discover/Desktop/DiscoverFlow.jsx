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

  // Fetch trainers based on category and filters (server-side filtering)
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

        // Send filter selections to the API so the backend performs filtering
        // - For trainers category we pass areas of focus
        // - For wellness category we pass the selected service roles
        if (category === CATEGORY.TRAINERS && selectedFocusAreas && selectedFocusAreas.length > 0) {
          params.areaOfFocus = selectedFocusAreas;
        }

        if (category === CATEGORY.WELLNESS && activeRoles && activeRoles.length > 0) {
          // activeRoles contains role names derived from selected service ids
          params.service = activeRoles;
        }

        const data = await fetchAllTrainers(params);
        if (!mounted) return;

        // Ensure we only show trainers for the requested location
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
  }, [franchiseId, locationName, category, selectedFocusAreas, activeRoles]);

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

    // Server-side filtering: selected filters (areas / services) are sent to the API
    // so the backend returns already-filtered results. Keep only dedupe and normalization here.

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
        <DiscoverProfile 
          provider={selectedProvider} 
          category={category}
          locationName={locationName}
        />
      )}
    </div>
  );
};

export default DiscoverFlow;

