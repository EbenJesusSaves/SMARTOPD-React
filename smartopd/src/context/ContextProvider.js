import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [country, setCountry] = useState();
  const [user, setUser] = useState("");
  return (
    <MainContext.Provider
      value={{
        setCountry,
        country,
        user,
        setUser,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
