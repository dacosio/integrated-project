import React from "react";
import ImageList from "../../../components/base/ImageList/ImageList";
import DescriptionCard from "../../../components/base/DescriptionCard/DescriptionCard";
import SellerInfoCard from "../../../components/base/SellerInfoCard/SellerInfoCard";
import useMediaQuery from "../../../utils/useMediaQuery";
import styles from "./listing-detail.module.css";

const ListingDetail = (props) => {
  const { item } = props;

  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <div className={`${styles["wrapper"]}`}>
      <h1>ListingDetail Screen</h1>
      <ImageList images={item["images"]} mode="horizontal" />
      <DescriptionCard description={item["description"]} />
      <SellerInfoCard
        username={item["seller"]["name"]}
        location={item["seller"]["location"]}
      />
    </div>
  );
};

export default ListingDetail;
