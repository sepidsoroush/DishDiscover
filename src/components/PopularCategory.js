import React, { useState, useEffect } from "react";
import Spacer from "./UI/Spacer";
import Header from "./UI/Header";
import Categories from "./Categories";
import ResultsList from "./ResultsList";
import useFetch from "../hooks/useFetch";

const PopularCategory = () => {
  const [params, setParams] = useState({ cuisine: "italian" });
  const { data, fetchData: fetchCategorySearch } = useFetch();

  useEffect(() => {
    fetchCategorySearch("/recipes/complexSearch", params);
  }, [params]);

  return (
    <>
      <Spacer>
        <Header moreLink={false}>Popular Category</Header>
      </Spacer>
      <Categories onParamsChange={setParams} />
      <ResultsList results={data.results} />
    </>
  );
};

export default PopularCategory;
