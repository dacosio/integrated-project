import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import styles from "./accordion.module.css";

const Accordion = ({
  children,
  visibility,
  onOpen,
  onClose,
  label,
  ...props
}) => {
  return (
    <>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["header"]}`}>
          <div>{label}</div>
          {visibility ? (
            <MdKeyboardArrowUp size={24} onClick={onClose} />
          ) : (
            <MdKeyboardArrowDown size={24} onClick={onOpen} />
          )}
        </div>
        {visibility && <div className={`${styles["footer"]}`}>{children}</div>}
      </div>
    </>
  );
};

export default React.memo(Accordion);
