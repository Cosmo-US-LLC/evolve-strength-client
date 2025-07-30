import React, { useState } from "react";
import building from "@/assets/images/Locations/Seton/Building.webp";
import icon from "@/assets/images/Locations/Seton/icon.svg";
import brentwood from "@/assets/images/Locations/Seton/brentwood.webp";
import sunridge from "@/assets/images/Locations/Seton/sunridge.webp";
import seton from "@/assets/images/Locations/Seton/seton.webp";
import royalOak from "@/assets/images/Locations/Seton/royal-oak.webp";
import post from "@/assets/images/Locations/Seton/post.webp";

// Facility timings data
const FACILITY_TIMINGS = [
  { day: "Monday", hours: "6:00 AM – 10:00 PM" },
  { day: "Tuesday", hours: "6:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "6:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "6:00 AM – 10:00 PM" },
  { day: "Friday", hours: "6:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
];

const LOCATIONS_DATA = {
  "calgary-seton": {
    name: "Calgary Seton",
    address: "# 710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
    city: "CALGARY",
    branch: "SETON",
    buildingImage: seton,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2110.878166746872!2d-113.96341762398467!3d50.88077737167751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53719d7a5b2d2335%3A0x7ec07ea84a295d7e!2s710-19587%20Seton%20Crescent%20SE%2C%20Calgary%2C%20AB%20T3M%202T5%2C%20Canada!5e1!3m2!1sen!2s!4v1753862805458!5m2!1sen!2s",
  },
  "calgary-royal-oak": {
    name: "Calgary Royal Oak",
    address: "# 8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
    city: "CALGARY",
    branch: "ROYAL OAK",
    buildingImage: royalOak,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2098.5364773106708!2d-114.21797102396516!3d51.15268077173482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371685236f0c9b1%3A0xbd9eed18f8d5177e!2s8888%20Country%20Hills%20Blvd%20NW%20%23600%2C%20Calgary%2C%20AB%20T3G%200B6%2C%20Canada!5e1!3m2!1sen!2s!4v1753863030888!5m2!1sen!2s",
  },
  "calgary-sunridge": {
    name: "Calgary Sunridge",
    address: "# 2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
    city: "CALGARY",
    branch: "SUNRIDGE",
    buildingImage: sunridge,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2102.2379258409214!2d-113.996793123971!3d51.071242571717335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164da13c00001%3A0x112ca7ae770b7b1d!2sUnit%23125%2C%202985%2023%20Ave%20NE%20Unit%23125%2C%20Calgary%2C%20AB%20T1Y%207L3%2C%20Canada!5e1!3m2!1sen!2s!4v1753863330605!5m2!1sen!2s",
  },
  "edmonton-south": {
    name: "Edmonton South",
    address: "# 4825 89 St NW Edmonton, Alberta, T6E 5K1",
    city: "EDMONTON",
    branch: "SOUTH",
    buildingImage: building,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.7325563905!2d-113.46862111283077!3d53.48559170098502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018c4054f1297%3A0xa329ad1a0327765b!2s4825%2089%20St%20NW%2C%20Edmonton%2C%20AB%20T6E%205K1%2C%20Canada!5e1!3m2!1sen!2s!4v1753863586335!5m2!1sen!2s",
  },
  "edmonton-north": {
    name: "Edmonton North",
    address: "# 13457 149 St Edmonton, Alberta, T5L 2T3",
    city: "EDMONTON",
    branch: "NORTH",
    buildingImage: building,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1096646559804!2d-113.5838443237868!3d53.595841272362705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0241c856a7ae5%3A0xc06b088a81adcd9a!2s13457%20149%20St%2C%20Edmonton%2C%20AB%20T6V%200M9%2C%20Canada!5e1!3m2!1sen!2s!4v1753863684377!5m2!1sen!2s",
  },
  "edmonton-downtown": {
    name: "Edmonton Downtown",
    address: "# 12328 102 ave nw Edmonton, Alberta, T5N 0L",
    city: "EDMONTON",
    branch: "DOWNTOWN",
    buildingImage: building,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.018168009521!2d-113.53806072379066!3d53.54340887234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0222b0e9db099%3A0xa10e6e544e6b58f3!2s12328%20102%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5N%200L9%2C%20Canada!5e1!3m2!1sen!2s!4v1753863778575!5m2!1sen!2s",
  },
  "burnaby-brentwood": {
    name: "Burnaby Brentwood",
    address: "# 1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
    city: "BURNABY",
    branch: "BRENTWOOD",
    buildingImage: brentwood,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.1016174750234!2d-123.00539392409867!3d49.26786267139054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867731b5c77e21%3A0xb52f47dcaa6e1977!2s1920%20Willingdon%20Ave%2C%20Burnaby%2C%20BC%20V5C%200K5%2C%20Canada!5e1!3m2!1sen!2s!4v1753863881591!5m2!1sen!2s",
  },
  "vancouver-post": {
    name: "Vancouver The Post",
    address: "# 658 Homer St Vancouver, British Columbia, V6B 2R4",
    city: "VANCOUVER",
    branch: "THE POST",
    buildingImage: post,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.528782875505!2d-123.11708122409782!3d49.280807471392556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717eb0d56c25%3A0x31bb22bac88c7315!2s658%20Homer%20St%2C%20Vancouver%2C%20BC%20V6B%202R4%2C%20Canada!5e1!3m2!1sen!2s!4v1753863979242!5m2!1sen!2s",
  },
};

function SetonLocation() {
  const currentPath = window.location.pathname;
  let locationKey = "calgary-seton";

  if (currentPath.includes("calgary-seton")) {
    locationKey = "calgary-seton";
  } else if (currentPath.includes("calgary-royal-oak")) {
    locationKey = "calgary-royal-oak";
  } else if (currentPath.includes("calgary-sunridge")) {
    locationKey = "calgary-sunridge";
  } else if (currentPath.includes("edmonton-south")) {
    locationKey = "edmonton-south";
  } else if (currentPath.includes("edmonton-north")) {
    locationKey = "edmonton-north";
  } else if (currentPath.includes("edmonton-downtown")) {
    locationKey = "edmonton-downtown";
  } else if (currentPath.includes("burnaby-brentwood")) {
    locationKey = "burnaby-brentwood";
  } else if (currentPath.includes("vancouver-post")) {
    locationKey = "vancouver-post";
  }

  const locationData =
    LOCATIONS_DATA[locationKey] || LOCATIONS_DATA["calgary-seton"];

  const [isTimingsExpanded, setIsTimingsExpanded] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-4 ">
      <h1 className="!text-[40px] mb-2 !font-bold text-center">
        ABOUT OUR {locationData.city} {locationData.branch} LOCATION
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={locationData.buildingImage}
          alt={`Evolve Strength ${locationData.name}`}
          className="w-full md:w-[500px] h-auto md:h-[410px] object-cover rounded-md"
        />

        <div className="w-full md:w-[695px]  md:h-[410px] flex flex-col">
          <iframe
            src={locationData.mapUrl}
            title={`Evolve Strength ${locationData.name} Location`}
            className="w-full object-cover rounded-t-md h-[310px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="md:h-[100px]  bg-[#F9F9F9] p-4 border shadow rounded-b-md flex flex-col md:flex-row md:items-center md:justify-between ">
            <div>
              <h3 className="">{locationData.name}</h3>
              <p className="text-[16px] font-[kanit] font-[300] text-[#000]">
                {locationData.address}
              </p>
            </div>
            <div className="flex flex-start pt-5 md:pt-0">
              <button className="btnPrimary ">BOOK A FREE TOUR</button>
            </div>
          </div>
        </div>
      </div>

      <div className="  ">
        <button
          onClick={() => setIsTimingsExpanded(!isTimingsExpanded)}
          className="w-full md:w-[1210px] flex items-center justify-between px-4 py-3 bg-[#F9F9F9] !font-[600] text-black border border-gray-200 rounded hover:bg-[#F0F0F0] transition-colors"
        >
          FACILITY TIMINGS
          <img
            src={icon}
            alt=""
            className={`transition-transform duration-300 ${
              isTimingsExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Expandable timings content */}
        {isTimingsExpanded && (
          <div className="w-full md:w-[1210px] bg-white border border-gray-200 rounded-b-md mt-1 p-6 shadow-sm">
            <div className="grid grid-cols-1  gap-4">
              {FACILITY_TIMINGS.map((timing, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-[#000]">{timing.day}</span>
                  <span className="text-gray-600">{timing.hours}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SetonLocation;
