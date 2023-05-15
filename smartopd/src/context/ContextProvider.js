import React, { createContext, useState } from "react";

const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [country, setCountry] = useState();

  return (
    <MainContext.Provider
      value={{
        setCountry,
        country,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
