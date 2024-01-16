import React, { useEffect } from "react";
import Spacer from "./UI/Spacer";
import Header from "./UI/Header";
import ResultsList from "./ResultsList";
import useFetch from "../hooks/useFetch";

const Trending = () => {
  const { data, fetchData: fetchComplexSearch } = useFetch();

  useEffect(() => {
    const callApi = async () => {
      await fetchComplexSearch("/recipes/random?number=5", {});
    };
    callApi();
    const intervalId = setInterval(callApi, 12 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Spacer>
        <Header moreLink={true}>Trending now 🔥</Header>
      </Spacer>
      <ResultsList results={data.recipes} />
    </>
  );
};

export default Trending;
