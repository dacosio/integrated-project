import React from "react";
import Image from "../Image/Image";
import Typography from "../Typography/Typography";
import "./sellingItemCard.css";

const SellingItemCard = ({
  source,
  itemName,
  dateApproved,
  quantity,
  price,
}) => {
  return (
    <div className="selling-item-wrapper">
      <div className="selling-item-card">
        <div className="image-container">
          <Image source={source} style={{ borderRadius: "10px" }} />
        </div>
        <div className="selling-item-description">
          <Typography className="item-name h3-graphik-bold">
            {itemName}
          </Typography>
          <Typography className="h4-graphik-bold">Date approved: </Typography>
          <Typography className="date-approved body-1-regular">
            {dateApproved}
          </Typography>
          <div className="quantity-container">
            <Typography className="h4-graphik-bold">Quantity: </Typography>
            <Typography className="body-1-regular">{quantity}</Typography>
          </div>
          <Typography className="h1-graphik-bold">${price}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SellingItemCard;
