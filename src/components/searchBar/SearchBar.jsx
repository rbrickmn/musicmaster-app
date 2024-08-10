import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar-wrapper">
        <input type="text" placeholder="Search" className="search-bar"/>
      </div>
    </>
  );
};

export default SearchBar;
