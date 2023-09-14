import React, { useCallback, useEffect, useState } from "react";
import MovieVideo from "./MovieVideo";
import MovieDetails from "./MovieDetails";
import { Loader } from "../../assets";
import { searchMovieOnYouTube } from "../../services/ApiClient";

const Movie = ({ data, loading, error }) => {
  const { video, poster_path, title } = data;
  const [videoPath, setVideoPath] = useState("");

  const getMovieTrailer = useCallback(async () => {
    if (title) {
      try {
        const res = await searchMovieOnYouTube(title);
        console.log(res);
        setVideoPath(res);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [setVideoPath, title]);

  useEffect(() => {
    getMovieTrailer();
  }, [getMovieTrailer]);

  return loading ? (
    <img src={Loader} alt="loader" />
  ) : error ? (
    <p className="text-center text-2xl text-red-400 mt-[300px]">{error}</p>
  ) : (
    <div className="flex flex-col gap-8 py-6">
      <MovieVideo poster={poster_path} video={video} source={videoPath} />
      <MovieDetails data={data} />
    </div>
  );
};

export default Movie;
