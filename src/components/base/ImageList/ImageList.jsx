import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./image-list.module.css";

function ImageList({ images, mode = "horizontal", ...props }) {
  return (
    <div className={`${styles["wrapper"]} ${styles[mode]}`} style={mode === "vertical" && 1 < images.length ? { gridTemplateColumns: `3fr repeat(1, 1fr)` } : null}>
      {images.slice(0, 3).map((image, index) => (<img src={image} className={`${styles["item"]} ${styles["image"]}`} />))}
      {3 < images.length && (<div className={`${styles["item"]}`}>+ {images.length - 3}</div>)}
    </div>
  );
}

export default React.memo(ImageList);
