import React from "react";

const WaveSVG = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="321"
      fill="none"
      viewBox="0 0 1440 321"
    >
      <path
        fill="#FFBF44"
        stroke="#000"
        strokeWidth="2"
        d="M1440 322h1V116.375l-1.12.132c-21.33 2.514-48.53 10.926-79.16 21.674-12.61 4.424-25.79 9.24-39.4 14.212-19.53 7.133-39.93 14.586-60.77 21.66-70.72 24.005-145.89 43.405-206.84 30.469-35.56-7.546-78.336-24.479-126.516-45.556-18.446-8.068-37.686-16.746-57.607-25.73-32.066-14.462-65.895-29.72-101.008-44.512C654.699 40.748 526.946-2.506 400.468 1.5 198.248 7.907 49.886 85.252-2.1 124.2l-.4.3V322H1440z"
      ></path>
    </svg>
  );
};

export default WaveSVG;
