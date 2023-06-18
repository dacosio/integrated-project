import React, { createContext, useState } from "react";

// Create the search context
export const SearchContext = createContext();

// Create the search context provider
export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <SearchContext.Provider value={{ searchValue, updateSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
