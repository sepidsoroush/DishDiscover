import React, { createContext, useContext } from "react";
import useDatabase from "../hooks/useDatabase";

const DatabaseContext = createContext();

export const useDatabaseContext = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error(
      "useDatabaseContext must be used within a DatabaseProvider"
    );
  }
  return context;
};

export const DatabaseProvider = ({ children }) => {
  const databaseHook = useDatabase();

  return (
    <DatabaseContext.Provider value={databaseHook}>
      {children}
    </DatabaseContext.Provider>
  );
};
