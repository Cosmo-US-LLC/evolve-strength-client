import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/styles.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PersonalTraining from "./pages/PersonalTraining";
import Wellness from "./pages/Wellness";
import PersonalTraning from "./pages/PersonalTraining";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/wellness" element={<Wellness/>} />
          <Route path="personal-training" element={<PersonalTraning />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
