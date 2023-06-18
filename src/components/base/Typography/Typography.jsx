import React from "react";
import "./typography.css";

/**
 * Primary UI component for user interaction
 */

const Typography = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Typography);
