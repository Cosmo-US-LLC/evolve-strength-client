import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

export default function JoinNowLayout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}
