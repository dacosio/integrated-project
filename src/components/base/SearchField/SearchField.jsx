import React from "react";
import SearchSVG from "../SVG/SearchSVG";
import styles from "./searchField.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const SearchField = ({
  value,
  resetValue,
  onChange,
  placeholder,
  location = false,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      {location ? (
        <CiLocationOn height={16} width={16} fill={"#9C9C9C"} />
      ) : (
        <SearchSVG height={16} width={16} fill={"#9C9C9C"} />
      )}

      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        {...props}
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
