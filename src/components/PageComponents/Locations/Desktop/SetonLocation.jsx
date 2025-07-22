import React from 'react'
import building from "@/assets/images/Locations/Seton/Building.webp"
import Map from "@/assets/images/Locations/Seton/Map.webp"
import icon from  "@/assets/images/Locations/Seton/icon.svg"


function SetonLocation() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-15 flex flex-col gap-4 ">
      
  <h1 className="!text-[40px]   mb-4 !font-bold text-center">
    ABOUT OUR SETON LOCATION
  </h1>

  <div className="flex flex-col md:flex-row pl-5 gap-4">
    {/* Left: Image */}
    <div className=" ">
      <img
        src={building}
        alt="Evolve Strength Seton"
        className="w-full md:w-[500px] h-auto md:h-[381px]object-cover rounded-md"
      />
    </div>

    {/* Right: Map + Info */}
    <div className="w-full md:w-[695px] h-auto md:h-[290px] flex flex-col ">
      {/* Map Image */}
      <img
        src={Map}
        alt="Seton Map"
        className=" object-cover rounded-md"
      />

      {/* Address & Button */}
      <div className="h-[100px] bg-[#F9F9F9] p-4 border shadow rounded-md flex flex-col md:flex-row md:items-center md:justify-between ">
        <div>
          <h3 className="">Calgary Seton</h3>
          <p className="text-sm text-gray-600">
            710–19587 Seton Crescent SE, Calgary, Alberta, T3M 2T5
          </p>
        </div>
        <button className="btnPrimary">
          BOOK A FREE TOUR
        </button>
      </div>
    </div>
  </div>

  {/* Optional: Facility Timing Toggle */}
  <div className="pl-5  ">
    <button className="w-full md:w-[1210px]  flex items-center justify-between px-4 py-3 bg-[#F9F9F9] !font-[600] text-black  border border-gray-200 rounded">
      FACILITY TIMINGS
      <img src={icon} alt="" />
    </button>
  </div>
</div>

  )
}

export default SetonLocation