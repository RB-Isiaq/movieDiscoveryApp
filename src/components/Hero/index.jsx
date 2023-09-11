import React from "react";
import HeroDetails from "./HeroDetails";
import { Movie, Poster } from "../../assets";
// Poster
// const Poster = 'url("../../assets/images/Poster.png")';

const Hero = () => {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center lg:px-[95px] md:px-8 px-4 flex items-center mt-0 overflow-x-hidden absolute top-0"
      style={{
        backgroundImage: `url(${Poster})`,
        backgroundPosition: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroDetails />
    </div>
  );
};

export default Hero;
