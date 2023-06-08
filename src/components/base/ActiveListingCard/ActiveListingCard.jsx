import React from "react";
import ImageLabel from "../ImageLabel/ImageLabel";
import Image from "../Image/Image";
import "./ActiveListingCard.css";

const Imagewithdescription = ({distance, days, source,itemname, price, stock}) => {
  return (
    <div className="active-listing-card">
      <div className="image-container">
        <ImageLabel distance={distance} days={days} />
        <Image source={source} />
      </div>
      <div className="listing-description">
        <p className="itemname">{itemname}</p>
        <p className="price">${price}</p>
        <p className="stock">{stock} available</p>
      </div>
    </div>
  );
};

export default Imagewithdescription;
