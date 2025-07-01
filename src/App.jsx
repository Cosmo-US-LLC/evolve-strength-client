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
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import Spaces from "./pages/Spaces";
import ContactUs from "./pages/ContactUs";
import PersonalTraning from "./pages/PersonalTraining";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/spaces" element={<Spaces />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
          <Route path="/terms-of-conditions" element={<TermsAndConditions />} />
          <Route path="/personal-training" element={<PersonalTraning />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
