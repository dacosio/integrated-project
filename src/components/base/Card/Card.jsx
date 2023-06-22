import React from "react";
import styles from "./card.module.css";

function Card({
  nopadding = false,
  noborder = false,
  noshadow = false,
  aspectRatio,
  children,
  ...props
}) {
  return (
    <div
      className={`${styles.card} ${!nopadding ? styles.padding : ""} ${
        !noborder ? styles.border : ""
      } ${!noshadow ? styles.shadow : ""}`}
      style={{ aspectRatio: aspectRatio && aspectRatio }}
    >
      {children}
    </div>
  );
}

export default React.memo(Card);
