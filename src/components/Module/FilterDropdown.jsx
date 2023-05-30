import "./filterdropdown.css";
import React, { useState } from "react";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="filter-dropdown">
      <h2>Categories</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="option1">Fresh Food</option>
        <option value="option2">Packaged Food</option>
        <option value="option3">Household</option>
        <option value="option4">Beauty & Wellness</option>
      </select>
    </div>
  );
};
export default DropdownMenu;
