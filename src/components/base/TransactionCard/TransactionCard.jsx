import React from "react";
import Button from "../Button/Button";
import "./TransactionCard.modules.css";
import Typography from "../Typography/Typography";
import { DivIcon } from "leaflet";

const TransactionCard = (props) => {
  const { type, source, itemName, time, portions, sellerName, price, onClickHandler } = props;

  const days = () => {
    if (time === "1") {
      return "a day ago";
    } else {
      return `${time} days ago`;
    }
  };

  const buttons = () => {
    if (type === "buying") {
      return <Button size="sm" variant="gray" label="Cancel" onClick={onClickHandler}
       />;
    } else if (type === "selling") {
      return (
        <>
          <Button size="sm" variant="decline" label="Decline" />
          <Button size="sm" variant="accept" label="Accept" />
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={["transaction-card", { type }].join(" ")}>
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
        <Typography variant="h4-graphik-bold" color="gray"> Quantity:</Typography>
        <Typography variant="body-2-regular">{portions}</Typography>
        </div>
        <div className="seller-container">
        <Typography variant="h4-graphik-bold" color="gray"> Seller:</Typography>
        <Typography variant="body-1-medium" color="dark-blue">{sellerName}</Typography>
        </div>
      </div>
      <div className="button-container">{buttons()}</div>
    </div>
  );
};

export default TransactionCard;
