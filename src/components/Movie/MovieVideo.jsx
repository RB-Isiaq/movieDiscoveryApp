import React from "react";

const MovieVideo = ({ video, poster }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  return !video ? (
    <img
      src={`${IMG_URL}${poster}`}
      alt="poster"
      className="w-full sm:h-[450px]"
    />
  ) : (
    <video
      controls
      poster={`${IMG_URL}${poster}`}
      className="w-full sm:h-[450px]"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default MovieVideo;
