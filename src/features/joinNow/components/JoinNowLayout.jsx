import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const JoinNowLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default JoinNowLayout;
