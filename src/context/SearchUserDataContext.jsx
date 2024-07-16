import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchDataProvider({ children }) {
  const [searchName, setSearchName] = useState("");
  const [searchTransactions, setSearchTransactions] = useState("");

  const handleChangeName = (field) => {
    setSearchTransactions("");
    setSearchName(field);
  };
  const handleChangeTransactions = (field) => {
    setSearchName("");
    setSearchTransactions(field);
  };

  return (
    <SearchContext.Provider
      value={{
        searchName,
        handleChangeName,
        searchTransactions,
        handleChangeTransactions,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearchData() {
  const context = useContext(SearchContext);

  if (context === undefined)
    throw new Error("SearchContext was used outside of SearchDataProvider");

  return context;
}

export { SearchDataProvider, useSearchData };
