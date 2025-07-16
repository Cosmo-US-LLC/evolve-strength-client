// category images
import exploreLocations from "../assets/images/explore/discoverTWS/locations.webp";
import exploreWellness from "../assets/images/explore/discoverTWS/wellness.webp";
import exploreTrainers from "../assets/images/explore/discoverTWS/trainers.webp";

// icons
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

//trainers images

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

export const EXPLORE_DATA = [
  {
    id: "LOCATIONS",
    title: "LOCATIONS",
    description:
      "Evolve locations offer a variety of unique services. Find out what your location has to offer.",
    image: exploreLocations,
    type: "locations",
    data: [
      {
        city: "EDMONTON",
        branch: "SOUTH",
        details: "Details for EDMONTON SOUTH",
        services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Jordan Browne",
            title: "Olympic Weightlifting and Strength Coach",
            image: trainerJordan,
            services: ["All", "Chiropractic Care", "Massage Therapy"],
            about:
              "Graduate of NAIT and the CSCP-CPT program in 2021. Our team has coached everyone from grassroots beginners to multiple national-level weightlifters, including a National Champion. We get our athletes in, establish a space for growth as both a person and as an athlete.",
            certification:
              "NCCP Trained Olympic Weightlifting Coach, CSCP-CPT Certified Personal Trainer, NAIT Personal Fitness Trainer Graduate",
            areasOfFocus: [
              "Olympic Weightlifting",
              "Strength Training",
              "Strength and Conditioning for Sport",
            ],
            joined: "2023-01-01",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Sharina Palaypay",
            title: "Personal Trainer",
            image: trainerSharina,
            services: ["All", "Pilates", "Massage Therapy"],
            about:
              "Sharina is a passionate personal trainer with a focus on pilates and holistic wellness.",
            certification: "Certified Pilates Instructor, Personal Trainer",
            areasOfFocus: ["Pilates", "Wellness"],
            joined: "2023-01-01",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            services: ["All", "Esthetician", "Laser Therapy"],
            about:
              "Maryam specializes in medical esthetics and advanced skin treatments.",
            certification: "Medical Esthetician, Laser Therapy Specialist",
            areasOfFocus: ["Medical Esthetics", "Laser Therapy", "Skin Care"],
            joined: "2023-02-15",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Robert Tenhove",
            title: "Chiropractor",
            image: trainerRobert,
            services: ["All", "Chiropractic Care"],
            about:
              "Dr. Tenhove is a certified chiropractor with expertise in sports medicine.",
            certification: "Doctor of Chiropractic, Sports Medicine Specialist",
            areasOfFocus: [
              "Chiropractic Care",
              "Sports Medicine",
              "Rehabilitation",
            ],
            joined: "2023-03-10",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Leah Cheung",
            title: "Dietitian",
            image: trainerLeah,
            services: ["All", "Dietitian Services"],
            about:
              "Leah is a registered dietitian specializing in sports nutrition and wellness.",
            certification: "Registered Dietitian, Sports Nutrition Specialist",
            areasOfFocus: ["Sports Nutrition", "Wellness", "Weight Management"],
            joined: "2023-04-20",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Paige Thomson",
            title: "Manual Osteopathic Practitioner",
            image: trainerPaige,
            services: ["All", "Osteopathy", "Pilates"],
            about:
              "Paige combines osteopathy with pilates for comprehensive body wellness.",
            certification:
              "Manual Osteopathic Practitioner, Pilates Instructor",
            areasOfFocus: ["Osteopathy", "Pilates", "Body Wellness"],
            joined: "2023-05-05",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Michelle Moen",
            title: "Personal Trainer",
            image: trainerMichelle,
            services: ["All", "Massage Therapy", "Osteopathy"],
            about:
              "Michelle is a certified personal trainer with a focus on rehabilitation.",
            certification:
              "Certified Personal Trainer, Rehabilitation Specialist",
            areasOfFocus: ["Personal Training", "Rehabilitation", "Wellness"],
            joined: "2023-06-12",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Christopher Merrell",
            title: "Personal Trainer",
            image: trainerChristopher,
            services: ["All", "Esthetician"],
            about:
              "Christopher specializes in holistic wellness and personal training.",
            certification: "Certified Personal Trainer, Wellness Coach",
            areasOfFocus: ["Personal Training", "Wellness", "Holistic Health"],
            joined: "2023-07-08",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Naomi Sachs",
            title: "Personal Trainer",
            image: trainerNaomi,
            services: ["All", "Massage Therapy", "Osteopathy"],
            about:
              "Naomi is passionate about helping clients achieve their fitness goals.",
            certification: "Certified Personal Trainer, Massage Therapist",
            areasOfFocus: ["Personal Training", "Massage Therapy", "Fitness"],
            joined: "2023-08-15",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Kieryn Marcellus",
            title: "Personal Trainer",
            image: trainerKieryn,
            services: ["All", "Acupuncture"],
            about:
              "Kieryn combines traditional acupuncture with modern fitness training.",
            certification: "Certified Personal Trainer, Acupuncturist",
            areasOfFocus: [
              "Personal Training",
              "Acupuncture",
              "Traditional Medicine",
            ],
            joined: "2023-09-22",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Steven Fitzpatrick",
            title: "Personal Trainer",
            image: trainerSteven,
            services: ["All", "Dietitian Services"],
            about:
              "Steven specializes in nutrition coaching and personal training with over 8 years of experience helping clients achieve their health and fitness goals through sustainable lifestyle changes.",
            certification:
              "Certified Personal Trainer, Nutrition Coach, Precision Nutrition Level 1",
            areasOfFocus: [
              "Personal Training",
              "Nutrition",
              "Weight Loss",
              "Lifestyle Coaching",
            ],
            joined: "2023-10-30",
            location: "EDMONTON SOUTH",
          },
          {
            name: "Denisse Peters",
            title: "Registered Massage Therapist",
            image: trainerDenisse,
            services: ["All", "Massage Therapy", "Acupuncture"],
            about:
              "Denisse is a skilled massage therapist with expertise in therapeutic massage, specializing in deep tissue, sports massage, and relaxation techniques for stress relief and recovery.",
            certification:
              "Registered Massage Therapist, Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Massage Therapy",
              "Acupuncture",
              "Therapeutic Care",
              "Stress Relief",
              "Recovery",
            ],
            joined: "2023-11-18",
            location: "EDMONTON SOUTH",
          },
        ],
      },
      {
        city: "CALGARY",
        branch: "ROYAL OAK",
        details: "Details for CALGARY ROYAL OAK",
     services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Denisse Peters",
            title: "Registered Massage Therapist",
            image: trainerDenisse,
            services: ["All", "Massage Therapy", "Acupuncture"],
            about:
              "Denisse provides comprehensive massage therapy and acupuncture services, helping clients with pain management, stress relief, and overall wellness.",
            certification:
              "Registered Massage Therapist, Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Massage Therapy",
              "Acupuncture",
              "Pain Management",
              "Stress Relief",
            ],
            joined: "2023-01-15",
            location: "CALGARY ROYAL OAK",
          },
          {
            name: "Steven Fitzpatrick",
            title: "Personal Trainer",
            image: trainerSteven,
            services: ["All", "Dietitian Services"],
            about:
              "Steven combines personal training with nutrition coaching to create comprehensive wellness programs tailored to individual needs.",
            certification:
              "Certified Personal Trainer, Nutrition Coach, Precision Nutrition Level 1",
            areasOfFocus: [
              "Personal Training",
              "Nutrition Coaching",
              "Weight Management",
              "Fitness",
            ],
            joined: "2023-02-20",
            location: "CALGARY ROYAL OAK",
          },
        ],
      },
      {
        city: "EDMONTON",
        branch: "NORTH",
        details: "Details for EDMONTON NORTH",
         services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            services: ["All", "Massage Therapy", "Mental Health Support"],
            about:
              "Maryam provides holistic wellness support combining medical esthetics with mental health guidance for comprehensive care.",
            certification:
              "Medical Esthetician, Wellness Counselor, Mental Health First Aid",
            areasOfFocus: [
              "Medical Esthetics",
              "Mental Health Support",
              "Wellness",
              "Stress Management",
            ],
            joined: "2023-03-01",
            location: "EDMONTON NORTH",
          },
          {
            name: "Robert Tenhove",
            title: "Chiropractor",
            image: trainerRobert,
            services: ["All", "Chiropractic Care"],
            about:
              "Dr. Tenhove specializes in sports chiropractic and rehabilitation, helping athletes and active individuals maintain optimal musculoskeletal health.",
            certification:
              "Doctor of Chiropractic, Sports Medicine Specialist, Certified Strength and Conditioning Specialist",
            areasOfFocus: [
              "Chiropractic Care",
              "Sports Medicine",
              "Rehabilitation",
              "Athlete Care",
            ],
            joined: "2023-03-15",
            location: "EDMONTON NORTH",
          },
        ],
      },
      {
        city: "EDMONTON",
        branch: "DOWNTOWN",
        details: "Details for EDMONTON DOWNTOWN",
      services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Leah Cheung",
            title: "Dietitian",
            image: trainerLeah,
            services: ["All", "Massage Therapy"],
            about:
              "Leah combines nutrition expertise with therapeutic massage to provide comprehensive wellness care for clients seeking both dietary guidance and physical therapy.",
            certification:
              "Registered Dietitian, Sports Nutrition Specialist, Licensed Massage Therapist",
            areasOfFocus: [
              "Sports Nutrition",
              "Therapeutic Massage",
              "Wellness",
              "Recovery",
            ],
            joined: "2023-04-01",
            location: "EDMONTON DOWNTOWN",
          },
          {
            name: "Paige Thomson",
            title: "Manual Osteopathic Practitioner",
            image: trainerPaige,
            services: ["All", "Pilates", "Laser Therapy"],
            about:
              "Paige integrates osteopathy, pilates, and laser therapy to create comprehensive treatment plans for pain management and body wellness.",
            certification:
              "Manual Osteopathic Practitioner, Pilates Instructor, Laser Therapy Specialist",
            areasOfFocus: [
              "Osteopathy",
              "Pilates",
              "Laser Therapy",
              "Pain Management",
            ],
            joined: "2023-04-15",
            location: "EDMONTON DOWNTOWN",
          },
        ],
      },
      {
        city: "CALGARY",
        branch: "SUNRIDGE",
        details: "Details for CALGARY SUNRIDGE",
         services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Michelle Moen",
            title: "Personal Trainer",
            image: trainerMichelle,
            services: ["All", "Massage Therapy", "Osteopathy"],
            about:
              "Michelle specializes in rehabilitation-focused personal training, combining massage therapy and osteopathy techniques for comprehensive recovery programs.",
            certification:
              "Certified Personal Trainer, Rehabilitation Specialist, Licensed Massage Therapist, Osteopathy Practitioner",
            areasOfFocus: [
              "Personal Training",
              "Rehabilitation",
              "Massage Therapy",
              "Osteopathy",
            ],
            joined: "2023-05-01",
            location: "CALGARY SUNRIDGE",
          },
          {
            name: "Christopher Merrell",
            title: "Personal Trainer",
            image: trainerChristopher,
            services: ["All", "Esthetician"],
            about:
              "Christopher focuses on holistic wellness, combining personal training with esthetic treatments to promote both physical fitness and skin health.",
            certification:
              "Certified Personal Trainer, Wellness Coach, Licensed Esthetician",
            areasOfFocus: [
              "Personal Training",
              "Wellness",
              "Esthetic Treatments",
              "Holistic Health",
            ],
            joined: "2023-05-15",
            location: "CALGARY SUNRIDGE",
          },
        ],
      },
      {
        city: "BURNABY",
        branch: "SOUTH",
        details: "Details for BURNABY SOUTH",
          services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Naomi Sachs",
            title: "Personal Trainer",
            image: trainerNaomi,
            services: ["All", "Massage Therapy", "Osteopathy"],
            about:
              "Naomi combines personal training with massage therapy and osteopathy to create comprehensive wellness programs focused on recovery and performance.",
            certification:
              "Certified Personal Trainer, Licensed Massage Therapist, Osteopathy Practitioner",
            areasOfFocus: [
              "Personal Training",
              "Massage Therapy",
              "Osteopathy",
              "Recovery",
            ],
            joined: "2023-06-01",
            location: "BURNABY SOUTH",
          },
          {
            name: "Kieryn Marcellus",
            title: "Personal Trainer",
            image: trainerKieryn,
            services: ["All", "Acupuncture"],
            about:
              "Kieryn integrates traditional acupuncture with modern personal training to provide holistic health and fitness solutions.",
            certification:
              "Certified Personal Trainer, Licensed Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Personal Training",
              "Acupuncture",
              "Traditional Medicine",
              "Holistic Health",
            ],
            joined: "2023-06-15",
            location: "BURNABY SOUTH",
          },
        ],
      },
      {
        city: "VANCOUVER",
        branch: "THE POST",
        details: "Details for VANCOUVER THE POST",
        services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Steven Fitzpatrick",
            title: "Personal Trainer",
            image: trainerSteven,
            services: ["All", "Dietitian Services"],
            about:
              "Steven provides comprehensive nutrition and fitness coaching, helping clients achieve sustainable health and wellness goals through personalized programs.",
            certification:
              "Certified Personal Trainer, Nutrition Coach, Precision Nutrition Level 1, Wellness Coach",
            areasOfFocus: [
              "Personal Training",
              "Nutrition Coaching",
              "Weight Management",
              "Lifestyle Coaching",
            ],
            joined: "2023-07-01",
            location: "VANCOUVER THE POST",
          },
          {
            name: "Denisse Peters",
            title: "Registered Massage Therapist",
            image: trainerDenisse,
            services: ["All", "Esthetician", "Mental Health Support"],
            about:
              "Denisse offers a unique combination of massage therapy, esthetic treatments, and mental health support for comprehensive wellness care.",
            certification:
              "Registered Massage Therapist, Licensed Esthetician, Mental Health Counselor, Wellness Practitioner",
            areasOfFocus: [
              "Massage Therapy",
              "Esthetic Treatments",
              "Mental Health Support",
              "Stress Relief",
            ],
            joined: "2023-07-15",
            location: "VANCOUVER THE POST",
          },
        ],
      },
      {
        city: "TORONTO",
        branch: "DOWNTOWN",
        details: "Details for TORONTO DOWNTOWN",
        services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Jordan Browne",
            title: "Olympic Weightlifting and Strength Coach",
            image: trainerJordan,
            services: ["All", "Chiropractic Care", "Massage Therapy"],
            about:
              "Jordan specializes in Olympic weightlifting and strength coaching, working with athletes of all levels to improve performance and prevent injuries.",
            certification:
              "NCCP Trained Olympic Weightlifting Coach, CSCP-CPT Certified Personal Trainer, NAIT Personal Fitness Trainer Graduate",
            areasOfFocus: [
              "Olympic Weightlifting",
              "Strength Training",
              "Athlete Development",
              "Injury Prevention",
            ],
            joined: "2023-08-01",
            location: "TORONTO DOWNTOWN",
          },
          {
            name: "Sharina Palaypay",
            title: "Personal Trainer",
            image: trainerSharina,
            services: ["All", "Pilates", "Massage Therapy"],
            about:
              "Sharina combines pilates instruction with massage therapy to provide comprehensive body wellness and recovery programs.",
            certification:
              "Certified Pilates Instructor, Personal Trainer, Licensed Massage Therapist",
            areasOfFocus: [
              "Pilates",
              "Massage Therapy",
              "Body Wellness",
              "Recovery",
            ],
            joined: "2023-08-15",
            location: "TORONTO DOWNTOWN",
          },
          {
            name: "Leah Cheung",
            title: "Dietitian",
            image: trainerLeah,
            services: ["All", "Dietitian Services"],
            about:
              "Leah provides expert nutrition guidance for athletes and active individuals, specializing in sports nutrition and performance optimization.",
            certification:
              "Registered Dietitian, Sports Nutrition Specialist, Certified Sports Nutritionist",
            areasOfFocus: [
              "Sports Nutrition",
              "Performance Nutrition",
              "Weight Management",
              "Athlete Nutrition",
            ],
            joined: "2023-09-01",
            location: "TORONTO DOWNTOWN",
          },
        ],
      },
      {
        city: "MONTREAL",
        branch: "WEST ISLAND",
        details: "Details for MONTREAL WEST ISLAND",
       services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            services: ["All", "Mental Health Support"],
            about:
              "Maryam provides holistic wellness support combining medical esthetics with mental health guidance for comprehensive care.",
            certification:
              "Medical Esthetician, Wellness Counselor, Mental Health First Aid, Licensed Esthetician",
            areasOfFocus: [
              "Medical Esthetics",
              "Mental Health Support",
              "Wellness",
              "Stress Management",
            ],
            joined: "2023-09-15",
            location: "MONTREAL WEST ISLAND",
          },
          {
            name: "Paige Thomson",
            title: "Manual Osteopathic Practitioner",
            image: trainerPaige,
            services: ["All", "Osteopathy"],
            about:
              "Paige specializes in manual osteopathy, providing hands-on treatment for musculoskeletal conditions and pain management.",
            certification:
              "Manual Osteopathic Practitioner, Osteopathy Specialist, Pain Management Practitioner",
            areasOfFocus: [
              "Osteopathy",
              "Manual Therapy",
              "Pain Management",
              "Musculoskeletal Health",
            ],
            joined: "2023-10-01",
            location: "MONTREAL WEST ISLAND",
          },
        ],
      },
      {
        city: "VANCOUVER",
        branch: "RICHMOND",
        details: "Details for VANCOUVER RICHMOND",
         services: [
          { name: "All", icon: AllIcon },
          { name: "Chiropractic Care", icon: ChiropracticIcon },
          { name: "Massage Therapy", icon: MassageTherapyIcon },
          { name: "Pilates", icon: PilatesIcon },
          { name: "Acupuncture", icon: AcupunctureIcon },
          { name: "Dietitian Services", icon: DietitianServicesIcon },
          { name: "Esthetician", icon: EstheticianIcon },
          { name: "Laser Therapy", icon: LaserTherapyIcon },
          { name: "Osteopathy", icon: OsteopathyIcon },
          { name: "Mental Health Support", icon: MentalHealthIcon },
        ],
        trainers: [
          {
            name: "Robert Tenhove",
            title: "Chiropractor",
            image: trainerRobert,
            services: ["All", "Chiropractic Care"],
            about:
              "Dr. Tenhove provides comprehensive chiropractic care with a focus on sports medicine and rehabilitation for active individuals.",
            certification:
              "Doctor of Chiropractic, Sports Medicine Specialist, Certified Strength and Conditioning Specialist",
            areasOfFocus: [
              "Chiropractic Care",
              "Sports Medicine",
              "Rehabilitation",
              "Athlete Care",
            ],
            joined: "2023-10-15",
            location: "VANCOUVER RICHMOND",
          },
          {
            name: "Kieryn Marcellus",
            title: "Personal Trainer",
            image: trainerKieryn,
            services: ["All", "Acupuncture"],
            about:
              "Kieryn combines traditional acupuncture with modern fitness training to provide holistic health and wellness solutions.",
            certification:
              "Certified Personal Trainer, Licensed Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Personal Training",
              "Acupuncture",
              "Traditional Medicine",
              "Holistic Health",
            ],
            joined: "2023-11-01",
            location: "VANCOUVER RICHMOND",
          },
        ],
      },
    ],
  },
  {
    id: "WELLNESS",
    title: "WELLNESS",
    description:
      "Explore a range of wellness service providers tailored to your needs.",
    image: exploreWellness,
    type: "wellness",
    data: [
      {
        name: "MASSAGE THERAPY",
        trainers: [
          {
            name: "Denisse Peters",
            title: "Registered Massage Therapist",
            image: trainerDenisse,
            about:
              "Denisse is a skilled massage therapist with over 10 years of experience in therapeutic massage, specializing in deep tissue, sports massage, and relaxation techniques for stress relief and recovery.",
            certification:
              "Registered Massage Therapist, Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Massage Therapy",
              "Deep Tissue",
              "Sports Massage",
              "Stress Relief",
              "Recovery",
            ],
            location: "CALGARY ROYAL OAK",
          },

          {
            name: "Steven Fitzpatrick",
            title: "Personal Trainer",
            image: trainerSteven,
            about:
              "Steven combines personal training with massage therapy to provide comprehensive wellness programs that address both fitness and recovery needs.",
            certification:
              "Certified Personal Trainer, Licensed Massage Therapist, Wellness Coach",
            areasOfFocus: [
              "Massage Therapy",
              "Personal Training",
              "Holistic Wellness",
              "Recovery",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Michelle Moen",
            title: "Personal Trainer",
            image: trainerMichelle,
            about:
              "Michelle specializes in rehabilitation-focused massage therapy, helping clients recover from injuries and improve mobility through therapeutic techniques.",
            certification:
              "Certified Personal Trainer, Licensed Massage Therapist, Rehabilitation Specialist",
            areasOfFocus: [
              "Massage Therapy",
              "Rehabilitation",
              "Injury Recovery",
              "Mobility",
            ],
            location: "CALGARY SUNRIDGE",
          },
          {
            name: "Naomi Sachs",
            title: "Personal Trainer",
            image: trainerNaomi,
            about:
              "Naomi specializes in sports massage and recovery therapy, working with athletes to optimize performance and accelerate recovery.",
            certification:
              "Certified Personal Trainer, Sports Massage Therapist, Athletic Recovery Specialist",
            areasOfFocus: [
              "Sports Massage",
              "Recovery Therapy",
              "Athletic Performance",
              "Injury Prevention",
            ],
            location: "BURNABY SOUTH",
          },
          {
            name: "Leah Cheung",
            title: "Dietitian",
            image: trainerLeah,
            about:
              "Leah combines nutrition expertise with therapeutic massage to provide comprehensive wellness care for clients seeking both dietary guidance and physical therapy.",
            certification:
              "Registered Dietitian, Licensed Massage Therapist, Sports Nutrition Specialist",
            areasOfFocus: [
              "Therapeutic Massage",
              "Nutrition",
              "Wellness",
              "Recovery",
            ],
            location: "EDMONTON DOWNTOWN",
          },
        ],
      },
      {
        name: "PILATES",
        trainers: [
          {
            name: "Sharina Palaypay",
            title: "Personal Trainer",
            image: trainerSharina,
            about:
              "Sharina is a passionate pilates instructor with over 8 years of experience, specializing in classical pilates and contemporary variations to improve core strength, flexibility, and posture.",
            certification:
              "Certified Pilates Instructor, Personal Trainer, Pilates Method Alliance Certified",
            areasOfFocus: [
              "Pilates",
              "Core Strength",
              "Flexibility",
              "Posture",
              "Wellness",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Paige Thomson",
            title: "Manual Osteopathic Practitioner",
            image: trainerPaige,
            about:
              "Paige integrates pilates with osteopathy to create comprehensive movement programs that address both structural alignment and functional movement patterns.",
            certification:
              "Manual Osteopathic Practitioner, Pilates Instructor, Movement Specialist",
            areasOfFocus: [
              "Pilates",
              "Osteopathy",
              "Movement Therapy",
              "Structural Alignment",
            ],
            location: "EDMONTON DOWNTOWN",
          },
          {
            name: "Leah Cheung",
            title: "Dietitian",
            image: trainerLeah,
            about:
              "Leah combines nutrition guidance with pilates training to provide holistic wellness programs that address both physical movement and nutritional needs.",
            certification:
              "Registered Dietitian, Pilates Instructor, Sports Nutrition Specialist",
            areasOfFocus: [
              "Pilates",
              "Nutrition",
              "Wellness",
              "Holistic Health",
            ],
            location: "TORONTO DOWNTOWN",
          },
        ],
      },
      {
        name: "ACUPUNCTURE",
        trainers: [
          {
            name: "Kieryn Marcellus",
            title: "Personal Trainer",
            image: trainerKieryn,
            about:
              "Kieryn is an expert in acupuncture and holistic therapies, combining traditional Chinese medicine with modern fitness training for comprehensive wellness.",
            certification:
              "Certified Personal Trainer, Licensed Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Acupuncture",
              "Traditional Chinese Medicine",
              "Holistic Therapies",
              "Wellness",
            ],
            location: "BURNABY SOUTH",
          },
          {
            name: "Naomi Sachs",
            title: "Personal Trainer",
            image: trainerNaomi,
            about:
              "Naomi provides acupuncture and wellness coaching, specializing in pain management and stress relief through traditional acupuncture techniques.",
            certification:
              "Certified Personal Trainer, Licensed Acupuncturist, Wellness Coach",
            areasOfFocus: [
              "Acupuncture",
              "Pain Management",
              "Stress Relief",
              "Wellness Coaching",
            ],
            location: "BURNABY SOUTH",
          },
          {
            name: "Denisse Peters",
            title: "Registered Massage Therapist",
            image: trainerDenisse,
            about:
              "Denisse combines massage therapy with acupuncture treatments to provide comprehensive therapeutic care for pain relief and wellness.",
            certification:
              "Registered Massage Therapist, Licensed Acupuncturist, Traditional Chinese Medicine Practitioner",
            areasOfFocus: [
              "Acupuncture",
              "Massage Therapy",
              "Therapeutic Care",
              "Pain Relief",
            ],
            location: "CALGARY ROYAL OAK",
          },
        ],
      },
      {
        name: "CHIROPRACTIC CARE",
        trainers: [
          {
            name: "Jordan Browne",
            title: "Olympic Weightlifting and Strength Coach",
            image: trainerJordan,
            about:
              "Jordan works with chiropractors to provide comprehensive athlete care and rehabilitation.",
            certification:
              "NCCP Trained Olympic Weightlifting Coach, CSCP-CPT Certified Personal Trainer",
            areasOfFocus: [
              "Strength Training",
              "Athlete Care",
              "Chiropractic Rehabilitation",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Robert Tenhove",
            title: "Chiropractor",
            image: trainerRobert,
            about:
              "Dr. Tenhove specializes in sports chiropractic and rehabilitation.",
            certification: "Doctor of Chiropractic, Sports Medicine Specialist",
            areasOfFocus: [
              "Chiropractic Care",
              "Sports Medicine",
              "Rehabilitation",
            ],
            location: "EDMONTON NORTH",
          },
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            about:
              "Maryam provides wellness support and works alongside chiropractic care for holistic treatment.",
            certification: "Medical Esthetician, Wellness Counselor",
            areasOfFocus: [
              "Wellness Support",
              "Holistic Care",
              "Chiropractic Integration",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Naomi Sachs",
            title: "Personal Trainer",
            image: trainerNaomi,
            about:
              "Naomi specializes in rehabilitation training and works with chiropractic patients for recovery.",
            certification:
              "Certified Personal Trainer, Rehabilitation Specialist",
            areasOfFocus: [
              "Rehabilitation Training",
              "Recovery",
              "Chiropractic Support",
            ],
            location: "CALGARY ROYAL OAK",
          },
        ],
      },
      {
        name: "DIETITIAN SERVICES",
        trainers: [
          {
            name: "Leah Cheung",
            title: "Dietitian",
            image: trainerLeah,
            about:
              "Leah is a registered dietitian specializing in sports nutrition, helping athletes and active individuals optimize their performance through personalized nutrition plans.",
            certification:
              "Registered Dietitian, Sports Nutrition Specialist, Certified Sports Nutritionist",
            areasOfFocus: [
              "Sports Nutrition",
              "Performance Nutrition",
              "Weight Management",
              "Athlete Nutrition",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Steven Fitzpatrick",
            title: "Personal Trainer",
            image: trainerSteven,
            about:
              "Steven provides comprehensive nutrition coaching alongside personal training, creating sustainable lifestyle changes for long-term health and fitness success.",
            certification:
              "Certified Personal Trainer, Nutrition Coach, Precision Nutrition Level 1, Wellness Coach",
            areasOfFocus: [
              "Nutrition Coaching",
              "Personal Training",
              "Lifestyle Coaching",
              "Weight Management",
            ],
            location: "EDMONTON SOUTH",
          },
        ],
      },
      {
        name: "ESTHETICIAN",
        trainers: [
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            about:
              "Maryam specializes in medical esthetics and advanced skin treatments, providing comprehensive skincare solutions for various skin conditions and concerns.",
            certification:
              "Medical Esthetician, Laser Therapy Specialist, Advanced Skincare Practitioner",
            areasOfFocus: [
              "Medical Esthetics",
              "Advanced Skin Treatments",
              "Laser Therapy",
              "Skincare",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Christopher Merrell",
            title: "Personal Trainer",
            image: trainerChristopher,
            about:
              "Christopher focuses on holistic wellness and esthetic treatments, combining fitness training with skincare to promote overall health and appearance.",
            certification:
              "Certified Personal Trainer, Wellness Coach, Licensed Esthetician",
            areasOfFocus: [
              "Wellness",
              "Holistic Health",
              "Esthetic Treatments",
              "Fitness",
            ],
            location: "CALGARY SUNRIDGE",
          },
        ],
      },
      {
        name: "LASER THERAPY",
        trainers: [
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            about:
              "Maryam is certified in advanced laser therapy treatments, specializing in skin rejuvenation, hair removal, and therapeutic laser applications for various skin conditions.",
            certification:
              "Medical Esthetician, Laser Therapy Specialist, Advanced Laser Practitioner",
            areasOfFocus: [
              "Laser Therapy",
              "Medical Esthetics",
              "Skin Rejuvenation",
              "Hair Removal",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Paige Thomson",
            title: "Manual Osteopathic Practitioner",
            image: trainerPaige,
            about:
              "Paige uses laser therapy for pain management and healing, combining osteopathic techniques with advanced laser treatments for comprehensive therapeutic care.",
            certification:
              "Manual Osteopathic Practitioner, Laser Therapy Specialist, Pain Management Practitioner",
            areasOfFocus: [
              "Laser Therapy",
              "Pain Management",
              "Therapeutic Healing",
              "Osteopathy",
            ],
            location: "EDMONTON DOWNTOWN",
          },
        ],
      },
      {
        name: "OSTEOPATHY",
        trainers: [
          {
            name: "Paige Thomson",
            title: "Manual Osteopathic Practitioner",
            image: trainerPaige,
            about:
              "Paige is a certified manual osteopathic practitioner with extensive experience in treating musculoskeletal conditions and promoting natural healing through hands-on therapy.",
            certification:
              "Manual Osteopathic Practitioner, Osteopathy Specialist, Manual Therapy Expert",
            areasOfFocus: [
              "Osteopathy",
              "Manual Therapy",
              "Musculoskeletal Health",
              "Natural Healing",
            ],
            location: "EDMONTON SOUTH",
          },
          {
            name: "Michelle Moen",
            title: "Personal Trainer",
            image: trainerMichelle,
            about:
              "Michelle combines osteopathy with personal training to create comprehensive rehabilitation programs that address both structural and functional aspects of movement.",
            certification:
              "Certified Personal Trainer, Osteopathy Specialist, Rehabilitation Practitioner",
            areasOfFocus: [
              "Osteopathy",
              "Personal Training",
              "Rehabilitation",
              "Movement Therapy",
            ],
            location: "CALGARY SUNRIDGE",
          },
          {
            name: "Naomi Sachs",
            title: "Personal Trainer",
            image: trainerNaomi,
            about:
              "Naomi specializes in osteopathic treatments and wellness, focusing on holistic approaches to health and recovery through manual therapy techniques.",
            certification:
              "Certified Personal Trainer, Osteopathy Practitioner, Wellness Specialist",
            areasOfFocus: [
              "Osteopathy",
              "Wellness",
              "Holistic Health",
              "Manual Therapy",
            ],
            location: "BURNABY SOUTH",
          },
        ],
      },
      {
        name: "MENTAL HEALTH SUPPORT",
        trainers: [
          {
            name: "Maryam Neamah",
            title: "Medical Esthetician",
            image: trainerMaryam,
            about:
              "Maryam provides comprehensive wellness support and mental health guidance, combining medical esthetics with stress management techniques for holistic care.",
            certification:
              "Medical Esthetician, Wellness Counselor, Mental Health First Aid, Stress Management Specialist",
            areasOfFocus: [
              "Mental Health",
              "Wellness Support",
              "Stress Management",
              "Holistic Care",
            ],
            location: "EDMONTON NORTH",
          },
          {
            name: "Denisse Peters",
            title: "Registered Massage Therapist",
            image: trainerDenisse,
            about:
              "Denisse offers therapeutic massage for stress relief and mental wellness, specializing in relaxation techniques that promote mental clarity and emotional balance.",
            certification:
              "Registered Massage Therapist, Mental Health Support, Relaxation Therapy Specialist",
            areasOfFocus: [
              "Stress Relief",
              "Mental Wellness",
              "Relaxation Therapy",
              "Emotional Balance",
            ],
            location: "VANCOUVER THE POST",
          },
        ],
      },
    ],
  },
  {
    id: "TRAINERS",
    title: "TRAINERS",
    description:
      "Explore certified personal trainers dedicated to helping you reach your fitness goals.",
    image: exploreTrainers,
    type: "trainers",
    data: null, // Will be populated from locations data
  },
];

// Helper function to get all trainers from locations (unique by name)
export const getAllTrainers = () => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  const allTrainers = locationsData.flatMap(
    (location) => location.trainers || []
  );

  // Remove duplicates based on trainer name
  const uniqueTrainers = [];
  const seenNames = new Set();

  allTrainers.forEach((trainer) => {
    if (!seenNames.has(trainer.name)) {
      seenNames.add(trainer.name);
      uniqueTrainers.push(trainer);
    }
  });

  return uniqueTrainers;
};

// Helper function to get all locations
export const getAllLocations = () => {
  const locationsData =
    EXPLORE_DATA.find((item) => item.id === "LOCATIONS")?.data || [];
  return locationsData.map((location) => `${location.city} ${location.branch}`);
};

// Helper function to get data by category
export const getDataByCategory = (categoryId) => {
  return EXPLORE_DATA.find((item) => item.id === categoryId);
};

// Helper function to get today's date
export const getToday = () => {
  const d = new Date();
  return d.toISOString().slice(0, 10);
};
