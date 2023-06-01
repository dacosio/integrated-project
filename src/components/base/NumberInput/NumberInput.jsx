import React, { useEffect, useState } from "react";
import "./number-input.css";

const NumberInput = ({
  minValue,
  currentValue,
  maxValue,
  step,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className="number-input-wrapper">
      <button
        onClick={() => {
          if (minValue <= value - step) {
            setValue(value - step);
          }
        }}
      >
        -
      </button>
      <div>{value}</div>
      <button
        onClick={() => {
          if (value + step <= maxValue) {
            setValue(value + step);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default React.memo(NumberInput);
