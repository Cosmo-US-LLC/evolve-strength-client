import React, { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "@/features/joinNow/lib/loadGoogleMap";
import { Input } from "@/features/joinNow/components/ui/input";

export default function AddressAutocomplete({ value, onChange, placeholder, types }) {
  const [predictions, setPredictions] = useState([]);
  const serviceRef = useRef(null);

  useEffect(() => {
    loadGoogleMaps(import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY).then((gm) => {
      serviceRef.current = new gm.maps.places.AutocompleteService();
    });
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    if (serviceRef.current && val) {
      serviceRef.current.getPlacePredictions(
        {
          input: val,
          componentRestrictions: { country: "ca" },
          types,
        },
        (preds) => setPredictions(preds || [])
      );
    } else {
      setPredictions([]);
    }
  };

  const handleSelect = (description) => {
    onChange(description);
    setPredictions([]);
  };

  return (
    <div className="relative">
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
      />
      {predictions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
          {predictions.map((p) => (
            <div
              key={p.place_id}
              onClick={() => handleSelect(p.description)}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
            >
              {p.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

