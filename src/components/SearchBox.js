import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3"
        type="search"
        placeholder="Search Something"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
