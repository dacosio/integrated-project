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
        <Typography variant="h3-graphik-bold" style={{"grid-column":"1/-1"}}>Selling Details</Typography>
        <div className="image-container">
          <Image source={source} style={{ borderRadius: "10px" }} />
        </div>
        <div className="selling-item-description">
          <Typography variant="h3-graphik-bold" color="dark-blue">
            {itemName}
          </Typography>
          <Typography variant="h4-graphik-bold">Date approved: </Typography>
          <Typography variant="body-2-regular" color="gray">
            {dateApproved}
          </Typography>
          <div className="quantity-container">
            <Typography variant="h4-graphik-bold" style={{"margin-right":"0.5rem"}}>Quantity: </Typography>
            <Typography variant="body-2-regular">{quantity}</Typography>
          </div>
          <Typography variant="h3-graphik-bold">${price}</Typography>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SellingItemCard);
