import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/styles.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PersonalTraining from "./pages/PersonalTraining";
import Wellness from "./pages/Wellness";
import TermsAndConditions from "./pages/TermsAndConditions";
import Franchise from "./pages/Franchise";
import Explore from "./pages/Explore";
import Spaces from "./pages/Spaces";
import ContactUs from "./pages/ContactUs";
import PersonalTraning from "./pages/PersonalTraining";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MembershipBenefits from "./pages/MembershipBenefits";
import FAQs from "./pages/FrequentlyAskedQuestions";
import AboutUs from "./pages/AboutUs";
import JoinAsTrainer from "./pages/JoinAsTrainer";
import CorporateMembership from "./pages/CorporateMembership";
import JoinTheMovement from "./pages/JoinTheMovement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/membership-benefits" element={<MembershipBenefits />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/spaces" element={<Spaces />} />   
          <Route path="/corporate-membership" element={<CorporateMembership />} />

          <Route path="/join-the-Movement" element={<JoinTheMovement />} />
           <Route path="/join-as-trainer" element={<JoinAsTrainer />} />
          
         
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
           <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
