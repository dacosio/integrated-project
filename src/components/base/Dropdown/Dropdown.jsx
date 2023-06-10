import React from "react";
import styles from "./dropdown.module.css";

const Dropdown = ({
  selectedOption,
  setSelectedOption,
  options,
  label,
  ...props
}) => {
  const handleOnChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      className={`${styles["select"]}`}
      onChange={handleOnChange}
      defaultValue=""
      style={props}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Dropdown);
