import React from "react";
import styles from "./date-picker.module.css";

const DatePicker = ({ date, setDate, ...props }) => {
  const handleOnChange = (event) => setDate(event.target.value);

  return (
    <div className={`${styles["wrapper"]}`}>
      <input
        className={`${styles["input"]}`}
        type="date"
        value={date}
        onChange={handleOnChange}
        style={props}
      ></input>
    </div>
  );
};

export default React.memo(DatePicker);
