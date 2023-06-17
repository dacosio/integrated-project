import React from "react";
import styles from "./typography.module.css";

const Typography = ({ children, variant, color, className, ...props }) => {
  return (
    <div className={`${styles[variant]} ${styles[color]}`} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Typography);
