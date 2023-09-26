import Hero from "../../components/Hero";
import PaginateData from "../../components/PaginatedData";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useCallback, useContext, useEffect, useState } from "react";
import { getData } from "../../services/ApiClient";
import { DataCtx } from "../../context/dataContext";
import { Loader } from "../../assets";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const { data, setData, error, setError, title } = useContext(DataCtx);
  const titleEndpoint = title === "Top rated" ? "top_rated" : "popular";

  const getMovies = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getData(`movie/${titleEndpoint}`);
      if (res.results);
      setData(res.results);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [titleEndpoint]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <Navbar />
      {loading ? (
        <img className="mt-[280px]" src={Loader} alt="loader" />
      ) : error ? (
        <p className="text-center text-2xl text-red-400 mt-[280px]">{error}</p>
      ) : (
        <section className="w-full flex justify-center items-center flex-col">
          <Hero />
          <PaginateData movieData={data} loading={loading} error={error} />
        </section>
      )}
      <Footer />
    </>
  );
};

export default Home;
