import React, { useState, useEffect, useRef } from "react";
import { WELLNESS_SERVICES_DISCOVER } from "@/services/trainerApi";
import { X } from "lucide-react";

const SERVICE_ICONS = {
  "wellness-acupuncture": "/assets/images/Discover/wellnessC (11).svg",
  "wellness-chiropractic-care": "/assets/images/Discover/wellnessC (8).svg",
  "wellness-dietitian-services": "/assets/images/Discover/wellnessC (6).svg",
  "wellness-esthetician": "/assets/images/Discover/wellnessC (5).svg",
  "wellness-laser-therapy": "/assets/images/Discover/wellnessC (4).svg",
  "wellness-massage-therapy": "/assets/images/Discover/wellnessC (3).svg",
  "wellness-mental-health": "/assets/images/Discover/wellnessC (2).svg",
  "wellness-osteopathy": "/assets/images/Discover/wellnessC (10).svg",
  "wellness-physiotherapy": "/assets/images/Discover/wellnessC (1).svg",
  "wellness-pilates": "/assets/images/Discover/wellnessC (9).svg",
  "default": "/assets/images/Discover/wellnessC (2).svg",
};

const ServiceFilters = ({ selectedServiceIds, onServiceFilterSelect, onResetFilters, showSidebar = true, showChips = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [tempSelectedIds, setTempSelectedIds] = useState([]);
  const modalRef = useRef(null);

  const sortedServices = [...WELLNESS_SERVICES_DISCOVER].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    setTempSelectedIds(selectedServiceIds || []);
  }, [selectedServiceIds]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleToggleService = (serviceId) => {
    setTempSelectedIds((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const handleApplyFilters = () => {
    onServiceFilterSelect(tempSelectedIds);
    setShowModal(false);
  };

  const handleResetFilters = () => {
    setTempSelectedIds([]);
    onServiceFilterSelect([]);
    setShowModal(false);
  };

  const handleRemoveFilter = (serviceId) => {
    const newIds = selectedServiceIds.filter((id) => id !== serviceId);
    onServiceFilterSelect(newIds);
  };

  const handleSidebarServiceClick = (serviceId) => {
    if (selectedServiceIds.includes(serviceId)) {
      handleRemoveFilter(serviceId);
    } else {
      onServiceFilterSelect([...selectedServiceIds, serviceId]);
    }
  };

  const selectedServices = sortedServices.filter((svc) =>
    selectedServiceIds.includes(svc.id)
  );

  // Render only chips if showChips is true
  if (showChips) {
    return (
      <>
        {selectedServices.length > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {selectedServices.map((svc) => (
              <div
                key={svc.id}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#CCCCCC] rounded-[8px]"
              >
                <span className="text-[14px] md:text-[20px] cursor-pointer font-[Kanit] font-[300] text-black capitalize">
                  {svc.name}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveFilter(svc.id)}
                  className="text-black hover:text-gray-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                onServiceFilterSelect([]);
                if (onResetFilters) onResetFilters();
              }}
              className="ml-auto px-4 py-2 bg-black cursor-pointer text-white rounded-[8px] text-[14px] md:text-[20px] font-[Kanit] font-[300] hover:bg-gray-800 transition-colors uppercase"
            >
              RESET FILTER
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {/* Sidebar */}
      {showSidebar && (
        <div className="sticky top-4 bg-white rounded-[8px] border border-[#CCCCCC] p-4 flex flex-col h-[calc(100vh-20px)]">
          <h3 className="text-[16px] md:text-[18px] font-[Kanit] font-[500] text-black mb-4 uppercase flex-shrink-0">
            FILTER BY GOAL
          </h3>
          
          <div className="space-y-2 mb-4 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {sortedServices.map((svc) => {
              const IconSource = SERVICE_ICONS[svc.id] || SERVICE_ICONS.default;
              const isSelected = selectedServiceIds.includes(svc.id);

              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => handleSidebarServiceClick(svc.id)}
                  className={`w-full flex items-center cursor-pointer gap-3 px-3 py-2.5 rounded-[8px] border transition-all ${
                    isSelected
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-[#CCCCCC] hover:border-[#4AB04A]"
                  }`}
                >
                  <img
                    src={IconSource}
                    alt={svc.name}
                    className={`object-contain flex-shrink-0 ${
                      isSelected ? "" : ""
                    }`}
                  />
                  <span className="text-[14px] md:text-[20px] font-[Kanit] font-[300] text-left capitalize flex-1">
                    {svc.name}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full px-4 py-3 cursor-pointer bg-[#4AB04A] text-white rounded-[8px] font-[Kanit] font-[400] text-[14px] md:text-[20px] hover:bg-[#3a8f3a] transition-colors flex-shrink-0"
          >
            BROWSE ALL FILTERS
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-10 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-lg w-full max-h-[90vh] py-8 px-6 max-w-[1840px] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className=" bg-white px-6 py-4 flex items-center justify-between z-10">
              <div className="relative w-full">
                <h2 className="text-center text-2xl md:text-[40px] font-[600] !font-[Kanit] text-black mb-2">
                  CHOOSE YOUR TRAINER
                </h2>
                <p className="text-sm text-center md:text-[24px] font-[Kanit] font-[300] max-w-[690px] mx-auto text-gray-600">
                  Easily filter through a diverse range of expert trainers by
                  category to find the perfect match for your fitness journey.
                </p>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-black absolute top-4 right-4 hover:text-gray-600 transition-colors ml-4"
              >
                <X className="w-6 h-6" />
              </button>
              </div>
            </div>

            {/* Filter Grid */}
            <div className="p-6">
              <div className="flex flex-wrap gap-3 md:gap-4">
                {sortedServices.map((svc) => {
                  const IconSource = SERVICE_ICONS[svc.id] || SERVICE_ICONS.default;
                  const isSelected = tempSelectedIds.includes(svc.id);

                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleToggleService(svc.id)}
                      className={`flex items-center cursor-pointer justify-center  gap-2 p-4 rounded-[8px] border transition-all  ${
                        isSelected
                          ? "bg-black text-white border-black border-2"
                          : "bg-white text-[#4AB04A] border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={IconSource}
                        alt={svc.name}
                        className={`w-8 h-8 md:w-10 md:h-10 object-contain ${
                          isSelected ? "" : ""
                        }`}
                      />
                      <span className={`text-[12px] md:text-[20px] font-[Kanit] !whitespace-nowrap font-[400] text-center capitalize ${
                        isSelected ? "text-white" : "text-[#000]"
                      }`}>
                        {svc.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className=" bg-white  px-6 py-4 flex items-center justify-start gap-4">
              <button
                type="button"
                onClick={handleApplyFilters}
                className="px-6 py-3 bg-[#4AB04A] border border-[#4AB04A] cursor-pointer text-white rounded-[8px] text-[14px] md:text-[16px] font-[Kanit] font-[400] hover:bg-[#3a8f3a] transition-colors"
              >
                APPLY FILTERS
                {tempSelectedIds.length > 0 && ` (${tempSelectedIds.length} selected)`}
              </button>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-3 bg-white border-2 border-black cursor-pointer rounded-[8px] text-[14px] md:text-[16px] font-[Kanit] font-[400] text-black hover:bg-gray-50 transition-colors"
              >
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceFilters;
