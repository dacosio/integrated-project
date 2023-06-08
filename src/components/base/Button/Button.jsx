import React from "react";
import styles from "./button.module.css";
import { Children } from "react";

const Button = ({
  variant,
  size,
  label,
  onClickHandler,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${styles[size]} ${styles[variant]} ${styles.button}`}
      onClick={onClickHandler}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};

export default React.memo(Button);
