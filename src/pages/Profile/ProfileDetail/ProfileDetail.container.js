import React from "react";
import ProfileDetailView from "./ProfileDetail.view";

const ProfileDetail = () => {
  const generatedProps = {
    location: "Vancouver, British Columbia",
    items: [
      {
        distance: 2.0,
        days: 3,
        source: "https://picsum.photos/500/500?random=1",
        itemname: "Banana",
        price: 10,
        stock: 5,
      },
      {
        distance: 2.0,
        days: 3,
        source: "https://picsum.photos/500/500?random=2",
        itemname: "Banana",
        price: 10,
        stock: 5,
      },
      {
        distance: 2.0,
        days: 3,
        source: "https://picsum.photos/500/500?random=3",
        itemname: "Banana",
        price: 10,
        stock: 5,
      },
      {
        distance: 2.0,
        days: 3,
        source: "https://picsum.photos/500/500?random=4",
        itemname: "Banana",
        price: 10,
        stock: 5,
      },
    ],
  };
  return <ProfileDetailView {...generatedProps} />;
};

export default ProfileDetail;
