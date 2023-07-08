import React from "react";
import styles from "./DescriptionCard.module.css";
import Button from "./../Button/Button";
import Typography from "../Typography/Typography";

const DescriptionCard = ({
  description,
  own = false,
  requested = false,
  handleOnOpenRequest,
  handleOnOpenCancel,
}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <Typography variant="h3-graphik-bold">Description</Typography>
      <div style={{ display: "grid", gap: "20px" }}>
        <Typography variant="body-2-regular" color="gray">
          {description}
        </Typography>
        {own ? (
          <></>
        ) : !requested ? (
          <Button
            onClickHandler={handleOnOpenRequest}
            size="lg"
            variant="yellow"
            label="Request Purchase"
          />
        ) : (
          <Button
            onClickHandler={handleOnOpenCancel}
            size="lg"
            variant="white"
            label="Cancel Request"
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(DescriptionCard);
