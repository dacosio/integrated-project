import React from "react";
import Typography from "../Typography/Typography";
import "./meetUpInfoCard.css";
import CalendarSVG from "../SVG/CalendarSVG";
import ClockSVG from "../SVG/ClockSVG";
import LocationBoldSVG from "../SVG/LocationBoldSVG";
import MapLeaflet from "../../module/MapLeaflet/MapLeaflet";

const MeetUpInfoCard = ({ date, time, location }) => {
  return (
    <div className="meet-up-info-card-wrapper">
      <div className="meet-up-info-card">
        <div className="title-container">
          <Typography variant="h4-graphik-bold">Meet-up Info</Typography>
        </div>
        <div className="meet-up-info-description">
          <div className="date-container">
            <CalendarSVG height={23} width={20} fill={"black"} />
            <Typography variant="body-1-medium" color="gray">
              {date}
            </Typography>
          </div>
          <div className="time-container">
            <ClockSVG height={23} width={20} fill={"black"} />
            <Typography variant="body-1-medium" color="gray">
              {time}
            </Typography>
          </div>
          <div className="location-container">
            <LocationBoldSVG
              style={{ "grid-column": "0" }}
              height={23}
              width={20}
            />
            <Typography variant="body-1-medium" color="gray">
              {location}
            </Typography>
          </div>
          <div className="map-container">
            <MapLeaflet 
              width="100%"
              height="100%"
              borderRadius="20px"
              z-index="2"
              position="49.225693, -123.107326"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MeetUpInfoCard);
