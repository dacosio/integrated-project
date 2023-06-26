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
      <Typography variant="h3-graphik-bold" style={{ "margin": "16px 16px .5rem" }}>
        Selling Details
      </Typography>
      <div className="selling-item-card">
        <div className="image-container">
          <Image source={source} style={{ borderRadius: "10px" }} />
        </div>
        <div className="selling-item-description">
          <Typography variant="h4-graphik-bold" color="dark-blue">
            {itemName}
          </Typography>
          <Typography variant="body-1-medium">Date approved: </Typography>
          <Typography variant="body-2-regular" color="gray">
            {dateApproved}
          </Typography>
          <div className="quantity-container">
            <Typography
              variant="body-1-medium"
              style={{ "margin-right": "0.5rem" }}
            >
              Quantity:{" "}
            </Typography>
            <Typography variant="body-1-medium">{quantity}</Typography>
          </div>
          <Typography variant="h3-graphik-bold">${price}</Typography>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SellingItemCard);
