import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../../components/Movie";
import { getData } from "../../services/ApiClient";

const CountryDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getMovie = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getData(`movie/${id}`);
      if (res) setData(res);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return <Movie data={data} error={error} loading={loading} />;
};

export default CountryDetails;
