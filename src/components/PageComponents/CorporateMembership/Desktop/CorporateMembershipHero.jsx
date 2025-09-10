import React from "react";
import { Link } from "react-router-dom";

function CorporateMembershipHero() {
  return (
    <div className="w-full pb-12 pt-[80px] md:pt-[110px]">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="w-[100%] md:w-[50%] flex">
            <h1 className="max-md:max-w-[340px] md:max-w-[655px] !text-[49px] md:!text-[70px] text-left leading-[52px] md:leading-[56px] uppercase">
              Corporate Gym & Wellness Memberships
            </h1>
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] text-left justify-center items-start gap-4 md:gap-5">
            <h3 className="text-[#000] leading-[26px] font-[400] w-full md:w-[585px]">
              Give your employees access to fitness and healthcare under one
              roof with Evolve Strength. Our corporate memberships make it easy
              to support employee health, performance, and recovery.
            </h3>
            <h3 className="text-[#000] leading-[26px] font-[400] w-full md:w-[585px]">
              Available in Edmonton, Calgary, Burnaby, and Vancouver.
            </h3>
            <Link to="/corporate-membership-wizard">
              <button className="btnPrimary">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <picture>
            <source
              srcSet="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/corporateMembership/corporateMemberHero/corporrate_hero.webp"
              media="(min-width: 768px)"
            />
            <img
              src="https://evolve-strength.tor1.cdn.digitaloceanspaces.com/assets/images/corporateMembership/corporateMemberHero/corporate_hero_mob.webp"
              alt="Corporate Membership Hero"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CorporateMembershipHero;
