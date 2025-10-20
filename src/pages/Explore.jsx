import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExploreHero from "@/components/PageComponents/Explore/Desktop/ExploreHero";
import DiscoverEvolve from "@/components/PageComponents/Explore/Desktop/DiscoverEvolve";
import MetaTags from "@/components/Metatags/Meta";
import { fetchAllTrainers } from "@/services/trainerApi";
import { TrainerDataContext } from "@/contexts/TrainerDataContext";

function Explore() {
  const [selected, setSelected] = useState(null);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Load trainer data from API on mount
  useEffect(() => {
    const loadTrainers = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("🔄 Loading trainers from API...");

        const data = await fetchAllTrainers();

        console.log("✅ Trainers loaded successfully!");
        console.log("📊 Total trainers:", data.length);
        setTrainers(data);
      } catch (err) {
        console.error("❌ Error loading trainers:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTrainers();
  }, []);

  // Handle URL parameters on component mount
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
      }
    }
  }, [location.search]);

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
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
              <p className="text-gray-600 text-lg">Loading trainers...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center text-red-600">
              <p className="text-lg font-semibold mb-2">
                Failed to load trainers
              </p>
              <p className="text-sm">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <TrainerDataContext.Provider value={{ trainers }}>
            <DiscoverEvolve
              selected={selected}
              onSelect={handleCategorySelect}
            />
          </TrainerDataContext.Provider>
        )}
      </div>
    </>
  );
}

export default Explore;
