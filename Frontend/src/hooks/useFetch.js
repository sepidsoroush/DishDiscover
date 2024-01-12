import { useState } from "react";
import api from "../api";

const useFetch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async (urlParams) => {
    try {
      setLoading(true);
      const response = await api.get(urlParams);
      setResults(response.data.results);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, errorMessage, fetchData };
};

export default useFetch;
