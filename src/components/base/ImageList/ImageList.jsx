import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./image-list.module.css";

function ImageList({ images, mode = "horizontal", ...props }) {

  return (
<<<<<<< HEAD
    <>
      {1 == images.length && (
        <div className={`${styles["wrapper"]} ${styles[mode]}`}>
          <div className={`${styles["header"]}`}>
            <img className={`${styles["image"]} ${styles["main-image"]}`} src={images[0]} />
=======
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
            <div>+ {images.length - 3}</div>
>>>>>>> cff3a55ccd583e56622dec5021b4fafeceeb5908
          </div>
        </div >)}
      {1 < images.length && (
        <div className={`${styles["wrapper"]} ${styles["grid"]} ${styles[mode]}`}>
          <div className={`${styles["header"]}`}>
            <img className={`${styles["image"]} ${styles["main-image"]}`} src={images[0]} />
          </div>
          {1 < images.length && images.length <= 3 && (
            <div className={`${styles["footer"]}`}>
              {images.slice(1, 3).map((image, index) => (
                <img className={`${styles["image"]} ${styles["sub-image"]}`} src={image} key={index} />
              ))}
            </div>
          )}
          {3 < images.length && (
            <div className={`${styles["footer"]}`}>
              {images.slice(1, 3).map((image, index) => (
                <img className={`${styles["image"]} ${styles["sub-image"]}`} src={image} key={index} />
              ))}
              <div className={`${styles["more"]}`}>+ {images.length - 3}</div>
            </div>
          )}
        </div >
      )
      }
    </>
  );
}

export default React.memo(ImageList);
