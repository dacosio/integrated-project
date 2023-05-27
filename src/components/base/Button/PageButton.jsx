import React from "react";

export const PageButton = ({
  liClassName,
  buttonClassName,
  onClick,
  label,
}) => {
  return (
    <li className={liClassName}>
      <button type="button" className={buttonClassName} onClick={onClick}>
        {label}
      </button>
    </li>
  );
};
