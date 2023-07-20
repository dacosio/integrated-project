import React, { useState } from "react";
import { Minus, Plus } from "../SVG";
import Typography from "../Typography/Typography";
import styles from "./NumberInput.module.css";

const NumberInput = ({
  inputNumber,
  setInputNumber,
  minValue = 0,
  maxValue = 1000,
  nanErrMsg,
  minErrMsg,
  maxErrMsg,
  ...props
}) => {
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    const input = event.target.value;

    if (isNaN(input)) {
      setError(nanErrMsg);
      setInputNumber(input);
    } else if (Number(input) < minValue) {
      setError(minErrMsg);
      setInputNumber(input);
    } else if (maxValue < Number(input)) {
      setError(maxErrMsg);
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
          <Minus width={16} height={16} fill="black" />
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
          <Plus width={16} height={16} fill="black" />
        </div>
      </div>
      <div className={`${styles["footer"]}`}>
        {error && (
          <Typography
            variant="body-4-regular"
            color="error"
            style={{ paddingTop: "8px" }}
          >
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default React.memo(NumberInput);
