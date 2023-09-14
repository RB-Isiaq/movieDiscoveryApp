import React, { useContext } from "react";
import NavbarLogo from "./NavbarLogo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import { DataCtx } from "../../context/dataContext";

const Navbar = () => {
  const { error } = useContext(DataCtx);
  return (
    <div
      className={`w-screen flex flex-wrap justify-between items-center gap-y-4 lg:px-[95px] md:px-8 px-4 ${
        error ? "bg-black" : "bg-inherit"
      } py-[22px] z-[50] sticky`}
    >
      <NavbarLogo />
      <SearchBar />
      <SignIn />
    </div>
  );
};

export default Navbar;
