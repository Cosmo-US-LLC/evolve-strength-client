import React from "react";
import { Link } from "react-router-dom";
import { Trophy, Star, Award, Check } from "lucide-react";

function SuccessFullScreen({
  title = "LET'S OWN A PIECE OF STRENGTH",
  description = "Bring Evolve to your community with a proven business model, world-class support, and a brand built for growth. Let's grow stronger—together.",
  buttonText = "BACK TO HOME",
  buttonLink = "/",
  icon = "trophy",
}) {
  const iconMap = {
    trophy: Trophy,
    check: Check,
    star: Star,
    award: Award,
  };

  const IconComponent = iconMap[icon] || Trophy;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[8px] px-8 py-10 max-w-md w-full text-center relative">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#4AB04A] rounded-full flex items-center justify-center">
            <IconComponent className="w-12 h-12 text-white" />
          </div>
        </div>

        <h2 className="text-[#000] mb-4 uppercase leading-tight">{title}</h2>

        <p className="description text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        <Link to={buttonLink} className="btnPrimary">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default SuccessFullScreen;
