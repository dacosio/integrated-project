import React from "react";
import "./modal.css";

const Modal = ({ children, onClose, ...props }) => {
  const handleOnChange = (event) => setTime(event.target.value);

  return (
    <input
      className="time-picker"
      type="time"
      value={time}
      onChange={handleOnChange}
      style={props}
    ></input>
  );
};

export default React.memo(TimePicker);
