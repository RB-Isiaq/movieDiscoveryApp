import React from "react";
import { Menu } from "../../assets";

const SignIn = () => {
  return (
    <div className="hidden lg:flex w-[105px] h-[36px]  justify-between items-center text-white">
      <p>Sign In</p>
      <div className="w-9 h-9 bg-[#BE123C] rounded-full flex justify-center items-center">
        <img src={Menu} alt="Menu" />
      </div>
    </div>
  );
};

export default SignIn;
