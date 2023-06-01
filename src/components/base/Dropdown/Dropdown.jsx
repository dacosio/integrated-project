import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ options, onChange, ...props }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select onChange={handleOnChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Dropdown);
