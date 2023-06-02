import React, { useState } from "react";
import "./number-input.css";

const NumberInput = ({
  inputNumber,
  setInputNumber,
  minValue,
  maxValue,
  step,
  ...props
}) => {
  const [value, setValue] = useState(inputNumber);
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    const input = event.target.value;

    if (isNaN(input)) {
      setError("NaN");
      setValue(input);
    } else if (Number(input) < minValue) {
      setError("< min");
      setValue(Number(input));
    } else if (maxValue < Number(input)) {
      setError("max <");
      setValue(Number(input));
    } else {
      setError("");
      setInputNumber(Number(input));
      setValue(Number(input));
    }
  };

  return (
    <div className="number-input-wrapper">
      <div className="number-input-header">
        <button
          onClick={() => {
            if (error !== "NaN" && minValue <= value - step) {
              setInputNumber((value) => value - step);
              setValue((value) => value - step);
            }
          }}
        >
          -
        </button>
        <input type="text" value={value} onChange={handleOnChange} />
        <button
          onClick={() => {
            if (error !== "NaN" && value + step <= maxValue) {
              setInputNumber((value) => value + step);
              setValue((value) => value + step);
            }
          }}
        >
          +
        </button>
      </div>
      <div className="number-input-footer">{error && <div>{error}</div>}</div>
    </div>
  );
};

export default React.memo(NumberInput);
