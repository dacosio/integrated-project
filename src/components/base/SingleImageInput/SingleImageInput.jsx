import React from "react";
import Button from "../Button/Button";
import ImageUploading from "react-images-uploading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgProfile } from "react-icons/cg";
import styles from "./single-image-input.module.css";

function SingleImageInput({ images, setImages, ...props }) {
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onError = (error) => {
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
        value={images}
        maxFileSize={10485760}
        onChange={onChange}
        onError={onError}
        dataURLKey="data_url"
        acceptType={["jpg", "png"]}
      >
        {({ imageList, onImageUpload, onImageRemove }) => (
          <div className={`${styles["wrapper"]}`}>
            {images.length === 0 ? (
              <div
                className={`${styles["input"]}`}
                style={props}
                onClick={onImageUpload}
              >
                <div>
                  <CgProfile size="80%" className={`${styles["icon"]}`} />
                </div>
              </div>
            ) : (
              <div className={`${styles["input"]}`}>
                {imageList.map((image, index) => (
                  <img
                    key={index}
                    className={`${styles["image"]}`}
                    src={image.data_url}
                    onClick={onImageUpload}
                  />
                ))}
              </div>
            )}
            <Button
              onClick={onImageUpload}
              variant="primary"
              size="md"
              label="Upload Photo"
            ></Button>
          </div>
        )}
      </ImageUploading>
      <div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default React.memo(SingleImageInput);
