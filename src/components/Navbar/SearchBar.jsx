import React, { useCallback, useContext, useEffect, useState } from "react";
import { Search } from "../../assets";
import { DataCtx } from "../../context/dataContext";
import { getData } from "../../services/ApiClient";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { setData, setTitle, setError } = useContext(DataCtx);

  const handleSubmit = useCallback(async () => {
    let res;
    try {
      if (value) {
        res = await getData(`search/movie?query=${value}`);
        setTitle("Searched");
      } else {
        res = await getData("movie/top_rated");
        setTitle("Top rated");
      }
      if (res.results.length > 0) {
        setError(null);
        setData(res.results);
      } else throw new Error("Movie not found!");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }, [value]);

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <form className="flex w-full sm:w-[525px] py-[6px] px-[10px] justify-center items-center rounded-md border-2 border-solid border-gray-300 gap-2">
      <input
        placeholder="What do you want to watch?"
        className="w-full border-none outline-none bg-inherit text-white placeholder:text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <img src={Search} alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
