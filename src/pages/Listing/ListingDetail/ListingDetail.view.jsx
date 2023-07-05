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
import Button from "../../../components/base/Button/Button";
import NumberInput from "../../../components/base/NumberInput/NumberInput";
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
    carouselVisibility,
    requestVisibility,
    cancelVisibility,
    transactions,
    quantity,
    setQuantity,
    handleOnOpen,
    handleOnClose,
    handleOnOpenRequest,
    handleOnConfirmRequest,
    handleOnCloseRequest,
    handleOnOpenCancel,
    handleOnConfirmCancel,
    handleOnCloseCancel,
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
                    name={`${product.createdByNickName}`}
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
                      username={`${seller.nickName}`}
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
                        handleOnOpenRequest={handleOnOpenRequest}
                      />
                    ) : (
                      <DescriptionCard
                        description={product.description}
                        handleOnOpenCancel={handleOnOpenCancel}
                        requested
                      />
                    )}
                  </Card>
                  <MeetUpInfoCard
                    date={new Date(
                      product.meetUpInfo.seconds * 1000
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    time={new Date(
                      product.meetUpInfo.seconds * 1000
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                    latitude={product.lat}
                    longitude={product.long}
                    location={product.meetUpAddress}
                  />
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
          <Modal visibility={carouselVisibility} onClose={handleOnClose}>
            <CarouselSwiper images={images} />
          </Modal>
        )}
        {product && (
          <Modal visibility={requestVisibility} onClose={handleOnCloseRequest}>
            <div style={{ display: "grid", gap: "20px" }}>
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4-graphik-bold">
                  How many do you want to buy?
                </Typography>
                <NumberInput
                  inputNumber={quantity}
                  setInputNumber={setQuantity}
                  minValue={1}
                  maxValue={product.qty}
                />
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <Button
                  onClickHandler={handleOnCloseRequest}
                  size="lg"
                  variant="white"
                  label="Cancel"
                />
                <Button
                  onClickHandler={handleOnConfirmRequest}
                  size="lg"
                  variant="yellow"
                  label="Confirm"
                />
              </div>
            </div>
          </Modal>
        )}
        <Modal visibility={cancelVisibility} onClose={handleOnCloseCancel}>
          <div style={{ display: "grid", gap: "20px" }}>
            <div
              style={{
                display: "grid",
                gap: "20px",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4-graphik-bold">
                Do you really want to cancel the request?
              </Typography>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <Button
                onClickHandler={handleOnCloseCancel}
                size="lg"
                variant="white"
                label="Cancel"
              />
              <Button
                onClickHandler={handleOnConfirmCancel}
                size="lg"
                variant="yellow"
                label="Confirm"
              />
            </div>
          </div>
        </Modal>
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
                    name={`${product.createdByNickName}`}
                  />
                  <ImageList images={images} onClick={handleOnOpen} />
                </div>
              </Card>
              <Card nopadding noborder>
                {user.email === seller.email ? (
                  <DescriptionCard description={product.description} own />
                ) : transactions.length === 0 ? (
                  <DescriptionCard
                    description={product.description}
                    handleOnOpenRequest={handleOnOpenRequest}
                  />
                ) : (
                  <DescriptionCard
                    description={product.description}
                    handleOnOpenCancel={handleOnOpenCancel}
                    requested
                  />
                )}
              </Card>
              <Card nopadding noborder>
                <MeetUpInfoCard
                  date={new Date(
                    product.meetUpInfo.seconds * 1000
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  time={new Date(
                    product.meetUpInfo.seconds * 1000
                  ).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                  latitude={product.lat}
                  longitude={product.long}
                  location={product.meetUpAddress}
                />
              </Card>
              <Card nopadding noborder>
                <SellerInfoCard
                  source={seller.imageUrl}
                  username={`${seller.nickName}`}
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
          <Modal visibility={carouselVisibility} onClose={handleOnClose}>
            <CarouselSwiper images={images} />
          </Modal>
        )}
        {product && (
          <Modal visibility={requestVisibility} onClose={handleOnCloseRequest}>
            <div style={{ display: "grid", gap: "20px" }}>
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4-graphik-bold">
                  How many do you want to buy?
                </Typography>
                <NumberInput
                  inputNumber={quantity}
                  setInputNumber={setQuantity}
                  minValue={1}
                  maxValue={product.qty}
                />
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <Button
                  onClickHandler={handleOnCloseRequest}
                  size="lg"
                  variant="white"
                  label="Cancel"
                />
                <Button
                  onClickHandler={handleOnConfirmRequest}
                  size="lg"
                  variant="yellow"
                  label="Confirm"
                />
              </div>
            </div>
          </Modal>
        )}
        <Modal visibility={cancelVisibility} onClose={handleOnCloseCancel}>
          <div style={{ display: "grid", gap: "20px" }}>
            <div
              style={{
                display: "grid",
                gap: "20px",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4-graphik-bold">
                Do you really want to cancel the request?
              </Typography>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <Button
                onClickHandler={handleOnCloseCancel}
                size="lg"
                variant="white"
                label="Cancel"
              />
              <Button
                onClickHandler={handleOnConfirmCancel}
                size="lg"
                variant="yellow"
                label="Confirm"
              />
            </div>
          </div>
        </Modal>
      </>
    );
  }
};

export default ListingDetail;
