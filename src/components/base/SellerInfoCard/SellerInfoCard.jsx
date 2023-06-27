import React from "react";
import "./SellerInfoCard.css";
import Typography from "../Typography/Typography";
import LocationSVG from "../SVG/LocationSVG"

const SellerInfoCard = ({source, username, location, items}) => {
const inventory = () => {
  return items === "1" ? `1 item sold` : `${items} items sold`;
};

return (
<div class="seller-information-wrapper">
      <div className="seller-information">
        <Typography variant="h4-graphik-bold" style={{"grid-column":"1/-1"}}>Seller Information</Typography>
        <div className="image-container">
          <img src={source} alt="" />
        </div>
        <div className="seller-details">
          <Typography variant="body-1-medium">{username}</Typography>
          <div class="location-container">
          <LocationSVG height={19} width={14} stroke="black"/>
          <Typography variant="body-2-regular" style={{"margin-left":".5rem"}}>{location}</Typography>
          </div>
          <Typography variant="body-4-regular">{inventory()}</Typography>
        </div>
      </div>
    </div>
  );
};


export default React.memo(SellerInfoCard);
