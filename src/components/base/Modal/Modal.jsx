import React from "react";
import { GrClose } from "react-icons/gr";
import styles from "./modal.module.css";

const Modal = ({
  width = "50vw",
  hasBackground = true,
  visibility,
  setVisibility,
  children,
  ...props
}) => {
  return (
    <>
      {visibility && (
        <div className={`${styles["outer-background"]}`}>
          <div
            className={`${styles.wrapper} ${
              hasBackground ? styles["inner-background"] : null
            }`}
          >
            <div className={`${styles["btn-wrapper"]} `}>
              <GrClose
                size={24}
                className={`${styles.btn}`}
                onClick={setVisibility(false)}
              />
            </div>
            <div className={`${styles["content-wrapper"]} `}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Modal);
