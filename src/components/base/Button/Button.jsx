import React from "react";
import styles from "./button.module.css";
import { Children } from "react";

const Button = ({
  variant = "primary",
  size = "lg",
  label = "Button",
  onClickHandler,
  hoverable,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${styles[variant]} ${styles[size]} ${styles["button"]} ${hoverable && styles["hover"]}`}
      onClick={onClickHandler}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};

export default React.memo(Button);
