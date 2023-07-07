import React, { useState } from "react";
import MapLeaflet from "../../components/module/MapLeaflet/MapLeaflet";
import style from "./Home.module.css";
import Typography from "../../components/base/Typography/Typography";
import { MapMarkerSVG } from "../../components/base/SVG";
import Grid from "../../components/layout/Grid/Grid";
import ActiveListingCard from "../../components/base/ActiveListingCard/ActiveListingCard";
import Pagination from "../../components/base/Pagination/Pagination";
import InfinitePagination from "../../components/base/InfinitePagination/InfinitePagination";
import getDistance from "geolib/es/getDistance";
import Button from "../../components/base/Button/Button";
import { Link } from "react-router-dom";

const Home = (props) => {
  const {
    lg,
    xl,
    zoom,
    desktopProducts,
    latitude,
    longitude,
    error,
    desktopBounds,
    currentAddress,
    toggleDisplayHandler,
    toggleDisplay,
    debouncedValue,
    categoryValue,
    isOpen,
    toggleDrawer,
  } = props;

  if (
    desktopProducts.length === 0 &&
    (debouncedValue || categoryValue.length > 0)
  ) {
    return (
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <Typography color="error" variant="h4-graphik-bold">
          Oh snap! That product is not yet available.
        </Typography>
      </div>
    );
  }

  return (
    <div className={style.container}>
      {xl || lg ? (
        <div className={style.desktopWrapper}>
          <div className={style.picksDesktop}>
            <div className={style.title}>
              <Typography variant="h2-graphik-bold" color="black">
                {currentAddress ? "Picks Near You" : "Products"}
              </Typography>
            </div>
            {currentAddress && (
              <div className={style.location}>
                <MapMarkerSVG width={16} height={24} />
                <Typography variant="body-4-regular" color="dark-blue">
                  {currentAddress}
                </Typography>
              </div>
            )}

            {toggleDisplay ? (
              <div className={style.resultContainer}>
                {desktopProducts &&
                  desktopProducts.map((product, index) => {
                    let tmp = {
                      latitude: product.location._lat,
                      longitude: product.location._long,
                    };
                    let distance = 0;
                    if (latitude && longitude) {
                      distance = getDistance(tmp, {
                        latitude,
                        longitude,
                      });
                      distance = Math.ceil(Number(distance) / 1000);
                    }
                    return (
                      <ActiveListingCard
                        key={product.id}
                        distance={!!error ? 0 : distance}
                        source={
                          product.images
                            ? product.images[0]
                            : "src/assets/images/NoImage.jpg"
                        }
                        itemname={product.name}
                        price={product.price}
                        stock={product.qty}
                        alt={product.name}
                        onClick={() => console.log(product.id)}
                        maxwidth={xl || lg ? "185px" : "150px"}
                        width={xl || lg ? "185px" : "150px"}
                        height={xl || lg ? "185px" : "150px"}
                        style={{ marginBottom: "1rem" }}
                      />
                    );
                  })}
              </div>
            ) : (
              <div style={{ height: "90%" }}>
                <MapLeaflet
                  zoom={zoom}
                  markerData={desktopProducts}
                  direction="top"
                  // width="100%"
                  height="100%"
                  borderRadius="20px"
                  zIndex={2}
                  bounds={desktopBounds}
                  showActiveListing={true}
                  currentAddress={currentAddress}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className={style.mobileWrapper}>
            <div
              style={{
                height: "60vh",
              }}
            >
              <MapLeaflet
                zoom={zoom}
                markerData={desktopProducts}
                direction="top"
                height="100%"
                borderRadius="20px"
                zIndex={2}
                bounds={desktopBounds}
                showActiveListing={true}
                currentAddress={currentAddress}
              />
            </div>

            <div
              className={style.mobileListing}
              style={{
                top: `${isOpen ? "15%" : "90%"}`,
                transition: "top 0.3s ease-in-out",
              }}
            >
              <hr
                style={{
                  backgroundColor: "var(--bg-gray)",
                  width: "20%",
                  height: "10px",
                  borderRadius: "1rem",
                }}
                onClick={toggleDrawer}
              />
              <div className={style.title}>
                <Typography variant="h2-graphik-bold" color="black">
                  {currentAddress ? "Picks Near You" : "Products"}
                </Typography>
              </div>
              {currentAddress && (
                <div className={style.location}>
                  <MapMarkerSVG width={16} height={24} />
                  <Typography variant="body-4-regular" color="dark-blue">
                    {currentAddress}
                  </Typography>
                </div>
              )}

              <div className={style.mobileResults}>
                {desktopProducts &&
                  desktopProducts.map((product, index) => {
                    let tmp = {
                      latitude: product.location._lat,
                      longitude: product.location._long,
                    };
                    let distance = 0;
                    if (latitude && longitude) {
                      distance = getDistance(tmp, {
                        latitude,
                        longitude,
                      });
                      distance = Math.ceil(Number(distance) / 1000);
                    }

                    const today = new Date();
                    let createdAt = new Date(product.createdAt.toDate());
                    createdAt.setHours(0, 0, 0, 0);
                    today.setHours(0, 0, 0, 0);
                    const timeDiff = today.getTime() - createdAt.getTime();
                    const days = Math.abs(
                      Math.floor(timeDiff / (1000 * 60 * 60 * 24))
                    );

                    return (
                      <ActiveListingCard
                        key={product.id}
                        distance={!!error ? 0 : distance}
                        source={
                          product.images
                            ? product.images[0]
                            : "src/assets/images/NoImage.jpg"
                        }
                        itemname={product.name}
                        price={product.price}
                        stock={product.qty}
                        alt={product.name}
                        onClick={() => console.log(product.id)}
                        maxwidth={xl || lg ? "185px" : "150px"}
                        width={xl || lg ? "185px" : "150px"}
                        height={xl || lg ? "185px" : "150px"}
                        style={{ marginBottom: "1rem" }}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
      {(xl || lg) && (
        <div className={style.displayButton}>
          <Button
            variant="black"
            type="submit"
            size="sm"
            label={`Display ${toggleDisplay ? "Map" : "Listings"}`}
            hoverable
            onClickHandler={toggleDisplayHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
