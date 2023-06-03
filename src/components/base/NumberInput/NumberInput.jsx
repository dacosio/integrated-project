import React, { useState } from "react";
import "./number-input.css";

const NumberInput = ({
  inputNumber,
  setInputNumber,
  minValue = 0,
  maxValue,
  ...props
}) => {
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    const input = event.target.value;

    if (isNaN(input)) {
      setError("NaN");
      setInputNumber(input);
    } else if (Number(input) < minValue) {
      setError("< min");
      setInputNumber(input);
    } else if (maxValue < Number(input)) {
      setError("max <");
      setInputNumber(input);
    } else {
      setError("");
      setInputNumber(Number(input));
    }
  };

  return (
    <div className="number-input-wrapper">
      <div className="number-input-header">
        <button
          onClick={() => {
            if (minValue <= inputNumber - 1) {
              setInputNumber((value) => value - 1);
            }
          }}
        >
          -
        </button>
        <input type="text" value={inputNumber} onChange={handleOnChange} />
        <button
          onClick={() => {
            if (inputNumber + 1 <= maxValue) {
              setInputNumber((value) => value + 1);
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
