import React, { useCallback, useEffect, useState } from "react";
import MovieVideo from "./MovieVideo";
import MovieDetails from "./MovieDetails";
import { Loader } from "../../assets";
import { searchMovieOnYouTube } from "../../services/ApiClient";

const Movie = ({ data, loading, error }) => {
  const { title, videos } = data;
  const [videoKey, setVideoKey] = useState("");

  const getMovieTrailer = useCallback(async () => {
    if (title) {
      try {
        const res = await searchMovieOnYouTube(title);
        setVideoKey(res);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [setVideoKey, title]);

  useEffect(() => {
    getMovieTrailer();
  }, [getMovieTrailer]);

  return loading ? (
    <img src={Loader} alt="loader" />
  ) : error ? (
    <p className="text-center text-2xl text-red-400 mt-[300px]">{error}</p>
  ) : (
    <div className="flex flex-col gap-8 py-6">
      <MovieVideo source={videoKey} videos={videos} />
      <MovieDetails data={data} />
    </div>
  );
};

export default Movie;
