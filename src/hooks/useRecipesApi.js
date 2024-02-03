import { useState } from "react";
import api from "../api";

const useRecipesApi = () => {
  const [recipe, setRecipe] = useState([]);
  const [randoms, setRandoms] = useState([]);
  const [complexSearch, setComplexSearch] = useState([]);
  const [bulkInfo, setBulkInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async (endpoint, params, setDataFunction) => {
    try {
      setLoading(true);
      const response = await api.get(endpoint, { params });
      setDataFunction(response.data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onFindRecipeById = async (endpoint, params) => {
    await fetchData(endpoint, params, setRecipe);
  };

  const onGetRandomRecipes = async (endpoint, params) => {
    await fetchData(endpoint, params, setRandoms);
  };

  const onComplexSearch = async (endpoint, params) => {
    await fetchData(endpoint, params, setComplexSearch);
  };

  const onFindBulkInfo = async (endpoint, params) => {
    await fetchData(endpoint, params, setBulkInfo);
  };

  return {
    recipe,
    randoms,
    complexSearch,
    bulkInfo,
    loading,
    errorMessage,
    onFindRecipeById,
    onGetRandomRecipes,
    onComplexSearch,
    onFindBulkInfo,
  };
};

export default useRecipesApi;
