import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import styles from "./accordion.module.css";

const Accordion = ({ children, visibility, onToggle, label, ...props }) => {
  return (
    <>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["header"]}`} onClick={onToggle}>
          <div>{label}</div>
          {visibility ? (
            <MdKeyboardArrowUp size={24} />
          ) : (
            <MdKeyboardArrowDown size={24} />
          )}
        </div>
        {visibility && <div className={`${styles["footer"]}`}>{children}</div>}
      </div>
    </>
  );
};

export default React.memo(Accordion);
