import React from "react";
import NavbarLogo from "./NavbarLogo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";

const Navbar = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-y-4 bg-inherit py-[22px] z-[50] sticky">
      <NavbarLogo />
      <SearchBar />
      <SignIn />
    </div>
  );
};

export default Navbar;
