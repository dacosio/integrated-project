import React from "react";

const ArrowUp = ({ width = 24, height = 24, fill = "black", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path fill={fill} d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  );
};

export default ArrowUp;
