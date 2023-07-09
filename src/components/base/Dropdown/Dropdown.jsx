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

   
};

export default React.memo(Dropdown);
