import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollToTop from "../../ScrollToTop";

function WebsiteLayout() {
  return (
    <div>
      <ScrollToTop />
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default WebsiteLayout;
