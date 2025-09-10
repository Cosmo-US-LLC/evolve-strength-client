import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function AllGymLocations() {
  const locations = [
    {
      id: 1,
      name: "Burnaby Brentwood",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_bun_brentwood.webp",
      address: "1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
      phone: "+1 (236) 455-6573",
      directionsUrl:
      "https://www.google.com/maps/place/Evolve+Strength+Brentwood/@49.2674735,-123.0015024,736m/data=!3m3!1e3!4b1!5s0x548677304a5e7e31:0x4a38c21eac564f4f!4m6!3m5!1s0x548677502befb98d:0x80e13b4db43dc394!8m2!3d49.2674735!4d-123.0015024!16s%2Fg%2F11r8z347_m?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      // "https://www.google.com/maps/place/Evolve+Strength+Brentwood/@49.267477,-123.0040773,[…]1r8z347_m?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      locationUrl: "/locations/burnaby-brentwood",
      commonbtn: false,
    },
    {
      id: 2,
      name: "Vancouver The Post",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_van_p.webp",
      address: "658 Homer St Vancouver, British Columbia, V6B 2R4",
      phone: "+1 (604) 555-0124",
      directionsUrl:
        "https://www.google.com/maps/place/Evolve+Strength+Post/@49.2811859,-123.1133706,735m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54867100126f4c37:0xcfb8565a259c5326!8m2!3d49.2811859!4d-123.1133706!16s%2Fg%2F11vqrh4g84?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
        // "https://www.google.com/maps/place/Evolve+Strength+Post/@49.2811894,-123.1159455,521m[…]1vqrh4g84?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      locationUrl: "/locations/vancouver-post",
      commonbtn: false,
    },
    {
      id: 3,
      name: "Calgary Seton",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_cal_seton.webp",
      address: "710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
      phone: "+1 (825) 407-9015",
      directionsUrl:
        "https://www.google.com/maps/place/Evolve+Strength+Seton/@50.880782,-113.9608501,711m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53719d3715336be1:0x347c4581216ee053!8m2!3d50.880782!4d-113.9608501!16s%2Fg%2F11nxr64bbp?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
        // "https://www.google.com/maps/place/Evolve+Strength+Seton/@50.8807854,-113.963425,504m[…]1nxr64bbp?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      locationUrl: "/locations/calgary-seton",
      commonbtn: false,
    },
    {
      id: 4,
      name: "Calgary Royal Oak",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_cal_royal_oak.webp",
      address: "456 Royal Oak Dr NW, Calgary, Alberta, T3G 5K3",
      phone: "+1 (403) 452-3169",
      directionsUrl:
        "https://www.google.com/maps/place/Evolve+Strength+Royal+Oak/@51.1536466,-114.218384,707m/data=!3m2!1e3!4b1!4m6!3m5!1s0x537169b969aaab45:0x45bbd22c116daa40!8m2!3d51.1536433!4d-114.2158091!16s%2Fg%2F11pzrvbvhk?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
        // "https://www.google.com/maps/place/Evolve+Strength+Royal+Oak/@51.1536466,-114.218384,707m/data=!3m2!1e3!4b1!4m6!3m5!1s0x537169b969aaab45:0x45bbd22c116daa40!8m2!3d51.1536433!4d-114.2158091!16s%2Fg%2F11pzrvbvhk?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      locationUrl: "/locations/calgary-royal-oak",
      commonbtn: false,
    },
    // {
    //   id: 5,
    //   name: "Calgary Sunridge",
    //   image:
    //     "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_cal_sun.webp",
    //   address: "321 32 St NE, Calgary, Alberta, T1Y 6J8",
    //   phone: "+1 (587) 393-9428",
    //   directionsUrl: "https://maps.app.goo.gl/XWSsS2qMqaRirD7q7",
    //   locationUrl: "/locations/calgary-sunridge",
    //   commonbtn: false,
    // },
    {
      id: 6,
      name: "Edmonton Downtown",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_ed_down.webp",
      address: "12328 102 ave nw Edmonton, Alberta, T5N 0L9",
      phone: "+1 (780) 784-2675",
      directionsUrl:
        "https://www.google.com/maps/place/Evolve+Strength+Downtown/@53.543337,-113.5354744,670m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53a0222b0e9db08f:0xce9a2cb44c32d720!8m2!3d53.543337!4d-113.5354744!16s%2Fg%2F11f__756w3?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
        // "https://www.google.com/maps/place/evolve+strength+downtown/data=!4m2!3m1!1s0x53a0222b0e9db08f:0xce9a2cb44c32d720?sa=X&ved=1t:242&ictx=111",
      locationUrl: "/locations/edmonton-downtown",
      commonbtn: false,
    },
    {
      id: 7,
      name: "Edmonton South",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/edmonton_south.webp",
      address: "4825 89 St NW Edmonton, Alberta, T6E 5K1",
      phone: "+1 (780) 690-4252",
      directionsUrl:
        "https://www.google.com/maps/place/Evolve+Strength+South/@53.4856224,-113.4631501,671m/data=!3m3!1e3!4b1!5s0x53a018c417f73825:0xef1d3e6d01fde5e3!4m6!3m5!1s0x53a018c43ad69c97:0xdc7a5189de54d352!8m2!3d53.4856224!4d-113.4631501!16s%2Fg%2F11b782yhvq?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
        // "https://www.google.com/maps/place/Evolve+Strength+South/@53.4856256,-113.465725,475m[…]1b782yhvq?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      locationUrl: "/locations/edmonton-south",
      commonbtn: false,
    },
    {
      id: 8,
      name: "Edmonton North",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/edmonton_north.webp",
      address: "13457 149 St Edmonton, Alberta, T5L 2T3",
      phone: "+1 (780) 784-7870",
      directionsUrl:
        "https://www.google.com/maps/place/Evolve+Strength+North/@53.5958413,-113.5812694,669m/data=!3m3!1e3!4b1!5s0x53a0241c98bbcb79:0x79484bd406c1c77!4m6!3m5!1s0x53a0241c8a49c0db:0xf4ab68a7017116b!8m2!3d53.5958413!4d-113.5812694!16s%2Fg%2F11gdm5x66g?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
        // "https://www.google.com/maps/place/Evolve+Strength+North/@53.5958445,-113.5838443,474[…]1gdm5x66g?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",
      locationUrl: "/locations/edmonton-north",
      commonbtn: false,
    },
    {
      id: 9,
      name: "Edmonton South Common",
      image:
        "https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/all_locations/g_south_com.webp",
      address: "",
      phone: "",
      directionsUrl: "",
      locationUrl: "",
      commonbtn: true,
    },
  ];

  const handleGetDirections = (directionsUrl) => {
    window.open(directionsUrl, "_blank");
  };

  const handleCallNow = (phone) => {
    window.open(`tel:${phone}`, "_self");
  };

  return (
    <div className="w-full flex flex-col max-w-[1280px] mx-auto px-4 md:px-8 py-24 md:py-30 gap-6 md:gap-10">
      <div className="text-left md:text-center flex flex-col items-center gap-4">
        <h1 className="font-bold text-[#000] uppercase leading-[46px] md:leading-[56px]">
          ALL GYM LOCATIONS
        </h1>
        <h4 className="text-[#000] w-full md:max-w-[895px] mx-auto leading-[26px]">
          Discover all Evolve Strength gym locations across Canada. Find your
          nearest club and take the first step toward a stronger, healthier you.
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className="transition-all duration-300  relative"
          >
            <div className="w-full h-[200px] group md:h-[240px] overflow-hidden relative rounded-[10px]">
              {location.commonbtn && (
                <div className="absolute flex description !font-[Kanit] !font-[500] items-center justify-center  rounded-[5px]  bg-[#FFF] h-[24px] w-[120px] right-2 top-2">
                  COMING SOON
                </div>
              )}

              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Desktop: Show on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center max-md:hidden">
                {location.commonbtn ? (
                  <Link
                    to="/locations/edmonton-south-common-waitlist"
                    className="flex items-center gap-2 bg-white underline px-3 py-3 rounded-[5px] transition-all duration-200 text-black font-semibold"
                  >
                    <span>Join the Waitlist</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link
                    to={location.locationUrl}
                    className="flex items-center gap-2 bg-white underline px-3 py-3 rounded-[5px] transition-all duration-200 text-black font-semibold"
                  >
                    <span>Visit this location now</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                )}
              </div>

              {/* Mobile: Always visible */}
              {location.commonbtn ? (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center md:hidden">
                  <Link
                    to="/locations/edmonton-south-common-waitlist"
                    className="flex items-center gap-2 underline px-3 py-3 rounded-[5px] transition-all duration-200 text-[#fff] font-semibold"
                  >
                    <span>Join the Waitlist</span>
                  </Link>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center md:hidden">
                  <Link
                    to={location.locationUrl}
                    className="flex items-center gap-2 underline px-3 py-3 rounded-[5px] transition-all duration-200 text-[#fff] font-semibold"
                  >
                    <span>Visit this location now</span>
                  </Link>
                </div>
              )}
            </div>

            <div className="py-4 flex flex-col gap-3">
              <h3 className="font-bold text-[#000]">{location.name}</h3>

              {location.commonbtn ? (
                <div className="flex gap-3">
                  <Link to="/locations/edmonton-south-common-waitlist">
                    <button className="btnPrimary">Join the waitlist</button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleGetDirections(location.directionsUrl)}
                    className="btnPrimary"
                  >
                    GET DIRECTIONS
                  </button>
                  <button
                    onClick={() => handleCallNow(location.phone)}
                    className="bg-white hover:bg-gray-50 text-[#000] font-[500] leading-[16px] py-3 px-4 rounded-[5px] border-2 border-[#000] hover:border-gray-400 transition-all duration-200 text-[16px] font-[kanit] uppercase"
                  >
                    CALL NOW
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGymLocations;
