// Centralized service data with unique IDs
// This file contains all service information that can be referenced by other data files

// Import service icons
import AllIcon from "@/assets/images/explore/locations/all-icon.svg";
import ChiropracticIcon from "@/assets/images/explore/locations/chiropractic.svg";
import MassageTherapyIcon from "@/assets/images/explore/locations/message-therapy.svg";
import PilatesIcon from "@/assets/images/explore/locations/pilates.svg";
import AcupunctureIcon from "@/assets/images/explore/locations/acupuncture.svg";
import DietitianServicesIcon from "@/assets/images/explore/locations/dietitian-services.svg";
import EstheticianIcon from "@/assets/images/explore/locations/esthetician.svg";
import LaserTherapyIcon from "@/assets/images/explore/locations/laser-therapy.svg";
import OsteopathyIcon from "@/assets/images/explore/locations/osteopathy.svg";
import MentalHealthIcon from "@/assets/images/explore/locations/mental-health.svg";

// Service data with unique IDs
export const SERVICE_DATA = {
  // All Services
  "service-all": {
    id: "service-all",
    name: "All",
    displayName: "All Services",
    icon: AllIcon,
    description: "Access to all available services at this location",
    category: "general",
    isActive: true,
  },

  // Chiropractic Care
  "service-chiropractic": {
    id: "service-chiropractic",
    name: "Chiropractic Care",
    displayName: "Chiropractic Care",
    icon: ChiropracticIcon,
    description:
      "Professional chiropractic treatment for musculoskeletal health",
    category: "wellness",
    isActive: true,
    benefits: [
      "Pain relief",
      "Improved mobility",
      "Better posture",
      "Sports injury treatment",
    ],
  },

  // Massage Therapy
  "service-massage-therapy": {
    id: "service-massage-therapy",
    name: "Massage Therapy",
    displayName: "Massage Therapy",
    icon: MassageTherapyIcon,
    description: "Therapeutic massage for relaxation and recovery",
    category: "wellness",
    isActive: true,
    benefits: [
      "Stress relief",
      "Muscle recovery",
      "Improved circulation",
      "Pain management",
    ],
  },

  // Pilates
  "service-pilates": {
    id: "service-pilates",
    name: "Pilates",
    displayName: "Pilates",
    icon: PilatesIcon,
    description: "Core strengthening and body awareness through Pilates",
    category: "fitness",
    isActive: true,
    benefits: [
      "Core strength",
      "Better posture",
      "Flexibility",
      "Body awareness",
    ],
  },

  // Acupuncture
  "service-acupuncture": {
    id: "service-acupuncture",
    name: "Acupuncture",
    displayName: "Acupuncture",
    icon: AcupunctureIcon,
    description: "Traditional Chinese medicine for pain relief and wellness",
    category: "wellness",
    isActive: true,
    benefits: [
      "Pain relief",
      "Stress reduction",
      "Energy balance",
      "Natural healing",
    ],
  },

  // Dietitian Services
  "service-dietitian": {
    id: "service-dietitian",
    name: "Dietitian Services",
    displayName: "Dietitian Services",
    icon: DietitianServicesIcon,
    description: "Professional nutrition guidance and meal planning",
    category: "wellness",
    isActive: true,
    benefits: [
      "Personalized nutrition plans",
      "Weight management",
      "Sports nutrition",
      "Health optimization",
    ],
  },

  // Esthetician
  "service-esthetician": {
    id: "service-esthetician",
    name: "Esthetician",
    displayName: "Esthetician Services",
    icon: EstheticianIcon,
    description: "Professional skin care and beauty treatments",
    category: "wellness",
    isActive: true,
    benefits: [
      "Skin health",
      "Anti-aging treatments",
      "Relaxation",
      "Confidence boost",
    ],
  },

  // Laser Therapy
  "service-laser-therapy": {
    id: "service-laser-therapy",
    name: "Laser Therapy",
    displayName: "Laser Therapy",
    icon: LaserTherapyIcon,
    description: "Advanced laser treatments for various conditions",
    category: "wellness",
    isActive: true,
    benefits: [
      "Pain relief",
      "Tissue healing",
      "Skin rejuvenation",
      "Non-invasive treatment",
    ],
  },

  // Osteopathy
  "service-osteopathy": {
    id: "service-osteopathy",
    name: "Osteopathy",
    displayName: "Osteopathy",
    icon: OsteopathyIcon,
    description: "Manual therapy for musculoskeletal health and healing",
    category: "wellness",
    isActive: true,
    benefits: [
      "Pain relief",
      "Improved mobility",
      "Natural healing",
      "Holistic approach",
    ],
  },

  // Mental Health Support
  "service-mental-health": {
    id: "service-mental-health",
    name: "Mental Health Support",
    displayName: "Mental Health Support",
    icon: MentalHealthIcon,
    description: "Professional mental health and wellness support",
    category: "wellness",
    isActive: true,
    benefits: [
      "Stress management",
      "Emotional support",
      "Coping strategies",
      "Mental wellness",
    ],
  },

  // Personal Training
  "service-personal-training": {
    id: "service-personal-training",
    name: "Personal Training",
    displayName: "Personal Training",
    icon: AllIcon, // Using AllIcon as placeholder, you can add a specific icon
    description: "One-on-one fitness training with certified professionals",
    category: "fitness",
    isActive: true,
    benefits: [
      "Personalized workouts",
      "Goal achievement",
      "Proper form",
      "Motivation",
    ],
  },

  // Group Fitness
  "service-group-fitness": {
    id: "service-group-fitness",
    name: "Group Fitness",
    displayName: "Group Fitness Classes",
    icon: AllIcon, // Using AllIcon as placeholder
    description: "Group exercise classes for motivation and community",
    category: "fitness",
    isActive: true,
    benefits: ["Motivation", "Community", "Variety", "Cost-effective"],
  },

  // Recovery Services
  "service-recovery": {
    id: "service-recovery",
    name: "Recovery Services",
    displayName: "Recovery Services",
    icon: AllIcon, // Using AllIcon as placeholder
    description: "Comprehensive recovery and rehabilitation services",
    category: "wellness",
    isActive: true,
    benefits: [
      "Faster recovery",
      "Injury prevention",
      "Performance improvement",
      "Overall wellness",
    ],
  },
};

// Helper functions
export const getServiceById = (serviceId) => {
  return SERVICE_DATA[serviceId] || null;
};

export const getServicesByIds = (serviceIds) => {
  return serviceIds.map((id) => SERVICE_DATA[id]).filter(Boolean);
};

export const getServicesByCategory = (category) => {
  return Object.values(SERVICE_DATA).filter(
    (service) => service.category === category
  );
};

export const getActiveServices = () => {
  return Object.values(SERVICE_DATA).filter((service) => service.isActive);
};

export const getAllServices = () => {
  return Object.values(SERVICE_DATA);
};

export const getServiceIds = () => {
  return Object.keys(SERVICE_DATA);
};

export const getServiceCategories = () => {
  const categories = Object.values(SERVICE_DATA).map(
    (service) => service.category
  );
  return [...new Set(categories)].sort();
};

// Export service IDs as constants for easy reference
export const SERVICE_IDS = {
  ALL: "service-all",
  CHIROPRACTIC: "service-chiropractic",
  MASSAGE_THERAPY: "service-massage-therapy",
  PILATES: "service-pilates",
  ACUPUNCTURE: "service-acupuncture",
  DIETITIAN: "service-dietitian",
  ESTHETICIAN: "service-esthetician",
  LASER_THERAPY: "service-laser-therapy",
  OSTEOPATHY: "service-osteopathy",
  MENTAL_HEALTH: "service-mental-health",
  PERSONAL_TRAINING: "service-personal-training",
  GROUP_FITNESS: "service-group-fitness",
  RECOVERY: "service-recovery",
};

export default SERVICE_DATA;
