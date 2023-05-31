import React from "react";
import CloseFilled from "../SVG/CloseFilled";
import SearchSVG from "../SVG/SearchSVG";
import "./searchField.css";

const SearchField = ({ value, resetValue, ...inputProps }) => {
  return (
    <div class="input-container">
      <SearchSVG height={16} width={16} />
      <input
        type="text"
        placeholder="Placeholder"
        {...inputProps}
        value={value}
      />
      <div onClick={resetValue} className="close-svg-container">
        {/* <CloseFilled height={100} width={100} /> */}x
      </div>
    </div>
  );
};

export default React.memo(SearchField);
