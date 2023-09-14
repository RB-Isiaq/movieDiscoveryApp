import React from "react";
import YouTube from "react-youtube";
import MovieTrailer from "./MovieTrailer";

const MovieVideo = ({ poster, source }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  return source ? (
    <MovieTrailer videoId={source} />
  ) : (
    <img
      src={`${IMG_URL}${poster}`}
      alt="poster"
      className="w-full sm:h-[450px]"
    />
  );
};

export default MovieVideo;
