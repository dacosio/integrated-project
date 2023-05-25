import React from "react";
import { useState } from "react";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ isLoved }) => {
  const [loveState, setLoveState] = useState(isLoved);

  let mode;
  let label;
  let onClickHandler;

  if (loveState) {
    mode = "love-mode";
    label = "Loved!";
    onClickHandler = () => {
      setLoveState(!loveState);
    };
  } else {
    mode = "unlove-mode";
    label = "Love Button";
    onClickHandler = () => {
      setLoveState(!loveState);
    };
  }

  return (
    <button
      type="button"
      className={["btn", mode].join(" ")}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};
