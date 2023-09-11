import React from "react";
import { Link } from "react-router-dom";

const links = ["Conditions of Use", "Privacy & Policy", "Press Room"];
const FooterLinks = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {links.map((link, i) => (
        <Link
          key={i}
          to="/"
          className="font-dm_sans text-sm sm:text-[18px] font-bold text-gray-900"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
