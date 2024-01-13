import { useState } from "react";
import api from "../api";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async (endpoint, params) => {
    try {
      setLoading(true);
      const response = await api.get(endpoint, { params });
      setData(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, errorMessage, fetchData };
};

export default useFetch;
