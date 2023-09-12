import React from "react";
import MovieVideo from "./MovieVideo";
import MovieDetails from "./MovieDetails";
import { Loader } from "../../assets";

const Movie = ({ data, loading, error }) => {
  const { video, poster_path } = data;
  return loading ? (
    <img src={Loader} alt="loader" />
  ) : error ? (
    <p className="text-center text-2xl text-red-400 mt-[300px]">{error}</p>
  ) : (
    <div className="flex flex-col gap-8 py-6">
      <MovieVideo poster={poster_path} video={video} />
      <MovieDetails data={data} />
    </div>
  );
};

export default Movie;
