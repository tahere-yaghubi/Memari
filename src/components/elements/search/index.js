import React, { useState } from "react";
import "./Search.css";

let timer;
const SearchModal = ({ onClose }) => {
  const [value, setValue] = useState("");

  function onInputChange({ target: { value } }) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setValue(value);
    }, 500);
  }

  return (
    <div className="search-modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="content">
        <label>
          <input
            type="text"
            placeholder="جستجو . . ."
            required
            onChange={onInputChange}
            autoFocus
          />
          <button className="submit-search" onClick={() => {}}>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </label>
        {value && (
          <div className="drop-down">
            <span>نتایج جستجوی {value} ...</span>
          </div>
        )}
      </div>
    </div>
  );
};
const Search = ({ onClick, search }) => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <>
      <div className="search">
        {activeSearch && <SearchModal onClose={() => setActiveSearch(false)} />}
        <div>
          <button
            className="search-button"
            onClick={() => {
              setActiveSearch(true);
            }}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
