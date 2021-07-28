import React from "react";

function Search({ searchValue, setSearchValue }) {
  function searchOnChange(event) {
    setSearchValue(event.target.value)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchOnChange}
      />
    </div>
  );
}

export default Search;
