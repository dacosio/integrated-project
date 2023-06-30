import React from "react";
import styles from "./DescriptionCard.module.css";
import Button from "./../Button/Button";
import Typography from "../Typography/Typography";

const DescriptionCard = ({
  description,
  own = false,
  requested = false,
  handleOnRequest,
  handleOnCancel,
}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div style={{ height: "100%" }}>
        <Typography variant="h4-graphik-bold" style={{ marginBottom: "8px" }}>
          Description
        </Typography>
        <Typography variant="body-2-regular" color="gray">
          {description}
        </Typography>
      </div>
      {own ? (
        <></>
      ) : !requested ? (
        <div>
          <Button
            onClickHandler={handleOnRequest}
            size="lg"
            variant="yellow"
            label="Request Purchase"
          />
        </div>
      ) : (
        <div>
          <Button
            onClickHandler={handleOnCancel}
            size="lg"
            variant="white"
            label="Cancel Request"
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(DescriptionCard);
