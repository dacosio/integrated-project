import React from "react";
import Button from "../Button/Button";
import ImageUploading from "react-images-uploading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./image-input.module.css";

function ImageInput({ images, setImages, maxImageNumber = 8, ...props }) {
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onError = (error) => {
    if (error.maxNumber) {
      toast.error("The maximum number is 8!");
    }
    if (error.acceptType) {
      toast.error("You can upload jpg, png only!");
    }
    if (error.maxFileSize) {
      toast.error("The maximum file size is 10MB!");
    }
  };

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        maxNumber={maxImageNumber}
        maxFileSize={10485760}
        onChange={onChange}
        onError={onError}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className={`${styles["wrapper"]}`}>
            {images.length === 0 ? (
              <div
                className={`${styles["input"]} ${styles["half"]}`}
                style={isDragging ? { border: "3px solid red" } : null}
                {...dragProps}
              >
                <Button
                  onClick={onImageUpload}
                  variant="primary"
                  size="md"
                  label="Click or Drop here"
                ></Button>
              </div>
            ) : (
              <div
                className={`${styles["input"]} ${styles["full"]}`}
                style={isDragging ? { border: "3px solid red" } : null}
                {...dragProps}
              >
                <Button
                  onClick={onImageUpload}
                  variant="primary"
                  size="md"
                  label="Click or Drop here"
                ></Button>
              </div>
            )}
            {imageList.map((image, index) => (
              <img
                key={index}
                className={`${styles["image"]}`}
                src={image.data_url}
                onClick={onImageRemove}
              />
            ))}
          </div>
        )}
      </ImageUploading>
      <div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default React.memo(ImageInput);
