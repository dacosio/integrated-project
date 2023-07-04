import React from "react";
import styles from "./sellerInfoCard.module.css";
import Typography from "../Typography/Typography";
import LocationSVG from "../SVG/LocationSVG";

const SellerInfoCard = ({ source, username, location, items, ...props }) => {
  const inventory = () => {
    return items === "1" ? `1 item sold` : `${items} items sold`;
  };

  return (
    <div class={`${styles["seller-information-wrapper"]}`}>
      <Typography variant="h4-graphik-bold" style={{ marginBottom: "12px" }}>
        Seller Information
      </Typography>
      <div class={`${styles["seller-information"]}`}>
        <div class={`${styles["image-container"]}`}>
          <img src={source} alt="" />
        </div>
        <div class={`${styles["seller-details"]}`}>
          <Typography variant="body-1-medium">{username}</Typography>
          <div class={`${styles["location-container"]}`}>
            <LocationSVG height={19} width={14} stroke="black" />
            <Typography
              variant="body-2-regular"
              style={{ marginLeft: ".5rem" }}
            >
              {location}
            </Typography>
          </div>
          <Typography variant="body-4-regular">{inventory()}</Typography>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SellerInfoCard);
