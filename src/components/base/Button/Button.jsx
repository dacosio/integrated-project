import React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  block,
  size,
  onClick,
  backgroundColor,
  color,
  label,
  ...props
}) => {
  const mode = primary ? "btn--primary" : "btn--secondary";

  const style = {
    backgroundColor: backgroundColor || null,
    color: color || null,
  };

  return (
    <button
      type="button"
      className={["btn", mode, `btn--${size}`, block ? "btn--block" : ""].join(
        " "
      )}
      onClick={onClick}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

export default React.memo(Button);
