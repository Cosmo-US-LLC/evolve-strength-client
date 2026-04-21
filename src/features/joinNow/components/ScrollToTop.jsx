// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: for a smooth scrolling animation
    });
  }, [pathname]); // Re-run effect whenever the pathname changes

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
