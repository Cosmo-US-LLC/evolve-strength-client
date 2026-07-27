import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TourForm from "../components/TourForm";

export default function BookTourPage() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return (
      <>
        <NavBar sticky />
      </>
    );
  }
  return (
    <div className="min-h-dvh">
      <NavBar sticky />
      <div className="lg:hidden h-[40px]" />
      <TourForm />
    </div>
  );
}
