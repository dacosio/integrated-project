import React from "react";

const LeftHandSVG = ({ width, height, fill, stroke, style, ...props }) => {
  return (
    <div style={{ height, width, ...style }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 318.8 210.21"
        height={height}
        width={width}
        {...props}
      >
        <path d="m313.75 21.91-.1-.2c-.2-.3-.3-.5-.5-.7-3-3.9-7.1-6.5-11.8-7.3l-1.5-.3c-29.7-5.5-69.1-11.1-87.9-7-17.2 3.8-31.6 11.5-38.7 15.8l-21.4 2.7-12.6 19.3c-4.5 3.8-8 7.1-10.2 9.8-3.3 3.9-5.1 8.8-5.4 14l-15 23 14 5.1-15.6 23.9c-3.5-.3-7.2-.4-10.9-.2-13.8.6-23.1 10.5-28.7 16.4-1.2-.5-2.4-1.1-3.4-1.5l-.2-.1c-3.4-1.5-6.9-3.1-10.6-3.8-8.5-1.6-18.5-1.2-26.1 1.2-6.2 2-17.2 8.4-21 28.7-.9 5-3.4 22.1 3.9 32.6 3 4.4 7.4 7.3 12.4 8.2l1.5.3c30.6 5.6 54.4 8.4 71 8.4 6.8 0 12.5-.4 17.2-1.3 14.3-3.2 26.7-9 34.7-13.5 4.1 2.2 8.8 2.9 13.4 1.9.4 0 .7-.1 1-.2 4.7-1.3 8.8-4.3 11.5-8.4l10.9-16.7c2.8-2.3 7.9-6.7 11.2-10.7 4.3-5.3 5.3-10.9 5.4-14.8l16.2-24.8-14-5.1 13.9-21.3c3.6.4 7.5.5 11.4.3 13.8-.6 23.1-10.5 28.7-16.4v-.1c1.3.5 2.6 1.1 3.5 1.5 3.4 1.5 6.9 3.1 10.6 3.8 8.5 1.6 18.5 1.2 26.1-1.2 6.2-2 17.2-8.3 21-28.7.9-5 3.4-22-3.9-32.6Z" />
        <path
          d="M307.85 17.41c-.2-.3-.4-.5-.6-.8-2.9-3.8-6.8-6.2-11.2-7l-1.5-.3c-29.6-5.4-68.8-11.1-87.5-7-17.2 3.8-31.5 11.4-38.6 15.8l-21.1 2.7-12.4 19c-3.4 2.8-7.5 6.4-10.2 9.8-3.1 3.9-4.9 8.7-5.1 13.7l-14.5 22.1 14 5.1-16.6 25.5c-3.2-.3-7-.5-11.4-.3-13.4.6-22.5 10.3-28 16.1l-.5.5c-1.4-.5-3-1.3-4.2-1.8-3.4-1.5-6.8-3-10.4-3.7-8.4-1.7-18.2-1.2-25.7 1.1-6 1.9-16.6 8.1-20.3 27.9-.9 4.9-3.4 21.6 3.7 31.8 2.9 4.2 7.1 6.9 11.8 7.8l1.5.3c43.1 7.9 72.5 10.3 87.5 7 14.6-3.2 27.2-9.3 34.9-13.6 4 2.3 8.6 3 13.2 2 .3-.1.6-.1.9-.2 4.5-1.2 8.4-4 11-7.9l11-16.8c3.1-2.5 8-6.8 11.2-10.6 4.1-5 5.1-10.3 5.2-14.5l15.7-24-14-5.1 15-22.9c3.3.4 7.2.6 11.8.4 13.4-.6 22.5-10.3 28-16.1.2-.2.3-.4.5-.5 1.4.5 3 1.2 4.1 1.8 3.4 1.5 6.9 3 10.5 3.7 8.4 1.7 18.2 1.2 25.6-1.1 6-1.9 16.6-8.1 20.3-27.9 1-5 3.5-21.6-3.6-32Z"
          style={{
            fill: "#c1d6ff",
          }}
        />
        <path d="M89.95 205.21c-16.6 0-40.4-2.8-71-8.4l-1.5-.3c-5-.9-9.4-3.8-12.4-8.2-7.3-10.5-4.8-27.6-3.9-32.6 3.8-20.3 14.8-26.7 21-28.7 7.6-2.4 17.6-2.8 26.1-1.2 3.7.7 7.2 2.3 10.6 3.8l.2.1c1 .4 2.2 1 3.4 1.5 5.6-5.9 14.9-15.8 28.7-16.4 3.7-.2 7.4-.1 10.9.2l15.6-23.9-14-5.1 15-23c.3-5.2 2.1-10.1 5.4-14 2.2-2.7 5.7-6 10.2-9.8l12.6-19.3 21.4-2.7c7.1-4.3 21.5-12 38.7-15.8 18.8-4.1 58.2 1.5 87.9 7l1.5.3c4.7.8 8.8 3.4 11.8 7.3.2.2.3.4.5.7l.1.2c7.3 10.6 4.8 27.6 3.9 32.6-3.8 20.4-14.8 26.7-21 28.7-7.6 2.4-17.6 2.8-26.1 1.2-3.7-.7-7.2-2.3-10.6-3.8-.9-.4-2.2-1-3.5-1.5v.1c-5.6 5.9-14.9 15.8-28.7 16.4-3.9.2-7.8.1-11.4-.3l-13.9 21.3 14 5.1-16.2 24.8c-.1 3.9-1.1 9.5-5.4 14.8-3.3 4-8.4 8.4-11.2 10.7l-10.9 16.7c-2.7 4.1-6.8 7.1-11.5 8.4-.3.1-.6.2-1 .2-4.6 1-9.3.3-13.4-1.9-8 4.5-20.4 10.3-34.7 13.5-4.7.9-10.4 1.3-17.2 1.3Zm-52.5-78.2c-5.2 0-10.4.7-14.7 2.1-5.8 1.8-16 7.8-19.6 27.1-.9 4.8-3.3 21.2 3.6 31.1 2.7 3.9 6.7 6.6 11.2 7.4l1.5.3c43 7.9 72.3 10.2 87.1 7 14.4-3.2 26.8-9.1 34.7-13.5l.5-.3.5.3c3.8 2.1 8.2 2.8 12.5 1.9.3-.1.6-.1.9-.2 4.3-1.1 8-3.8 10.4-7.5l11.2-17.1c2.8-2.2 7.9-6.6 11.1-10.5 4-4.9 4.9-10.3 5-13.9v-.3l15.1-23.2-14-5.1 16-24.5.6.1c3.7.4 7.6.5 11.7.3 13-.6 21.9-10.1 27.3-15.8l.1-.1.4-.4.5-.4.6.2c1.3.5 2.9 1.2 4.2 1.8 3.3 1.5 6.8 3 10.3 3.7 8.2 1.6 17.8 1.2 25.2-1.1 5.8-1.8 16-7.8 19.6-27.1.9-4.8 3.3-21.1-3.6-31.1l-.1-.2c-.2-.2-.3-.4-.4-.6-2.7-3.6-6.4-5.8-10.6-6.6l-1.5-.3c-29.5-5.4-68.6-11-87.1-7-17.1 3.7-31.3 11.4-38.3 15.6l-.2.1-20.9 2.7-12.3 18.9c-4.5 3.7-7.9 7-10 9.6-3 3.7-4.7 8.2-4.9 13.1v.3l-14.3 21.2 14 5.1-17.7 27.1-.6-.1c-3.6-.4-7.4-.5-11.2-.3-13 .6-22 10.1-27.3 15.8-.1.2-.3.3-.5.5l-.5.5-.6-.2c-1.4-.5-2.9-1.2-4.1-1.7l-.2-.1c-3.3-1.5-6.7-3-10.2-3.6-3.3-.7-6.8-1-10.4-1Z" />
        <path d="M189.35 46.11c1.4-.3 2.6-1.1 3.4-2.3 1.3-2 1.1-4.4-.2-6.2-.4-.5-.8-.9-1.3-1.2-1.2-.8-2.6-1-4-.8s-2.6 1.1-3.4 2.3c-.8 1.2-1.1 2.6-.8 4s1.1 2.6 2.3 3.4c1.1.9 2.6 1.1 4 .8Zm-2.7-2.7c-.7-.4-1.1-1.1-1.3-1.9-.2-.8 0-1.6.4-2.2.4-.7 1.1-1.1 1.9-1.3.8-.2 1.6 0 2.2.4 1.4.9 1.8 2.7.9 4.1-.9 1.4-2.8 1.8-4.1.9Z" />
        <path d="m154.35 32.11-10.4 15.9c-2.2 1.8-7.2 5.9-9.9 9.2-2.8 3.5-2.6 7.4-2.3 9.4l-8.3 12.8 63 23.1.9.3 17.6-26.9c1.7.5 7.7 2 17 1.6 8.5-.4 15-7.3 19.7-12.3 1.6-1.7 3-3.2 4.2-4.2 2.9-2.3 8.8.3 14 2.6 2.9 1.3 5.6 2.5 7.9 2.9 6.4 1.3 14.2 1 19.7-.8 5.9-1.9 10.3-8.5 12.2-18.7 1.5-7.9 1.5-18-1.8-22.8-.1-.1-.2-.2-.3-.4-1.1-1.4-2.3-2.2-3.8-2.5l-1.5-.3c-40.3-7.4-69.7-9.9-82.7-7.1-17.9 3.9-32.6 12.7-37 15.6l-18.2 2.6Zm-18.4 26.7c.9-1.1 2-2.2 3.2-3.4l-5.1 7.8c.3-1.4.8-3 1.9-4.4Zm-8.8 19.4 28.6-43.9 36.3-4.6c2.2-.3 4.2 1.1 4.8 3.1l4.4 14.6c-8.3 2.5-25.7 7.9-31.9 12.3-5.4 3.8-5.5 7.5-5.1 9.4.6 2.9 3.2 5.3 6.7 6 5.9 1.3 20.5-2.8 30.9-8.6.9.5 2.6 1.4 4.8 2.2l-20.3 31.1-59.2-21.6Zm83-61.7c12.7-2.8 41.8-.3 81.8 7.1l1.5.3c1 .2 1.8.8 2.5 1.8 2.5 3.6 3.1 12.2 1.4 21-1.7 9.1-5.6 15.2-10.5 16.8-5.2 1.6-12.4 1.9-18.5.7-2-.4-4.7-1.6-7.4-2.8-5.9-2.6-12.5-5.5-16.5-2.3-1.4 1.1-2.8 2.6-4.5 4.4-4.7 5-10.6 11.2-18.1 11.5-7.9.3-13.3-.7-15.5-1.3l2.8-4.3c5.1 1.1 12.3.9 18.9-5.7 4.1-4 6.6-6.9 8.3-8.8 3.3-3.7 3.5-3.9 6.3-3.9.7 0 1.2-.5 1.2-1.2 0-.3-.1-.5-.2-.7-.2-.3-.6-.5-1-.5-3.9 0-4.7.9-8.1 4.7-1.8 2-4.2 4.7-8.2 8.7-6.2 6.2-13 6-17.5 4.9-3.7-1-6.3-2.7-6.3-2.7l-.6-.4-.7.4c-9.8 5.7-24.3 9.9-29.8 8.7-2.5-.5-4.4-2.2-4.8-4.2-.5-2.3 1-4.7 4.1-7 6.2-4.4 24.7-10.1 32.3-12.3 2.1-.6 3.4-1 3.4-1 .6-.2 1-.8.8-1.5 0-.2-.1-.3-.2-.4-.3-.4-.8-.6-1.3-.4 0 0-.9.2-2.3.7l-4.4-14.7c-.2-.8-.6-1.6-1.1-2.2-1.4-1.9-3.8-2.9-6.3-2.6l-13.3 1.7c6.8-3.7 18.4-9.5 31.8-12.5ZM179.55 148.01c3.2-3.9 2.5-8.4 2.2-10l9.7-14.8-63-23.1-.9-.3-19.2 29.5c-2.1-.6-7.9-1.9-16.6-1.5-8.5.4-15 7.3-19.7 12.3-1.6 1.7-3 3.2-4.2 4.2-2.8 2.3-8.8-.3-14-2.6-2.9-1.3-5.7-2.5-7.9-2.9-6.4-1.3-14.2-1-19.7.8-5.9 1.9-10.3 8.5-12.2 18.7-1.5 7.9-1.5 18 1.8 22.8 1.1 1.6 2.5 2.5 4.1 2.8l1.5.3c40.9 7.5 69.5 10 82.7 7.1 18.8-4.1 34.4-13.9 37.7-16.1l5.3 3.5c1.5 1 3.4 1.3 5.2 1 1.8-.4 3.3-1.4 4.3-3l12-18.5c1.1-1 7.6-6.2 10.9-10.2Zm-1.9-1.5c-1.2 1.4-2.8 3.1-4.5 4.6l6.4-9.8c0 1.6-.5 3.5-1.9 5.2Zm-74.1 42.3c-12.7 2.8-41.8.3-81.8-7.1l-1.5-.3c-1-.2-1.9-.8-2.5-1.8-2.5-3.6-3.1-12.2-1.4-21 1.7-9.1 5.6-15.2 10.5-16.8 5.2-1.6 12.4-1.9 18.5-.7 2 .4 4.7 1.6 7.4 2.8 5.9 2.6 12.5 5.5 16.5 2.3 1.4-1.1 2.8-2.6 4.5-4.4 4.7-5 10.6-11.2 18.1-11.5 7.4-.3 12.7.6 15.1 1.2l-2.8 4.3c-5-1-12-.7-18.5 5.8-4.1 4-6.6 6.9-8.3 8.8-3.3 3.7-3.5 3.9-6.3 3.9-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2c3.9 0 4.7-.9 8.1-4.7 1.8-2 4.2-4.7 8.2-8.7 4.9-4.8 10.6-6.5 17.1-5 3.9.9 6.7 2.8 6.7 2.8l.6.4.7-.4c9.8-5.7 24.3-9.9 29.8-8.7 2.5.5 4.4 2.2 4.8 4.2.5 2.3-1 4.7-4.1 7-5.4 3.8-20.3 8.7-28.7 11.2-4.2 1.3-7 2-7 2.1-.6.2-1 .8-.8 1.5s.8 1 1.5.8c0 0 2.7-.7 6.6-1.9l25.2 16.4c-4.7 2.8-19.1 11.3-36.2 15.1Zm48.2-11.7c-1.2.3-2.4 0-3.4-.6l-6-3.9s-.1-.1-.2-.1l-25-16.3c10-3.1 22-7.3 27-10.8 5.4-3.8 5.5-7.5 5.1-9.4-.2-1-.7-1.9-1.3-2.8-1.2-1.6-3.1-2.8-5.4-3.3-5.9-1.3-20.5 2.8-30.9 8.6-.9-.6-2.8-1.5-5.2-2.3l21.9-33.6 59.2 21.7-33.1 50.8c-.5 1.1-1.5 1.8-2.7 2Z" />
      </svg>
    </div>
  );
};

export default LeftHandSVG;