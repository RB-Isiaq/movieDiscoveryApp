import React, { useContext } from "react";
import { RightArrow } from "../../assets";
import { DataCtx } from "../../context/dataContext";

const FeaturedTitle = ({ handleNext }) => {
  const { title } = useContext(DataCtx);
  return (
    <div className="flex justify-between w-full mb-10">
      <h1 className="font-dm_sans md:text-4xl text-[28px] font-bold">
        {title} Movies
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
