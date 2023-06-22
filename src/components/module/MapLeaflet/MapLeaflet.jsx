import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapLeaflet.css";
import SellerInfoCard from "../../base/SellerInfoCard/SellerInfoCard";
import MarkerClusterGroup from "react-leaflet-cluster";
import MarkerSVG from "../../base/SVG/MarkerSVG";
import ActiveListingCard from "../../base/ActiveListingCard/ActiveListingCard";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Custom icon
const customIcon = L.icon({
  iconUrl: require("./Marker.png"),
  iconSize: [20, 32],
});

const MapLeaflet = ({
  center = [49.225693, -123.107326], //default position is Langara College if the user does not allow to track it's current position
  zoom,
  position,
  markerData,
  permanent,
  direction,
  component,
  width,
  height,
  borderRadius,
  zIndex,
  bounds,
  ...props
}) => {
  return (
    <>
      <MapContainer
        style={{ width, height, borderRadius, zIndex }}
        {...props}
        bounds={[[49.225693, -123.107326]]}
        scrollWheelZoom
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {markerData &&
            markerData.map((el) => {
              return (
                <Marker
                  key={el.id}
                  position={[el.location._lat, el.location._long]}
                  onMouseOver={(e) => {
                    e.target.openPopup();
                  }}
                  onMouseOut={(e) => {
                    e.target.closePopup();
                  }}
                  icon={customIcon}
                >
                  <Tooltip permanent={permanent} direction={direction}>
                    <ActiveListingCard
                      key={el.id}
                      distance={2}
                      days={2}
                      source={`https://picsum.photos/400?random=${el.id}`}
                      itemname="Banana"
                      price={1.25}
                      stock={5}
                      alt="Banana"
                      onClick={() => console.log(el.id)}
                      maxwidth={"150px"}
                      width={"150px"}
                    />
                  </Tooltip>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
