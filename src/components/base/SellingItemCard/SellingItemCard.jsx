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
          <Typography varient="item-name h3-graphik-bold">
            {itemName}
          </Typography>
          <Typography varient="h4-graphik-bold">Date approved: </Typography>
          <Typography varient="date-approved body-1-regular">
            {dateApproved}
          </Typography>
          <div className="quantity-container">
            <Typography varient="h4-graphik-bold">Quantity: </Typography>
            <Typography varient="body-1-regular">{quantity}</Typography>
          </div>
          <Typography varient="h1-graphik-bold">${price}</Typography>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SellingItemCard);
