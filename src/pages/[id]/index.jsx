import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../../components/Movie";
import { getData } from "../../services/ApiClient";

const CountryDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getMovie = useCallback(async () => {
    try {
      const res = await getData(`movie/${id}`);
      setData(res);
      console.log(data, "RDATAES");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return <Movie data={data} />;
};

export default CountryDetails;
