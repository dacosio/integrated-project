import React from "react";
import Typography from "../Typography/Typography";
import styles from "./badge.module.css";
import { useState } from "react";
import { P } from "@storybook/components";

const Badge = (props) => {
  const { label, active } = props;

  return (
    <div
      className={`${styles.wrapper} ${active ? styles.selected : ""}`}
      {...props}
    >
      <Typography {...props} variant="button-semibold">
        {label}
      </Typography>
    </div>
  );
};

export default React.memo(Badge);
