import React from "react";
import "./typography.css";

/**
 * Primary UI component for user interaction
 */

const Typography = ({ children, style, ...props }) => {

  const fontWeights = {
    Regular: '400',
    Medium: '500',
    Black: '900'
  };


  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Typography);



