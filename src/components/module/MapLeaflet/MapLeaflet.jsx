import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapLeaflet.css";
import SellerInfoCard from "../../base/SellerInfoCard/SellerInfoCard";
import MarkerClusterGroup from "react-leaflet-cluster";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
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
  ...props
}) => {
  let bounds = markerData && markerData.map((d) => [d.lat, d.long]);

  return (
    <MapContainer
      style={{ width, height }}
      {...props}
      bounds={bounds}
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
              <Marker key={el.id} position={[el.lat, el.long]}>
                <Tooltip permanent={permanent} direction={direction}>
                  <SellerInfoCard
                    source="https://picsum.photos/200"
                    username="cylvito"
                    location={el.location}
                    items="1"
                  />
                </Tooltip>
              </Marker>
            );
          })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapLeaflet;
