import React, { useState } from "react";
import "./number-input.css";

const NumberInput = ({
  minValue,
  currentValue,
  maxValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(currentValue);

  return (
    <div className="number-input-wrapper">
      <button
        onClick={() => {
          if (minValue <= value - 1) {
            setValue(value - 1);
            onChange(value - 1);
          }
        }}
      >
        -
      </button>
      <div>{value}</div>
      <button
        onClick={() => {
          if (value + 1 <= maxValue) {
            setValue(value + 1);
            onChange(value + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default React.memo(NumberInput);
