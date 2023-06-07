import React from "react";
import "./imageLabel.css";

export const ImageLabel = ({
  distance,
  days,
  label,
  backgroundColor,
  color,
  ...props
}) => {
  const style = {
    backgroundColor: backgroundColor || null,
    color: color || null,
  };

  const p1style = {
    borderRight: `#0b5cbb 1px solid`,
    fontWeight: `bold`,
  }

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
        {label && <p>{label}</p>}
        
      </div>
    );
  };

export default React.memo(ImageLabel);
