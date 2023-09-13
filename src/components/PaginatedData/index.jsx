import React, { useContext, useEffect, useState } from "react";
import Card from "../Card";
import FeaturedMovies from "../FeaturedMovies";
import { Loader } from "../../assets";
import { DataCtx } from "../../context/dataContext";

const PaginateData = ({ loading, error }) => {
  const { data } = useContext(DataCtx);
  const [index, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(10);
  const [paginatedData, setPaginatedData] = useState(
    data.slice(index, lastIndex)
  );

  const nextHandler = () => {
    setLastIndex(index);
    setIndex((prev) => (prev === 1 ? 0 : prev + 1));
    setPaginatedData(data.slice(lastIndex, lastIndex + 10));
  };
  useEffect(() => {
    setPaginatedData(data.slice(index, lastIndex));
  }, [data]);

  return (
    <>
      <FeaturedMovies handleNext={nextHandler} />
      {loading ? (
        <img src={Loader} alt="loader" />
      ) : error ? (
        <p className="text-center text-lg text-red-400">{error}</p>
      ) : (
        <div className="w-full flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-[76px] pt-0 sm:py-10">
          {paginatedData.map((item, i) => (
            <Card key={i} movie={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default PaginateData;
