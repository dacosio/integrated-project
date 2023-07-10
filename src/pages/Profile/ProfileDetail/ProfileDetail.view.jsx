import React from "react";
import style from "./ProfileDetails.module.css";
import { MarkerSmallSVG, OrderSmallSVG } from "../../../components/base/SVG";
import Avatar from "react-avatar";
import Typography from "../../../components/base/Typography/Typography";
import ActiveListingCard from "../../../components/base/ActiveListingCard/ActiveListingCard";
import Grid from "../../../components/layout/Grid/Grid";
import getDistance from "geolib/es/getDistance";

const ProfileDetail = ({
  data,
  product,
  sm,
  md,
  lg,
  xl,
  latitude,
  longitude,
  error,
}) => {
  return (
    <div className={style.wrapper}>
      {/* <div>
        <ProfilePatternSVG />
      </div> */}
      <div
        style={{
          height: "200px",
          width: "100%",
          backgroundColor: "var(--light-blue)",
          borderBottom: "2px solid black",
        }}
      ></div>
      <div
        className={lg || xl ? style.headerWrapperDesktop : style.headerWrapper}
        style={xl ? { paddingLeft: "180px" } : { paddingLeft: "16px" }}
      >
        <Avatar
          email={data?.email}
          name={data?.displayName}
          size={sm || md ? "80" : lg ? "150" : "200"}
          src={data?.imageUrl}
          round
          style={{ border: "2px solid var(--black)" }}
        />
        <div
          style={
            lg || xl
              ? { transform: "translateY(50%)" }
              : { transform: "translateY(0%)" }
          }
        >
          <Typography variant="h3-graphik-bold" style={{ marginTop: "25px" }}>
            {data?.displayName}
          </Typography>
          {data?.address && (
            <div className={style.location}>
              <MarkerSmallSVG />
              <Typography variant="body-3-medium">{data?.address}</Typography>
            </div>
          )}
          <div className={style.sold}>
            <OrderSmallSVG />
            <Typography variant="body-3-medium">17 items sold</Typography>
          </div>
        </div>
      </div>

      <div className={style.listings}>
        {product && product.length > 0 ? (
          <div
            style={
              sm || md || lg ? { padding: "0 16px" } : { margin: "0 180px" }
            }
          >
            <Grid
              columns={sm ? 2 : md ? 3 : lg ? 4 : 4}
              style={{
                justifySelf: "flex-start",
                margin: "auto",
                marginBottom: "50px",
              }}
            >
              <Typography
                variant="h1-graphik-bold"
                style={{
                  gridColumn: "1/-1",
                  justifySelf: "flex-start",
                  marginBottom: "24px",
                }}
              >
                Active Listings
              </Typography>
              {product.map((productItem) => {
                let tmp = {
                  latitude: productItem.latitude,
                  longitude: productItem.longitude,
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
                    key={productItem.id}
                    distance={!!error ? 0 : distance}
                    // days={productItem.days}
                    source={
                      productItem.images
                        ? productItem.images[0]
                        : "src/assets/images/NoImage.jpg"
                    }
                    itemname={productItem.name}
                    price={productItem.price}
                    stock={productItem.qty}
                    alt={productItem.name}
                    onClick={() => console.log("activelistingcard")}
                    height={sm || md || lg ? "160px" : "256px"}
                    width={sm || md || lg ? "160px" : "256px"}
                  />
                );
              })}
            </Grid>
          </div>
        ) : (
          <Grid>
            <Typography variant="body-3-medium">
              No products available
            </Typography>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;
