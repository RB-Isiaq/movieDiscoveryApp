import React from "react";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/">
      <div className="w-[186px] h-[50px] inline-flex items-center gap-4 sm:gap-[24px]">
        <img src={Logo} alt="Logo" />
        <h1 className="text-[24px] text-white font-dm_sans">MovieBox</h1>
      </div>
    </Link>
  );
};

export default NavbarLogo;
