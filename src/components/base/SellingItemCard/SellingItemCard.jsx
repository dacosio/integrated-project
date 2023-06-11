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
    <div className="selling-item-card">
        <div className="image-container">
          <Image source={source} />
        </div>
      <div className="selling-item-description">
        <Typography className="item-name color-primary-1 h3-graphik-bold">
          {itemName}
        </Typography>
        <Typography className="h4-graphik-bold">Date approved: </Typography>
        <Typography className="date-approved body-1-regular">
          {dateApproved}
        </Typography>

        <Typography className="body-1-regular">
          <div class="quantity-title">Quantity:</div>
          <div class="quantity">{quantity}</div>
        </Typography>

        <Typography className="price h1-graphik-bold">${price}</Typography>
      </div>
    </div>
  );
};

export default SellingItemCard;
