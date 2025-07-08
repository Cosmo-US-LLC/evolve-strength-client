import React from "react";

export default function TrainerCard({ person, index, expandedProfile, setExpandedProfile }) {
  return (
    <div
      className={`bg-white text-black rounded shadow overflow-hidden relative ${
        expandedProfile === index ? "border-4 border-green-500" : ""
      }`}
    >
      <img src={person.image} alt={person.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{person.name}</h3>
        <p className="text-sm">{person.role}</p>
        <button
          onClick={() => setExpandedProfile(expandedProfile === index ? null : index)}
          className="absolute bottom-2 right-2 text-green-600 text-xl"
        >
          ⌄
        </button>
      </div>
      {expandedProfile === index && (
        <div className="p-4 bg-gray-100">
          {person.bio && <p className="text-sm mb-2">{person.bio}</p>}
          {person.certifications && (
            <p className="text-xs font-medium">
              Certifications:{" "}
              {Array.isArray(person.certifications)
                ? person.certifications.join(", ")
                : person.certifications}
            </p>
          )}
          {person.focus && (
            <div className="mt-2 flex flex-wrap gap-2">
              {person.focus.map((tag) => (
                <span
                  key={tag}
                  className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">BOOK NOW</button>
        </div>
      )}
    </div>
  );
}
