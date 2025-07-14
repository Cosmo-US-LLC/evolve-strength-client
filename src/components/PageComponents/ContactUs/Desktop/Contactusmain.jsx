import React from "react";

const contactmain = {
  heading: "OUR LOCATIONS",
  locations: [
    {
      cityname: "Edmonton Downtown",
      address: "12328 102 ave nw Edmonton, Alberta, T5N 0L9",
      number: "(780) 784-2675",
    },
    {
      cityname: "Edmonton South",
      address: "4825 89 St NW Edmonton, Alberta, T6E 5K1",
      number: "(780) 690-4252",
    },
    {
      cityname: "Edmonton North",
      address: "13457 149 St Edmonton, Alberta, T5L 2T3",
      number: "(780) 784-7870",
    },
    {
      cityname: "Calgary Royal Oak",
      address: "8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4",
      number: "(403) 452-3169",
    },
    {
      cityname: "Calgary Sunridge",
      address: "2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3",
      number: "(587) 393-9428",
    },
    {
      cityname: "Calgary Seton",
      address: "710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5",
      number: "(825) 407-9015",
    },
    {
      cityname: "Burnaby Brentwood",
      address: "1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3",
      number: "(236) 455-6573",
    },
    {
      cityname: "Vancouver Post",
      address: "658 Homer St Vancouver, British Columbia, V6B 2R4",
      number: "-------------",
    },
  ],
};

function Contactusmain() {
  return (
     
    <div className="max-w-[1280px] px-8  mx-auto w-full h-full">
        <div className="  py- grid grid-cols-1 md:grid-cols-2 gap-14 justify-center ">
            <div className="max-w-[1280px]  pb-[135px] mx-auto w-full h-full">
      <div className=" ">
        <div>
          <h2 className="text-[#4AB04A] font-bold text-lg mb-4">{contactmain.heading}</h2>
          <ul className="space-y-6 text-sm">
            {contactmain.locations.map((location, index) => (
              <li key={index}>
                <h3 className="font-bold text-base">{location.cityname}</h3>
                <div className="flex justify-between description !font-[Kanit] !font-[300] !text-[14px]">
                  <span className="w-[409px] h-[21px]">{location.address}</span>
                  <div className="h-[21px]">{location.number}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      
     
  
 {/* RIGHT: FORM */}
      <div className=" w-auto h-[687px] p-[32px_30px] items-center gap-[10px] rounded-[16px] bg-[#F7F5F5]">
        <h3 className="font-bold mb-4 text-center">SEND US A MESSAGE</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className=" bg-[#FFF] border p-2 rounded w-full" />
            <input type="text" placeholder="Last Name" className="bg-[#FFF] border p-2 rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email Address" className="bg-[#FFF] border p-2 rounded w-full" />
            <input type="tel" placeholder="Phone Number" className="bg-[#FFF] border p-2 rounded w-full" />
          </div>
          <input type="text" placeholder="Location" className="bg-[#FFF] border p-2 rounded w-full" />
          <textarea placeholder="Type your message here.." className="bg-[#FFF] border p-2 rounded w-full h-[300px]"></textarea>
          <button type="submit" className=" bg-[#4AB04A] hover:bg-green-700 text-white w-full py-2 rounded">
            SUBMIT NOW
          </button>
        </form>
      </div>


        </div>
        </div>
        
  );
}

export default Contactusmain;
