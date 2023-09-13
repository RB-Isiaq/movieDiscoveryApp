import React from "react";
import { Star } from "../../assets";
import { getYear } from "../../utils/getYear";
import { convertTime, getUtcDate } from "../../utils/timeConverter";
import { Link } from "react-router-dom";

const MovieDetails = ({ data }) => {
  const {
    title,
    release_date,
    runtime,
    vote_average,
    overview,
    popularity,
    genres,
    status,
    tagline,
    homepage,
  } = data;

  return (
    <div className="w-full max-w-[760px]">
      <div className="left flex flex-col gap-8">
        <div className="flex w-full items-center gap-4 flex-wrap">
          <p className="text-[#404040] font-poppins text-[23px]">
            <span className="mr-1" data-testid="movie-title">
              {title}{" "}
            </span>{" "}
            {" • "}
            <span className="mx-1" data-testid="movie-release-date">
              {getUtcDate(release_date)}
            </span>{" "}
            {" • "}
            <span className="mx-1" data-testid="movie-runtime">
              {runtime} mins
            </span>
          </p>
          {genres?.map((genre) => (
            <p className="text-[#B91C1C] text-sm font-medium" key={genre.id}>
              {genre.name}
            </p>
          ))}
          <div className="flex justify-center items-center gap-2">
            <img src={Star} alt="star" className="w-6 h-6" />
            <p className="font-poppins font-medium ">
              <span className="text-[20px] text-[#999]">
                {vote_average?.toPrecision(2)}
              </span>
              <span className="text-[20px] text-[#666]">
                {" "}
                | {(popularity / 1000)?.toPrecision(2)}K
              </span>
            </p>
          </div>
        </div>
        <div>
          <p
            className="text-[#333] font-poppins text-xl"
            data-testid="movie-overview"
          >
            {overview}
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-[#333] font-poppins text-lg">
            Status : <span className="text-[#BE123C]">{status}</span>
          </p>
          {tagline && (
            <p className="text-[#333] font-poppins text-lg">
              Tagline : <span className="text-[#BE123C]">{tagline}</span>
            </p>
          )}
          <p className="text-[#333] font-poppins text-lg">
            Home page :{" "}
            <Link to={homepage}>
              <span className="text-[#BE123C]">Visit website</span>
            </Link>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MovieDetails;
