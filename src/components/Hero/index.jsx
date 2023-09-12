import React, { useContext, useEffect, useState } from "react";
import HeroDetails from "./HeroDetails";
import { DataCtx } from "../../context/dataContext";

const Hero = () => {
  const { data } = useContext(DataCtx);
  const [randomNumber, setRandomNumber] = useState(1);
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const generateRandomNumber = () => {
      const min = 0;
      const max = 10;
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(randomNum);
    };
    generateRandomNumber();
    const interval = setInterval(generateRandomNumber, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="w-full min-h-[600px] bg-cover bg-center lg:px-[95px] md:px-8 px-4 flex items-center mt-0 mx-auto absolute top-0 transition-all duration-1000 ease-in "
      style={{
        backgroundImage: ` linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ), url(${IMG_URL}${data[randomNumber]?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeroDetails data={data[randomNumber]} />
    </div>
  );
};

export default Hero;
