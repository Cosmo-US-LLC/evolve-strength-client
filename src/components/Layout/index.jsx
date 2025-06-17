import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Layout() {
  return (
    <div>
      <div className="">
       <Navbar/>
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
       <Footer/>
      </div>
    </div>
  );
}

export default Layout;
