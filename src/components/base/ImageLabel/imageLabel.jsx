import React from "react";
import "./imageLabel.css";

export const imageLabel = ({
  distance,
  days,
  backgroundColor,
  color,
  ...props
}) => {
  const p1style = {
    borderRight: `#0b5cbb 1px solid`,
    fontWeight: `bold`,
  };

  let p1;
  let p2;

  if (distance) {
    if (distance === "1") {
      p1 = <p style={p1style}>{distance} km</p>;
    } else {
      p1 = <p style={p1style}>{distance} kms</p>;
    }
  }

  if (days) {
    if (days === "1") {
      p2 = <p>a day ago</p>;
    } else {
      p2 = <p>{days} days ago</p>;
    }
  }

  return (
    <div className="image-label">
      {p1}
      {p2}
    </div>
  );
};

export default React.memo(imageLabel);
