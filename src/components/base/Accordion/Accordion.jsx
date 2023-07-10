import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Typography from "../Typography/Typography";
import styles from "./accordion.module.css";

<<<<<<< HEAD
const Accordion = ({ children, visibility, onToggle, label, ...props }) => {
=======
const Accordion = ({ children, visibility, onToggle, id, label, ...props }) => {
  console.log(visibility);
>>>>>>> dev
  return (
    <>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["header"]}`} id={id} onClick={onToggle}>
          <Typography variant="h4-graphik-bold">{label}</Typography>
          {visibility ? (
            <MdKeyboardArrowUp size={24} />
          ) : (
            <MdKeyboardArrowDown size={24} />
          )}
        </div>
        <div
          className={`${styles["footer"]} ${
            visibility ? styles["expand"] : ""
          }`}
        >
          <div style={{ padding: "0 16px 32px 16px" }}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Accordion);
