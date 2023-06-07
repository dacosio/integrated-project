import React from "react";
import "./Image.css";

export const Image = ({
  source,
  alt,
  width,
  height,
  borderRadius,
  ...props
}) => {

    const styles = {
        width: width,
        height: height,
        borderRadius: borderRadius,
    }

  return (
    <img src={source} alt={alt} style={styles} />
  );
};

export default React.memo(Image);