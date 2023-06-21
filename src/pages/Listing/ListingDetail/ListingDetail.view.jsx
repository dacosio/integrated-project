import React from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import ImageList from "../../../components/base/ImageList/ImageList";
import DescriptionCard from "../../../components/base/DescriptionCard/DescriptionCard";
import styles from "./listing-detail.module.css";
import Typography from "../../../components/base/Typography/Typography";
import SellerInfoCard from "../../../components/base/SellerInfoCard/SellerInfoCard";

const ListingDetail = (props) => {
  const { product, user, images } = props;

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 1200px)");
  const isMobile = useMediaQuery("(min-width: 360px)");

  if (isDesktop) {
    return (
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["card"]}`}>
          <ImageList images={images} />
        </div>
        <DescriptionCard description={product.description} />
      </div>
    );
  } else {
    return (
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["card"]}`}>
          <Typography variant="h3-graphik-bold" color="dark-blue">
            {product.name}
          </Typography>
          <ImageList images={images} />
        </div>
        <DescriptionCard description={product.description} />
        <SellerInfoCard
          username={user.username}
          location={`${user.city}, ${user.state}`}
        />
      </div>
    );
  }
};

export default ListingDetail;
