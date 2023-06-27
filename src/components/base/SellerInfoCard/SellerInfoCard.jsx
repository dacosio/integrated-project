import React from "react";
import Image from "./../Image/Image";
import "./SellerInfoCard.css";
import Typography from "../Typography/Typography";
import LocationSVG from "../SVG/LocationSVG"

const SellerInfoCard = ({source, username, location, items}) => {
const inventory = () => {
  return items === "1" ? `1 item sold` : `${items} items sold`;
};

return (
<div class="seller-information-wrapper">
        <Typography variant="h4-graphik-bold" style={{marginBottom: "12px"}}>Seller Information</Typography>
      <div className="seller-information">
        <div className="image-container">
          <Image source={source} />
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
