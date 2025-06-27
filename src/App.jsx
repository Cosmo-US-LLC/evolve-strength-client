import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/styles.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PersonalTraining from "./pages/PersonalTraining";
import Wellness from "./pages/Wellness";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/wellness" element={<Wellness/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
