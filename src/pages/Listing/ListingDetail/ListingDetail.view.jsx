import React from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import ImageList from "../../../components/base/ImageList/ImageList";
import Card from "../../../components/base/Card/Card";
import DescriptionCard from "../../../components/base/DescriptionCard/DescriptionCard";
import ProductInfoCard from "../../../components/base/ProductInfoCard/ProductInfoCard";
import Typography from "../../../components/base/Typography/Typography";
import SellerInfoCard from "../../../components/base/SellerInfoCard/SellerInfoCard";
import Modal from "../../../components/base/Modal/Modal";
import styles from "./listing-detail.module.css";

const ListingDetail = (props) => {
  const {
    product,
    user,
    items,
    images,
    visibility,
    setVisibility,
    handleOnClick,
  } = props;

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 1200px)");
  const isMobile = useMediaQuery("(min-width: 360px)");

  let date = "";

  if (product.createdAt !== undefined) {
    const today = new Date();
    let createdAt = new Date(product.createdAt.toDate());
    createdAt.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const timeDiff = today.getTime() - createdAt.getTime();
    date = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
  }

  if (isDesktop) {
    return (
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.card}`}>
          <ProductInfoCard
            title={product.name}
            price={product.price}
            quantity={product.qty}
          />
          <ImageList images={images} handleOnClick={handleOnClick} />
        </div>
        <DescriptionCard description={product.description} />
      </div>
    );
  } else {
    return (
      <>
        <div className={`${styles.wrapper}`}>
          <Card>
            <div style={{ marginBottom: "16px" }}>
              <ProductInfoCard
                title={product.name}
                price={product.price}
                quantity={product.qty}
                date={date && date}
                name={`${user.firstName} ${user.lastName}`}
                address={user.address}
              />
            </div>
            <ImageList images={images} />
          </Card>
          <Card nopadding noborder>
            <DescriptionCard description={product.description} />
          </Card>
          <Card nopadding noborder>
            <SellerInfoCard
              source={user.imageUrl}
              username={`${user.firstName} ${user.lastName}`}
              location={user.address}
              items={items}
            />
          </Card>
        </div>
        <Modal visibility={visibility} setVisibility={setVisibility}></Modal>
      </>
    );
  }
};

export default ListingDetail;
