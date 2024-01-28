import React from "react";
import FooterLogo from "./footer-logo";
import VisitUs from "./footer-visit-us";
import OurHours from "./footer-hours";
import KeepInTouch from "./footer-keep-in-tourch";
import Media from "./footer-media";

const Footer = () => {
  return (
    <div className="bg-[#76251E] px-10 py-10 flex  h-[400px] items-center">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <FooterLogo />
        <VisitUs />
        <OurHours />
        <KeepInTouch />
        <Media />
      </div>
    </div>
  );
};

export default Footer;
