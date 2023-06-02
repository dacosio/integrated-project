import React from "react";
import "./dropdown.css";

const Dropdown = ({ selectedOption, setSelectedOption, options, ...props }) => {
  const handleOnChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select onChange={handleOnChange} defaultValue="" style={props}>
      <option value="" disabled>
        Select an option
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
