import React, { useContext, useEffect, useState } from "react";
import HeroDetails from "./HeroDetails";
import { DataCtx } from "../../context/dataContext";

const Hero = () => {
  const { data } = useContext(DataCtx);
  const [index, setIndex] = useState(0);
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const increaseIndex = () => {
      if (index < data?.length - 1) setIndex((prev) => prev + 1);
      else setIndex(0);
    };
    const interval = setInterval(increaseIndex, 3000);
    return () => clearInterval(interval);
  }, [index, data]);

  const currentImage = data[index]?.backdrop_path;

  return (
    <div
      className="w-full min-h-[620px] lg:px-[95px] md:px-8 px-4 flex items-center mt-0 mx-auto absolute top-0 transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full h-full absolute top-0 left-0 opacity-100 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${IMG_URL}${currentImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(50%)",
        }}
      ></div>
      <div
        className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${IMG_URL}${
            data[(index + 1) % data.length]?.backdrop_path
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(50%)",
        }}
      ></div>
      <HeroDetails data={data[index]} />
    </div>
  );
};

export default Hero;
