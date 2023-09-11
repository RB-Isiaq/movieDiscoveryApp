import React from "react";
import MovieVideo from "./MovieVideo";
import MovieDetails from "./MovieDetails";

const Movie = ({ data }) => {
  const { video, poster_path, backdrop_path } = data;
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="flex flex-col gap-8 py-6">
      <MovieVideo video={video ? video : poster_path} />
      <MovieDetails data={data} />
    </div>
  );
};

export default Movie;
