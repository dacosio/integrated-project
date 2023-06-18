import React, { useState } from "react";
import SearchSVG from "../SVG/SearchSVG";
import styles from "./searchField.module.css";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const SearchField = ({
  value,
  setValue,
  resetValue,
  onChange,
  placeholder,
  location,
  ...props
}) => {
  const [fill, setFill] = useState("9C9C9C");

  const { searchValue, updateSearchValue } = useContext(SearchContext);

  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      {location ? (
        <CiLocationOn size="20px" color={fill} />
      ) : (
        <AiOutlineSearch size="20px" color={fill} />
      )}

      <input
        onFocus={() => setFill("black")}
        onBlur={() => setFill("9C9C9C")}
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={searchValue}
        onChange={updateSearchValue}
        {...props}
      />

      <AiOutlineCloseCircle
        onClick={resetValue}
        size="20px"
        color={fill}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default React.memo(SearchField);
