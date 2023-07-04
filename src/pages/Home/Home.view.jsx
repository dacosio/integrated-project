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

const Home = (props) => {
  const {
    user,
    handleLogOut,
    data,
    columns,
    lg,
    xl,
    zoom,
    currentPageIndex,
    pageNumber,
    totalPageNumber,
    handleOnClick,
    desktopProducts,
    mobileProducts,
    handleOnScroll,
    hasMore,
    latitude,
    longitude,
    error,
    desktopBounds,
    mobileBounds,
    currentAddress,
  } = props;

  return (
    <div>
      {xl ? (
        <div className={style.desktopWrapper}>
          <Grid columns={7} gap="31px">
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
              <Grid
                columns={2}
                style={{
                  justifyItems: "center",
                }}
                gap="1rem"
              >
                {desktopProducts &&
                  desktopProducts.map((product) => {
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
                        days={days}
                        source={
                          product.imageUrl
                            ? product.imageUrl
                            : "https://picsum.photos/400"
                        }
                        itemname={product.name}
                        price={product.price}
                        stock={product.qty}
                        alt={product.name}
                        onClick={() => console.log(product.id)}
                        maxwidth={lg ? "180px" : "150px"}
                        width={lg ? "180px" : "150px"}
                      />
                    );
                  })}
              </Grid>
              <Pagination
                currentPageIndex={currentPageIndex}
                pageNumber={pageNumber}
                totalPageNumber={totalPageNumber}
                onClick={handleOnClick}
              />
            </div>
            <div className={style.mapDesktop}>
              {desktopProducts && desktopBounds && (
                <MapLeaflet
                  zoom={zoom}
                  markerData={desktopProducts}
                  direction="top"
                  // permanent
                  width="100%"
                  height="100%"
                  borderRadius="20px"
                  zIndex={2}
                  bounds={desktopBounds}
                />
              )}
            </div>
          </Grid>
        </div>
      ) : (
        <>
          <div>
            {mobileProducts && mobileBounds && (
              <MapLeaflet
                zoom={zoom}
                markerData={mobileProducts}
                direction="top"
                // permanent
                width="100%"
                height="30vh"
                zIndex={2}
                bounds={mobileBounds}
              />
            )}
          </div>
          <div className={style.resultsWrapper}>
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
            {mobileProducts && (
              <InfinitePagination
                columns={columns}
                gap="1rem"
                items={
                  mobileProducts &&
                  mobileProducts.map((product, index) => {
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
                        days={days}
                        source={
                          product.imageUrl
                            ? product.imageUrl
                            : "https://picsum.photos/400"
                        }
                        itemname={product.name}
                        price={product.price}
                        stock={product.qty}
                        alt="Banana"
                        onClick={() => console.log(product.id)}
                        maxwidth={lg ? "180px" : "150px"}
                        width={lg ? "180px" : "150px"}
                      />
                    );
                  })
                }
                hasMore={hasMore}
                onScroll={handleOnScroll}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
