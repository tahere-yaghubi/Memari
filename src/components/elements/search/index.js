import React, { useState } from "react";
import "./Search.css";

const Search = ({ onClick, search }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  return (
    <>
      <div className="search">
        {activeSearch && (
          <div
            className="overlay"
            onClick={() => {
              setActiveSearch(false);
            }}
          ></div>
        )}
        <div className={activeSearch ? "search-comp" : ""}>
          {activeSearch && (
            <input type="text" placeholder="جستجو . . ." required />
          )}
          <button
            className="search-button"
            onClick={() => {
              setActiveSearch(true);
            }}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        {activeSearch && <div className="content"></div>}
      </div>
    </>
  );
};

export default Search;
