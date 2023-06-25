import React from "react";
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
          <img src={source} alt="" />
        </div>
        <div className="selling-item-description">
          <Typography variant="item-name h3-graphik-bold">
            {itemName}
          </Typography>
          <Typography variant="h4-graphik-bold">Date approved: </Typography>
          <Typography variant="date-approved body-1-regular">
            {dateApproved}
          </Typography>
          <div className="quantity-container">
            <Typography variant="h4-graphik-bold">Quantity: </Typography>
            <Typography variant="body-1-regular">{quantity}</Typography>
          </div>
          <Typography variant="h1-graphik-bold">${price}</Typography>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SellingItemCard);
