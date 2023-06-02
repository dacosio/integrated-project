import React from "react";
import "./imageDescription.css";

/**
 * Primary UI component for user interaction
 */
export const imageDescription = ({ backgroundColor, size, name, price, number, ...props }) => {
  return (
    <div 
      className={`image-description-${size}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
        <p>{name}</p><br />
        <p>{price}</p>
        <p>{number} available</p>

    </div>
  );
};
