import React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  block,
  round,
  size,
  onClick,
  backgroundColor,
  color,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const style = {
    backgroundColor: backgroundColor || null,
    color: color || null,
  };

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        mode,
        `storybook-button--${size}${round ? "--round" : ""}`,
        block ? "storybook-button--block" : "",
      ].join(" ")}
      onClick={onClick}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

export default React.memo(Button);
