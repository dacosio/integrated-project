import React from "react";
import ImageUploading from "react-images-uploading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiImageAdd } from "react-icons/bi";
import { RiInformationFill } from "react-icons/ri";
import useMediaQuery from "../../../utils/useMediaQuery";
import styles from "./image-input.module.css";

function ImageInput({ images, setImages, maxImageNumber = 11, ...props }) {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onError = (error) => {
    if (error.maxNumber) {
      toast.error("The maximum number is 11!");
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
          <div>
            <div className={`${styles["header"]}`}>
              {images.length === 0 ? (
                <div
                  className={`${styles["input"]} ${styles["half"]}`}
                  style={isDragging ? { border: "3px solid red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {isDesktop ? (
                    <div>
                      <div
                        className={`${styles["flex-center"]} ${styles["bold"]}`}
                      >
                        <BiImageAdd size={48} />
                        Add Photos
                      </div>
                      <div>Choose a file</div>
                      <div>or drag and drop your files.</div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className={`${styles["grid-center"]} ${styles["bold"]}`}
                      >
                        <BiImageAdd size={48} />
                        Add Photos
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`${styles["input"]} ${styles["full"]}`}
                  style={isDragging ? { border: "3px solid red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <div>
                    <BiImageAdd size={48} />
                  </div>
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
            {images.length === 0 ? (
              <div
                className={`${styles["footer"]} ${styles["flex-left"]} ${styles["text-light-gray"]}`}
              >
                <RiInformationFill size={32} style={{ marginRight: "8px" }} />
                Select your cover photo first. You can add up to 11 photos.
              </div>
            ) : images.length === 11 ? (
              <div className={`${styles["footer"]} ${styles["flex-right"]}`}>
                You have reached your photo limit.
              </div>
            ) : (
              <div className={`${styles["footer"]} ${styles["flex-right"]}`}>
                You can add {11 - images.length} more photos.
              </div>
            )}
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
