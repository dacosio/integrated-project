import React from "react";
import ImageUploading from "react-images-uploading";
import Typography from "../Typography/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiImageAdd } from "react-icons/bi";
import { RiInformationFill } from "react-icons/ri";
import useMediaQuery from "../../../utils/useMediaQuery";
import styles from "./image-input.module.css";

function ImageInput({ images, setImages, maxImageNumber = 12, ...props }) {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onError = (error) => {
    if (error.maxNumber) {
      toast.error(`The maximum number is ${maxImageNumber}!`);
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
              {images.length !== maxImageNumber &&
                (images.length === 0 ? (
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
                          <BiImageAdd size={36} />
                          <Typography variant="h3-graphik-bold">
                            Add Photos
                          </Typography>
                        </div>
                        <Typography variant="body-1-medium">
                          Choose a file
                        </Typography>
                        <Typography variant="body-1-medium">
                          or drag and drop your files.
                        </Typography>
                      </div>
                    ) : (
                      <div>
                        <div
                          className={`${styles["grid-center"]} ${styles["bold"]}`}
                        >
                          <BiImageAdd size={36} />
                          <Typography variant="h4-graphik-bold">
                            Add Photos
                          </Typography>
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
                      <BiImageAdd size={36} />
                    </div>
                  </div>
                ))}
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
              <div className={`${styles["footer"]} ${styles["flex-left"]}`}>
                <RiInformationFill size={36} color="var(--light-gray)" />
                <Typography variant="body-4-regular" color="light-gray">
                  Select your cover photo first. You can add up to{" "}
                  {maxImageNumber} photos.
                </Typography>
              </div>
            ) : images.length === maxImageNumber ? (
              <div className={`${styles["footer"]} ${styles["flex-right"]}`}>
                <Typography variant="body-4-regular">
                  You have reached your photo limit.
                </Typography>
              </div>
            ) : (
              <div className={`${styles["footer"]} ${styles["flex-right"]}`}>
                <Typography variant="body-4-regular">
                  You can add {maxImageNumber - images.length} more photos.
                </Typography>
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
