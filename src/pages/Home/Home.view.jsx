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
    toggleDisplayHandler,
    toggleDisplay,
    debouncedValue,
    categoryValue,
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
      {xl ? (
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
              desktopProducts ? (
                <InfinitePagination
                  style={{ justifyContent: "start" }}
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

                      return (
                        <ActiveListingCard
                          key={product.id}
                          distance={!!error ? 0 : distance}
                          source={
                            product.images
                              ? product.images[0]
                              : "https://picsum.photos/400"
                          }
                          itemname={product.name}
                          price={product.price}
                          stock={product.qty}
                          alt="Banana"
                          onClick={() => console.log(product.id)}
                          maxwidth={lg ? "180px" : "150px"}
                          width={lg ? "180px" : "150px"}
                          height={lg ? "180px" : "150px"}
                        />
                      );
                    })
                  }
                  hasMore={hasMore}
                  onScroll={handleOnScroll}
                />
              ) : (
                <>test</>
              )
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
          {/* <div className={style.mapDesktop}>
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
                  showActiveListing={true}
                />
              )}
            </div> */}
          {/* </Grid> */}
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
                showActiveListing={true}
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
                      <Link
                        to={`/listing/${product.id}`}
                        state={{
                          categoryLabel: product.categoryLabel,
                          categoryValue: product.categoryValue,
                          createdAt: product.createdAt,
                          createdByFirstName: product.createdByFirstName,
                          createdById: product.createdByIdent,
                          createdByLastName: product.createdByLastName,
                          createdByNickName: product.createdByNickName,
                          description: product.description,
                          lat: product.lat,
                          location: product.location,
                          long: product.long,
                          meetUpAddress: product.meetUpAddress,
                          meetUpInfo: product.meetUpInfo,
                          name: product.name,
                          price: product.price,
                          qty: product.qty,
                        }}
                      >
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
                      </Link>
                    );
                  })
                }
                hasMore={hasMore}
                onScroll={handleOnScroll}
              />
            )}
          </div>
        </>
      )}{" "}
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
    </div>
  );
};

export default Home;
