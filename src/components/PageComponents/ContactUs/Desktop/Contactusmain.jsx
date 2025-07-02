import React from "react";

function Contactusmain() {
  return (
     
    <div className="max-w-[1280px] px-8 pb-[135px] mx-auto w-full h-full">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-14 justify-center ">
            
      
      <div className="">
  <h2 className="text-[#4AB04A] font-bold text-lg mb-4">OUR LOCATIONS</h2>
  <ul className="space-y-4 text-sm">
    <li>
      <h3 className="!font-normal text-base">Edmonton Downtown</h3>
      <div className="  flex justify-between description  !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">4825 89 St NW Edmonton, Alberta, T6E 5K1</span>
        <div className="] h-[21px]">(780) 784-2675</div>
        
      </div>
    </li>
    <li>
       <h3 className="font-bold text-base">Edmonton South</h3>
      <div className="  flex justify-between description !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">13457 149 St Edmonton, Alberta, T5L 2T3</span>
        <div className="] h-[21px]">(780) 690-4252</div>
        
      </div>
    </li>
    <li>
       <h3 className="font-bold text-base">Edmonton North</h3>
      <div className="  flex justify-between description !font-[Kanit] !font-[300] !text-[14px] ">
         
        <span className="w-[409px] h-[21px]">3238 102 ave nw Edmonton, Alberta, T5N 0L9</span>
        <div className="] h-[21px]">(780) 784-7870</div>
        
      </div>
    </li>
    <li>
       <h3 className="font-bold text-base">Calgary Royal Oak</h3>
      <div className="  flex justify-between description  !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">8888 Country Hills Blvd NW #600 Calgary, Alberta, T3G 5T4</span>
        <div className="] h-[21px]">(403) 452-3169</div>
        
      </div>
    </li>
    <li>
      <h3 className="font-bold text-base">Calgary Sunridge</h3>
      <div className="  flex justify-between description  !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">2985 23 Ave NE Unit#125 Calgary, Alberta, T1Y 7L3</span>
        <div className="] h-[21px]">(587) 393-9428</div>
        
      </div>
    </li>
    <li>
       <h3 className="font-bold text-base">Calgary Seton</h3>
      <div className="  flex justify-between description !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">710-19587 Seton Crescent SE Calgary, Alberta, T3M 2T5</span>
        <div className="] h-[21px]">(825) 407-9015</div>
        
      </div>
    </li>
    <li>
       <h3 className=" ">Burnaby Brentwood</h3>
      <div className="  flex justify-between description  !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">1920 Willingdon Ave #3105 Burnaby, British Columbia, V5C 0K3</span>
        <div className="] h-[21px]">(236) 455-6573</div>
        
      </div>
    </li>
    <li>
       <h3 className="font-bold text-base">Vancouver Post</h3>
      <div className="  flex justify-between description  !font-[Kanit] !font-[300] !text-[14px]">
         
        <span className="w-[409px] h-[21px]">658 Homer St Vancouver, British Columbia, V6B 2R4</span>
         <div className="] h-[21px]">-------------</div>
        
        
      </div>
    </li>
   
  </ul>
</div>
 {/* RIGHT: FORM */}
      <div className=" w-auto p-[32px_30px] items-center gap-[10px] rounded-[16px] bg-[#F7F5F5]">
        <h3 className="font-bold mb-4 text-center">SEND US A MESSAGE</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className=" bg-[#FFF] border p-2 rounded w-full" />
            <input type="text" placeholder="Last Name" className="bg-[#FFF] border p-2 rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
