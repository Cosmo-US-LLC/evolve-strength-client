import React, { useState } from "react";

function TermsAndConditions() {
  const [activeId, setActiveId] = useState("introduction");

  const handleScroll = (id) => {
    setActiveId(id);
    const offsets = {
      introduction: 100,
      physician: 80,
      "facility-policy": 90,
      children: 70,
      membership: 120,
      "membership-info": 120,
      entitlements: 130,
      changes: 190,
      providers: 90,
      fees: 190,
      freezes: 190,
      email: 90,
      "changes-agreement": 80,
      "other-provisions": 100,
    };

    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const elMiddleY = rect.top + scrollTop + rect.height / 2;
      const targetY = rect.top + scrollTop - (offsets[id] || 100);

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className="max-md:hidden">
        <div className="max-w-[1280px] px-8 pb-[80px] mx-auto w-full h-full mt-30 bg-white text-black flex flex-col md:flex-row md:gap-[24px] p-6 md:p-12">
       <div className="relative flex">
          {/* Sidebar */}
   <aside className="flex flex-col w-[300px] py-[10px] gap-[10px] items-start fixed bg-white">
  <nav>
    <ul className="space-y-2 leading-normal">
      <li className="flex items-center gap-2.5">
        <span
          className={`block w-1 h-5 bg-[#4AB04A] transition-all duration-300 ${
            activeId === "introduction" ? "opacity-100" : "opacity-0"
          }`}
        />
        <span
          className={`font-[Kanit] text-[16px] text-left transition-colors duration-300 ${
            activeId === "introduction" ? "text-[#4AB04A]" : "text-black"
          }`}
        >
          Terms And Conditions
        </span>
      </li>

      <li className="flex items-center gap-2.5">
        <span
          className={`block w-1 h-5 bg-[#4AB04A] transition-all duration-300 ${
            activeId === "intro-section" ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          onClick={() => handleScroll("intro-section")}
          className={`font-[Kanit] text-[16px] text-left transition-colors duration-300 ${
            activeId === "intro-section" ? "text-[#4AB04A]" : "text-black"
          }`}
        >
          Introduction
        </button>
      </li>

      {[
        { id: "physician", label: "Physician" },
        { id: "facility-policy", label: "Facility Use Policy" },
        { id: "children", label: "Children" },
        { id: "membership", label: "Membership" },
        { id: "membership-info", label: "Membership Information" },
        { id: "entitlements", label: "Entitlements" },
        { id: "changes", label: "Changes" },
        { id: "providers", label: "Independent Service Providers" },
        { id: "fees", label: "Fees and Payment" },
        { id: "freezes", label: "Freezes and Cancellation" },
        { id: "email", label: "Email Notices" },
        { id: "changes-agreement", label: "Changes to this Agreement" },
        { id: "other-provisions", label: "Other Provisions" },
      ].map((item) => (
        <li key={item.id} className="flex items-center gap-2.5">
          <span
            className={`block w-1 h-5 bg-[#4AB04A] transition-all duration-300 ${
              activeId === item.id ? "opacity-100" : "opacity-0"
            }`}
          />
          <button
            onClick={() => handleScroll(item.id)}
            className={`font-[Kanit] text-[16px] text-left transition-colors duration-300 ${
              activeId === item.id ? "text-[#4AB04A]" : "text-black"
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
</aside>




         {/* Main Content */}
          <main className="w-full md:ml-[300px] pl-6 space-y-6 text-sm ">

            <div  className="flex flex-col gap-4">
             
  <h1 id="introduction" className="!text-[40px]">
    Terms and Conditions
  </h1>
  </div>

  <div>
  <h3 className="">
    Introduction
  </h3>

  <ul className=" list-disc pl-5 ">
    <li>
      By becoming a member of an Evolve Strength fitness facility you agree to abide by the terms and conditions of this agreement (the “Agreement”). You acknowledge that at the time you signed up to become a member you were provided with access to this Agreement and were given time to review it. As well, a copy of this Agreement was or will be emailed to you.
    </li>
    <li>
      You have agreed to become a member of the Evolve Strength fitness facility located at [•].
    </li>
    <li>
      Depending on the type of membership that you have signed up for, your membership may give you access to other Evolve Strength fitness facilities (each a “Facility”).
    </li>
    <li>
      In the event you frequent another Facility, your membership may be transferred to that Facility.
    </li>
    <li>
      In this Agreement:
      <ul className="list-disc pl-5 ">
        <li>
          “Operator” means the operator of the Facility to which you are a member, which may also be the owner of the Facility; and
        </li>
        <li>
          “Evolve” means, collectively, the following entities: Evolve Strength South Ltd., Evolve Franchising Ltd., Evolve Strength North Ltd., Evolve Health Holdings Ltd., the owners of each Facility, the Operator, the operator of each of the other Facilities and each of foregoing’s affiliated companies.
        </li>
      </ul>
    </li>
    <li>
      Facilities and each of foregoing’s affiliated companies.
    </li>
    <li>
      You acknowledge that the terms and conditions set out in this Agreement constitutes an agreement between you and Evolve.
    </li>
    <li>
      Depending on the type of membership, this Agreement permits the Operator to automatically charge your bank account or credit card for amounts due. This is detailed below in the section entitled “Fees and Payment”.
    </li>
  </ul>
</div>


         <div id="physician"  className="flex flex-col gap-4">
  <h3 className="">Physician</h3>
  <ul  className="list-disc pl-5">
    <li>
      Evolve strongly encourages you to consult with your physician prior to engaging in any type of physical activity or exercise within any Facility and to consult with your physician on an ongoing basis with respect to such physical activity and exercise.
   
      Evolve will have no liability to you in the event you (i) do not consult with your physician as described, (ii) you fail to follow your physician’s recommendations, or (iii) your physician fails to uncover any medical condition that you may have which may pose any type of medical risk in connection with your physical activity and exercise.
    </li>
  </ul>
</div>

           <div id="facility-policy"  className="flex flex-col gap-4">
  <h3 className="">Facility Use Policy</h3>
  <ul className="">
    <li>
      The facility use policy (the “Facility Use Policy”) sets out certain rules of conduct that must be followed by each member that uses a Facility. The Facility Use Policy can be found at the reception of each Facility. The Facility Use Policy is intended to help ensure that each Facility operates in a safe manner and in a manner that is satisfactory to members. You agree to comply with the Facility Use Policy of each Facility you are using. If you fail to comply with the Facility Use Policy, then your entitlements may be affected, including your membership may be terminated. The Facility Use Policy may be amended from time to time and you agree to comply with the same as amended following such amendment.
    </li>
    <li>
      You are also required to comply with any other rules of a Facility as posted at the Facility.
    </li>
  </ul>
</div>

          <div id="children"  className="flex flex-col gap-4">
  <h3 className="">Children</h3>
  <ul  className=" list-disc pl-5 ">
    <li>
      Children under 14 years of age must be supervised by their parent or guardian or they must be participating in a class or being trained by a trainer at all times.
    
      Evolve reserves the right to remove any children and their parent/guardian for being disruptive within a Facility.
    </li>
  </ul>
</div>


      <div id="membership-info"  className="flex flex-col gap-4">
  <h3 className="">Membership </h3>
  <ul  className=" list-disc pl-5">
    <li>
      Membership InformationThere are a number of types of memberships, which may include:
    </li>
    <li>
      Drop-in membership, where the member is only required to pay each time they attend at a Facility.
    </li>
    <li>
      Visit Punch Pass membership, where the member purchases a punch pass that is good for a set number of visits.
    </li>
    <li>
      A term membership, where the member commits to pay for a membership for a specific term, such as a month or year.
    </li>
  </ul>
     <div/>

<div id="membership"  className="flex flex-col gap-4">
  <h3 className="">Membership Information</h3>
  <ul  className="list-disc pl-5">
    <li>
      As part of the membership process you are required to provide certain information. You agree to (a) provide true, accurate, current and complete information about yourself as requested, and (b) promptly update this information as required to keep it true, accurate, current and complete.
    </li>
  </ul>
</div>
</div>


           <div id="entitlements"  className="flex flex-col gap-4">
  <h3 className="">Entitlements</h3>
  <ul  className="list-disc pl-5 ">
    <li>
      Membership entitles you to:
      <ul className="list-disc pl-5">
        <li>Workout as many times as you wish during the term of your membership.</li>
        <li>The use of the exercise equipment located on the gym floor and in the cardiovascular training areas of a Facility.</li>
      </ul>
    </li>
    <li>
      There may be additional fees to access any other areas, facilities, equipment or services.
    </li>
  </ul>
</div>
<div id="changes" className="flex flex-col gap-4">
  <h3 className="">Changes</h3>
  <ul className=" list-disc pl-5 ">
    <li>
      For each Facility, the Operator of that Facility reserves the right to make changes at any time to:
      <ul className="list-disc pl-5 ">
        <li>The exercise equipment available;</li>
        <li>The services that are available; and</li>
        <li>The hours of operation.</li>
      </ul>
    </li>
    <li>
      The group fitness timetables, including altering class type, times and instructors, may be changed by the relevant independent service provider at any time.
    </li>
    <li>
      You acknowledge that from time to time certain equipment may not be available due to repairs and other reasons.
    </li>
  </ul>
</div>


      <div id="providers"  className="flex flex-col gap-4">
  <h3 className="">Independent Service Providers</h3>
  <ul  className=" list-disc pl-5">
    <li>
      Each Facility may permit independent service providers to provide services at or through the Facility. Generally, all services, other than those necessary for the general operation of the Facility, are provided by independent service providers. The services of the independent service providers may include group fitness training, group exercise training, personal fitness training, personal exercise training, massage therapy, physiotherapy and acupuncture. While Evolve does minimally review the services of each independent service provider to ensure that they are the type of services that are appropriate for the Facility, Evolve does not, in any way, assess, review, verify or investigate the qualifications, competence or skills of the independent service provider nor the quality, safety or effectiveness of their services. You may use the services of the independent service providers solely at your own risk. Evolve will have no liability or obligation to you in connection with any of the services of any independent service provider, including, without limitation, any services of an independent service provider that results in injury or death. All services of an independent service provider are provided to you pursuant to a separate agreement between you and the independent service provider.
    </li>
  </ul>
</div>

            <div id="fees"  className="flex flex-col gap-4">
  <h3 className="">Fees and Payment</h3>
  <ul  className="list-disc pl-5">
    <li>
      The fees payable for your membership are set out at the reception of the Facility. Other amounts may be charged to your account as you may incur them through your use of the Facility and its related services and through your purchase of products from the Facility.
    </li>
    <li>
      You agree to pay the Operator all fees and other amounts when due, irrespective of the amount of use you make of the Facility.
    </li>
    <li>
      The Operator may, at any time, increase the membership fees. If you are part way through a term membership, such as an annual membership, the increase in fees will only apply to you at the end of the minimum commitment.
    </li>
    <li>
      All amounts are due when invoiced. Your account will generally be invoiced at the same time each month. A prepaid membership, such as a prepaid annual membership, will be charged prior to the start of the membership.
    </li>
    <li>
      Your membership requires you to:
      <ul className="list-disc pl-5">
        <li>Pay all amounts when due;</li>
        <li>Ensure sufficient funds are available to cover all amounts due; and</li>
        <li>Advise in advance if your bank account or credit card is closed or changed.</li>
      </ul>
    </li>
    <li>
      You are obligated to pay all amounts owing or falling due under this Agreement. We will not reduce, discount or cancel your payment obligations because you do not use any of the Facilities or use them minimally.
    </li>
    <li>
      You are required to arrange for payments to be made directly from your bank account or payment to be made directly on your credit card for all billings starting from the date of commencement until all payments to be made hereunder have been made. You hereby authorize the Operator to charge all amounts when due in connection with your membership to such bank account or credit card, whether such charges are to be made on an automatic or manual basis or on a one-time or periodic basis. Should there be any arrears in payments, you hereby authorize the Operator to charge such arrears to your bank account or credit card, without notice, in order to bring your account up to date. You hereby authorize the Operator to present transactions for payment against your bank account or credit card as described herein. You hereby agree that the Operator’s treatment of each such payment and its rights to it shall be the same as if each were personally signed and authorized by you on each occasion.
    </li>
    <li>
      If any bank account or credit card payment is denied, reverses or is returned by your financial institution the Operator will be entitled to charge a $45 administrative service fee for each such denial, reversal or return. We will attempt to contact you prior to reattempting the transaction. If the amount remains outstanding it will be processed again following our attempt to contact you regarding the denial, reversal or return. You will be charged any fees charged by the financial institution as well as the Operator’s administrative service fee.
    </li>
    <li>
      In the event of any arrears in any payment or in the event any credit card or direct debit is denied, reverses or is returned by your financial institution and you fail to remedy the default following notification from the Operator, you authorize the Operator to notify any debt collection/credit reporting agency of the default.
    </li>
    <li>
      All your entitlements and your access to the Facilities will be revoked if your account is in arrears.
    </li>
    <li>
      All government taxes are in addition to and will be automatically added to all payments.
    </li>
  </ul>
</div>


            <div id="freezes"  className="flex flex-col gap-4">
  <h3 className="">Freezes and Cancellation</h3>
  <ul  className=" list-disc pl-5">
    <li>
      A term membership of a year or longer may be put on hold for up to 180 days in a calendar year and a term membership shorter than a year may be put on hold for up to 60 days in a calendar year. You may freeze your account only once in a calendar year and a freeze may not be shorter than 14 days. You must follow and complete the published procedure to freeze your membership no less than 7 business days prior to the start of the freeze date. The freeze request must state both the freeze start date and reactivation date. If you do not provide sufficient notice, a timely stop to billing cannot be guaranteed. Provided sufficient notice is given, you will not be billed for your membership during the duration of the freeze. Billing will resume automatically at the end of the freeze. For greater certainty, the term of your membership will be extended by the length of each freeze.
    </li>
    <li>
      Cancelling a Month-to-Month Membership: To cancel a month-to-month membership you must follow and complete the published procedure to cancel your membership no less than thirty (30) days prior to the due date of your next billing payment. In the event of a failure to provide such notice, you will be charged for the following month in full and the cancellation will take effect at the end of such following month.
    </li>
    <li>
      Cancelling Other Term Memberships: To cancel a term membership other than a month-to-month membership you must follow and complete the published procedure to cancel your membership and pay the required cancellation fee. The cancellation fee to cancel an annual membership is $200. All paid in full memberships are non-refundable.
    </li>
    <li>
      Cancelling for Permanent Sickness or Permanent Physical Incapacity: If you wish to cancel a term membership due to permanent sickness or permanent physical incapacity, you are required to provide to the Operator with all of the following:
      <ul className="list-disc pl-5">
        <li>
          A written request for termination advising the nature of the illness or physical incapacity, outlining specifically how this prevents you from utilizing any of the services or equipment at the Facility; and
        </li>
        <li>
          A medical certificate stating that you cannot utilize any of the services or equipment at the Facility because of your permanent illness or permanent physical incapacity.
        </li>
      </ul>
    </li>
    <li>
      Cancellation by Evolve: Evolve reserves the right to terminate your membership on the occurrence of any of the following:
      <ul className="list-disc pl-5">
        <li>Any failure to fully comply with the terms and conditions of this Agreement;</li>
        <li>Any failure to pay any amount when due, and such failure is not cured within 5 days of notice of the overdue amount;</li>
        <li>Any failure to fully comply with the Facilities Use Policy;</li>
        <li>Any failure to fully comply with the other rules of a Facility; and</li>
        <li>Any complaint by any other member of a Facility or an employee (or contractor) of the Facility, and the Operator determines, in its sole discretion, that such complaint is valid and warrants termination of your membership.</li>
      </ul>
    </li>
    <li>
      Upon such termination by Evolve, you are required to pay the remaining balance of your membership fees to the end of the current term of your membership, in full, as well as all amounts that are outstanding.
    </li>
  </ul>
</div>
<div id="email"  className="flex flex-col gap-4">
  <h3 className="">Email Notices</h3>
  <ul className=" list-disc pl-5">
    <li>
      Any notice, direction or other communication given to you regarding the matters contemplated by this Agreement may be given at the email address you provided during the registration process or if you should replace that email address within our systems, to the replacement email address.
    </li>
    <li>
      A notice is deemed to be given and received by you on the sending of the email. You will be deemed to have received the email even if it is undelivered. If your email address changes, you are responsible for updating your email address in your account. Further, you are responsible to ensure that your email account and email address are functioning at all times. You will bear all risks for failure to comply with the foregoing.
    </li>
  </ul>
</div>

<div id="changes-agreement"  className="flex flex-col gap-4">
  <h3 className="">Changes to this Agreement</h3>
  <ul  className=" list-disc pl-5 space-y-2">
    <li>
      Evolve may amend this Agreement at any time. The amendments may include, without limitation, adding to, deleting from or modifying any of the provisions in this Agreement. Evolve will provide notice to you of the amended Agreement. The amended Agreement will automatically be effective 30 days following such notice. Your use of any Facility following such notice period mean that you accept the terms of this Agreement as amended. If you do not agree with any of the terms or conditions in the amended Agreement then you agree to immediately cease all use of the Facilities and to immediately cancel your membership, which shall be your sole recourse and remedy in the event you are dissatisfied with the amended Agreement. If you immediately cancel your membership on notice of the amendment, you will not be liable for any future membership fees following such cancellation. This Agreement may not be amended other than as described in Section 43.
    </li>
  </ul>
</div>
<div id="other-provisions" className="space-y-2">
  <h3 className="">Other Provisions</h3>
  <ul className=" list-disc pl-5 space-y-2">
    <li>
      <span className="font-semibold">Interpretation:</span> In this Agreement unless the contrary intention appears: (i) the singular includes the plural and vice versa; and (ii) a reference to a party includes that party’s legal personal representative heirs and assigns.
    </li>
    <li>
      <span className="font-semibold">Changes to Agreement:</span> Any changes may only be made pursuant to Section 41 above or pursuant to a written agreement, signed by the parties.
    </li>
    <li>
      <span className="font-semibold">Use of photography:</span> Without any compensation being payable, I hereby give Evolve permission to take photos and videos of me (including any motion picture or still photographs made by Evolve of my likeness, poses, acts and appearances or the sound recordings made by Evolve of my voice) (collectively, the “Images”) and to use the Images for any purposes in connection with promoting Evolve and the Facilities, which may include advertising, promotion and marketing. I agree Evolve may crop, alter or modify the Images and combine such Images with other images, video, text, audio recordings and graphics without notifying me.
    </li>
    <li>
      <span className="font-semibold">Severability of provisions:</span> The provisions of this Agreement are severable. If a Court decides that any provision is illegal or unenforceable, the rest of the Agreement is still enforceable. If we choose at any time not to enforce a particular provision, we will still have the right to later enforce such provision.
    </li>
    <li>
      <span className="font-semibold">Entire Agreement:</span> There are no promises, representations, understandings or agreements between the parties relating to the subject matter of this Agreement other than as set out in this Agreement and this Agreement cancels any previous agreement, understanding and arrangement relating thereto whether written or oral.
    </li>
    <li>
      <span className="font-semibold">Governing Law:</span> This Agreement is governed by the laws of the province in which the Facility to which you are a member is located and the laws of Canada applicable therein.
    </li>
  </ul>
</div>


          </main>
</div>
        </div>
      </div>

      <div className="md:hidden">Home Mobile</div>
    

      <div className="md:hidden">Home Mobile</div>
    </div>
  );
}

export default TermsAndConditions;
