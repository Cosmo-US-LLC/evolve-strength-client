import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import PresaleNavbar from "../Navbar/PresaleNavbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

function Layout() {
  const location = useLocation();
  const isPresalePage = location.pathname === "/presale-edmonton-south-common";

  return (
    <div>
      {/* <ScrollToTop /> */}
      <div className="">{isPresalePage ? <PresaleNavbar /> : <Navbar />}</div>
      <div className="">
        <Outlet />
      </div>
      {!isPresalePage && (
        <div className="">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Layout;
