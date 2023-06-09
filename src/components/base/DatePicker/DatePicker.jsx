import React from "react";
import "./date-picker.css";

const DatePicker = ({ date, setDate, ...props }) => {
  const handleOnChange = (event) => setDate(event.target.value);

  return (
    <input
      className="date-picker"
      type="date"
      value={date}
      onChange={handleOnChange}
      style={props}
    ></input>
  );
};

export default React.memo(DatePicker);
