import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DiscoverEvolve from "@/components/PageComponents/Explore/Desktop/DiscoverEvolve";
import MetaTags from "@/components/Metatags/Meta";
import { fetchAllTrainers } from "@/services/trainerApi";
import { TrainerDataContext } from "@/contexts/TrainerDataContext";

function Explore() {
  const [selected, setSelected] = useState(null);
  const [trainers, setTrainers] = useState([]);
  // Start with not loading; we'll trigger loading only when we actually fetch
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const loadTrainers = useCallback(async (filters = {}) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllTrainers(filters);
      setTrainers(data);
      setActiveFilters(filters);
    } catch (err) {
      // Ignore abort errors silently to avoid flashing errors on rapid changes
      if (err?.name === "AbortError") {
        return;
      }
      console.error("❌ Error loading trainers:", err);
      setError(err.message);
      setTrainers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle URL parameters on component mount and decide initial data fetch
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam) {
      const categoryMap = {
        trainers: "TRAINERS",
        locations: "LOCATIONS",
        wellness: "WELLNESS",
      };

      const categoryId = categoryMap[categoryParam.toLowerCase()];
      if (categoryId) {
        setSelected(categoryId);

        // If Locations is selected via URL, fetch all trainers once
        if (categoryId === "LOCATIONS" && trainers.length === 0) {
          loadTrainers();
        }
      }
    }
  }, [location.search, loadTrainers, trainers.length]);

  const contextValue = useMemo(
    () => ({
      trainers,
      loading,
      error,
      filters: activeFilters,
      fetchTrainers: loadTrainers,
    }),
    [trainers, loading, error, activeFilters, loadTrainers]
  );

  // Note: initial fetch is handled above based on URL; otherwise we defer fetching
  // to child views (Trainers/Wellness) or when Locations is selected.

  const handleCategorySelect = (categoryId) => {
    setSelected(categoryId);

    if (categoryId) {
      const categoryMap = {
        TRAINERS: "trainers",
        LOCATIONS: "locations",
        WELLNESS: "wellness",
      };

      const categoryParam = categoryMap[categoryId];
      if (categoryParam) {
        navigate(`/explore?category=${categoryParam}`, { replace: true });
      }

      // When selecting Locations, ensure we have the full dataset
      if (categoryId === "LOCATIONS" && trainers.length === 0 && !loading) {
        loadTrainers();
      }
    } else {
      navigate("/explore", { replace: true });
    }
  };

  return (
    <>
      <MetaTags
        title="Explore Trainers, Wellness Services & Amenities | Evolve Strength"
        description="Browse Evolve Strength locations, wellness services, and trainers by area of focus. Discover the right amenities and support to reach your health and fitness goals."
      />
      <div>
        {/* <ExploreHero /> */}
        <TrainerDataContext.Provider value={contextValue}>
          <DiscoverEvolve selected={selected} onSelect={handleCategorySelect} />
        </TrainerDataContext.Provider>
      </div>
    </>
  );
}

export default Explore;
