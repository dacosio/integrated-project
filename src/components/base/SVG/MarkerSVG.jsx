import React from "react";

const MarkerSVG = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        d="m13.19 34-.768.64.768.922.768-.922-.768-.64Zm0 0 .769.64.002-.003.006-.008.024-.029a29.388 29.388 0 0 0 .426-.527 75.252 75.252 0 0 0 4.788-6.795c1.31-2.103 2.63-4.49 3.627-6.902.992-2.4 1.69-4.89 1.69-7.176 0-3.21-1.175-6.305-3.29-8.598C19.112 2.307 16.221 1 13.19 1c-3.033 0-5.923 1.307-8.041 3.602C3.033 6.895 1.858 9.99 1.858 13.2c0 2.287.698 4.776 1.69 7.176.996 2.411 2.318 4.8 3.627 6.902a75.266 75.266 0 0 0 4.788 6.795 44.682 44.682 0 0 0 .426.527l.024.03.006.007.002.002.769-.639Zm1.003-18.017.41.912-.41-.912c-.321.144-.661.217-1.003.217-.686 0-1.362-.295-1.874-.85a3.177 3.177 0 0 1-.816-2.15c0-.82.301-1.593.816-2.15.511-.555 1.188-.85 1.874-.85.686 0 1.363.295 1.874.85.515.557.816 1.33.816 2.15 0 .405-.074.804-.215 1.174-.141.37-.347.701-.6.976-.255.276-.552.49-.872.633Z"
      />
    </svg>
  );
};

export default MarkerSVG;
