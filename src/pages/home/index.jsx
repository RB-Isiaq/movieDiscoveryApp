import Hero from "../../components/Hero";
import PaginateData from "../../components/PaginatedData";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useCallback, useContext, useEffect, useState } from "react";
import { getData } from "../../services/ApiClient";
import { DataCtx } from "../../context/dataContext";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data, setData } = useContext(DataCtx);
  const getMovies = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getData("movie/popular");
      console.log(res);
      if (res);
      setData(res.results);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <section className="w-full flex-center flex-col">
        <Navbar />
        <Hero />
        <PaginateData data={data} loading={loading} error={error} />
        <Footer />
      </section>
    </>
  );
};

export default Home;
