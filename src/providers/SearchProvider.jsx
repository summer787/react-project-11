import { PropTypes } from "prop-types";
import React, { useState } from "react";
import SearchContext from "../context/SearchContext";

function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
