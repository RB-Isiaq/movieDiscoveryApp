import React, { useContext, useState } from "react";
import { Search } from "../../assets";
import { DataCtx } from "../../context/dataContext";
import { getData } from "../../services/ApiClient";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { setData } = useContext(DataCtx);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await getData(`search/movie?query=${value}`);
      console.log(res);
      setData(res.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex w-full sm:w-[525px] py-[6px] px-[10px] justify-center items-center rounded-md border-2 border-solid border-gray-300 gap-2"
      onSubmit={handleSubmit}
    >
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
