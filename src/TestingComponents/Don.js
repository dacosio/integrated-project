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
import Grid from "../components/layout/Grid/Grid";
import useMediaQuery from "../utils/useMediaQuery";
import SelectDropdown from "../components/base/SelectDropdown/SelectDropdown";
import Button from "../components/base/Button/Button";

const wrapper = {
  padding: "1rem",
};

const Don = (props) => {
  const [zoom, setZoom] = useState(100);

  const data = [
    { id: 1, lat: 49.225, long: -123.107, location: "Langara" },
    { id: 2, lat: 49.19, long: -123.122, location: "Bridgeport" },
  ];

  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

  const [searchValue, setSearchValue] = useState("");

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 960px)");
  const isMobile = useMediaQuery("(min-width: 360px)");

  return (
    <div>
      <h1>Don</h1>
      <div>{/* <FirebaseSample /> */}</div>
      <div style={wrapper}>
        <SearchField
          placeholder="What are you looking for?"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          resetValue={() => setSearchValue("")}
        />
      </div>

      <div style={wrapper}>{/* <MapSearch /> */}</div>
      <div style={wrapper}>
        <MapLeaflet
          style={{ height: "50rem", width: "50rem" }}
          zoom={zoom}
          markerData={data}
          direction="top"
          permanent
        />
      </div>

      <div style={wrapper}>
        <Grid
          rows={2}
          columns={isDesktop ? 6 : isTablet ? 3 : isMobile ? 2 : "auto"}
          style={{ justifyItems: "center" }}
        >
          <div>Cell 1</div>
          <div>Cell 2</div>
          <div>Cell 3</div>
          <div>Cell 4</div>
          <div>Cell 5</div>
          <div>Cell 6</div>
          <div>Cell 7</div>
          <div>Cell 8</div>
          <div>Cell 9</div>
        </Grid>
      </div>

      <div style={wrapper}>
        <SelectDropdown
          options={options}
          placeholder="Search location.."
          clearable
          backspaceDelete
        />
      </div>
      <div>
        <Button size="md" variant="primary" label="Login" />
      </div>
    </div>
  );
};

export default Don;
