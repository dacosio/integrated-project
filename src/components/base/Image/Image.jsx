import React from "react";

export const Image = ({ source, alt, ...props }) => {
  // const styles = {
  //   width: "100%",
  // };

  return <img src={source} alt={alt} {...props} />;
};

export default React.memo(Image);
