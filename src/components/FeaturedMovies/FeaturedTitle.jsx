import React, { useContext } from "react";
import { RightArrow } from "../../assets";
import { DataCtx } from "../../context/dataContext";

const FeaturedTitle = ({ handleNext }) => {
  const { title, setTitle } = useContext(DataCtx);

  const featuredTitle =
    title === "Search"
      ? "Top rated"
      : title === "Top rated"
      ? "Popular"
      : "Top rated";

  return (
    <div className="flex justify-between w-full mb-10">
      <div>
        <h1
          className="font-dm_sans md:text-4xl text-[28px] font-bold cursor-pointer"
          onClick={() => setTitle(featuredTitle)}
        >
          <span className="text-[#BE123C]">{title}</span> Movies
        </h1>
      </div>
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
