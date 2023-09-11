import React from "react";
import { Imdb, Like, Play } from "../../assets";

const HeroDetails = () => {
  return (
    <div className="w-[404px] h-[285px] flex flex-col gap-4 font-dm_sans text-white">
      <h1 className="text-white font-dm_sans text-[48px] font-bold leading-[56px]">
        John Wick 3 : Parabellum
      </h1>
      <div className="flex gap-4">
        <div className="flex gap-3">
          <img src={Imdb} alt="imdb" />
          <p className="text-[12px]">86.0 / 100</p>
        </div>
        <div className="flex gap-3">
          <img src={Like} alt="like" />
          <p className="text-[12px]">97%</p>
        </div>
      </div>
      <p className="text-[14px] w-[302px]">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <div className="w-[169px] flex px-4 py-[6px] gap-[8px] bg-[#BE123C] rounded-md">
        <img src={Play} alt="play" />
        <p className="text-[13px] uppercase">Watch trailer</p>
      </div>
    </div>
  );
};

export default HeroDetails;
