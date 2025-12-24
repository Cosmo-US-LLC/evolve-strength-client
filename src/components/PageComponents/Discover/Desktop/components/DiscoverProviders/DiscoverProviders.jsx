import React from "react";
import { CATEGORY } from "../constants";
import ServiceFilters from "./ServiceFilters";
import FocusAreaFilters from "./FocusAreaFilters";

const DiscoverProviders = ({
  category,
  selectedServiceIds,
  selectedFocusAreas,
  onServiceFilterSelect,
  onFocusAreaSelect,
  onResetFilters,
  loading,
  error,
  locationConfig,
  visibleProviders,
  onProviderClick,
}) => {
  return (
    <main className="">
      <section className="w-full mx-auto px-4 md:px-8  flex-1">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Sidebar with Filters */}
          <div className="w-full md:w-[280px] lg:w-[380px] flex-shrink-0">
            {category === CATEGORY.WELLNESS ? (
              <ServiceFilters
                selectedServiceIds={selectedServiceIds}
                onServiceFilterSelect={onServiceFilterSelect}
                onResetFilters={onResetFilters}
                showSidebar={true}
              />
            ) : (
              <FocusAreaFilters
                selectedFocusAreas={selectedFocusAreas}
                onFocusAreaSelect={onFocusAreaSelect}
                onResetFilters={onResetFilters}
                showSidebar={true}
              />
            )}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col pt-20 md:pt-24 pb-8 md:pb-12 min-h-screen">
            {/* Active Filters Chips */}
            {category === CATEGORY.WELLNESS ? (
              <ServiceFilters
                selectedServiceIds={selectedServiceIds}
                onServiceFilterSelect={onServiceFilterSelect}
                onResetFilters={onResetFilters}
                showSidebar={false}
                showChips={true}
              />
            ) : (
              <FocusAreaFilters
                selectedFocusAreas={selectedFocusAreas}
                onFocusAreaSelect={onFocusAreaSelect}
                onResetFilters={onResetFilters}
                showSidebar={false}
                showChips={true}
              />
            )}

            {/* Providers grid */}
            <div className="flex-1">
              {loading ? (
                <div className="flex items-center justify-center py-12 h-[calc(100vh-250px)]">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mb-4" />
                    <p className="text-gray-600 text-sm md:text-base">
                      Loading providers for {locationConfig.name}...
                    </p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center text-red-600 py-10 max-w-md mx-auto">
                  <p className="text-base md:text-lg font-semibold mb-2">
                    Unable to load providers.
                  </p>
                  <p className="text-sm md:text-base mb-4">{error}</p>
                  <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center rounded-full border border-[#CCCCCC] px-4 py-1.5 text-sm hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Try again
                  </button>
                </div>
              ) : !visibleProviders || !Array.isArray(visibleProviders) || visibleProviders.length === 0 ? (
                <div className="text-center text-gray-600 py-10 max-w-md mx-auto h-[calc(100vh-250px)] flex flex-col items-center justify-center">
                  <p className="text-base md:text-lg font-medium mb-2">
                    No providers found for the selected criteria.
                  </p>
                  <p className="text-sm md:text-base">
                    Try adjusting your filters or check back soon as providers are
                    added.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {visibleProviders.map((provider) => (
                    <button
                      key={provider.id}
                      type="button"
                      onClick={() => onProviderClick(provider)}
                      className="group text-left bg-[#F6F6F6] cursor-pointer rounded-[8px] overflow-hidden hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="aspect-[4/3] w-full bg-[#222222] overflow-hidden">
                        {provider.image ? (
                          <img
                            src={provider.image}
                            alt={provider.displayName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-white/60">
                            Image coming soon
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:p-5 flex items-center justify-between">
                        <div className="w-[80%]">
                          <h3 className="text-base md:!text-[24px] !font-[Kanit] text-[#000] !font-[500] mb-1">
                            {provider.displayName}
                          </h3>
                          {provider.specialty && (
                            <p className="!text-[18px] !font-[Kanit] text-[#767676] mb-1">
                              {provider.specialty.replace(/^Registered\s+/i, '')}
                            </p>
                          )}
                        </div>

                        <div className="rounded-full border-[1px] border-[#000] w-[30px] h-[30px] flex items-center justify-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 4L10 8L6 12"
                              stroke="black"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div></div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DiscoverProviders;
