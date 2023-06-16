import React from "react";
import Typography from "../Typography/Typography";
import "./meetUpInfoCard.css";
import CalendarSVG from "../SVG/CalendarSVG";
import ClockSVG from "../SVG/ClockSVG";
import LocationSVG from "../SVG/LocationSVG";
import MapLeaflet from "../../module/MapLeaflet/MapLeaflet";

const MeetUpInfoCard = ({ date, time, location }) => {
  return (
    <div className="meet-up-info-card-wrapper">
      <div className="meet-up-info-card">
        <div className="title-container">
          <Typography className="h4-graphik-bold">Meet-up Info</Typography>
        </div>
        <div className="meet-up-info-description">
          <div className="date-container">
            <CalendarSVG height={23} width={18} />
            <Typography className="body-1-regular">{date}</Typography>
          </div>
          <div className="time-container">
            <ClockSVG height={23} width={20} />
            <Typography className="body-1-regular">{time}</Typography>
          </div>
          <div className="location-container">
            <LocationSVG className="locationsvg" height={23} width={20} />
            <Typography className="location body-1-regular">
              {location}
            </Typography>
          </div>
          <div className="map-container" style={{ "width": "100%", "height" : "auto"}}>
            <MapLeaflet
              center="49.225693, -123.107326"
              direction="top"
              permanent
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MeetUpInfoCard);
