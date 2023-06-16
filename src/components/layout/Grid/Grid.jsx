import React from "react";

const Grid = ({ rows = "auto", columns, children, gap = "12px" }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}`,
  };

  return <div style={gridStyle}>{children}</div>;
};

export default Grid;
