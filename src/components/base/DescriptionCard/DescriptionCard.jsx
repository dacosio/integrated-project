import React from "react";
import styles from "./DescriptionCard.module.css";
import Button from "./../Button/Button";
import Typography from "../Typography/Typography";

const DescriptionCard = ({ description, onClick }) => {
  return (
    <div class={`${styles["dcwrapper"]}`}>
      <div class={`${styles["description-container"]}`}>
        <div class={`${styles["item-description"]}`}>
          <Typography variant="h4-graphik-bold" style={{ margin: "8px 0" }}>
            Description
          </Typography>
          <Typography variant="body-2-regular" color="gray">
            {description}
          </Typography>
        </div>
        <div class={`${styles["button"]}`}>
          <Button
            onClickHandler={onClick}
            size="lg"
            variant="yellow"
            label="Request Purchase"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DescriptionCard);
