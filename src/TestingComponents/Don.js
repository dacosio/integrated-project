import React, { useState } from "react";
import FirebaseSample from "../config/FirebaseSample";
import ImageUpload from "../components/base/ImageUpload/ImageUpload";
import SearchField from "../components/base/SearchField/SearchField";
import MapLeaflet from "../components/module/MapLeaflet/MapLeaflet";
import Autocomplete from "react-google-autocomplete";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect, useRef } from "react";
import MapSearch from "../components/base/MapSearch/MapSearch";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SellerInfoCard from "../components/base/SellerInfoCard/SellerInfoCard";

const wrapper = {
  padding: "1rem",
};

const Don = (props) => {
  const [zoom, setZoom] = useState(100);

  const data = [
    { id: 1, lat: 49.225, long: -123.107, location: "Langara" },
    { id: 2, lat: 49.19, long: -123.122, location: "Bridgeport" },
  ];

  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <h1>Don</h1>
      <div>
        <FirebaseSample />
      </div>
      <div style={wrapper}>
        <SearchField
          placeholder="What are you looking for?"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          resetValue={() => setSearchValue("")}
        />
      </div>

      <div style={wrapper}>
        <MapSearch />
      </div>
      <div style={wrapper}>
        <MapLeaflet
          style={{ height: "50rem", width: "50rem" }}
          zoom={zoom}
          markerData={data}
          direction="top"
          permanent
        />
      </div>
    </div>
  );
};

export default Don;
