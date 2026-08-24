import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import PresaleNavbar from "../Navbar/PresaleNavbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

function Layout() {
  const location = useLocation();
  const isPresalePage =
    location.pathname === "/presale-edmonton-south-common" ||
    location.pathname === "/presale-park-royal" ||
    location.pathname === "/spaces-for-south-edmonton-common" ||
    location.pathname === "/tour-south-edmonton-common" ||
    location.pathname === "/park-royal-waitlist" ||
    location.pathname === "/park-royal-terms-and-conditions";
  const hideFooter = location.pathname === "/park-royal-waitlist";
  return (
    <div>
      {/* <ScrollToTop /> */}
      <div className="">{isPresalePage ? <PresaleNavbar /> : <Navbar />}</div>
      <div className="">
        <Outlet />
      </div>
      {!hideFooter && (
        <div className="">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Layout;
