import React from "react";
import { GrClose } from "react-icons/gr";
import styles from "./modal.module.css";

const Modal = ({ children, visibility, onClose, ...props }) => {
  // const handleOnClose = (event) => {};

  return (
    <>
      {visibility && (
        <div className={`${styles["background"]}`}>
          <div className={`${styles["wrapper"]}`}>
            <div className={`${styles["btn-wrapper"]}`}>
              <GrClose
                size={24}
                className={`${styles["btn"]}`}
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Modal);
