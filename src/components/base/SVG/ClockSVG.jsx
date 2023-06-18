import React from "react";

const ClockSVG = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...props}
    >
      <path
        fill="var(--gray)"
        d="M10 0C4.47581 0 0 4.47581 0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10C20 4.47581 15.5242 0 10 0ZM12.3024 14.1169L8.74597 11.5323C8.62097 11.4395 8.54839 11.2944 8.54839 11.1411V4.35484C8.54839 4.08871 8.76613 3.87097 9.03226 3.87097H10.9677C11.2339 3.87097 11.4516 4.08871 11.4516 4.35484V9.90726L14.0121 11.7702C14.2298 11.9274 14.2742 12.2298 14.1169 12.4476L12.9798 14.0121C12.8226 14.2258 12.5202 14.2742 12.3024 14.1169Z"

      />
    </svg>
  );
};

export default ClockSVG;
