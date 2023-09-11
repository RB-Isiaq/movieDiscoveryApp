import React, { useEffect, useState } from "react";
import Card from "../Card";
import FeaturedMovies from "../FeaturedMovies";
import { Loader } from "../../assets";

const PaginateData = ({ data, loading, error }) => {
  const [index, setIndex] = useState(1);
  // const [paginatedData, setPaginatedData] = useState(data.slice());
  const [paginatedData, setPaginatedData] = useState(data);

  const nextHandler = () => {
    setIndex((prev) => (prev >= data.length ? 0 : prev + 10));
    setPaginatedData(data.slice(index, index + 10));
  };

  const prevHandler = () => {
    setIndex((prev) => (prev <= 0 ? 0 : prev - 10));
    setPaginatedData(data.slice(index - 20, index - 10));
  };

  useEffect(() => {
    setIndex(10);
  }, []);
  return (
    <>
      <FeaturedMovies handleNext={index <= 10 ? nextHandler : prevHandler} />
      {loading ? (
        <img src={Loader} alt="loader" />
      ) : error ? (
        <p className="text-center text-lg">{error}</p>
      ) : (
        <div className="w-full flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-[76px] py-10">
          {data.map((item) => (
            <Card key={item} movie={item} />
          ))}
        </div>
      )}
      <div className="flex gap-4 items-center">
        <button
          className="py-3 px-6 border rounded-lg disabled:cursor-not-allowed disabled:opacity-[0.3]"
          disabled={index <= 10}
          onClick={prevHandler}
        >
          Prev
        </button>
        <span>{Math.round(index / 10)}</span>
        {"/"}
        <span>{Math.ceil(data.length / 10)}</span>
        <button
          className="py-3 px-6 border rounded-lg disabled:cursor-not-allowed disabled:opacity-[0.3]"
          disabled={index >= data.length}
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PaginateData;
