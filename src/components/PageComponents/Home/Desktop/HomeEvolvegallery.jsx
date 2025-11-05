import React, { useCallback, useEffect, useRef, useState } from "react";
import Evolvegallery from "../../Gym/Evolvegallery";

const professionals = [
    {
        title: "Physiotherapy",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762342061279-5f66b532-2afb-40ff-a3ce-2a9c5f0168c3.jpg",
    },
    {
        title: "Pilates",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762342035705-755f9b55-5541-4451-8abf-4cc3acccd62a.jpg",
    },
    {
        title: "Massage Therapy",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762341943044-ed4cb1d8-5f44-4573-ab97-f98dc119b71b.jpg",
    },
    {
      title: "Chiropractic Care",
      image:
        "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762341927038-24b6250a-81ed-4ab8-b3d2-1503b5a55705.jpg",
    },
    {
        title: "Acupuncture",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762341913283-ce90ff6d-ee9f-4c44-b376-5aed3c1f857c.jpg",
    },
    {
        title: "Dietitian Services",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762341887500-967db459-6bc2-4122-9bc8-e21027702002.jpg",
    },
    {
        title: "Dietitian Services",
        image:
            "https://evolve-strength.tor1.digitaloceanspaces.com/media/1762341873237-a3472ea7-7e15-4ee3-a87a-0b64f2e6b954.jpg",
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
