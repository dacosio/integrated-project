import React from "react";
import Button from "../Button/Button";
import "./TransactionCard.css";
import Typography from "../Typography/Typography";

const TransactionCard = (props) => {
  const {
    type,
    source,
    itemName,
    time,
    portions,
    splitterName,
    price,
    onCancel,
    onDecline,
    onAccept,
    orderStatus,
    onComplete,
    onClick,
  } = props;

  const days = () => {
    if (time === "1") {
      return "a day ago";
    } else {
      return `${time} days ago`;
    }
  };

  const buttons = () => {
    if (type === "buying" && orderStatus === "pending") {
      return (
        <Button
          size="sm"
          variant="gray"
          label="Cancel"
          onClickHandler={onCancel}
          hoverable
        />
      );
    } else if (
      (type === "buying" && orderStatus === "confirmed") ||
      (type === "selling" && orderStatus === "confirmed")
    ) {
      return (
        <>
          <Button
            size="sm"
            variant="decline"
            label="Cancel"
            onClickHandler={onDecline}
            hoverable
          />
          <Button
            size="sm"
            variant="accept"
            label="Complete"
            onClickHandler={onComplete}
            hoverable
          />
        </>
      );
    } else if (type === "selling" && orderStatus === "pending") {
      return (
        <>
          <Button
            size="sm"
            variant="decline"
            label="Decline"
            onClickHandler={onDecline}
            hoverable
          />
          <Button
            size="sm"
            variant="accept"
            label="Accept"
            onClickHandler={onAccept}
            hoverable
          />
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={["transaction-card", { type }].join(" ")} onClick={onClick}>
      <div className="image-container">
        <img src={source} alt="" />
      </div>
      <div className="product-information">
        <div>
          <Typography variant="h4-graphik-bold" color="dark-blue">
            {itemName}
          </Typography>
          <Typography variant="h3-graphik-bold">${price}</Typography>
        </div>
        <Typography variant="body-1-medium">{days()}</Typography>
        <div className="quantity">
          <Typography variant="h4-graphik-bold" color="gray">
            {" "}
            Quantity:
          </Typography>
          <Typography variant="body-2-regular">{portions}</Typography>
        </div>
        <div className="seller-container">
          <Typography variant="h4-graphik-bold" color="gray">
            {" "}
            Seller:
          </Typography>
          <Typography variant="body-1-medium" color="dark-blue">
            {splitterName}
          </Typography>
        </div>
      </div>
      <div className="button-container">{buttons()}</div>
    </div>
  );
};

export default TransactionCard;
