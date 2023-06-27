import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./image-list.module.css";

function ImageList({ images, mode = "horizontal", handleOnClick, ...props }) {
  console.log(handleOnClick);
  return (
    <div
      className={`${styles["wrapper"]} ${styles[mode]}`}
      style={
        mode === "vertical" && 1 < images.length
          ? { gridTemplateColumns: `3fr repeat(1, 1fr)` }
          : null
      }
    >
      {images.slice(0, 3).map((image, index) => (
        <div className={`${styles["item"]}`} key={index}>
          <img src={image} className={`${styles["image"]}`} />
        </div>
      ))}
      {3 < images.length && (
        <div className={`${styles["item"]}`}>
          <img src={images[3]} className={`${styles["image"]}`} />
          <div className={`${styles["more-wrapper"]}`}>
            <div onClick={handleOnClick}>+ {images.length - 3}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(ImageList);
