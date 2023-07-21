import React from "react";

const Minus = ({ width = 24, height = 24, fill = "black", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 448 512"
      fill={fill}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    </svg>
  );
};

export default Minus;
