import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./number-input.module.css";

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
    <div className={`${styles["wrapper"]}`}>
      <div className={`${styles["header"]}`}>
        <div
          className={`${styles["btn"]} ${styles["minus"]}`}
          onClick={() => {
            if (minValue <= inputNumber - 1) {
              setInputNumber((value) => value - 1);
            }
          }}
        >
          <FaMinus size={16} />
        </div>
        <input
          className={`${styles["ipt"]}`}
          type="text"
          value={inputNumber}
          onChange={handleOnChange}
        />
        <div
          className={`${styles["btn"]} ${styles["plus"]}`}
          onClick={() => {
            if (inputNumber + 1 <= maxValue) {
              setInputNumber((value) => value + 1);
            }
          }}
        >
          <FaPlus size={16} />
        </div>
      </div>
      <div className={`${styles["footer"]}`}>{error && <div>{error}</div>}</div>
    </div>
  );
};

export default React.memo(NumberInput);
