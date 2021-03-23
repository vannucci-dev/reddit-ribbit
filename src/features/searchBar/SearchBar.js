import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setValue("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="searchBar"
      type="text"
      value={value}
      placeholder="  ribbit ribbit..."
      onChange={handleChange}
      onKeyDown={handleKey}
    ></input>
  );
};

export default SearchBar;
