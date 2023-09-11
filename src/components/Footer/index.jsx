import React from "react";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div className="w-full sm:w-[492px] h-[145px] inline-flex flex-col items-center gap-9">
      <FooterIcons />
      <FooterLinks />
      <CopyRight />
    </div>
  );
};

export default Footer;
