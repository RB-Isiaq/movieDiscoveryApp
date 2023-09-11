import React from "react";
import { Fb, Ig, X, Yt } from "../../assets";
import { Link } from "react-router-dom";

const icons = [Fb, Ig, X, Yt];
const FooterIcons = () => {
  return (
    <div className="flex justify-between items-center w-[240px]">
      {icons.map((icon, i) => (
        <Link to="/" key={i}>
          <img  src={icon} alt="icon" />
        </Link>
      ))}
    </div>
  );
};

export default FooterIcons;
