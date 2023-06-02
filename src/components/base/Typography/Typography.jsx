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

  // fontSize, type, color, lineHeight, textTransform, letterSpacing, fontWeight
  // const style = `font-size: ${fontSize};
  // line-height: ${lineHeight};
  // font-weight: ${fontWeights[fontWeight]};
  // color: ${color}`;
  

  // if (letterSpacing) {
  //   style += `letter-spacing: ${letterSpacing};`;
  // }

  // if (textTransform) {
  //   style += `text-transform: ${textTransform};`;
  // }

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Typography);



