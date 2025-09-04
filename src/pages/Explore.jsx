import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExploreHero from "@/components/PageComponents/Explore/Desktop/ExploreHero";
import DiscoverEvolve from "@/components/PageComponents/Explore/Desktop/DiscoverEvolve";
import MetaTags from "@/components/Metatags/Meta";

function Explore() {
  const [selected, setSelected] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam) {
      // Map URL parameter to category ID
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
      // Remove category parameter when deselecting
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
        <DiscoverEvolve selected={selected} onSelect={handleCategorySelect} />
      </div>
    </>
  );
}

export default Explore;
