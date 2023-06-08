import React from "react";
import SearchSVG from "../SVG/SearchSVG";
import styles from "./searchField.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchField = ({
  value,
  resetValue,
  onChange,
  placeholder,
  ...inputProps
}) => {
  return (
    <div className={styles.inputContainer}>
      <SearchSVG height={16} width={16} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        {...inputProps}
        value={value}
        onChange={onChange}
      />

      <AiOutlineCloseCircle
        onClick={resetValue}
        size="20px"
        color="black"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default React.memo(SearchField);
