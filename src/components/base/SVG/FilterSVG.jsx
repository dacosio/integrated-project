import React from "react";

const FilterSVG = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} //18
      height={height} //14
      fill={fill}
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M1.15 11.9h3.16c0 .77.62 1.39 1.39 1.39.77 0 1.39-.62 1.39-1.39m10.19 0H7.08c0-.77-.62-1.39-1.39-1.39-.77 0-1.39.62-1.39 1.39M1.15 2.1h3.16c0 .77.62 1.39 1.39 1.39.77 0 1.39-.62 1.39-1.39m10.19 0H7.08c0-.77-.62-1.39-1.39-1.39-.77 0-1.39.62-1.39 1.39M17.28 7h-3.16m0 0c0-.77-.62-1.39-1.39-1.39-.77 0-1.39.62-1.39 1.39m2.78 0c0 .77-.62 1.39-1.39 1.39-.77 0-1.39-.62-1.39-1.39m0 0H1.15"
      />
    </svg>
  );
};

export default FilterSVG;
