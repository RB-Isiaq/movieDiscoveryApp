import React from "react";
import MovieTrailer from "./MovieTrailer";

const MovieVideo = ({ source, videos }) => {
  return source ? (
    <MovieTrailer videoId={source} />
  ) : (
    <MovieTrailer videoId={videos?.results[0].key} />
  );
};

export default MovieVideo;
