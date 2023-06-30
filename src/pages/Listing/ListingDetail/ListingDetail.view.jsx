import React from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import ImageList from "../../../components/base/ImageList/ImageList";
import Card from "../../../components/base/Card/Card";
import DescriptionCard from "../../../components/base/DescriptionCard/DescriptionCard";
import ProductInfoCard from "../../../components/base/ProductInfoCard/ProductInfoCard";
import MeetUpInfoCard from "../../../components/base/MeetUpInfoCard/MeetUpInfoCard";
import BeatLoader from "react-spinners/BeatLoader";
import Typography from "../../../components/base/Typography/Typography";
import SellerInfoCard from "../../../components/base/SellerInfoCard/SellerInfoCard";
import Modal from "../../../components/base/Modal/Modal";
import CarouselSwiper from "../../../components/module/CarouselSwiper/CarouselSwiper";
import styles from "./listing-detail.module.css";

const ListingDetail = (props) => {
  const {
    user,
    product,
    seller,
    itemsNumber,
    images,
    visibility,
    transactions,
    handleOnOpen,
    handleOnClose,
    handleOnRequest,
    handleOnCancel,
  } = props;

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 1200px)");
  const isMobile = useMediaQuery("(min-width: 360px)");

  if (product) {
    const today = new Date();
    let createdAt = new Date(product.createdAt.toDate());
    createdAt.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const timeDiff = today.getTime() - createdAt.getTime();
    product.date = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
  }

  if (isDesktop) {
    return (
      <>
        <div className={`${styles.wrapper}`}>
          {user &&
          product &&
          seller &&
          itemsNumber &&
          images &&
          transactions ? (
            <Card>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: "20px",
                }}
              >
                <div style={{ gridColumn: "1 / -1" }}>
                  <ProductInfoCard
                    title={product.name}
                    price={product.price}
                    quantity={product.qty}
                    date={product.date}
                    name={`${product.createdByFirstName} ${product.createdByLastName}`}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <ImageList
                    images={images}
                    onClick={handleOnOpen}
                    mode="vertical"
                  />
                  <Card nopadding noborder noshadow>
                    <SellerInfoCard
                      source={seller.imageUrl}
                      username={`${seller.firstName} ${seller.lastName}`}
                      location={seller.address}
                      items={itemsNumber}
                    />
                  </Card>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Card nopadding noborder noshadow>
                    {user.email === seller.email ? (
                      <DescriptionCard description={product.description} own />
                    ) : transactions.length === 0 ? (
                      <DescriptionCard
                        description={product.description}
                        handleOnRequest={handleOnRequest}
                      />
                    ) : (
                      <DescriptionCard
                        description={product.description}
                        handleOnCancel={handleOnCancel}
                        requested
                      />
                    )}
                  </Card>
                  <MeetUpInfoCard />
                </div>
              </div>
            </Card>
          ) : (
            <Card>
              <div style={{ textAlign: "center" }}>
                <BeatLoader color="#1c2aae" />
              </div>
            </Card>
          )}
        </div>
        {images && (
          <Modal visibility={visibility} onClose={handleOnClose}>
            <CarouselSwiper images={images} />
          </Modal>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className={`${styles.wrapper}`}>
          {user &&
          product &&
          seller &&
          itemsNumber &&
          images &&
          transactions ? (
            <>
              <Card>
                <div
                  style={{
                    display: "grid",
                    gap: "20px",
                  }}
                >
                  <ProductInfoCard
                    title={product.name}
                    price={product.price}
                    quantity={product.qty}
                    date={product.date}
                    name={`${product.firstName} ${product.lastName}`}
                  />
                  <ImageList images={images} onClick={handleOnOpen} />
                </div>
              </Card>
              <Card nopadding noborder noshadow>
                {user.email === seller.email ? (
                  <DescriptionCard description={product.description} own />
                ) : transactions.length === 0 ? (
                  <DescriptionCard
                    description={product.description}
                    handleOnRequest={handleOnRequest}
                  />
                ) : (
                  <DescriptionCard
                    description={product.description}
                    handleOnCancel={handleOnCancel}
                    requested
                  />
                )}
              </Card>
              <MeetUpInfoCard />
              <Card nopadding noborder>
                <SellerInfoCard
                  source={seller.imageUrl}
                  username={`${seller.firstName} ${seller.lastName}`}
                  location={seller.address}
                  items={itemsNumber}
                />
              </Card>
            </>
          ) : (
            <Card>
              <div style={{ textAlign: "center" }}>
                <BeatLoader color="#1c2aae" />
              </div>
            </Card>
          )}
        </div>
        {images && (
          <Modal visibility={visibility} onClose={handleOnClose}>
            <CarouselSwiper images={images} />
          </Modal>
        )}
      </>
    );
  }
};

export default ListingDetail;
