import React from "react";
import Image from "../Image/Image";
import Typography from "../Typography/Typography";
import "./meetUpInfoCard.css";
import CalendarSVG from "../SVG/CalendarSVG";
import ClockSVG from "../SVG/ClockSVG";
import MapMarkerSVG from "../SVG/MapMarkerSVG";

const MeetUpInfoCard = ({ date, time, location }) => {
  return (
    <div className="meet-up-info-card">
      <Typography Class="h3-graphik-bold">Meet-up Info</Typography>
      <div className="meet-up-info-description">
        <Typography className="date body-1-regular">
          <CalendarSVG height={16} width={16} />
          {date}
        </Typography>

        <Typography className="time body-1-regular">
          <ClockSVG height={16} width={16} />
          {time}
        </Typography>

        <Typography className="location body-1-regular">
          <MapMarkerSVG height={16} width={16} />
          {location}
        </Typography>
        {/* <div style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:500px;height:500px;"><div id="display-google-map" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Langara+College,+West+49th+Avenue,+Vancouver,+BC,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="embedded-map-code" href="https://kbj9qpmy.com/hrn" id="get-data-for-map">InMotion Hosting</a><style>#display-google-map img{max-height:none;max-width:none!important;background:none!important;}</style></div> */}
      </div>
    </div>
  );
};

export default MeetUpInfoCard;
