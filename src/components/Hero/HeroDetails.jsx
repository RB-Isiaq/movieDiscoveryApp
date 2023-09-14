import { Imdb, Like, Play } from "../../assets";
import { Link } from "react-router-dom";
import { truncateWords } from "../../utils/truncateWords";

const HeroDetails = ({ data }) => {
  return (
    <div className="w-[504px] min-h-[300px] flex flex-col gap-4 font-dm_sans text-white mt-28 z-40">
      <h1 className="text-white font-dm_sans text-[30px] sm:text-[48px] font-bold leading-[40px] sm:leading-[56px]">
        {data?.title}
      </h1>
      <div className="flex gap-4">
        <div className="flex gap-3">
          <img src={Imdb} alt="imdb" />
          <p className="text-[12px]">
            {Math.ceil(data?.vote_average * 10).toPrecision(3)} / 100
          </p>
        </div>
        <div className="flex gap-3">
          <img src={Like} alt="like" />
          <p className="text-[12px]">{Math.ceil(data?.vote_average * 10)}%</p>
        </div>
      </div>
      <p className="text-[14px] w-[302px]">{truncateWords(data?.overview)}</p>
      <Link to={`/movie/${data?.id}`}>
        <div className="w-[169px] h-[36px] flex justify-center items-center gap-[8px] bg-[#BE123C] rounded-md">
          <img src={Play} alt="play" />
          <p className="text-[13px] uppercase">Watch trailer</p>
        </div>
      </Link>
    </div>
  );
};

export default HeroDetails;
