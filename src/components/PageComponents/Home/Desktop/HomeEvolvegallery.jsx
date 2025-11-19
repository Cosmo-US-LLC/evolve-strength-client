import React, { useCallback, useEffect, useRef, useState } from "react";
import Evolvegallery from "../../Gym/Evolvegallery";

const professionals = [
    {
        title: "Physiotherapy",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763537199031-65a3df40-d592-4dad-862b-7a3835f6137b.webp",
    },
    {
        title: "Pilates",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763474759882-4c68e765-bb27-4488-a342-1d868c71d889.jpg",
    },
    {
        title: "Massage Therapy",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763474576825-d1b88703-88ee-4ddc-aace-9fe4848f0af5.jpg",
    },
    {
      title: "Chiropractic Care",
      image:
        "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763474667677-723c8ae2-b271-45cf-a802-73c26a158b41.jpg",
    },
    {
        title: "Acupuncture",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763474501189-f8667bd9-6dab-4e6b-bf9e-3831041c30f6.jpg",
    },
    {
        title: "Dietitian Services",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763474277293-14210d72-746f-4628-8179-be457bf4ea2f.webp",
    },
    {
        title: "Dietitian Services",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1763473996618-9a7938a2-4527-4486-8fa0-89acbddff5c2.webp",
    },
];


const HomeEvolvegallery = () => {


    return (
        <>
            <Evolvegallery imageRadious="5px"  slidesGap="0.85" buttonsTop="mt-6 md:mt-16" slides = {professionals} />
        </>
    );
};

export default HomeEvolvegallery;
