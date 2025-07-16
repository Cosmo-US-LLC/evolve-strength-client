// Centralized trainer data with unique IDs
// This file contains all trainer information that can be referenced by other data files

// Import trainer images
import trainerJordan from "../assets/images/explore/trainers/Jordan.webp";
import trainerSharina from "../assets/images/explore/trainers/Sharina.webp";
import trainerMaryam from "../assets/images/explore/trainers/Maryam.webp";
import trainerRobert from "../assets/images/explore/trainers/Robert.webp";
import trainerPaige from "../assets/images/explore/trainers/Paige.webp";
import trainerKieryn from "../assets/images/explore/trainers/Kieryn.webp";
import trainerSteven from "../assets/images/explore/trainers/Steven.webp";
import trainerNaomi from "../assets/images/explore/trainers/Naomi.webp";
import trainerChristopher from "../assets/images/explore/trainers/Christopher.webp";
import trainerDenisse from "../assets/images/explore/trainers/Denisse.webp";
import trainerMichelle from "../assets/images/explore/trainers/Michelle.webp";
import trainerLeah from "../assets/images/explore/trainers/Leah.webp";

// Trainer data with unique IDs
export const TRAINER_DATA = {
  // Jordan Browne - Olympic Weightlifting and Strength Coach
  "trainer-jordan-browne": {
    id: "trainer-jordan-browne",
    name: "Jordan Browne",
    title: "Olympic Weightlifting and Strength Coach",
    image: trainerJordan,
    about:
      "Graduate of NAIT and the CSCP-CPT program in 2021. Our team has coached everyone from grassroots beginners to multiple national-level weightlifters, including a National Champion. We get our athletes in, establish a space for growth as both a person and as an athlete.",
    certifications: [
      "NCCP Trained Olympic Weightlifting Coach",
      "CSCP-CPT Certified Personal Trainer",
      "NAIT Personal Fitness Trainer Graduate",
    ],
    areasOfFocus: [
      "Olympic Weightlifting",
      "Strength Training",
      "Strength and Conditioning for Sport",
    ],
    services: ["All", "Chiropractic Care", "Massage Therapy"],
    joined: "2023-01-01",
    location: "EDMONTON SOUTH",
  },

  // Sharina Palaypay - Personal Trainer
  "trainer-sharina-palaypay": {
    id: "trainer-sharina-palaypay",
    name: "Sharina Palaypay",
    title: "Personal Trainer",
    image: trainerSharina,
    about:
      "Sharina is a passionate personal trainer with a focus on pilates and holistic wellness.",
    certifications: ["Certified Pilates Instructor", "Personal Trainer"],
    areasOfFocus: ["Pilates", "Wellness"],
    services: ["All", "Pilates", "Massage Therapy"],
    joined: "2023-01-01",
    location: "EDMONTON SOUTH",
  },

  // Maryam Neamah - Medical Esthetician
  "trainer-maryam-neamah": {
    id: "trainer-maryam-neamah",
    name: "Maryam Neamah",
    title: "Medical Esthetician",
    image: trainerMaryam,
    about:
      "Maryam specializes in medical esthetics and advanced skin treatments.",
    certifications: ["Medical Esthetician", "Laser Therapy Specialist"],
    areasOfFocus: ["Medical Esthetics", "Laser Therapy", "Skin Care"],
    services: ["All", "Esthetician", "Laser Therapy"],
    joined: "2023-02-15",
    location: "EDMONTON SOUTH",
  },

  // Robert Tenhove - Chiropractor
  "trainer-robert-tenhove": {
    id: "trainer-robert-tenhove",
    name: "Robert Tenhove",
    title: "Chiropractor",
    image: trainerRobert,
    about:
      "Dr. Tenhove is a certified chiropractor with expertise in sports medicine.",
    certifications: ["Doctor of Chiropractic", "Sports Medicine Specialist"],
    areasOfFocus: ["Chiropractic Care", "Sports Medicine", "Rehabilitation"],
    services: ["All", "Chiropractic Care"],
    joined: "2023-03-10",
    location: "EDMONTON SOUTH",
  },

  // Leah Cheung - Dietitian
  "trainer-leah-cheung": {
    id: "trainer-leah-cheung",
    name: "Leah Cheung",
    title: "Dietitian",
    image: trainerLeah,
    about:
      "Leah is a registered dietitian specializing in sports nutrition and wellness.",
    certifications: ["Registered Dietitian", "Sports Nutrition Specialist"],
    areasOfFocus: ["Sports Nutrition", "Wellness", "Weight Management"],
    services: ["All", "Dietitian Services"],
    joined: "2023-04-20",
    location: "EDMONTON SOUTH",
  },

  // Paige Thomson - Manual Osteopathic Practitioner
  "trainer-paige-thomson": {
    id: "trainer-paige-thomson",
    name: "Paige Thomson",
    title: "Manual Osteopathic Practitioner",
    image: trainerPaige,
    about:
      "Paige combines osteopathy with pilates for comprehensive body wellness.",
    certifications: ["Manual Osteopathic Practitioner", "Pilates Instructor"],
    areasOfFocus: ["Osteopathy", "Pilates", "Body Wellness"],
    services: ["All", "Osteopathy", "Pilates"],
    joined: "2023-05-05",
    location: "EDMONTON SOUTH",
  },

  // Michelle Moen - Personal Trainer
  "trainer-michelle-moen": {
    id: "trainer-michelle-moen",
    name: "Michelle Moen",
    title: "Personal Trainer",
    image: trainerMichelle,
    about:
      "Michelle is a certified personal trainer with a focus on rehabilitation.",
    certifications: ["Certified Personal Trainer", "Rehabilitation Specialist"],
    areasOfFocus: ["Personal Training", "Rehabilitation", "Wellness"],
    services: ["All", "Massage Therapy", "Osteopathy"],
    joined: "2023-06-12",
    location: "EDMONTON SOUTH",
  },

  // Christopher Merrell - Personal Trainer
  "trainer-christopher-merrell": {
    id: "trainer-christopher-merrell",
    name: "Christopher Merrell",
    title: "Personal Trainer",
    image: trainerChristopher,
    about:
      "Christopher specializes in holistic wellness and personal training.",
    certifications: ["Certified Personal Trainer", "Wellness Coach"],
    areasOfFocus: ["Personal Training", "Wellness", "Holistic Health"],
    services: ["All", "Esthetician"],
    joined: "2023-07-08",
    location: "EDMONTON SOUTH",
  },

  // Naomi Sachs - Personal Trainer
  "trainer-naomi-sachs": {
    id: "trainer-naomi-sachs",
    name: "Naomi Sachs",
    title: "Personal Trainer",
    image: trainerNaomi,
    about:
      "Naomi is passionate about helping clients achieve their fitness goals.",
    certifications: ["Certified Personal Trainer", "Massage Therapist"],
    areasOfFocus: ["Personal Training", "Massage Therapy", "Fitness"],
    services: ["All", "Massage Therapy", "Osteopathy"],
    joined: "2023-08-15",
    location: "EDMONTON SOUTH",
  },

  // Kieryn Marcellus - Personal Trainer
  "trainer-kieryn-marcellus": {
    id: "trainer-kieryn-marcellus",
    name: "Kieryn Marcellus",
    title: "Personal Trainer",
    image: trainerKieryn,
    about:
      "Kieryn combines traditional acupuncture with modern fitness training.",
    certifications: ["Certified Personal Trainer", "Acupuncturist"],
    areasOfFocus: ["Personal Training", "Acupuncture", "Traditional Medicine"],
    services: ["All", "Acupuncture"],
    joined: "2023-09-22",
    location: "EDMONTON SOUTH",
  },

  // Steven Fitzpatrick - Personal Trainer
  "trainer-steven-fitzpatrick": {
    id: "trainer-steven-fitzpatrick",
    name: "Steven Fitzpatrick",
    title: "Personal Trainer",
    image: trainerSteven,
    about:
      "Steven specializes in nutrition coaching and personal training with over 8 years of experience helping clients achieve their health and fitness goals through sustainable lifestyle changes.",
    certifications: [
      "Certified Personal Trainer",
      "Nutrition Coach",
      "Precision Nutrition Level 1",
    ],
    areasOfFocus: [
      "Personal Training",
      "Nutrition",
      "Weight Loss",
      "Lifestyle Coaching",
    ],
    services: ["All", "Dietitian Services"],
    joined: "2023-10-30",
    location: "EDMONTON SOUTH",
  },

  // Denisse Peters - Registered Massage Therapist
  "trainer-denisse-peters": {
    id: "trainer-denisse-peters",
    name: "Denisse Peters",
    title: "Registered Massage Therapist",
    image: trainerDenisse,
    about:
      "Denisse is a skilled massage therapist with expertise in therapeutic massage, specializing in deep tissue, sports massage, and relaxation techniques for stress relief and recovery.",
    certifications: [
      "Registered Massage Therapist",
      "Acupuncturist",
      "Traditional Chinese Medicine Practitioner",
    ],
    areasOfFocus: [
      "Massage Therapy",
      "Acupuncture",
      "Therapeutic Care",
      "Stress Relief",
      "Recovery",
    ],
    services: ["All", "Massage Therapy", "Acupuncture"],
    joined: "2023-11-18",
    location: "EDMONTON SOUTH",
  },
};

// Helper functions
export const getTrainerById = (trainerId) => {
  return TRAINER_DATA[trainerId] || null;
};

export const getTrainersByIds = (trainerIds) => {
  return trainerIds.map((id) => TRAINER_DATA[id]).filter(Boolean);
};

export const getTrainersByLocation = (location) => {
  return Object.values(TRAINER_DATA).filter(
    (trainer) => trainer.location === location
  );
};

export const getTrainersByService = (service) => {
  return Object.values(TRAINER_DATA).filter(
    (trainer) =>
      trainer.services.includes(service) || trainer.services.includes("All")
  );
};

export const getAllTrainers = () => {
  return Object.values(TRAINER_DATA);
};

export const getTrainerIds = () => {
  return Object.keys(TRAINER_DATA);
};

// Helper function to get trainers by certification
export const getTrainersByCertification = (certification) => {
  return Object.values(TRAINER_DATA).filter((trainer) =>
    trainer.certifications.includes(certification)
  );
};

// Helper function to get all unique certifications
export const getAllCertifications = () => {
  const allCerts = Object.values(TRAINER_DATA).flatMap(
    (trainer) => trainer.certifications
  );
  return [...new Set(allCerts)].sort();
};

// Export trainer IDs as constants for easy reference
export const TRAINER_IDS = {
  JORDAN_BROWNE: "trainer-jordan-browne",
  SHARINA_PALAYPAY: "trainer-sharina-palaypay",
  MARYAM_NEAMAH: "trainer-maryam-neamah",
  ROBERT_TENHOVE: "trainer-robert-tenhove",
  LEAH_CHEUNG: "trainer-leah-cheung",
  PAIGE_THOMSON: "trainer-paige-thomson",
  MICHELLE_MOEN: "trainer-michelle-moen",
  CHRISTOPHER_MERRELL: "trainer-christopher-merrell",
  NAOMI_SACHS: "trainer-naomi-sachs",
  KIERYN_MARCELLUS: "trainer-kieryn-marcellus",
  STEVEN_FITZPATRICK: "trainer-steven-fitzpatrick",
  DENISSE_PETERS: "trainer-denisse-peters",
};

export default TRAINER_DATA;
