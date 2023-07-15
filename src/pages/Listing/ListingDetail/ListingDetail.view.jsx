import React from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../../utils/useMediaQuery";
import ImageList from "../../../components/base/ImageList/ImageList";
import Card from "../../../components/base/Card/Card";
import DescriptionCard from "../../../components/base/DescriptionCard/DescriptionCard";
import ProductInfoCard from "../../../components/base/ProductInfoCard/ProductInfoCard";
import MeetUpInfoCard from "../../../components/base/MeetUpInfoCard/MeetUpInfoCard";
import BackButton from "../../../components/base/BackButton/BackButton";
import BeatLoader from "react-spinners/BeatLoader";
import Typography from "../../../components/base/Typography/Typography";
import SellerInfoCard from "../../../components/base/SellerInfoCard/SellerInfoCard";
import Button from "../../../components/base/Button/Button";
import NumberInput from "../../../components/base/NumberInput/NumberInput";
import Modal from "../../../components/base/Modal/Modal";
import CarouselSwiper from "../../../components/module/CarouselSwiper/CarouselSwiper";
import styles from "./ListingDetail.module.css";

const ListingDetail = (props) => {
  const {
    user,
    product,
    seller,
    quantity,
    setQuantity,
    isRequested,
    carouselVisibility,
    requestVisibility,
    cancelVisibility,
    handleOnOpen,
    handleOnClose,
    handleOnOpenRequest,
    handleOnConfirmRequest,
    handleOnCloseRequest,
    handleOnOpenCancel,
    handleOnConfirmCancel,
    handleOnCloseCancel,
  } = props;

  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 1200px)");
  const isMobile = useMediaQuery("(min-width: 360px)");

  const getDate = (seconds) => {
    const _createdAt = new Date(seconds * 1000);
    _createdAt.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const timeDiff = today.getTime() - _createdAt.getTime();
    return Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
  };

  return (
    <>
      {isDesktop ? (
        <>
          <div className={`${styles.wrapper}`}>
            <div className={styles.btn}>
              <BackButton onClickHandler={() => navigate(-1)} />
            </div>
            {user && product && seller && isRequested != undefined ? (
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
                      date={getDate(product.createdAt.seconds)}
                      name={product.createdByDisplayName}
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
                      images={product.images}
                      onClick={handleOnOpen}
                      mode="vertical"
                    />
                    <Card nopadding noborder noshadow>
                      <SellerInfoCard
                        source={seller.imageUrl}
                        username={`${seller.displayName}`}
                        location={seller.address}
                        items={seller.qty}
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
                        <DescriptionCard
                          description={product.description}
                          own
                        />
                      ) : isRequested ? (
                        <DescriptionCard
                          description={product.description}
                          handleOnOpenCancel={handleOnOpenCancel}
                          requested
                        />
                      ) : (
                        <DescriptionCard
                          description={product.description}
                          handleOnOpenRequest={handleOnOpenRequest}
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
                      latitude={product.latitude}
                      longitude={product.longitude}
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
          {product && (
            <Modal visibility={carouselVisibility} onClose={handleOnClose}>
              <CarouselSwiper images={product.images} />
            </Modal>
          )}
          {product && (
            <Modal
              visibility={requestVisibility}
              onClose={handleOnCloseRequest}
            >
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
                    nanErrMsg={"Please enter a number."}
                    minErrMsg={"Number must be at least 1."}
                    maxErrMsg={
                      "Number cannot be larger than available portions."
                    }
                  />
                  <div>${Number((quantity * product.price).toFixed(2))}</div>
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
      ) : (
        <>
          <div className={`${styles.wrapper}`}>
            <div className={styles.btn}>
              <BackButton onClickHandler={() => navigate(-1)} />
            </div>
            {user && product && seller && isRequested !== undefined ? (
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
                      date={getDate(product.createdAt.seconds)}
                      name={product.createdByDisplayName}
                    />
                    <ImageList images={product.images} onClick={handleOnOpen} />
                  </div>
                </Card>
                <Card nopadding noborder>
                  {user.email === seller.email ? (
                    <DescriptionCard description={product.description} own />
                  ) : isRequested ? (
                    <DescriptionCard
                      description={product.description}
                      handleOnOpenCancel={handleOnOpenCancel}
                      requested
                    />
                  ) : (
                    <DescriptionCard
                      description={product.description}
                      handleOnOpenRequest={handleOnOpenRequest}
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
                    latitude={product.latitude}
                    longitude={product.longitude}
                    location={product.meetUpAddress}
                  />
                </Card>
                <Card nopadding noborder>
                  <SellerInfoCard
                    source={seller.imageUrl}
                    username={`${seller.displayName}`}
                    location={seller.address}
                    items={seller.qty}
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
          {product && (
            <Modal visibility={carouselVisibility} onClose={handleOnClose}>
              <CarouselSwiper images={product.images} />
            </Modal>
          )}
          {product && (
            <Modal
              visibility={requestVisibility}
              onClose={handleOnCloseRequest}
            >
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
                    nanErrMsg={"Please enter a number."}
                    minErrMsg={"Number must be at least 1."}
                    maxErrMsg={
                      "Number cannot be larger than available portions."
                    }
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
      )}
    </>
  );
};

export default ListingDetail;
