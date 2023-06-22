import React from "react";
import style from "./imageLabel.module.css";
import Typography from "../Typography/Typography";

export const imageLabel = (props) => {
  const { distance, days, backgroundColor, className, color } = props;
  return (
    <div className={`${style.wrapper} ${className}`} {...props}>
      <div className={style.imageLabel}>
        {distance != 0 && (
          <>
            <Typography variant="body-4-regular" color="dark-blue">
              {distance == 1 ? distance + " km" : distance + " kms"}
            </Typography>
            <div
              style={{
                borderRight: "2px solid var(--dark-blue)",
                paddingLeft: "5px",
                marginRight: "5px",
              }}
            ></div>
          </>
        )}

        <Typography variant="body-4-regular" color="dark-blue">
          {days == 1 ? days + " day ago" : days + " days ago"}
        </Typography>
      </div>
    </div>
  );
};

export default React.memo(imageLabel);
