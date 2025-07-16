import React from "react";

function TrainerDetails({ trainer }) {
  // Check if trainer exists
  if (!trainer) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        {/* <p className="text-gray-500">No trainer information available.</p> */}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[10px] p-6 shadow-sm border border-gray-100 h-full">
      {/* About Section */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-2">About:</h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          {trainer.about || "No description available."}
        </p>
      </div>

      {/* Certification Section */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-2">Certification:</h3>
        <p className="text-gray-700 text-sm">
          {trainer.certification || "Certification information not available."}
        </p>
      </div>

      {/* Areas of Focus Section with BOOK NOW Button */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 mb-3">Areas of Focus:</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {trainer.areasOfFocus && trainer.areasOfFocus.length > 0 ? (
              trainer.areasOfFocus.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {area}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                No areas specified
              </span>
            )}
          </div>

          {/* BOOK NOW Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 uppercase ml-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainerDetails;
