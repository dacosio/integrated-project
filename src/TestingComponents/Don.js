import React, { useState } from "react";
import FirebaseSample from "../config/FirebaseSample";
import ImageUpload from "../components/base/ImageUpload/ImageUpload";
import SearchField from "../components/base/SearchField/SearchField";
import MapLeaflet from "../components/module/MapLeaflet/MapLeaflet";
import Autocomplete from "react-google-autocomplete";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect } from "react";
import MapSearch from "../components/base/MapSearch/MapSearch";

const wrapper = {
  padding: "1rem",
};

const Don = (props) => {
  const mapCenter = [51.505, -0.09];
  const mapZoom = 13;

  return (
    <div>
      <h1>Don</h1>
      {/* <div>
        <FirebaseSample />
      </div> */}
      <div style={wrapper}>
        <ImageUpload />
      </div>
      <div style={wrapper}>
        <SearchField />
      </div>

      <div style={wrapper}>
        <MapSearch />
      </div>
      <div style={wrapper}>
        <MapLeaflet />
      </div>
    </div>
  );
};

export default Don;
