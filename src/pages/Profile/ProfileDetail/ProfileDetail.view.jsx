import React from "react";
import style from "./ProfileDetails.module.css";
import { MarkerSmallSVG, OrderSmallSVG } from "../../../components/base/SVG";
import Avatar from "react-avatar";
import Typography from "../../../components/base/Typography/Typography";
import ActiveListingCard from "../../../components/base/ActiveListingCard/ActiveListingCard";
import useMediaQuery from "../../../utils/useMediaQuery";

const ProfileDetail = (props) => {
  const sm = useMediaQuery("(min-width: 360px) and (max-width:675px)");

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
      <div className={style.headerWrapper}>
        <Avatar
          email="test@test.com"
          name="hotpink rubber chicken"
          size="80"
          src="https://i.pravatar.cc/80"
          round
        />
        <Typography variant="h3-graphik-bold">aishasells</Typography>
        <div className={style.location}>
          <MarkerSmallSVG />
          <Typography variant="body-3-medium">
            Vancouver, British Columbia
          </Typography>
        </div>
        <div className={style.sold}>
          <OrderSmallSVG />
          <Typography variant="body-3-medium">17 items sold</Typography>
        </div>
      </div>

      <div className={style.listings}>
        <Typography variant="h1-graphik-bold" style={{ marginBottom: "24px" }}>
          Active Listings
        </Typography>
        <div className={sm ? style.cardsSmall : style.cardsBig}>
          <ActiveListingCard
            distance={2}
            days={2}
            source="https://picsum.photos/400"
            itemname="Banana"
            price={1.25}
            stock={5}
            alt="Banana"
            onClick={() => console.log("activelistingcard")}
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
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
            maxW={sm ? "100%" : "200px"}
            width={sm ? "100%" : "200px"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
