import React from "react";
import Imagewithdescription from "../../../components/base/ActiveListingCard/ActiveListingCard";
import styles from "./profile-detail.module.css";

const ProfileDetail = (props) => {
  return (
    <div className={`${styles["wrapper"]}`}>
      <div>
        <h1>Active Listings</h1>
      </div>
      <div className={`${styles["list"]}`}>
        {props.items.map((item, index) => (
          <Imagewithdescription
            key={index}
            distance={item.distance}
            days={item.days}
            source={item.source}
            itemname={item.itemname}
            price={item.price}
            stock={item.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileDetail;
