import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Imdb, Like, Liked } from "../../assets";
import { getData } from "../../services/ApiClient";
import { getYear } from "../../utils/getYear";

const Card = ({ movie }) => {
  const { id, title, poster_path, release_date, vote_average } = movie;
  const [genres, setGenres] = useState([]);
  const [country, setCountry] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  const getMovie = useCallback(async () => {
    try {
      const res = await getData(`movie/${id}`);
      setGenres(res.genres);
      setCountry(res.production_countries[0].name);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const handleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="w-max relative hover:scale-[1.02] transition-all duration-1000">
      <div className="absolute top-0 flex justify-between w-full p-[15px]">
        <p className="flex justify-center items-center text-[12px] font-bold text-gray-900 rounded-xl bg-[#F3F4F6] bg-opacity-50 backdrop-blur-sm px-2 py-1">
          MOVIE
        </p>
        <button
          className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#F3F4F6] bg-opacity-50 backdrop-blur-sm"
          onClick={handleLiked}
        >
          <img src={isLiked ? Liked : Heart} alt="like" className="w-5 h-5 " />
        </button>
      </div>
      <Link to={`/movie/${id}`}>
        <div
          className="w-[320px] sm:w-[250px] h-[530px] flex flex-col justify-start gap-2 font-dm_sans shadow "
          data-testid="movie-card"
        >
          <img
            src={`${IMG_URL}${poster_path}`}
            alt="Movie"
            className="w-full h-[370px] object-cover mb-3"
            data-testid="movie-poster"
          />

          <p className="text-[#9CA3AF] text-xs font-bold px-1">
            {country},{" "}
            <span data-testid="movie-release-date">
              {getYear(release_date)}
            </span>
          </p>
          <h1
            className="text-[#111827] text-[18px] font-bold px-1"
            data-testid="movie-title"
          >
            {title}
          </h1>
          <div className="flex justify-between text-gray-900 font-normal px-1">
            <div className="flex gap-3">
              <img src={Imdb} alt="imdb" />
              <p className="text-[12px]">
                {Math.ceil(vote_average * 10).toPrecision(3)} / 100
              </p>
            </div>
            <div className="flex gap-3">
              <img src={Like} alt="like" />
              <p className="text-[12px]">{Math.ceil(vote_average * 10)}%</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs font-bold px-1">
            {genres.map((genre, i) => (
              <span key={genre.id}>
                {genre.name}{" "}
                {i === genres.length - 1 ? null : (
                  <span className="mr-2">,</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
