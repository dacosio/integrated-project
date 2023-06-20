import React from "react";

const SettingsSVG = ({ width = 20, height = 22, fill, stroke, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} //20
      height={height} //22
      fill="none"
      viewBox="0 0 20 22"
    >
      <path
        stroke={stroke}
        strokeWidth="2"
        d="M16.562 4.979l-2.07.9c-.61-.51-1.3-.91-2.06-1.19l-.28-2.26a.66.66 0 00-.51-.56 9.57 9.57 0 00-1.62-.14c-.56 0-1.09.05-1.62.14-.28.05-.48.28-.51.56l-.27 2.26c-.76.28-1.45.68-2.06 1.19l-2.08-.9a.615.615 0 00-.73.16c-.69.82-1.25 1.77-1.63 2.79-.1.27 0 .56.23.73l1.83 1.36c-.15.78-.15 1.58 0 2.36l-1.83 1.36c-.23.16-.32.47-.23.73.38 1.02.93 1.96 1.62 2.78.18.21.48.28.73.16l2.08-.9c.61.51 1.3.91 2.06 1.19l.27 2.26c.04.28.24.51.51.56.54.09 1.07.14 1.63.14.56 0 1.09-.05 1.62-.14.28-.05.48-.28.51-.56l.27-2.26c.76-.28 1.45-.68 2.06-1.19l2.08.9c.25.11.56.05.73-.16.68-.82 1.24-1.75 1.62-2.78.1-.27 0-.56-.23-.72l-1.83-1.36c.09-.4.13-.8.13-1.2 0-.4-.04-.8-.11-1.19l1.83-1.36c.23-.16.32-.47.23-.73a9.433 9.433 0 00-1.62-2.78.633.633 0 00-.74-.16l-.01.01z"
      ></path>
      <path
        stroke={stroke}
        strokeWidth="2"
        d="M10.032 14.359a3.16 3.16 0 100-6.32 3.16 3.16 0 000 6.32z"
      ></path>
    </svg>
  );
};

export default SettingsSVG;
