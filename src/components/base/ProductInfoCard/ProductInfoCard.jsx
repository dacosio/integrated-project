import React from "react";
import Typography from "../Typography/Typography";
import styles from "./ProductInfoCard.module.css";

function ProductInfoCard({
  title,
  price,
  quantity,
  createdAt,
  name,
  address,
  ...props
}) {
  const _createdAt = new Date(createdAt.toDate());
  _createdAt.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const timeDiff = today.getTime() - _createdAt.getTime();
  const date = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.grid}`}>
        <Typography variant="h2-graphik-bold">{title}</Typography>
        <div className={`${styles.flex}`}>
          <Typography variant="h2-graphik-bold">$ {price}</Typography>
          <Typography variant="body-1-medium" color="gray">
            {quantity} available
          </Typography>
        </div>
        <Typography variant="body-2-regular" color="gray">
          Posted{" "}
          {date === 0
            ? "today"
            : 1 < date
            ? `${date} days ago`
            : `${date} day ago`}{" "}
          by <span style={{ fontWeight: "bold" }}>{name}</span>
        </Typography>
      </div>
    </div>
  );
}

export default React.memo(ProductInfoCard);
