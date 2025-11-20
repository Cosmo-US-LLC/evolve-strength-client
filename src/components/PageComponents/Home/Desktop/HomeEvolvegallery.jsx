import React, { useCallback, useEffect, useRef, useState } from "react";
import Evolvegallery from "../../Gym/Evolvegallery";

import img_1 from "../../../../assets/images/gym/gym_gallery/img_1.webp";
import img_2 from "../../../../assets/images/gym/gym_gallery/img_2.webp";
import img_3 from "../../../../assets/images/gym/gym_gallery/img_3.webp";
import img_4 from "../../../../assets/images/gym/gym_gallery/img_4.webp";
import img_5 from "../../../../assets/images/gym/gym_gallery/img_5.webp";
import img_6 from "../../../../assets/images/gym/gym_gallery/img_6.webp";
import img_7 from "../../../../assets/images/gym/gym_gallery/img_7.webp";

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
