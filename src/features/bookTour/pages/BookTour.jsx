import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TourForm from "../components/TourForm";

export default function BookTour() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return <Navbar />;
  }

  return (
    <div className="min-h-dvh text-black">
      <Navbar />
      <div className="h-[40px] lg:hidden" />
      <TourForm />
    </div>
  );
}
