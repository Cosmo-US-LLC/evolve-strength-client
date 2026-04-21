import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

export default function JoinNowLayout() {
  return (
    <div className="App join-now-root">
      <Navbar />
      <Outlet />
    </div>
  );
}
