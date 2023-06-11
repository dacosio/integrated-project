import React from "react";

const MapMarkerSVG = ({ width, height, fill, ...props }) => {
  return (
    <svg
      width="24"
      height="35"
      viewBox="0 0 24 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 33L11.626 33.3318L12 33.7534L12.374 33.3318L12 33ZM12 33C12.374 33.3318 12.3741 33.3317 12.3743 33.3315L12.3748 33.331L12.3765 33.329L12.3829 33.3218L12.4074 33.294C12.4288 33.2695 12.4603 33.2335 12.5012 33.1863C12.5831 33.092 12.7026 32.9531 12.8543 32.7738C13.1579 32.415 13.5907 31.894 14.1097 31.2429C15.1473 29.9412 16.5316 28.1166 17.9168 26.0262C19.3011 23.9372 20.6923 21.5738 21.7389 19.1951C22.7827 16.8228 23.5 14.3994 23.5 12.2C23.5 9.09985 22.2905 6.12489 20.1349 3.93005C17.979 1.73491 15.0529 0.5 12 0.5C8.94707 0.5 6.02105 1.73491 3.8651 3.93005C1.70946 6.12489 0.5 9.09985 0.5 12.2C0.5 14.3994 1.21729 16.8228 2.26109 19.1951C3.3077 21.5738 4.69892 23.9372 6.0832 26.0262C7.46841 28.1166 8.85266 29.9412 9.89026 31.2429C10.4093 31.894 10.8421 32.415 11.1457 32.7738C11.2974 32.9531 11.4169 33.092 11.4988 33.1863C11.5397 33.2335 11.5712 33.2695 11.5926 33.294L11.6171 33.3218L11.6235 33.329L11.6252 33.331L11.6257 33.3315C11.6259 33.3317 11.626 33.3318 12 33ZM12 15.7C11.0936 15.7 10.2225 15.3335 9.5788 14.6781C8.9348 14.0224 8.57143 13.1311 8.57143 12.2C8.57143 11.2689 8.9348 10.3776 9.5788 9.72193C10.2225 9.06652 11.0936 8.7 12 8.7C12.9064 8.7 13.7775 9.06652 14.4212 9.72193C15.0652 10.3776 15.4286 11.2689 15.4286 12.2C15.4286 12.6609 15.3394 13.117 15.1664 13.5423C14.9934 13.9676 14.74 14.3535 14.4212 14.6781C14.1024 15.0027 13.7244 15.2597 13.3091 15.4348C12.8938 15.61 12.449 15.7 12 15.7Z"
        fill="#0B5CBB"
        stroke="black"
      />
    </svg>
  );
};

export default MapMarkerSVG;
