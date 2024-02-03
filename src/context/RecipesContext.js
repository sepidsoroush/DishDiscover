import React, { createContext, useContext } from "react";
import useRecipesApi from "../hooks/useRecipesApi";

const RecipesContext = createContext();

export const useRecipesContext = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error("useRecipesContext must be used within a RecipesProvider");
  }
  return context;
};

export const RecipesProvider = ({ children }) => {
  const recipesHook = useRecipesApi();

  return (
    <RecipesContext.Provider value={recipesHook}>
      {children}
    </RecipesContext.Provider>
  );
};
