import React, { useState, useEffect } from "react";
import "./Input.css";

export const Textinput = ({ wicon }) => {
  const icon = wicon ? "with-icon" : "without-icon";

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        className={icon}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
