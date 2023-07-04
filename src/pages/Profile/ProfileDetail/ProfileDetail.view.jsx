import React from "react";
import style from "./ProfileDetails.module.css";
import { MarkerSmallSVG, OrderSmallSVG } from "../../../components/base/SVG";
import Avatar from "react-avatar";
import Typography from "../../../components/base/Typography/Typography";
import ActiveListingCard from "../../../components/base/ActiveListingCard/ActiveListingCard";
import Grid from "../../../components/layout/Grid/Grid";

const ProfileDetail = ({ data, sm, md, lg, xl }) => {
  return (
    <div className={style.wrapper}>
      {/* <div>
        <ProfilePatternSVG />
      </div> */}
      <div
        style={{
          height: "150px",
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
          <Typography variant="h3-graphik-bold">{data?.displayName}</Typography>
          <div className={style.location}>
            <MarkerSmallSVG />
            <Typography variant="body-3-medium">{data?.address}</Typography>
          </div>
          <div className={style.sold}>
            <OrderSmallSVG />
            <Typography variant="body-3-medium">17 items sold</Typography>
          </div>
        </div>
      </div>

      <div className={style.listings}>
        <div
          style={sm || md || lg ? { padding: "0 16px" } : { margin: "0 180px" }}
        >
          <Grid
            columns={sm ? 2 : md ? 3 : lg ? 4 : 4}
            style={{
              justifyItems: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Typography
              variant="h1-graphik-bold"
              style={{ gridColumn: "1/-1", justifySelf: "flex-start" }}
            >
              Active Listings
            </Typography>
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
            <ActiveListingCard
              distance={2}
              days={2}
              source="https://picsum.photos/400"
              itemname="Banana"
              price={1.25}
              stock={5}
              alt="Banana"
              onClick={() => console.log("activelistingcard")}
              width={sm || md || lg ? "160px" : "256px"}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
