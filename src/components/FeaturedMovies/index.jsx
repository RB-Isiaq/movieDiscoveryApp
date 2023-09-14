import React from "react";
import FeaturedTitle from "./FeaturedTitle";

const FeaturedMovies = ({ handleNext }) => {
  return (
    <div className="w-full mt-[660px] md:mt-[680px]">
      <FeaturedTitle handleNext={handleNext} />
    </div>
  );
};

export default FeaturedMovies;
