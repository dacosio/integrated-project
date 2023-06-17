import React from "react";

const LocationSVG = ({ width, height, fill, ...props }) => {
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
        d="M7.93103 10.925C7.17981 10.925 6.45935 10.6221 5.92815 10.0829C5.39695 9.54376 5.09852 8.8125 5.09852 8.05C5.09852 7.2875 5.39695 6.55624 5.92815 6.01707C6.45935 5.4779 7.17981 5.175 7.93103 5.175C8.68226 5.175 9.40272 5.4779 9.93392 6.01707C10.4651 6.55624 10.7635 7.2875 10.7635 8.05C10.7635 8.42755 10.6903 8.8014 10.5479 9.15022C10.4056 9.49903 10.1969 9.81596 9.93392 10.0829C9.6709 10.3499 9.35865 10.5617 9.01499 10.7062C8.67133 10.8506 8.30301 10.925 7.93103 10.925ZM7.93103 0C5.82759 0 3.8103 0.848123 2.32295 2.35779C0.835589 3.86746 0 5.91501 0 8.05C0 14.0875 7.93103 23 7.93103 23C7.93103 23 15.8621 14.0875 15.8621 8.05C15.8621 5.91501 15.0265 3.86746 13.5391 2.35779C12.0518 0.848123 10.0345 0 7.93103 0Z"

      />
    </svg>
  );
};

export default LocationSVG;
