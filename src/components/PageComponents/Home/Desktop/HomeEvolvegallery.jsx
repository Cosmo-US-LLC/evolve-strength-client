import React, { useCallback, useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/assetUrl";
import Evolvegallery from "../../Gym/Evolvegallery";

const img_1 = assetUrl("/assets/images/gym/gym_gallery/img_1.webp");
const img_2 = assetUrl("/assets/images/gym/gym_gallery/img_2.webp");
const img_3 = assetUrl("/assets/images/gym/gym_gallery/img_3.webp");
const img_4 = assetUrl("/assets/images/gym/gym_gallery/img_4.webp");
const img_5 = assetUrl("/assets/images/gym/gym_gallery/img_5.webp");
const img_6 = assetUrl("/assets/images/gym/gym_gallery/img_6.webp");
const img_7 = assetUrl("/assets/images/gym/gym_gallery/img_7.webp");

const professionals = [
  {
    title: "Physiotherapy",
    image: img_1,
  },
  {
    title: "Pilates",
    image: img_2,
  },
  {
    title: "Massage Therapy",
    image: img_3,
  },
  {
    title: "Chiropractic Care",
    image: img_4,
  },
  {
    title: "Acupuncture",
    image: img_5,
  },
  {
    title: "Dietitian Services",
    image: img_6,
  },
  {
    title: "Dietitian Services",
    image: img_7,
  },
];

const HomeEvolvegallery = () => {
  return (
    <>
      <Evolvegallery
        imageRadious="5px"
        slidesGap="0.85"
        buttonsTop="mt-6 md:mt-16"
        slides={professionals}
      />
    </>
  );
};

export default HomeEvolvegallery;
