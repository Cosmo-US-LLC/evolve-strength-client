import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PersonalTraning from "./pages/PersonalTraning";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="personal-traning" element={<PersonalTraning />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
