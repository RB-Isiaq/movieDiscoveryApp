import React from "react";
import { RightArrow } from "../../assets";

const FeaturedTitle = ({ handleNext }) => {
  return (
    <div className="flex justify-between w-full mb-10">
      <h1 className="font-dm_sans md:text-4xl text-[28px] font-bold">
        Featured Movies
      </h1>
      <button
        className="w-[90px]  flex justify-between items-center text-[#BE123C]"
        onClick={handleNext}
      >
        <span>See More</span>
        <img src={RightArrow} alt="" />
      </button>
    </div>
  );
};

export default FeaturedTitle;
