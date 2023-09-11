import React from "react";

const MovieVideo = ({ video }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <img
      src={`${IMG_URL}${video}`}
      alt="poster"
      className="w-full sm:h-[450px]"
    />
  );
};

export default MovieVideo;
