const PlusSVG = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width} //18
    height={height} //18
    fill={fill} // none
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.08 9h15.86m-7.93 7.93V1.07"
    />
  </svg>
);
export default PlusSVG;
