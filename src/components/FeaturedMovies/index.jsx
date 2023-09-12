import React from "react";
import FeaturedTitle from "./FeaturedTitle";

const FeaturedMovies = ({ handleNext }) => {
  return (
    <div className="w-full mt-[500px] md:mt-[580px]">
      <FeaturedTitle handleNext={handleNext} />
    </div>
  );
};

export default FeaturedMovies;
