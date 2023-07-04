import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import styles from "./meetUpInfoCard.module.css";
import CalendarSVG from "../SVG/CalendarSVG";
import ClockSVG from "../SVG/ClockSVG";
import LocationBoldSVG from "../SVG/LocationBoldSVG";
import MapLeaflet from "../../module/MapLeaflet/MapLeaflet";
import db from "../../../config/firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const MeetUpInfoCard = ({ date, time, location, ...props }) => {
  const [coordinates, setCoordinates] = useState([]);
  const [bounds, setBounds] = useState([[49.225693, -123.107326]]);
  const [value, loading, err] = useCollection(collection(db, "product"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  useEffect(() => {
    if (value) {
      setCoordinates(
        value.docs.map((doc) => ({
          location: {
            _lat: doc.data().location._lat,
            _long: doc.data().location._long,
          },
        }))
      );
      setBounds(
        value.docs.map((doc) => [
          doc.data().location._lat,
          doc.data().location._long,
        ])
      );
    }
  }, [value]);
  return (
    <div class={`${styles["meet-up-info-card"]}`}>
      <div class={`${styles["title-container"]}`}>
        <Typography variant="h4-graphik-bold">Meet-up Info</Typography>
      </div>
      <div class={`${styles["date-container"]}`}>
        <CalendarSVG
          height={23}
          width={20}
          fill={"black"}
          style={{ marginRight: "1rem" }}
        />
        <Typography variant="body-1-medium" color="gray">
          {date}
        </Typography>
      </div>
      <div class={`${styles["time-container"]}`}>
        <ClockSVG
          height={23}
          width={20}
          fill={"black"}
          style={{ marginRight: "1rem" }}
        />
        <Typography variant="body-1-medium" color="gray">
          {time}
        </Typography>
      </div>
      <div class={`${styles["location-container"]}`}>
        <LocationBoldSVG
          style={{ gridColumn: "0", marginRight: "1rem" }}
          height={23}
          width={20}
        />
        <Typography variant="body-1-medium" color="gray">
          {location}
        </Typography>
      </div>
      <div class={`${styles["map-container"]}`}>
        <MapLeaflet
          markerData={coordinates}
          direction="top"
          // permanent
          width="100%"
          height="100%"
          borderRadius="20px"
          zIndex={2}
          bounds={bounds}
        />
      </div>
    </div>
  );
};

export default React.memo(MeetUpInfoCard);
